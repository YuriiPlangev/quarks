import React from "react";
import QuestionList from "../components/blocks/QuestionList";
import Logo from "../components/ui/Logo";
import { useParams } from "react-router-dom";
import { allQuestions } from "../data/questions";
import { useNavigate } from "react-router-dom";
import arrow from "/arrow-left.svg";

const QuestionPage = () => {
  const [width, setWidth] = React.useState(0);
  const { type } = useParams();
  const questions = allQuestions[type] || [];
  const navigate = useNavigate();
  const [activeQuestion, setActiveQuestion] = React.useState(0);
  const [checkedCount, setCheckedCount] = React.useState(0);

  const handleNext = () => {
    if (activeQuestion < questions.length - 1) {
      setActiveQuestion((prev) => prev + 1);
      setWidth((prev) => prev + 100 / questions.length);
      setCheckedCount(0);
    } else {
      navigate("/results");
    }
  };
  const handleCheck = (e) => {
    if (e.target.checked) {
      setCheckedCount((prev) => prev + 1);
    } else {
      setCheckedCount((prev) => prev - 1);
    }
  };

  return (
    <main className="py-[2rem] flex flex-col min-h-screen">
      <header className="mb-10">
        <div className="w-full p-1 rounded-[10px] bg-[#E8E6EF] mb-5 relative">
          <div
            className={`absolute h-full top-0 left-0 bg-[#31728D] rounded-[10px]`}
            style={{ width: `${width}%`, transition: "width 0.5s ease-in-out" }}
          ></div>
        </div>
        <div className="flex items-center justify-between">
          <button
            aria-label="Back to home"
            onClick={() => navigate("/")}
            className="h-[40px] w-[40px] rounded-full flex justify-center items-center border-1 border-[#D2CFDF] "
          >
            {" "}
            <img
              className="mt-1 ml-1"
              src={arrow}
              alt="arrow"
              height={24}
              width={24}
            />{" "}
          </button>
          <Logo />
          <p className="text-[1.6rem] font-bold">
            <span className="text-secondary">{activeQuestion + 1}</span>/
            {questions.length}
          </p>
        </div>
      </header>
      <div className="mb-[75px] flex flex-col gap-5">
        <h2 className="text-[2.5rem] font-bold">
          {questions[activeQuestion].question}
        </h2>
        <p className="text-tertiary text-[1.2rem]">Select all that apply</p>
      </div>
      <QuestionList
        answers={questions[activeQuestion].answers}
        handleNext={handleNext}
        checkedCount={checkedCount}
        handleCheck={handleCheck}
      />
    </main>
  );
};

export default QuestionPage;
