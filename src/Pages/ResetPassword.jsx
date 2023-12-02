import  { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import axios from 'axios'
import { toast } from "react-toastify";
import Navigation from '../components/Navigation'
import Footer from '../components/sections/Footer'

function ResetPassword() {
    const [password,setPassword]=useState('')
    const [visible, setVisible] = useState(false);
    const {id,token}=useParams()
    const navigate=useNavigate()

    const handleSubmit=async(e)=>{
      e.preventDefault()
        axios.post(`http://localhost:3001/api/user/resetPassword/${id}/${token}`,{password})
.then((res)=>{
  toast.success(res.data.message)
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
<span className='text-[#202020] '>New</span> Password ? 🎉
</h3>
<form className="py-4 md:py-0" onSubmit={handleSubmit}>
<div className="mb-5 relative">
<input type={visible ? "text" : "password"} name="password" autoComplete="current-password" placeholder='Enter new password' value={password} onChange={(e)=>setPassword(e.target.value)} className='w-full px-4 py-4 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor rounded-full cursor-pointer ' />
{visible ? (
                  <AiOutlineEye
                    className="absolute right-2 top-2 cursor-pointer"
                    size={25}
                    onClick={() => setVisible(false)}
                  />
                ) : (
                  <AiOutlineEyeInvisible
                    className="absolute right-2 top-2 cursor-pointer"
                    size={25}
                    onClick={() => setVisible(true)}
                  />
                )}

</div>

<div className='mt-7'>
<button type='submt' className='w-full bg-[#202020] rounded-full text-white text-[18px] leading-[30px]  px-4 py-3'>Update</button>
</div>
{/* <p className="mt-5 text-[#202020] text-center">
<Link to="/login" className='text-[#202020] font-medium ml-1'>Never Mind</Link><br/>
</p> */}

</form>
</div>
    </section>
    <Footer/>
    </>
  )
}
export default ResetPassword