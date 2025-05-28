
const WhatIsButton = ({text, onClick}) => {
  return (
    <button onClick={onClick} className='flex-1 rounded-[10px] p-3 border border-[#D2CFDF] active:border-[#31728D] '><span className='text-[1.4rem] font-bold'>{text}</span></button>
  )
}

export default WhatIsButton