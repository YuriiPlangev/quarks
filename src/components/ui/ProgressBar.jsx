import React from 'react'
import PlanModal from '../modal/PlanModal';

const ProgressBar = ({title, modal, onDone, isActive}) => {

  const [width, setWidth] = React.useState(0);
  const [openModal, setOpenModal] = React.useState(false);
  const [shouldContinue, setShouldContinue] = React.useState(false);


  React.useEffect(() => {
  
  if (!isActive) return
  
  let interval;

  if (!openModal) {
    interval = setInterval(() => {
      setWidth(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          onDone()
          return prev;
        }

        if (prev === 50 && !shouldContinue) {
          setOpenModal(true);
          clearInterval(interval);
          return prev;
        }

        return prev + 1;
      });
    }, 20);
  }

  return () => clearInterval(interval);
}, [isActive, openModal, shouldContinue, onDone]);


  return (
    <div className='flex flex-col gap-2'>
    <div className='flex justify-between text-[1.2rem] '>
        <p>{title}</p>
        <p className='font-bold'>{width}%</p>
    </div>
    <div className='w-full p-2 h-[1.4rem] rounded-[10px] bg-[#E8E6EF] mb-5 relative'>
        <div className={`absolute h-full top-0 left-0 bg-[#31728D] rounded-[10px]`}  style={{ width: `${width}%`, transition: '0.1s linear' }}>
        </div>
    </div>
    {
      openModal && <PlanModal modal={modal} onContinue={() => {setOpenModal(false); setShouldContinue(true);}} />
    }
      </div>
  )  
}

export default ProgressBar