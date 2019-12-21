export const getLocationPath = (): string => {
  const locate = window.location;
  // hashHistory
  if (locate.hash) return locate.hash.replace('#', '');
  // browserHistory
  return locate.pathname + locate.search;
};
