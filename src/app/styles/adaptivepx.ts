const apx1 = 0.052083;
const apx1L = 0.134409;
const apx1M = 0.266667;

const apx = {
  d: (px: number) => `${px * apx1}vw`,
  l: (px: number) => `${px * apx1L}vw`,
  m: (px: number) => `${px * apx1M}vw`,
};

export { apx1, apx1L, apx1M };

export default apx;
