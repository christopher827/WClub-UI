import  { useState } from "react";
import axios from "axios"
import { toast } from "react-toastify";
import { AiOutlineEye,AiOutlineEyeInvisible } from "react-icons/ai";
import { server } from "../server";

const ChangePassWord=()=>{
    const [currentPassword,setCurrentPassword]=useState('')
    const [newPassword,setNewPassword]=useState('')
    const [confirmNewPassword,setConfirmNewPassword]=useState('')
    const [visible, setVisible] = useState(false);
    const [visible2, setVisible2] = useState(false);
    const [visible3, setVisible3] = useState(false);

    const handleSubmit=async(e)=>{
      e.preventDefault()
 await axios.put(`${server}/api/user/changePassword`,{currentPassword,newPassword,confirmNewPassword},{withCredentials:true})
      .then((res)=>{
    toast.success(res.data.message)
      }).catch((error)=>{
      toast.error(error.response.data.message)
      })
  }

    return(
      <section className='px-5 lg:px-0'>
      <div className="w-full max-w-[570px] mx-auto rounded-lg shadow-md md:p-10">
      <h3 className="text-[#202020]  text-[22px] text-center leading-9 font-bold mb-10">
      Change Password
      </h3>
      <form className="py-4 md:py-0" onSubmit={handleSubmit}>
      <div className="mb-5 relative">
      <input type={visible ? "text" : "password"} name="password" autoComplete="current-password" placeholder='Enter Current password' value={currentPassword} onChange={(e)=>setCurrentPassword(e.target.value)} className='w-full px-4 py-4 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor rounded-full cursor-pointer ' />
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
      <input type={visible2 ? "text" : "password"} name="password" autoComplete="current-password" placeholder='Enter New password' value={newPassword} onChange={(e)=>setNewPassword(e.target.value)} className='w-full px-4 py-4 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor rounded-full cursor-pointer ' />
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

      <div className="mb-5 relative">
      <input type={visible3 ? "text" : "password"} name="password" autoComplete="current-password" placeholder='Confirm New password' value={confirmNewPassword} onChange={(e)=>setConfirmNewPassword(e.target.value)} className='w-full px-4 py-4 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor rounded-full cursor-pointer ' />
      {visible3 ? (
                        <AiOutlineEye
                          className="absolute right-2 top-5 cursor-pointer"
                          size={25}
                          onClick={() => setVisible3(false)}
                        />
                      ) : (
                        <AiOutlineEyeInvisible
                          className="absolute right-2 top-5 cursor-pointer"
                          size={25}
                          onClick={() => setVisible3(true)}
                        />
                      )}
      
      </div>

      <div className='mt-7'>
      <button type='submit' className='w-full bg-[#202020] rounded-full text-white text-[18px] leading-[30px]  px-4 py-3'>Go</button>
      </div>
      </form>
      </div>
          </section>
  
    )
  }
export default ChangePassWord
