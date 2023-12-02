import {useState,useEffect} from 'react'
import { Link,useNavigate } from 'react-router-dom'
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import Navigation from '../components/Navigation'
import axios from "axios"
import { toast } from "react-toastify";
import Footer from '../components/sections/Footer'
import {server} from "../server"

function Login() {
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [visible, setVisible] = useState(false);
    const navigate=useNavigate()

    const handleSubmit=async(e)=>{
        e.preventDefault()
        axios.post(`${server}/api/user/login-user`,{email,password},{ withCredentials: true }
        )
        .then((res)=>{
          toast.success("Login Success")
          setEmail("")
          setPassword("")
          navigate("/profile")
          window.location.reload(true); 

        }).catch((error)=>{
          toast.error(error.response.data.message);
        })
        
    }
  
  return (
    <>
    <Navigation/>
    <section className='px-5 lg:px-0'>
<div className="w-full max-w-[570px] mx-auto rounded-lg shadow-md md:p-10">
<h3 className="text-[#202020]  text-[22px] text-center leading-9 font-bold mb-10">
Hello! <span className='text-[#202020] '>Welcome</span> Back 🎉
</h3>
<form className="py-4 md:py-0" onSubmit={handleSubmit}>
<div className="mb-5">
<input type='email' placeholder='Enter your Email' value={email} onChange={(e)=>setEmail(e.target.value)} className='w-full px-4 py-4 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor rounded-full cursor-pointer ' />
</div>
<div className="mb-5 relative">
<input type={visible ? "text" : "password"} name="password" autoComplete="current-password" placeholder='Enter your password' value={password} onChange={(e)=>setPassword(e.target.value)} className='w-full px-4 py-4 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor rounded-full cursor-pointer ' />
{visible ? (
                  <AiOutlineEye
                    className="absolute right-2 top-5 cursor-pointer"
                    size={25}
                    onClick={() => setVisible(false)}
                  />
                ) : (
                  <AiOutlineEyeInvisible
                    className="absolute right-2 top-5 cursor-pointer"
                    size={25}
                    onClick={() => setVisible(true)}
                  />
                )}

</div>

<div className='mt-7'>
<button type='submt' className='w-full bg-[#202020] rounded-full text-white text-[18px] leading-[30px]  px-4 py-3'>Login</button>
</div>
<p className="mt-5 text-[#202020] text-center">
Don&apos;t have account? <Link to="/signup" className='text-[#202020] font-medium ml-1'>Sign Up</Link><br/>
 <Link to="/forgottenPassword" className='text-[#202020] font-sm ml-1'>forgotten Password?</Link>
</p>
</form>
</div>
    </section>
    <Footer/>
    </>

  )
}
export default Login