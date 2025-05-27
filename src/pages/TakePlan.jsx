import React from 'react'
import Logo from '../components/ui/Logo'
import ProgressBar from '../components/ui/ProgressBar'
import FeedbackSwiper from '../components/blocks/FeedbackSwiper'

import "swiper/css";

const TakePlan = () => {
      const planData = [
        { 
          id: 1,
          title: 'Setting goals',
          modal: 'Have you tried changing your love life before?'
        },
        {
          id: 2,
          title: 'Adapting growth areas',
          modal: 'Have you tried changing your love life before?' 
        },
        {
          id: 3,
          title: 'Picking content',
          modal: 'Do you lack consistency?' 
        },
        {
          id: 4,
          title: 'Prioritizing challanges ',
          modal: 'Are you open to self-improvement?' 
        }
      ]
      
      const [active, setActive] = React.useState(0);
       const handleNext = () => {
      setActive(active + 1);
    };

  return (

    <main className='flex flex-col gap-5 items-center relative min-h-screen py-[2rem]'>
        <Logo />
        <h2 className='text-[2.5rem] font-bold'>
            We are crafting your personalized plan
        </h2>
        <div className='w-full'>
          {
          planData.map((item, index) => (
            <ProgressBar sBar key={item.id} title={item.title} modal={item.modal} isActive={index === active} onDone={handleNext} />
          ))
        }
        </div>
       <FeedbackSwiper />
    </main>
  )
}

export default TakePlan