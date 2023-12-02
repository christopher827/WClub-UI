import Logo from "./Logo"
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { server } from "../server";
import { useState } from "react";

function Navbar() {
  const {isAuthenticated,user}=useSelector((state)=>state.user)
  const [click,setClick]=useState(false)

  return (
<section className="w-full bg-white">
<nav className="flex justify-between items-center w-[85%] h-20 mx-auto">
<Logo/>
<span>&nbsp;</span>
<ul className="flex justify-around items-center gap-4 list-none">
  <li className="text-[#202020] cursor-pointer">Home</li>
  <li className="text-[#202020] cursor-pointer">About</li>
  <li className="text-[#202020] cursor-pointer">Contact</li>
  <li className="text-[#202020] cursor-pointer">Team</li>
  <li className="text-[#202020] cursor-pointer">Faq</li>
  </ul>
  <div class="hidden md:block">
{isAuthenticated?(
 <Link to="/profile">
 <img
   src={`${server}/${user.avatar}`}
   className="w-[40px] h-[40px] rounded-full"
   alt=""
 />
</Link>
):(
<Link to="/login" className="inline-block bg-[#202020] text-white outline-none border-none text-[0.875em] py-[0.9rem] px-[2.3rem] rounded-full cursor-pointer transition-transform duration-200 ease-in-out relative hover:scale-90">Login</Link>
)
}

</div>
</nav>
</section>
    )
}
export default Navbar