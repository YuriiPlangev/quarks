import React from "react";
import checked from "/check.svg";
const Answer = ({ answer, handleCheck }) => {
  const [isChecked, setIsChecked] = React.useState(false);

  const onChange = (e) => {
    setIsChecked(e.target.checked);
    handleCheck(e);
  };

  return (
    <div className="relative">
      <label
        className={`border-1  ${
          isChecked ? "border-[#31728D]" : "border-[#D2CFDF]"
        } cursor-pointer rounded-[10px] p-4 text-[1.6rem] font-bold flex justify-between items-center`}
        htmlFor={answer.id}
      >
        {answer.emoji}
        {answer.answer}
      </label>
      <div className="absolute top-[35%] right-7">
        <input
          type="checkbox"
          id={answer.id}
          name={answer.answer}
          onChange={onChange}
          className="appearance-none peer w-6 h-6 border-2 border-[#D2CFDF] bg-white rounded-[2px] checked:bg-[#31728D] checked:border-0"
        />
        <img
          src={checked}
          alt=""
          className="absolute hidden top-0 left-0 w-6 h-6 peer-checked:block  pointer-events-none"
        />
      </div>
    </div>
  );
};

export default Answer;
