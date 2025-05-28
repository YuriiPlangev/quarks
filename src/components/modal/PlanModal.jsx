import React from "react";

const PlanModal = ({ modal, onContinue }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.5)] flex justify-center items-center z-10 p-[2rem]">
      <div
        className={`bg-white rounded-[10px] p-[20px] flex flex-col gap-5 max-w-[28rem] xs:max-w-[25rem]`}
      >
        <p className="text-[1.2rem] text-tertiary font-bold">
          To move forward, specify
        </p>
        <h2 className="text-[1.8rem] font-bold">{modal}</h2>
        <div className="flex gap-5 ">
          <button
            onClick={onContinue}
            className="flex-1 p-[14px_16px] border-1 border-#D2CFDF rounded-[10px]"
          >
            <span className="text-[1.6rem] font-bold">No</span>
          </button>
          <button
            onClick={onContinue}
            className="flex-1 p-[14px_16px] border-1 border-#D2CFDF rounded-[10px]"
          >
            <span className="text-[1.6rem] font-bold">Yes</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlanModal;
