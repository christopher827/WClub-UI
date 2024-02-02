import  { useState } from "react";
import axios from "axios"
import { toast } from "react-toastify";
import { AiOutlineEye,AiOutlineEyeInvisible } from "react-icons/ai";
import { server } from "../server";
import Swal from "sweetalert2";

function Convert() {
  const [amount,setAmount]=useState('')
  const [fromAccount,setFromAccount]=useState('')
  const [toAccount,setToAccount]=useState('')
  const [pin,setPin]=useState('')
  const [visible, setVisible] = useState(false);

  const handleSubmit=async(e)=>{
    e.preventDefault()
    try {
    const validateResponse = await axios.post(
      `${server}/api/user/validateConversion`,
      {amount,fromAccount,toAccount,pin },
      { withCredentials: true }
    );

    if (validateResponse) {
      // Show confirmation dialog
      const confirmResult = await Swal.fire({
        title: "Are you sure?",
        text: `You want to convert ${amount} ${fromAccount} to ${toAccount}`,
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Convert!"
      });

      if (confirmResult.isConfirmed) {
        // If user confirms, make the actual POST request to send money
        const response = await axios.post(
          `${server}/api/user/convertCash`,
          { amount,fromAccount,toAccount },
          { withCredentials: true }
        );

        // Show success message if the request is successful
        Swal.fire({
          title: "Successful!",
          text: "Money Converted Successfully.",
          icon: "success"
        });
        window.location.reload(true); 
      }
    } 
   } catch (error) {
      // Handle errors if the axios request fails
      toast.error(error.response.data.message);
    }

  }

  return (
    <section className='px-5 lg:px-0'>
    <div className="w-full max-w-[570px] mx-auto rounded-lg shadow-md md:p-10">
    <h3 className="text-[#202020]  text-[22px] text-center leading-9 font-bold mb-10">
Convert Cash
    </h3>
    <form className="py-4 md:py-0" onSubmit={handleSubmit}>
    <div className="mb-5 relative">
    <input type="number" name="password" autoComplete="current-password" placeholder='Enter Amount ' value={amount} onChange={(e)=>setAmount(e.target.value)} className='w-full px-4 py-4 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor rounded-full cursor-pointer ' />    
    </div>
    
    <div className='my-4'>
<label className='text-center'>From Account</label>
<div className='my-2 w-full relative rounded-2xl shadow-xl outline-none'>
<select onChange={(e) => setFromAccount(e.target.value)} className='w-full px-4 py-4 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor rounded-full cursor-pointer '>
<option value='select'>Select</option>
<option value='EUR'>EUR</option>
<option value='Naira'>Naira</option>
<option value='GBP'>GBP</option>
</select>
</div>
</div>

<div className='my-4'>
<label className='items-center'>To Account</label>
<div className='my-2 w-full relative rounded-2xl shadow-xl outline-none'>
<select onChange={(e) => setToAccount(e.target.value)} className='w-full px-4 py-4 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor rounded-full cursor-pointer '>
<option value='select'>Select</option>
<option value='EUR'>EUR</option>
<option value='Naira'>Naira</option>
<option value='GBP'>GBP</option>
</select>
</div>
</div>

    <div className="mb-5 relative">
    <input type={visible ? "text" : "password"} name="password" autoComplete="current-password" placeholder='Enter pin' value={pin} onChange={(e)=>setPin(e.target.value)} className='w-full px-4 py-4 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor rounded-full cursor-pointer ' />
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
    <button type='submit' className='w-full bg-[#202020] rounded-full text-white text-[18px] leading-[30px]  px-4 py-3'>Convert</button>
    </div>
    </form>
    </div>
        </section>

)
}
export default Convert
