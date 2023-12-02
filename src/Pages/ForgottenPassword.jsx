import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import { toast } from "react-toastify";
import Navigation from '../components/Navigation'
import Footer from '../components/sections/Footer'
import axios from 'axios'

//     const handleSubmit=async(e)=>{
//       e.preventDefault()
//         axios.post("http://localhost:3001/api/user/forgotPassword",{email})
// .then((res)=>{
//   toast.success(res.data.message)
//   setEmail("")
// navigate("/login")
// })
// .catch((err)=>{
//         toast.error(err.response.data.message)
//       })
//     }

function ForgottenPassword() {
    const [email,setEmail]=useState('')
    const navigate=useNavigate()

    const handleSubmit=async(e)=>{
      e.preventDefault()
        axios.post("http://localhost:3001/api/user/forgotPassword",{email})
.then((res)=>{
  toast.success(res.data.message)
  setEmail("")
navigate("/login")
})
.catch((err)=>{
        toast.error(err.response.data.message)
      })
    }
  return (
    <>
<Navigation/>
    <section className='px-5 lg:px-0 my-auto'>
<div className="w-full max-w-[570px] mx-auto rounded-lg shadow-md md:p-10">
<h3 className="text-[#202020]  text-[22px] text-center leading-9 font-bold mb-10">
<span className='text-[#202020] '>Forgotten</span> Password ? 🎉
</h3>
<form className="py-4 md:py-0" onSubmit={handleSubmit}>
<div className="mb-5">
<input type='email' placeholder='Enter your Email' value={email} onChange={(e)=>setEmail(e.target.value)} className='w-full px-4 py-4 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor rounded-md cursor-pointer ' />
</div>

<div className='mt-7'>
<button type='submt' className='w-full bg-[#202020] rounded-full text-white text-[18px] leading-[30px]  px-4 py-3'>Send</button>
</div>
<p className="mt-5 text-[#202020] text-center">
<Link to="/login" className='text-[#202020] font-medium ml-1'>Never Mind</Link><br/>
</p>

</form>
</div>
    </section>
    <Footer/>
    </>
  )
}
export default ForgottenPassword