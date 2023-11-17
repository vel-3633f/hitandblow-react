import { useEffect, useState } from "react";
import AnsInput from "./components/AnsInput";
import AnsOutput from "./components/AnsOutput";
import { makeAnswer } from "./components/makeAns";
import { createPortal } from "react-dom";
import Modal from "./components/Modal";

const ModalPortal = ({ children }) => {
  const containerStart = document.querySelector("#start");
  return createPortal(children, containerStart);
};

function HitAndBlow() {
  const first = [
    {
      id: 1,
      val: "",
      isTaget: true,
    },
    {
      id: 2,
      val: "",
      isTaget: false,
    },
    {
      id: 3,
      val: "",
      isTaget: false,
    },
    {
      id: 4,
      val: "",
      isTaget: false,
    },
  ];
  const [checkAns, setCheckAns] = useState([]);
  const [ans, setAns] = useState(first);
  const [randoms, setRandoms] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [condition, setCondition] = useState({
    isStart: false,
    isComplete: false,
  });

  const resetGame = () => {
    const newAnswer = makeAnswer();
    setRandoms(newAnswer);
    setAns(first);
    setCheckAns([]);
    console.log(randoms);
  };

  window.onload = function () {
    setModalOpen(true);
  };

  useEffect(() => {
    const newAnswer = makeAnswer();
    setRandoms(newAnswer);
  }, []);

  for (let obj of ans) {
    const target = document.getElementById(`${obj.id}`);
    // console.log(obj.isTaget,target)
    if (target !== null) {
      target.style.borderColor = obj.isTaget ? "#F59E0B" : "";
      target.style.borderWidth = obj.isTaget ? "2px" : "";
    }
  }

  return (
    <div className="flex flex-col  min-h-screen w-screen items-center justify-center bg-slate-100 max-sm:pt-10">
      <div className="flex relative">
        {ans.map((obj) => {
          return (
            <p
              key={obj.id}
              id={obj.id}
              className={`flex justify-center items-center m-0.5 h-16 w-16 text-yellow-500 border border-yellow-500 font-semibold rounded`}
            >
              {obj.val}
            </p>
          );
        })}
        <button
        type="button"
        onClick={() => setModalOpen(true)}
        disabled={modalOpen}
          className="w-10 h-10  bg-yellow-300 text-2xl text-white font-semibold rounded-full hover:bg-yellow-400 absolute -right-24 top-4 z-0 max-sm:-right-12"
      >
        +
      </button>
      </div>
      <div className="flex max-sm:flex-col-reverse">
        <AnsOutput checkAns={checkAns}/>
        <AnsInput
          ans={ans}
          setAns={setAns}
          first={first}
          checkAns={checkAns}
          setCheckAns={setCheckAns}
          randoms={randoms}
          setCondition={setCondition}
          handleOpenClick={() => setModalOpen(true)}
        />
      </div>
      <div id="start"></div>
      {modalOpen && (
        <ModalPortal>
          <Modal
            handleCloseClick={() => setModalOpen(false)}
            condition={condition}
            setCondition={setCondition}
            resetGame = {resetGame}
          />
        </ModalPortal>
      )}
    </div>
  );
}

export default HitAndBlow;
