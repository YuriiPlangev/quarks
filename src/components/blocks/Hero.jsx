import diagram from '/hero.svg'

const Hero = () => {
  return (
    <section className='flex flex-col items-center gap-3 '>
        <h2 className='text-[2.5rem] font-bold'>Change your <span className='text-secondary'>love life</span></h2>
        <p className='text-[1.6rem]'>with easy-to-use practical tips that you can apply in any situation</p>
        <img src={diagram} className=' w-full my-[2rem]' alt="Hero Diagram" />
    </section>
  )
}

export default Hero