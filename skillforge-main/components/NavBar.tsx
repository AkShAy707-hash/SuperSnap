import React from 'react'
import Image from 'next/image'
const NavBar = () => {
  return (
    <nav className='flex w-full items-center justify-between px-[20px] py-[16px] lg:container lg:mx-auto' >
        <div >
         <Image src={'/menu.svg'} width={40} height={40} alt='menu'/>
        </div>
       
    </nav>
  )
}

export default NavBar