import card from "../assets/card.png"
import {  useSelector } from "react-redux";
import {
  AiOutlineEye,AiOutlineEyeInvisible
} from "react-icons/ai";
import { useState } from "react";


function AccInfo() {
  const { user} = useSelector((state) => state.user);
  const [visible, setVisible] = useState(false);
  const [visible2, setVisible2] = useState(false);
  const [visible3, setVisible3] = useState(false);

  // const accountBalance = user?.accountBalance?.$numberDecimal;
  // const isValidAccountBalance = typeof accountBalance === 'string' && !isNaN(parseFloat(accountBalance)); 
 return (
    <div>
    <div className="flex items-center px-20 ">  
    <div className="flex-1 p-4">
        <div className="text-lg font-semibold ">Hello, {user?.firstName}</div>
        <br/>
        <div className="text-xl font-bold">Wallet ID</div>
        <div className="text-3xl font-bold text-red-900 ">{user?.accountNumber}</div>
      </div>

      <div className="flex-1 relative">
  <img src={card} alt="User's Card" className="max-w-[400px] h-[300px] object-contain" />
  <h1 className="absolute top-9 left-20 right-1 p-2  text-white">W Club Inc</h1>
  <h2 className="absolute bottom-10 left-5  p-2  text-white">{user?.firstName} {user?.lastName}</h2>

</div>  
      </div>

<h2 className="text-xl font-bold text-center mt-5">Balances</h2>
<div class="grid grid-cols-1 gap-y-20 lg:grid-cols-3 lg:gap-y-0 lg:gap-x-8 px-10 py-3">

<div class="flex flex-col bg-white rounded-2xl shadow-xl relative">
{visible ? (
    <AiOutlineEye className="absolute left-60 top-3 cursor-pointer"  onClick={() => setVisible(false)}/>
):(
  <AiOutlineEyeInvisible className="absolute left-60 top-3 cursor-pointer" onClick={() => setVisible(true)}/>
)}
<div class="flex-1  pt-9 px-6 pb-8 md:px-8">
    <h3 class="text-xl font-medium text-red-900 text-center">EUR </h3>
    <h1 class="text-2xl font-semibold text-red-900 text-center mt-2">€{visible?user.eurAccount :"***"} </h1>

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
      N{visible2?user.accountBalance:"***"}
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
        <h1 class="text-2xl font-semibold  text-red-900 text-center mt-2">£{visible3?user.gbpAccount:"***"} </h1>

        
        </div>
<div class="p-6 bg-gray-50 rounded-bl-2xl rounded-br-2xl md:px-8"></div>
</div>

</div>

</div>
  )
}
export default AccInfo;