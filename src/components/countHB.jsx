export const countHB = (newAnsObj, randoms) => {
  const _ans = newAnsObj.ansAry;
  let hit = 0;
  let blow = 0;
  for (let i = 0; i < 4; i++) {
    _ans[i] = Number(_ans[i])
    if (_ans[i] === randoms[i]) {
      hit++;
    } else if (randoms.indexOf(_ans[i]) !== -1) {
      blow++;
    }
    console.log(randoms.indexOf(_ans[i]))
  }
  console.log(randoms)
  newAnsObj.hit = hit;
  newAnsObj.blow = blow;
  return newAnsObj;
};
