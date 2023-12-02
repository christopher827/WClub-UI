import  { useState } from 'react'
import {AiOutlineEye,AiOutlineEyeInvisible} from "react-icons/ai";
import {server} from "../server.js"
import axios from "axios"
import { useSelector } from 'react-redux';
import { toast } from "react-toastify";
import Swal from "sweetalert2"

function Loan() {
    const [loanAmount, setLoanAmount] = useState('');
    const [description,setDescription]=useState('')
    const [visible, setVisible] = useState(false);
    const [visible2, setVisible2] = useState(false);
    const [visible3, setVisible3] = useState(false);
    const [visible4, setVisible4] = useState(false);
    const [loanAccount, setLoanAccount] = useState('');
    const [pin,setPin]=useState("");
    const { user} = useSelector((state) => state.user);

    const handleLoanSubmit = async (e) => {
      e.preventDefault();
try {
  const validateResponse = await axios.post(`${server}/api/user/validateLoan`,{loanAccount,loanAmount,pin},{withCredentials:true})
  

  if (validateResponse) {
    // Show confirmation dialog
    const confirmResult = await Swal.fire({
      title: "Are you sure?",
      text: `You want to loan ${loanAmount} in your ${loanAccount} account`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Please"
    });

    if (confirmResult.isConfirmed) {
      // If user confirms, make the actual POST request to send money
      const response = await axios.post(
        `${server}/api/user/takeLoan`,
        { loanAccount,loanAmount,pin },
        { withCredentials: true }
      );

      // Show success message if the request is successful
      Swal.fire({
        title: "Successful!",
        text: "Loan granted Successfully.",
        icon: "success"
      });
      window.location.reload(true); 
    }
  } 

} catch (error) {
  toast.error(error.response.data.message);
}
    };

      return (
        <>
        <section className='px-5 lg:px-0 '>
        <div className="w-full max-w-[570px] mx-auto rounded-lg shadow-md md:p-10 ">
        <h3 className="text-[#202020]  text-[22px] text-center leading-9 font-bold mb-10">
Take Loan??
        </h3>
        <form className="py-4 md:py-0" onSubmit={handleLoanSubmit}>

        <div className="mb-5 ">
        <input type="number" name="number" autoComplete="current-password" placeholder='Enter Loan Amount' value={loanAmount} onChange={(e)=>setLoanAmount(e.target.value)} className='w-full px-4 py-4 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor rounded-full cursor-pointer ' />
        </div>

        <div className='my-4'>
<label className='text-center'> Account</label>
<div className='my-2 w-full relative rounded-2xl shadow-xl outline-none'>
<select onChange={(e) => setLoanAccount(e.target.value)} className='w-full px-4 py-4 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor rounded-full cursor-pointer '>
<option value='Choose'>Choose</option>
<option value='EUR'>EUR</option>
<option value='Naira'>Naira</option>
<option value='GBP'>GBP</option>
</select>
</div>
</div>

        <div className="mb-5 ">
        <input type="text" name="text" autoComplete="current-password" placeholder='Description(What the loan for?)' value={description} onChange={(e)=>setDescription(e.target.value)} className='w-full px-4 py-4 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor rounded-full cursor-pointer ' />
        </div>

        <div className="mb-5 relative">
    <input type={visible ? "text" : "password"} name="password" autoComplete="current-password" placeholder='Enter Pin' value={pin} onChange={(e)=>setPin(e.target.value)} className='w-full px-4 py-4 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor rounded-full cursor-pointer ' />
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
        <button type='submit' className='w-full bg-[#202020] rounded-full text-white text-[18px] leading-[30px]  px-4 py-3'>Go</button>
        </div>
        </form>
        </div>
            </section>
            <h2 className="text-xl font-bold text-center mt-5">Outstanding Debts</h2>

            <div class="grid grid-cols-1 gap-y-20 lg:grid-cols-3 lg:gap-y-0 lg:gap-x-8 px-10 py-3">

<div class="flex flex-col bg-white rounded-2xl shadow-xl relative">
{visible2 ? (
    <AiOutlineEye className="absolute left-60 top-3 cursor-pointer"  onClick={() => setVisible2(false)}/>
):(
  <AiOutlineEyeInvisible className="absolute left-60 top-3 cursor-pointer" onClick={() => setVisible2(true)}/>
)}
<div class="flex-1  pt-9 px-6 pb-8 md:px-8">
    <h3 class="text-xl font-medium text-red-900 text-center">EUR </h3>
    <h1 class="text-2xl font-semibold text-red-900 text-center mt-2">€{visible2?user.eurLoan:"***"} </h1>

        </div>
       </div>

<div class="flex flex-col bg-white rounded-2xl shadow-xl relative">
{visible3 ? (
    <AiOutlineEye className="absolute left-60 top-3 cursor-pointer"  onClick={() => setVisible3(false)}/>
):(
  <AiOutlineEyeInvisible className="absolute left-60 top-3 cursor-pointer" onClick={() => setVisible3(true)}/>
)}
    <div class="flex-1  pt-9 px-6 pb-8 md:px-8">
        <h3 class="text-xl font-medium text-red-900 text-center">Naira </h3>
        <h1 class="text-2xl font-semibold text-red-900 text-center mt-2"> 
      N{visible3?user.loan:"***"}
          </h1>

        </div>
<div class="p-6 bg-gray-50 rounded-bl-2xl rounded-br-2xl md:px-8"></div>
</div>

<div class="flex flex-col bg-white rounded-2xl shadow-xl relative">
{visible4 ? (
    <AiOutlineEye className="absolute left-60 top-3 cursor-pointer"  onClick={() => setVisible4(false)}/>
):(
  <AiOutlineEyeInvisible className="absolute left-60 top-3 cursor-pointer" onClick={() => setVisible4(true)}/>
)}
    <div class="flex-1  pt-9 px-6 pb-8 md:px-8">
        <h3 class="text-xl font-medium text-red-900 text-center">GBP </h3>
        <h1 class="text-2xl font-semibold text-red-900 text-center mt-2">£{visible4?user.gbpLoan:"***"} </h1>

        
        </div>
<div class="p-6 bg-gray-50 rounded-bl-2xl rounded-br-2xl md:px-8"></div>
</div>

</div>

            </>
          );
    }
export default Loan
