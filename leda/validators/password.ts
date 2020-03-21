export const validatePassword = (password: string): boolean => {
  if (!password.match(/[A-z]/)?.length) {
    return false;
  }

  if (!password.match(/\d/)?.length) {
    return false;
  }

  return password.length >= 8;
};
