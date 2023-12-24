export const isPhoneNumber = (str: string) => {
  const regex = /^(03|05|07|08|09|01[2689])\d{8}\b/;
  return regex.test(str);
};
