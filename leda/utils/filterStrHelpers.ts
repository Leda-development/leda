// Возможные опции для фильтра значений в выпадающем списке
export const FILTER_RULES = {
  smart: 'smart' as const,
  startsWith: 'startsWith' as const,
  includes: 'includes' as const,
};


/* value: 'Paris is the capital of France'
   suggestion: 'paris'
   => true

   value: 'Paris is the capital of France'
   suggestion: 'paris france'
   => true
*/
export const filterByIncludes = (suggestion: string, value: string): boolean => suggestion.toLowerCase().includes(value.toLowerCase());


/* value: 'Paris is the capital of France'
   suggestion: 'paris'
   => true

   value: 'Paris is the capital of France'
   suggestion: 'paris france'
   => false
*/
export const filterByStartsWith = (suggestion: string, value: string): boolean => suggestion.toLowerCase().startsWith(value.toLowerCase());

export const escapeRegexp = (string: string): string => string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

/* returns true if all needles are present in hay
*  regardless of their order
*
*  e.g.
*  hay: 'Saint Petersburg is the capital of Russia'
*  words: 'russia saint'
*  => true
*
*  hay: 'Saint Petersburg is the capital of Russia'
*  words: 'russia moscow'
*  => false
*
*  hay: 'Saint Petersburg is the capital of Russia'
*  words: 'peter'
*  => true
*/
export const hasAllWords = (hay: string, words: string): boolean => {
  const isMultiWord = /\s+/.test(words);

  if (isMultiWord) {
    const wordsArr = words.split(/\s+/);
    const regExpCore = wordsArr.map((el) => `(?=.*${escapeRegexp(el)})`).join('');
    const needle = new RegExp(`^${regExpCore}.*$`, 'gi');

    return needle.test(hay);
  }

  return hay.toLowerCase().includes(words.toLowerCase());
};

export const filterSuggestionByRule = (suggestion: string, value: string, filterRule?: keyof typeof FILTER_RULES): boolean => {
  switch (filterRule) {
    case FILTER_RULES.smart:
      // "умный" поиск. Фильтрует строки, которые содержат все значения в строке из инпута.
      // Возвращает "true" если в строке присутствуют все значения из инпута, не смотря на положение значений.
      return hasAllWords(suggestion, value);

    case FILTER_RULES.startsWith:
      // фильтрует строки, которые начинаются со строки в инпуте
      return filterByStartsWith(suggestion, value);

    case FILTER_RULES.includes:
      // фильтрует строки, которые содержат строку из инпута, независимо от её положения
      return filterByIncludes(suggestion, value);
    default:
      return hasAllWords(suggestion, value);
  }
};
