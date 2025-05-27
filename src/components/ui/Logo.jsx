
import logo from '/logo.svg'
const Logo = () => {
  return (
    <div className='flex gap-2 '>
        <img src={logo} alt="logo" />
        <h1 className='text-[2.5rem] text-secondary font-semibold'>Affemity</h1> 
    </div>
  )
}

export default Logo