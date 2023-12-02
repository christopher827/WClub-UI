import axios from 'axios';
import  { useState, useEffect } from 'react';
import {useSelector} from "react-redux"
import { server } from '../server';
import { toast } from 'react-toastify';
import {  HiDotsVertical } from 'react-icons/hi';

function History() {
  const { user} = useSelector((state) => state.user);
  const [transactions, setTransactions] = useState([]);
  const [showDownload, setShowDownload] = useState(false);

  const handleIconClick = () => {
    setShowDownload(!showDownload);
    if (showDownload) {
      console.log('Downloading...');
    }
  };  useEffect(()=>{
axios.get(`${server}/api/user/transactions`, { withCredentials: true })
.then((response)=>{
  setTransactions(response.data);
}).catch((err)=>{
  toast.error(err.response.data.message)
})
},[])

  return (
    <>
    <div className=" w-full max-w-[700px] mx-auto  md:p-10 ">
      <div className=' h-[80vh] overflow-y-scroll'>
    <h3 className="text-[#202020]  text-[22px] text-center leading-9 font-bold mb-10">Transactions</h3>

      {transactions.length > 0 ? (
          <div className="w-[80%]">
            {transactions.map((transaction, index) => (
<div key={index} className="py-8 border border-secondary rounded-2xl shadow-xl px-2 max-w-[500px] relative">
<HiDotsVertical color='#202020' size={20} className="cursor-pointer absolute right-2 top-2"         onClick={handleIconClick}/>
  <h2 className="text-center">The W Club</h2>
    <p className="text-center">Sender: {transaction.sender}</p>
    <p className="text-center">Recipient: {transaction.recipient}</p>
     <p className="text-center">Amount: {transaction.amount}</p>
      <p className="text-center">Description: {transaction.description}</p>
      <p className="text-center">Time: {new Date(transaction.timestamp).toLocaleString()}</p> 
              </div>              
            ))}
          </div>
          
        ) : (
          <p className="text-center">No transaction yet</p>
        )}
      </div>    
      </div>    </>
  );
}
export default History;