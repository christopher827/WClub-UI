import  { useState } from 'react'
import {server} from "../server.js"
import axios from "axios"
import { toast } from "react-toastify";
import {  useSelector } from "react-redux";
import { RxCross1 } from "react-icons/rx";
import {AiOutlineEye,AiOutlineEyeInvisible} from "react-icons/ai";
import Swal from "sweetalert2"
  
function SaveFunds() {
    const [saveAmount,setSaveAmount]=useState()
    const [fromAccount,setFromAccount]=useState()
    const [dateOfWithDrawal,setDateOfWithDrawal]=useState()
    const [pin,setPin]=useState();
    const [withDrawPin,setWithDrawPin]=useState();
    const [withDrawAccount,setWithDrawAccount]=useState()
    const [open, setOpen] = useState(false);
    const [visible, setVisible] = useState(false);
    const [visible2, setVisible2] = useState(false);
    const [visible3, setVisible3] = useState(false);  
    const { user} = useSelector((state) => state.user);

    const saveFundd =async (e) => {
        e.preventDefault();
        try {
  const validateResponse=await axios.post(`${server}/api/user/validateSaveFund`,{saveAmount,fromAccount,dateOfWithDrawal,pin},{withCredentials:true})        

  if (validateResponse) {
  const confirmResult = await Swal.fire({
    title: "Are you sure?",
    text: `You want to save ${saveAmount} from your ${fromAccount} account`,
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, Save!"
  });

  if (confirmResult.isConfirmed) {
    // If user confirms, make the actual POST request to send money
    const response = await axios.post(
      `${server}/api/user/saveFund`,
      { saveAmount,fromAccount},
      { withCredentials: true }
    );

    // Show success message if the request is successful
    Swal.fire({
      title: "Successful!",
      text: "Money Saved Successfully.",
      icon: "success"
    });
    window.location.reload(true); 
  }

}    
} catch (error) {
  toast.error(error.response.data.message);
     } };
    //   await axios.post(`${server}/api/user/saveFund`,{saveAmount,fromAccount,dateOfWithDrawal,pin},{withCredentials:true})
    const withDrawFund =async (e) => {
        e.preventDefault();
        await axios.post(`${server}/api/user/withdrawCash`,{withDrawAccount,withDrawPin},{withCredentials:true})
        .then((res)=>{
            toast.success(res.data.message)
            window.location.reload() 
          }).catch((error)=>{
          toast.error(error.response.data.message)
          })
    
      };

  return (
    <>
          { open && (
        <div className="fixed w-full h-screen bg-[#0000004b] top-0 left-0 flex items-center justify-center ">
          <div className="w-[35%] h-[60vh] bg-white rounded shadow relative overflow-y-scroll">
            <div className="w-full flex justify-end p-3">
              <RxCross1
                size={30}
                className="cursor-pointer"
                onClick={() => setOpen(false)}
              />
            </div>
            <h1 className="text-center text-[25px] font-Poppins">
              Withdraw Cash
            </h1>
            <form className="py-4 md:py-0" onSubmit={withDrawFund}>

            <div className='my-4'>
<label className='text-center'> Account</label>
<div className='my-2 w-full relative rounded-2xl shadow-xl outline-none'>
<select onChange={(e) => setWithDrawAccount(e.target.value)} className='w-full px-4 py-4 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor rounded-full cursor-pointer '>
<option value='Choose'>Choose</option>
<option value='EUR'>EUR</option>
<option value='Naira'>Naira</option>
<option value='GBP'>GBP</option>
</select>
</div>
</div>

<div className="mb-5 mt-10 ">
<input type= "password" name="password" autoComplete="current-password" placeholder='Enter Pin' value={withDrawPin} onChange={(e)=>setWithDrawPin(e.target.value)} className='w-full px-4 py-4 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor rounded-full cursor-pointer ' />
{/* {visible ? ( <AiOutlineEye className="absolute right-2 top-5 cursor-pointer" size={25} onClick={() => setVisible(false)}/>
            ) : ( <AiOutlineEyeInvisible  className="absolute right-2 top-5 cursor-pointer"  size={25}  onClick={() => setVisible(true)}/>)} */}
</div>

<div className='mt-7'>
<button type='submit' className='w-full bg-[#202020] rounded-full text-white text-[18px] leading-[30px]  px-4 py-3'>Withdraw</button>
</div>
</form>
<h1 className='px-14 py-1 text-[15px]'>You can only withdraw cash when date is due</h1>
            </div>
            </div>
            
            )}

    <div className='flex justify-end' onClick={() => setOpen(true)}>
    <button type='submit' className='w-[20%] bg-[#202020] rounded-full text-white text-[18px] leading-[30px]  px-4 py-3 '>Withdraw</button>
    </div>

    <section className='px-5 lg:px-0 '>
    <div className="w-full max-w-[570px] mx-auto rounded-lg shadow-md md:p-10 ">
    <h3 className="text-[#202020]  text-[22px] text-center leading-9 font-bold mb-10">Save Cash </h3>
    <form className="py-4 md:py-0" onSubmit={saveFundd}>

    <div className="mb-5 ">
    <input type="number" name="number" autoComplete="current-password" placeholder='Enter Amount' value={saveAmount} onChange={(e)=>setSaveAmount(e.target.value)} className='w-full px-4 py-4 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor rounded-full cursor-pointer ' />
    </div>
    
    <div className='my-4'>
<label className='text-center'>From Account</label>
<div className='my-2 w-full  rounded-2xl shadow-xl outline-none'>
<select onChange={(e) => setFromAccount(e.target.value)} className='w-full px-4 py-4 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor rounded-full cursor-pointer '>
<option value='Choose'>Choose</option>
<option value='EUR'>EUR</option>
<option value='Naira'>Naira</option>
<option value='GBP'>GBP</option>
</select>
</div>
</div> 

    <div className="mb-5 ">
    <input type="date"  value={dateOfWithDrawal} placeholder='Enter Amount' onChange={(e)=>setDateOfWithDrawal(e.target.value)} className='w-full px-4 py-4 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor rounded-full cursor-pointer ' />
    </div>

    <div className="mb-5 ">
<input type= "password" name="password" autoComplete="current-password" placeholder='Enter Current pin' value={pin} onChange={(e)=>setPin(e.target.value)} className='w-full px-4 py-4 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor rounded-full cursor-pointer ' />
{/* {visible ? ( <AiOutlineEye className="absolute right-2 top-5 cursor-pointer" size={25} onClick={() => setVisible(false)}/>
                ) : ( <AiOutlineEyeInvisible  className="absolute right-2 top-5 cursor-pointer"  size={25}  onClick={() => setVisible(true)}/>)} */}
</div>

    <div className='mt-7'>
    <button type='submit' className='w-full bg-[#202020] rounded-full text-white text-[18px] leading-[30px]  px-4 py-3'>Save</button>
    </div>
    </form>

    </div>
        </section>
        <h2 className="text-xl font-bold text-center mt-5">Saved Cash</h2>
        <div class="grid grid-cols-1 gap-y-20 lg:grid-cols-3 lg:gap-y-0 lg:gap-x-8 px-10 py-3">

<div class="flex flex-col bg-white rounded-2xl shadow-xl relative">
{visible ? (
    <AiOutlineEye className="absolute left-60 top-3 cursor-pointer"  onClick={() => setVisible(false)}/>
):(
  <AiOutlineEyeInvisible className="absolute left-60 top-3 cursor-pointer" onClick={() => setVisible(true)}/>
)}
<div class="flex-1  pt-9 px-6 pb-8 md:px-8">
    <h3 class="text-xl font-medium text-red-900 text-center">EUR </h3>
    <h1 class="text-2xl font-semibold text-red-900 text-center mt-2">€{visible?user.savedEur:"***"} </h1>
        </div>
       </div>

       <div class="flex flex-col bg-white rounded-2xl shadow-xl relative">
{visible2 ? (
    <AiOutlineEye className="absolute left-60 top-3 cursor-pointer"  onClick={() => setVisible2(false)}/>
):(
  <AiOutlineEyeInvisible className="absolute left-60 top-3 cursor-pointer" onClick={() => setVisible2(true)}/>
)}
    <div class="flex-1  pt-9 px-6 pb-8 md:px-8">
        <h3 class="text-xl font-medium text-red-900 text-center">Naira </h3>
        <h1 class="text-2xl font-semibold text-red-900 text-center mt-2"> 
      N{visible2?user.savedCash:"***"}
          </h1>
        </div>
<div class="p-6 bg-gray-50 rounded-bl-2xl rounded-br-2xl md:px-8"></div>
</div>

<div class="flex flex-col bg-white rounded-2xl shadow-xl relative">
{visible3 ? (
    <AiOutlineEye className="absolute left-60 top-3 cursor-pointer"  onClick={() => setVisible3(false)}/>
):(
  <AiOutlineEyeInvisible className="absolute left-60 top-3 cursor-pointer" onClick={() => setVisible3(true)}/>
)}
    <div class="flex-1  pt-9 px-6 pb-8 md:px-8">
        <h3 class="text-xl font-medium text-red-900 text-center">GBP </h3>
        <h1 class="text-2xl font-semibold text-red-900 text-center mt-2">£{visible3?user.savedGBP:"***"} </h1>

        
        </div>
<div class="p-6 bg-gray-50 rounded-bl-2xl rounded-br-2xl md:px-8"></div>
</div>

</div>
        </>
)
}
export default SaveFunds