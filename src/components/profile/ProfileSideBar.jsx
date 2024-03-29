import { AiOutlineLogin, AiOutlineMessage, AiFillMoneyCollect,AiFillSave} from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";
import { HiOutlineReceiptRefund, HiOutlineShoppingBag } from "react-icons/hi";
import {MdCurrencyExchange,MdOutlinePassword, MdOutlineTrackChanges} from "react-icons/md";
import { RxPerson } from "react-icons/rx";
import {  useNavigate } from "react-router-dom";
import axios from "axios";
import {server} from "../../server"
import { toast } from "react-toastify";


function ProfileSideBar({ setActive, active }) {
    const navigate = useNavigate();
    const logoutHandler=()=>{
axios.get(`${server}/api/user/logout`,{withCredentials:true})
.then((res)=>{
  toast.success(res.data.message);
  navigate("/");
  window.location.reload(true);

})
.catch((error)=>{
  toast.error(error.response.data.message);
})
    }
  return (
    <div className="w-full bg-white shadow-sm rounded-[10px] p-4 pt-8">
      <div className="flex items-center cursor-pointer w-full mb-8"  onClick={() => setActive(1)} >
        <RxPerson size={20} color={active === 1 ? "red" : ""} />
        <span className={`pl-3 ${ active === 1 ? "text-[red]" : "" } `}> Profile</span>
      </div>

      <div className="flex items-center cursor-pointer w-full mb-8"  onClick={() => setActive(2)} >
        <HiOutlineShoppingBag size={20} color={active === 2 ? "red" : ""} />
        <span className={`pl-3 ${ active === 2? "text-[red]" : "" }`}> Acc Info</span>
      </div>

      <div className="flex items-center cursor-pointer w-full mb-8"  onClick={() => setActive(3)} >
        <HiOutlineReceiptRefund size={20} color={active === 3 ? "red" : ""} />
        <span className={`pl-3 ${ active === 3 ? "text-[red]" : "" } `}> Send Money</span>
      </div>

      <div className="flex items-center cursor-pointer w-full mb-8"  onClick={() => setActive(4) } >
        <AiOutlineMessage size={20} color={active === 4 ? "red" : ""} />
        <span className={`pl-3 ${ active === 4 ? "text-[red]" : "" } `}> Inbox</span>
      </div>

      <div className="flex items-center cursor-pointer w-full mb-8"  onClick={() => setActive(5)} >
        <MdOutlineTrackChanges size={20} color={active === 5 ? "red" : ""} />
        <span className={`pl-3 ${ active === 5 ? "text-[red]" : "" } `}> History</span>
      </div>

      <div className="flex items-center cursor-pointer w-full mb-8"  onClick={() => setActive(6)} >
        <RiLockPasswordLine size={20} color={active === 6 ? "red" : ""} />
        <span className={`pl-3 ${ active === 6 ? "text-[red]" : "" } `}>   Change Pin</span>
      </div>


      <div className="flex items-center cursor-pointer w-full mb-8"  onClick={() => setActive(7)} >
        <MdOutlinePassword size={20} color={active === 7 ? "red" : ""} />
        <span className={`pl-3 ${ active === 7 ? "text-[red]" : "" } `}> Change Password</span>
      </div>

      <div className="flex items-center cursor-pointer w-full mb-8"  onClick={() => setActive(8)} >
        <AiFillMoneyCollect size={20} color={active === 8 ? "red" : ""} />
        <span className={`pl-3 ${ active === 8 ? "text-[red]" : "" } `}> Loan</span>
      </div>

      <div className="flex items-center cursor-pointer w-full mb-8"  onClick={() => setActive(11)} >
        <AiFillSave size={20} color={active === 11 ? "red" : ""} />
        <span className={`pl-3 ${ active === 11 ? "text-[red]" : "" } `}> Save Funds</span>
      </div>


      <div className="flex items-center cursor-pointer w-full mb-8"  onClick={() => setActive(9)} >
        <MdCurrencyExchange size={20} color={active === 9 ? "red" : ""} />
        <span className={`pl-3 ${ active === 9 ? "text-[red]" : "" } `}> Convert</span>
      </div>


      <div className="flex items-center cursor-pointer w-full mb-8"   onClick={logoutHandler}>
        <AiOutlineLogin size={20} color={active === 10 ? "red" : ""} />
        <span className={`pl-3 ${ active === 10 ? "text-[red]" : "" } `}> Log Out</span>
      </div>

    </div>
  )
}
export default ProfileSideBar