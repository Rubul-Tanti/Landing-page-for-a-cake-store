import React from 'react'

const Subscribe = () => {
  return (
    <div className='lg:h-[50vh] w-full flex  items-center gap-10 justify-evenly py-10 px-20'>
    <h1 className='md:text-5xl sm:text-3xl font-bold '>Sign Up for <span className='text-pink-500'>Updates</span> & Newsletter</h1>
    <div className="border w-[400px]  flex-row flex p-3 items-center justify-between border-gray-500 rounded-full  ">
      <div>
        <input placeholder='subscribe' className=' outline-none w-full'/>
        </div> <div>

    <button className='px-5 py-3 text-white bg-pink-500 rounded-full'>subscribe</button> </div>
        </div>
    
    </div>
  )
}

export default Subscribe
