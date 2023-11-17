import { useState } from "react";

const Modal = ({ handleCloseClick, condition, setCondition, resetGame }) => {
  const startGame = () => {
    setCondition({
      isStart: true,
      isComplete: false,
    });
    handleCloseClick();
  };

  const reStartGame = () => {
    setCondition({
      isStart: true,
      isComplete: false,
    });
    resetGame();
    handleCloseClick();
  };

  return (
    <div className="fixed top-0 left-0 bg-black bg-opacity-60 w-screen h-screen z-10 flex justify-center items-center">
      <div className="bg-white w-64 h-64 rounded-3xl flex flex-col items-center pt-6">
        <h1 className="text-yellow-500 text-2xl font-semibold">HIT&BLOW</h1>
        <div className="mt-10 flex-col flex">
          {condition.isStart ? (
            <>
              {condition.isComplete && <p className="text-yellow-400 pb-5">おめでとうございます！！</p>}
              <button
                onClick={reStartGame}
                className="bg-yellow-400 hover:bg-yellow-300 text-white rounded px-9 py-3 mb-3"
              >
                リセット
              </button>
              <button
                type="button"
                onClick={handleCloseClick}
                className="bg-yellow-300 hover:bg-yellow-200 text-white rounded px-9 py-3"
              >
                閉じる
              </button>
            </>
          ) : (
            <button
              onClick={startGame}
              className="bg-yellow-400 hover:bg-yellow-300 text-white rounded px-9 py-3"
            >
              スタート
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;
