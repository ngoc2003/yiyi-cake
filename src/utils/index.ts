export const formatNumberWithDot = (num: number) => {
  return new Intl.NumberFormat("vi-VN").format(num);
};
