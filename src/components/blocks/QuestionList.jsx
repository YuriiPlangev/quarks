import React from 'react'
import Answer from '../ui/Answer'


const QuestionList = ({answers, handleNext, checkedCount, handleCheck}) => {

  return (
    <div className='flex flex-col flex-grow '>
        <ul className='flex flex-col gap-5'>
            {answers.map(answer => <Answer key={answer.id} answer={answer} handleCheck={handleCheck} />)}
        </ul>
        <button disabled={checkedCount === 0} onClick={handleNext} className='w-full bg-[#31728D] text-white py-3 rounded-[10px] mt-auto disabled:opacity-50'><span className=' text-[1.8rem] font-extrabold'>Continue</span></button>
    </div>
  )
}

export default QuestionList