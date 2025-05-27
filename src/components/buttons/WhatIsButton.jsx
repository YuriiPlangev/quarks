
const WhatIsButton = ({text, onClick}) => {
  return (
    <button onClick={onClick} className='flex-1 rounded-[10px] p-3 border border-[#D2CFDF] active:border-[#31728D] '><p className='text-[1.4rem] font-semibold'>{text}</p></button>
  )
}

export default WhatIsButton