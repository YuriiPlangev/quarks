import stars from "/stars.svg";

const FeedbackCard = ({ feedback }) => {
  return (
    <article className="border-1 border-[#D2CFDF] rounded-[10px] p-[12px_16px]  ">
      <div className="flex justify-between">
        <h3 className="text-[1.6rem] text-tertiary font-bold">
          {feedback.name}
        </h3>
        <div className="flex items-center gap-2 text-[1.2rem]">
          <img src={stars} alt="stars" />
          <p className=" text-tertiary text-[1.2rem]">{feedback.grade}</p>
        </div>
      </div>
      <p className="text-[1.2rem] font-light text-left">{feedback.text} </p>
    </article>
  );
};

export default FeedbackCard;
