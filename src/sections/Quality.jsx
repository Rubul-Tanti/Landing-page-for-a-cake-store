import React from 'react'
import Qualitycake from"../assets/qa.jpg"
const Quality = () => {
  return (
    <div className='flex flex-col lg:flex-row w-full lg:min-h-screen '>
      <div className='pl-10'>
        <h1 className='text-5xl font-bold pt-10 leading-0'>We provide  <span className='text-pink-500'>delicious cake</span> with <span className='text-pink-500'>Quality</span></h1>
        <h2 className='text-zinc-500  text-lg pt-5'>Indulge in a symphony of flavor with our exquisite cakes, crafted with the finest ingredients and a dedication to quality. Each bite is a journey for your taste buds, showcasing the artistry of baking and the passion for creating something truly special. Prepare to be wowed by the extraordinary taste and impeccable craftsmanship that define our cakes, leaving you with a lasting impression of culinary excellence.</h2>
        <h2 className='text-zinc-500  text-lg pt-10 '>Our dedication to detail and excellence ensures your satisfaction

        </h2>
<button className='py-3 mt-10 px-6 font-semibold rounded-full bg-pink-500 text-white '>view details</button>

      </div>
      <div><img src={Qualitycake}></img></div>


    </div>
  )
}

export default Quality
