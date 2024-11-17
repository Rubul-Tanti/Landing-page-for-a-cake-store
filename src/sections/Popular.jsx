import React from 'react'
import { popularcakeList } from '../data/data'
const Popular = () => {
  return (
    <section className="lg:min-h-screen mt-5  w-full relative ">

      <div className='pt-10 px-10 mb-14'>
        <h1 className='text-4xl font-bold '>Our <span className='text-pink-400'>Most Selling </span> cake</h1>
        <h2 className="mt-2 text-gray-500">What's your cake craving? We've got the top-selling treats to satisfy!</h2>
      </div>
      
      <div className="flex flex-row w-full px-10 gap-2">
  {popularcakeList.map((item)=>( 
<div  id='popularCakes'  className=' flex flex-col w-1/4 px-10 shadow-lg shadow-pink-500  rounded-[40px]   gap-2  pb-5rounded-2xl'> 
<img className='h-[60%] rounded-2xl  'src={item.img}  />
<div><img></img><h6 className="text-gray-500">({item.ratting})</h6></div>
<h1 className='text-2xl font-semibold'>{item.name}</h1>
<p className='text-xl font-semibold text-pink-500'>{item.price}</p>
</div>)
  )} 


      </div>


    </section>
  )
}

export default Popular
