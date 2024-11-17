import React from 'react'
import rubul from"../assets/rubul.png"
import rubu from"../assets/rubu.jpg"
const Review = () => {
  return (
    <div className="lg:min-h-screen  w-full ">
      <div className="text-5xl font-bold  text-center flex justify-center pt-10">What Our <span className='text-pink-500  '>Customers</span> Say?</div>
      <div className='text-center flex justify-center pt-5 text-gray-500'>
      Hear genuine stories from our satisfied customers about their exceptional experiences with </div>
   <div className='flex flex-row h-80 p-20 gap-44 w-full item-center'>

   <div className='flex flex-row items-center gap-5'><div className='flex flex-col justify-center items-center text-2xl font-semibold gap-3'><img className="rounded-full  overflow-hidden" width={200}  src={rubul  } ></img>vaity</div>  <p className='text-lg text-gray-500 text-center'>The attention to detail and the quality of the product exceeded my expectations. Highly recommended!</p></div>

   <div className='flex flex-row items-center gap-5'><div className='flex flex-col justify-center items-center text-2xl font-semibold gap-3'><img className="rounded-full  overflow-hidden" width={200}  src={rubu } ></img> Rubultanti</div>  <p className='text-lg text-gray-500 text-center'>The product not only met but exceeded my expectations. I'll definitely be a returning customer!</p></div>

   
   </div>
    </div>
  

)
}

export default Review
