import { useState, useEffect } from "react";

const AnsBtn = ({ ans, setAns, first,addAns }) => {
  const [isFill, setIsFill] = useState(false);

  const prevNum = () => {
    let num = ans.filter((obj) => {
      return obj.isTaget;
    });
    return num[0].id;
  };
  const getAns = (e) => {
    if (e.target.value === "C") {
      ansClear();
    } else if (e.target.value === "←") {
      if (prevNum() >= 2) cursorLeftChange();
    } else if (e.target.value === "→") {
      if (prevNum() <= 3) cursorRightChange();
    } else {
      setAns((prev) => {
        const newAns = prev.map((obj) => {
          return obj.isTaget ? { ...obj, val: e.target.value } : obj;
        });
        return newAns;
      });
      if (prevNum() <= 3) cursorRightChange();
    }
  };

  const cursorRightChange = () => {
    setAns((prev) => {
      let check = false;
      const newAns = prev.map((obj) => {
        if (obj.isTaget) {
          check = !check;
          return { ...obj, isTaget: !obj.isTaget };
        } else {
          if (check) {
            check = !check;
            return { ...obj, isTaget: !obj.isTaget };
          }
          return obj;
        }
      });
      return newAns;
    });
  };

  const cursorLeftChange = () => {
    let _prevNum = prevNum();
    setAns((prev) => {
      const newAns = prev.map((obj) => {
        if (_prevNum >= 2 && _prevNum <= 4) {
          return obj.id === _prevNum - 1 || obj.id === _prevNum
            ? { ...obj, isTaget: !obj.isTaget }
            : obj;
        }
        return obj;
      });
      return newAns;
    });
  };

  const ansClear = () => {
    setAns(first);
  };

  //入力した値はボタンを押せないように
  const notPressBtn = () => {
    const numBtns = document.querySelectorAll(".numBtn");

    for (let item of numBtns) {
      item.disabled = false;
      for (let obj of ans) {
        if (obj.val !== "" && item.value === obj.val) {
          item.disabled = true;
        }
      }
    }
  };

  useEffect(() => {
    checkFill();
  }, ans);

  //全てうまっているかチェック
  const checkFill = () => {
    let isCheck = true;
    for (let obj of ans) {
      // console.log(obj.val !== '')
      if (obj.val === "") {
        isCheck = false;
      }
      setIsFill(isCheck);
    }
  };

  notPressBtn();

  //cssの記述
  const btnInp =
    "px-2 py-1 m-0.5 h-16 w-16 text-yellow-500 border border-yellow-500 font-semibold rounded hover:bg-yellow-100 disabled:bg-yellow-200";

  return (
    <div className="p-10">
      <input
        type="button"
        className={`numBtn ${btnInp}`}
        onClick={getAns}
        value="←"
      />
      <input
        type="button"
        className={`numBtn ${btnInp}`}
        onClick={getAns}
        value="→"
      />
      <input
        type="button"
        className={`numBtn ${btnInp}`}
        onClick={getAns}
        value="C"
      />
      <br />
      <input
        type="button"
        className={`numBtn ${btnInp}`}
        onClick={getAns}
        value="1"
      />
      <input
        type="button"
        className={`numBtn ${btnInp}`}
        onClick={getAns}
        value="2"
      />
      <input
        type="button"
        className={`numBtn ${btnInp}`}
        onClick={getAns}
        value="3"
      />
      <br />
      <input
        type="button"
        className={`numBtn ${btnInp}`}
        onClick={getAns}
        value="4"
      />
      <input
        type="button"
        className={`numBtn ${btnInp}`}
        onClick={getAns}
        value="5"
      />
      <input
        type="button"
        className={`numBtn ${btnInp}`}
        onClick={getAns}
        value="6"
      />
      <br />
      <input
        type="button"
        className={`numBtn ${btnInp}`}
        onClick={getAns}
        value="7"
      />
      <input
        type="button"
        className={`numBtn ${btnInp}`}
        onClick={getAns}
        value="8"
      />
      <input
        type="button"
        className={`numBtn ${btnInp}`}
        onClick={getAns}
        value="9"
      />
      <br />
      <input
        type="button"
        className={`numBtn ${btnInp}`}
        onClick={getAns}
        value="0"
      />
      {isFill && (
        <button
          onClick={addAns}
          className="py-1 m-0.5 ml-1.5 h-16 w-32 text-yellow-500 border border-yellow-500 font-semibold rounded hover:bg-yellow-100 disabled:bg-yellow-400"
        >
          送信！
        </button>
      )}
    </div>
  );
};
// px-2 py-1 m-0.5 h-16 w-16
export default AnsBtn;
