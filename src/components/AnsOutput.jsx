
const AnsOutput = ({ checkAns}) => {
 
  const basicCss =
    "py-1 inline-block text-yellow-500 border border-yellow-500 font-semibold";
  return (
    <div className="pt-10 w-80 h-72 text-center max-sm:pt-0">
      <p className="">
        <span className={`w-1/2  ${basicCss} border-r-0`}>ANSWER</span>
        <span className={`w-1/4 ${basicCss} border-r-0`}>HIT</span>
        <span className={`w-1/4 ${basicCss} `}>BLOW</span>
      </p>
      {checkAns.map((obj) => {
        return (
          <p key={obj.id} className="">
            <span className={`w-1/2 ${basicCss} border-t-0 border-r-0`}>
              {obj.ansAry}
            </span>
            <span className={`w-1/4 ${basicCss} border-t-0 border-r-0`}>
              {obj.hit}
            </span>
            <span className={`w-1/4 ${basicCss} border-t-0`}>{obj.blow}</span>
          </p>
        );
      })}
    </div>
  );
};

export default AnsOutput;
