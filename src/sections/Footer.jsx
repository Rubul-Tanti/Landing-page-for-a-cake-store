import React from 'react'
import Logo from "../assets/icons/Logo.png"

const Footer = () => {
  return (
    <div className='lg:h-[50vh] sm:text-sm p-3 bg-black justify-between pr-20 flex flex-row text-white items-center '>
     <div className='flex justify-center flex-col'>

      <div className=" sm:mx-10 my-5 max-sm:mx-2 justify-center w-1/2 lg:mx-20 flex flex-col gap-2 items-center">
    <img className=" w-16 bg-pink-100 p-2 rounded-full shadow-sm shadow-slate-300" src={Logo}/>
    <h1 className="text-sm mx-2  font-bold text-pink-500">The cake company</h1>
</div>
<div className='w-1/2 pl-20 text-center'>

Creating beautiful and delicious cakes for every occasion

Sweetening your celebrations with love and care

Bringing smiles to faces with every bite.


Emphasize the Variety
</div>
     </div>
    <div className='text-white flex flex-row gap-5 justify-evenly'>
  <a>facebook</a>
  <a>instagram</a>
  <a>thread</a>
    </div>
    
    </div>
  )
}

export default Footer
