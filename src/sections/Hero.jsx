import React from 'react'
import hero from"../assets/cake.png"
const Hero = () => {
  return (
    <section className=' w-full relative lg:min-h-screen  flex flex-col lg:flex-row gap-10 '>

<div className='flex flex-col pt-16   pl-20 mt-10 ' >

  <h1 className="text-2xl z-10   text-pink-400  "> Our Best Collection</h1>
  <div className=' sm:h-[10vh]  md:h-[12vh] h-[20vh] lg:h-[40vh]'>
<h1 className="text-7xl lg:text-8xl  font-bold absolute  w-full mt-10  ">Try Our <span className="   text-pink-400">New</span> <br/><span className=" inline-block text-pink-400 ">Flavours</span>
 </h1>
 </div>
 <h1 className='text w-full mt-10 text-gray-500 font-'>Try The Cake Company 's new Flavours ,Handcrafted cakes made with the finest ingredients </h1>
 <button className='mt-10 bg-pink-400 rounded-full w-[300px] py-4 font-bold   text-white text-xl'>Order Now</button>
</div>

  <div className=' w-full bg-pink-100 flex  justify-center items-center'>
<img   width={1080} src={hero}></img>
    </div>  
      
    
      
    </section>
  )
}

export default Hero
