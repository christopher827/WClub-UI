import {  useSelector } from "react-redux";
import {AiOutlineCamera} from "react-icons/ai";
import {server} from "../server"
import axios from "axios";
import { toast } from "react-toastify";
import { useState } from "react";


function UserDetails() {
    const { user} = useSelector((state) => state.user);
    const [avatar,setAvatar]=useState(null)

    const handleImage=async(e)=>{
        e.preventDefault()
        const file=e.target.files[0]
        setAvatar(file)
        const formData=new FormData()
        formData.append("image",e.target.files[0])
        await axios.put(`${server}/api/user/update-avatar`,formData,{headers:{
        "Content-Type":"multipart/form-data",
        },
      withCredentials:true
      }).then((response)=>{
     window.location.reload() 
      }).catch((error)=>{
        toast.error(error)
      })
      }
  
  return (
    <>
    <div className="flex justify-center w-full">
      <div className="relative">
      {user && (
        <img
        src={`${user?.avatar?.url}`}          // src={kai}
          className="w-[150px] h-[150px] rounded-full object-cover border-[3px] border-[#3ad132]"
          alt=""
        />)}
        <div className="w-[30px] h-[30px] bg-[#E3E9EE] rounded-full flex items-center justify-center cursor-pointer absolute bottom-[5px] right-[5px]">
          <input
            type="file"
            id="image"
            className="hidden"
            onChange={handleImage}
          />
          <label htmlFor="image">
            <AiOutlineCamera />
          </label>
        </div>
      </div>
    </div>
    <br />
    <br />
    <div className="w-full px-5 ">



<div className="w-full flex">

<div className=" w-[50%]">
<div className='my-12 py-8 border border-secondary rounded-2xl shadow-xl px-2 max-w-[400px]'>
<h2 className="text-center">Full Name</h2>
<p className="text-center">{user?.firstName} {user?.lastName}</p>
</div>
</div>

<div className=" w-[50%]">
<div className='my-12 py-8 border border-secondary rounded-2xl shadow-xl px-2 max-w-[400px]'>
<h2 className="text-center">Email Address </h2>
<p className="text-center">{user?.email}</p>
</div>
</div>

</div>

<div className="w-full flex">

<div className=" w-[50%]">
<div className='my- py-8 border border-secondary rounded-2xl shadow-xl px-2 max-w-[400px]'>
<h2 className="text-center">Phone Number </h2>
<p className="text-center">{user?.phoneNumber} </p>
</div>
</div>

<div className=" w-[50%]">
<div className='my- py-8 border border-secondary rounded-2xl shadow-xl px-2 max-w-[400px]'>
<h2 className="text-center">Address</h2>
<p className="text-center">{user?.address}</p>
</div>
</div>

</div>
    </div>
  </>
)
}

export default UserDetails
