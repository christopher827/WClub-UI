import { useState } from "react"
import axios from "axios"
import { toast } from "react-toastify";
import { server } from "../../server";

function Contact() {
  const [email,setEmail]=useState("")
  const [subject,setSubject]=useState("")
  const [message,setMessage]=useState("")

  const handleSumbit=async(e)=>{
    e.preventDefault()
    axios.post(`${server}/api/user/message`,{email,subject,message})
    .then((res)=>{
      toast.success(res.data.message)
      setEmail(""); 
      setSubject(""); 
      setMessage(""); 
      }).catch((error)=>{
        toast.error(error.response.data.message);
      })
  }

  return (
<section id="contact">
<div className='px-4 mx-auto max-w-screen-md'>
<h2 className="text-[44px] leading-[54px] font-[700] text-center">Contact Us</h2>
<p className="mb-8 lg:mb-16 text-center text-[18px] leading-[30px] font-[400] text-textColor mt-[18px]">
  Got a technical issue? Want to send feedback about a better feature? Let us know
</p>
<form className='space-y-8 mb-10' onSubmit={handleSumbit}>
<div>
  <label htmlFor="email" className=' font-semibold text-[16px] mb-2'>Your Email</label>
 <input type="email" id='email' placeholder='example@gmail.com' className=' w-full px-4 py-3 border border-solid border-[#0066ff61] focus:outline-none focus:border-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor cursor-pointer rounded-md; mt-1' value={email} onChange={(e)=>setEmail(e.target.value)}/>
</div>
<div>
  <label htmlFor="subject" className=' font-semibold text-[16px] mb-2'>Subject</label>
  <input type="text" id='subject' placeholder='Let us know how we can help you' className=' w-full px-4 py-3 border border-solid border-[#0066ff61] focus:outline-none focus:border-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor cursor-pointer rounded-md; mt-1' value={subject} onChange={(e)=>setSubject(e.target.value)} />
</div>
<div>
  <label htmlFor="message" className=' font-semibold text-[16px] mb-2'>Your Message</label>
  <textarea type="text" id='message' placeholder='Leave a comment...'  className=' w-full px-4 py-3 border border-solid border-[#0066ff61] focus:outline-none focus:border-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor cursor-pointer rounded-md; mt-1' rows="6" value={message} onChange={(e)=>setMessage(e.target.value)}/>
</div>
<button type='submit' className='w-full bg-[#202020] rounded-full text-white text-[18px] leading-[30px]  px-4 py-3 '>Submit</button>
</form>
</div>
</section>
    )
}

export default Contact
