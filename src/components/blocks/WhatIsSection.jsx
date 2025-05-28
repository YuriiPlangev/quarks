
import WhatIsButton from '../buttons/WhatIsButton'
import { useNavigate } from 'react-router-dom'
const WhatIs = () => {

  const navigate = useNavigate();
  const handleClick = (type) => {
    navigate(`/question/${type}`);
  };

  return (
    <section className='flex flex-col items-center gap-3'>
        <h2 className='text-[1.8rem] font-bold'>What is your main goal?</h2>
        <div className='flex gap-3' >
            <WhatIsButton onClick={() => handleClick(`connection`)} text="Build a deep connection" />
            <WhatIsButton onClick={() => handleClick(`emotion`)} text="Create emotional attraction" />
        </div>
        <p className='font-bold text-[1.4rem] underline cursor-pointer'>Other</p>
    </section>
  )
} 

export default WhatIs