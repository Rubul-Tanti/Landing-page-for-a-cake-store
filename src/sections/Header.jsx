import Logo from "../assets/icons/Logo.png"
import Menu from "../assets/icons/hamburger.png"
function Header(){
  return<section className="absolute z-10 w-full">

<div className="flex flex-row top-0 relative items-center justify-between">
<div className=" sm:mx-10 my-5 max-sm:mx-2 lg:mx-20 flex flex-row items-center">
    <img className=" w-16 bg-pink-100 p-2 rounded-full shadow-lg shadow-slate-300" src={Logo}/>
    <h1 className="text-sm mx-2  font-bold text-pink-500">The cake company</h1>
    </div>
    <div className="pr-20">
     <img width={25}  src={Menu} />

    </div>
     </div>

  </section>
}
export default Header 