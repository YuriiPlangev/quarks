import React from 'react'

const Footer = () => {
    const year = new Date().getFullYear();
  return (
    <footer className='text-[1.4rem] text-tertiary mt-auto'>
        <p>By continuing, you agree to our Terms of Service | Privacy Policy </p>
        <p>{year} © All Rights Reserved. </p>
    </footer>
  )
}

export default Footer