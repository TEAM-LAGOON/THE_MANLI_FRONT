export const regexEmail = (email: string): boolean => {
  const regex = /\S+@\S+\.\S+/;
  return regex.test(email);
};

export const regexNickName = (nickName: string): boolean => {
  if (nickName.length <= 10 && nickName.length >= 3) return true;
  else return false;
};

export const regexPassword = (password: string): boolean => {
  const regex = /^(?=.*[0-9])(?=.*[a-z])(?=.*\W)(?!.* ).{0,}$/;
  return regex.test(password);
};

export const regexPasswordLength = (password: string): boolean => {
  if (password.length >= 8 && password.length <= 15) return true;
  else return false;
};
