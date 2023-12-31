// Possible options for filtering values in the drop-down list
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
*  sentence: 'Saint Petersburg is the capital of Russia'
*  words: 'russia saint'
*  => true
*
*  sentence: 'Saint Petersburg is the capital of Russia'
*  words: 'russia moscow'
*  => false
*
*  sentence: 'Saint Petersburg is the capital of Russia'
*  words: 'peter'
*  => true
*
* sentence is a string containing words, one or more spaces and other symbols
* words is a string containing spaces and other symbols, a word is a set of symbols bounded by spaces or string boundaries
*/

export const getIsSentenceIncludingWords = (sentence: string, words: string): boolean => {
  if (words === '') return true;
  if (/^\s+$/.test(words)) return false;
  if (sentence.trim() === '') return false;

  const isMultiWord = /\s+/.test(words);

  if (isMultiWord) {
    const wordsArr = words.split(/\s+/);
    const regExpCore = wordsArr.map((el) => `(?=.*${escapeRegexp(el)})`).join('');
    const needle = new RegExp(`^${regExpCore}.*$`, 'gi');

    return needle.test(sentence);
  }

  return sentence.toLowerCase().includes(words.toLowerCase());
};

export const filterSuggestionByRule = (suggestion: string, value: string, filterRule?: keyof typeof FILTER_RULES): boolean => {
  switch (filterRule) {
    case FILTER_RULES.smart:
      // "smart" search. Filters strings that contain all the values in the string from the input.
      // Returns "true" if the string contains all values from the input, regardless of the position of the values.
      return getIsSentenceIncludingWords(suggestion, value);

    case FILTER_RULES.startsWith:
      // filters strings that start with the string in the input
      return filterByStartsWith(suggestion, value);

    case FILTER_RULES.includes:
      // filters strings that contain an input string, regardless of its position
      return filterByIncludes(suggestion, value);
    default:
      return getIsSentenceIncludingWords(suggestion, value);
  }
};
