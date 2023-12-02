import  { useState } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { RxAvatar } from "react-icons/rx";
import { Link, useNavigate } from 'react-router-dom'
import Navigation from '../components/Navigation'
import axios from "axios";
import Footer from '../components/sections/Footer'
import { toast } from "react-toastify";
import {server} from "../server"

function SignUp() {
    const [email,setEmail]=useState('')
    const [firstName,setFirstName]=useState('')
    const [lastName,setLastName]=useState('')
    const [country,setCountry]=useState('')
    const [phoneNumber,setPhoneNumber]=useState('')
    const [address,setAddress]=useState('')
    const [gender,setGender]=useState("")
    const [occupation,setOccupation]=useState('')
    const [dateOfBirth,setDateOfBirth]=useState('')
    const [password,setPassword]=useState('')
    const [confirmPassword,setConfirmPassword]=useState('')
    const [pin,setPin]=useState('')
    const [confirmPin,setConfirmPin]=useState('')
    const [avatar, setAvatar] = useState(null);
    const [visible, setVisible] = useState(false);
    const [visible2, setVisible2] = useState(false);
    const navigate=useNavigate()

const handleFileInputChange = (e) => {
  const reader = new FileReader();
  reader.onload = () => {
    if (reader.readyState === 2) {
      setAvatar(reader.result);
    }
  };
  reader.readAsDataURL(e.target.files[0]);
}

const handleSignUp=async(e)=>{
  e.preventDefault();
  const newForm=new FormData()
  newForm.append("file",avatar)
  const axiosConfig = {
    withCredentials: true, 
    crossDomain: true,   
  };
  // const newForm=new FormData()

  axios.post(`${server}/api/user/signup`,{email,firstName,lastName,country,phoneNumber,address,gender,occupation,dateOfBirth,password,confirmPassword,pin,confirmPin,avatar},axiosConfig)
.then((res)=>{
toast.success(res.data.message)
setEmail(""); setFirstName(); setLastName(); setCountry(); setPhoneNumber(); setAddress(); setGender(); setOccupation(); setDateOfBirth(); setPassword(); setConfirmPassword(); setPin(); setConfirmPin(); setAvatar();

navigate("/login")
}).catch((error)=>{
  toast.error(error.response.data.message);
  // console.log(error.response.data.message)
})
}
  return (
<>
<Navigation/>
<section className='px-5 lg:px-0'>
<div className="w-full max-w-[570px] mx-auto rounded-lg shadow-md md:p-10">
<h3 className="text-[#202020]  text-[22px] text-center leading-9 font-bold mb-10">
Create An <span className='text-[#202020]'>Account</span>  
</h3>
<form className="py-4 md:py-0" onSubmit={handleSignUp}>
<div className="mb-5">
<input type='email' placeholder='Enter your Email' value={email} onChange={(e)=>setEmail(e.target.value)} className='w-full px-4 py-4 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor rounded-full cursor-pointer ' />
</div>
<div className="mb-5">
<input type='text' placeholder='Enter your Firstname' value={firstName} onChange={(e)=>setFirstName(e.target.value)} className='w-full px-4 py-4 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor rounded-full cursor-pointer ' />
</div>
<div className="mb-5">
<input type='text' placeholder='Enter your Lastname' value={lastName} onChange={(e)=>setLastName(e.target.value)} className='w-full px-4 py-4 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor rounded-full cursor-pointer ' />
</div>
<div className="mb-5">
  <select value={country} onChange={(e) => setCountry(e.target.value)}  className='w-full px-4 py-4 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor rounded-full cursor-pointer' >
    <option value='' disabled>Select a Country</option>
    <option value='naija'>Nigeria</option>
    <option value='ghana'>Ghana</option>
    <option value='rwanda'>Rwanda</option>
    <option value='mali'>Mali</option>
    <option value='senegal'>Senegal</option>
    <option value='kenya'>Kenya</option>
    <option value='liberia'>Liberia</option>
  </select>
</div>
<div className="mb-5">
<input type='number' placeholder='Phone Number (234)' value={phoneNumber} onChange={(e)=>setPhoneNumber(e.target.value)} className='w-full px-4 py-4 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor rounded-full cursor-pointer ' />
</div>
<div className="mb-5">
<input type='text' placeholder='Address' value={address} onChange={(e)=>setAddress(e.target.value)} className='w-full px-4 py-4 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor rounded-full cursor-pointer ' />
</div>
<div className="mb-5">
  <select value={gender} onChange={(e) => setGender(e.target.value)}  className='w-full px-4 py-4 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor rounded-full cursor-pointer' >
    <option value='' disabled>Gender  </option>
    <option value='male'>Male</option>
    <option value='female'>Female</option>
  </select>
</div>
<div className="mb-5">
<input type='text' placeholder='Occupation' value={occupation} onChange={(e)=>setOccupation(e.target.value)} className='w-full px-4 py-4 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor rounded-full cursor-pointer ' />
</div>
<div className="mb-5">
<input type='date' placeholder='Date Of Birth' value={dateOfBirth} onChange={(e)=>setDateOfBirth(e.target.value)} className='w-full px-4 py-4 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor rounded-full cursor-pointer ' />
</div>
<div className="mb-5 relative">
<input type={visible ? "text" : "password"} name="password" autoComplete="current-password" value={password} onChange={(e)=>setPassword(e.target.value)}   placeholder='Enter your Password' className='w-full px-4 py-4 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor rounded-full cursor-pointer ' />
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

<div className="mb-5 relative">
<input type={visible2 ? "text" : "password"} name="password" autoComplete="current-password" placeholder='Confirm Password' value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)} className='w-full px-4 py-4 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor rounded-full cursor-pointer ' />
{visible2 ? (
                  <AiOutlineEye
                    className="absolute right-2 top-5 cursor-pointer"
                    size={25}
                    onClick={() => setVisible2(false)}
                  />
                ) : (
                  <AiOutlineEyeInvisible
                    className="absolute right-2 top-5 cursor-pointer"
                    size={25}
                    onClick={() => setVisible2(true)}
                  />
                )}
</div>
<div className="mb-5">
<input type='number' placeholder='Create Pin' value={pin} onChange={(e)=>setPin(e.target.value)} className='w-full px-4 py-4 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor rounded-full cursor-pointer ' />
</div>
<div className="mb-5">
<input type='number' placeholder='Confirm Pin' value={confirmPin} onChange={(e)=>setConfirmPin(e.target.value)} className='w-full px-4 py-4 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor rounded-full cursor-pointer '/>
</div>

<div>
              <label htmlFor="avatar" className="block text-sm font-medium text-gray-700"></label>
              <div className="mt-2 flex items-center">
                <span className="inline-block h-8 w-8 rounded-full overflow-hidden">
                  {avatar ? (
                    <img
                    src={avatar}
                      alt="avatar"
                      className="h-full w-full object-cover rounded-full"
                    />
                  ) : (
                    <RxAvatar className="h-8 w-8" />
                  )}
                </span>
                <label
                  htmlFor="file-input"
                  className="ml-5 flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                >
                  <span>Upload a file</span>
                  <input
                    type="file"
                    name="avatar"
                    id="file-input"
                    accept=".jpg,.jpeg,.png"
                    onChange={handleFileInputChange}
                    className="sr-only"
                  />
                </label>
              </div>
            </div> 


<div className='mt-7'>
<button type='submit'  className='w-full bg-[#202020] text-white text-[18px] leading-[30px] rounded-full px-4 py-3'>Create Account</button>
</div>
<p className="mt-5 text-[#202020]  text-center">
Already have an account? <Link to="/login" className='text-[#202020]  font-medium ml-1'>Sign In</Link>
</p>
</form>
</div>
    </section>
    <Footer/>
</>
    )
}
export default SignUp