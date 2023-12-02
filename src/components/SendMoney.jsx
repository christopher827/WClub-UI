import  { useState } from 'react';
import axios from "axios"
import { toast } from "react-toastify";
import {server} from "../server"
import Swal from "sweetalert2"

function SendMoney() {
  const [accountNumber, setAccountNumber] = useState('');
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');
  const [fromAccount, setFromAccount] = useState('');
  const [toAccount, setToAccount] = useState('');
  const [accountName, setAccountName] = useState('');
  const [pin, setPin] = useState('');

  const handleTransfer = async (e) => {
    e.preventDefault();
  
    try {
      // Validate user-entered information on the server first
      const validateResponse = await axios.post(
        `${server}/api/user/validateTransfer`,
        { accountNumber, amount, description, fromAccount, toAccount, pin },
        { withCredentials: true }
      );
  
      // Check if the validation was successful
      if (validateResponse) {
        // Show confirmation dialog
        const confirmResult = await Swal.fire({
          title: "Are you sure?",
          text: `You want to send ${amount} to ${accountName}`,
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, Send!"
        });
  
        if (confirmResult.isConfirmed) {
          // If user confirms, make the actual POST request to send money
          const response = await axios.post(
            `${server}/api/user/sendMoney`,
            { accountNumber, amount, description, fromAccount, toAccount, pin },
            { withCredentials: true }
          );
  
          // Show success message if the request is successful
          Swal.fire({
            title: "Successful!",
            text: "Money Sent Successfully.",
            icon: "success"
          });
          window.location.reload(true); 
        }
      } 
    } catch (error) {
      // Handle errors if the axios request fails
      toast.error(error.response.data.message);
    }
  };

  const handleAccountNumberChange = async (e) => {
    const newAccountNumber = e.target.value;
    setAccountNumber(newAccountNumber);

    try {
      const response = await fetch(`${server}/api/user/getAccountName?accountNumber=${newAccountNumber}`);
      const data = await response.json();

      if (response.ok) {
        setAccountName(data.accountName);
      } else {
        // Handle error response
        console.error('Error fetching account name:', data.message);
        setAccountName('');
      }
    } catch (error) {
      console.error('Error fetching account name:', error.message);
      setAccountName('');
    }
  };
  return (
    <div className="container mx-auto py-8">
      <div className="max-w-md mx-auto bg-white shadow p-6 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Money Transfer</h2>
        <form onSubmit={handleTransfer}>
          <div className="mb-4">
            <label htmlFor="toAccount" className="block text-gray-600">Recipient's Wallet ID</label>
            <input
              type="text"
              id="toAccount"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500"
              value={accountNumber}
              // onChange={(e) => setAccountNumber(e.target.value)}
              onChange={handleAccountNumberChange}
            />
          </div>

          {accountNumber && (
          <div className="mb-4">
            <label htmlFor="accountName" className="block text-gray-600">
              Recipient's Name
            </label>
            <input
              type="text"
              id="accountName"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500"
              value={accountName}
              readOnly
            />
          </div>
        )}
        
          <div className="mb-4">
            <label htmlFor="amount" className="block text-gray-600">Amount You'd like to Send</label>
            <input
              type="number"
              id="amount"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="description" className="block text-gray-600">What's the money for?</label>
            <input
              type="text"
              id="description"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className='my-4'>
<label className='text-center'>From Account</label>
<div className='my-2 w-full relative rounded-2xl shadow-xl outline-none'>
<select onChange={(e) => setFromAccount(e.target.value)} className='w-full px-4 py-4 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor rounded-full cursor-pointer '>
<option value='choose'>Choose</option>
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
<option value='choose'>Choose</option>
<option value='EUR'>EUR</option>
<option value='Naira'>Naira</option>
<option value='GBP'>GBP</option>
</select>
</div>
</div>

          <div className="mb-4">
            <label htmlFor="pin" className="block text-gray-600">PIN</label>
            <input
              type="password"
              id="pin"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500"
              value={pin}
              onChange={(e) => setPin(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition duration-300"
          >
            Transfer Money
          </button>
        </form>
      </div>
    </div>  );
}
export default SendMoney;