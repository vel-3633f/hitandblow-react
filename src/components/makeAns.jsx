export const makeAnswer = () => {
  /** 重複チェック用配列 */
  /** 最小値と最大値 */
  let min = 1;
  let max = 9;
  const randoms = [];
  /** 重複チェックしながら乱数作成 */
  for (let i = min; i <= 4; i++) {
    while (true) {
      let tmp = intRandom(min, max);
      if (!randoms.includes(tmp)) {
        randoms.push(tmp);
        break;
      }
    }
  }

  /** min以上max以下の整数値の乱数を返す */
  function intRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  return randoms;
}