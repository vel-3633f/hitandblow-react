import { useEffect, useState } from "react";
import AnsBtn from "./AnsBtn";
import { countHB } from "./countHB";

const AnsInput = ({
  ans,
  setAns,
  checkAns,
  setCheckAns,
  first,
  randoms,
  setCondition,
  handleOpenClick
}) => {
  const addAns = () => {
    const ansAry = [];
    for (let item of ans) {
      ansAry.push(item.val);
    }
    let newAnsObj = {
      id: checkAns.length,
      ansAry,
      hit: 0,
      blow: 0,
    };
    newAnsObj = countHB(newAnsObj, randoms);
    if (newAnsObj.hit === 4) {
      setCondition({
        isStart: true,
        isComplete: true,
      });
      handleOpenClick();
    }

    setCheckAns([...checkAns, newAnsObj]);
    setAns(first);
  };

  return (
    <div className="w-80 min-h-96 flex flex-col items-center">
      <AnsBtn ans={ans} setAns={setAns} first={first} addAns={addAns} />
    </div>
  );
};

export default AnsInput;
