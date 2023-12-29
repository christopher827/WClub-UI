import axios from 'axios';
import  { useState, useEffect } from 'react';
import { server } from '../server';
import { toast } from 'react-toastify';
import {  HiDotsVertical } from 'react-icons/hi';

function History() {
  const [transactions, setTransactions] = useState([]);
    
  useEffect(()=>{
axios.get(`${server}/api/user/transactions`, { withCredentials: true })
.then((response)=>{
  setTransactions(response.data);
}).catch((err)=>{
  toast.error(err.response.data.message)
})
},[])

function handleDownload(transaction) {
  // Generate receipt content
  const receiptContent = `The W Club
Sender: ${transaction.sender}
Recipient: ${transaction.recipient}
Amount: ${transaction.amount}
Description: ${transaction.description}
Time: ${new Date(transaction.timestamp).toLocaleString()}`;

  // Create a canvas element
  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d');

  // Set canvas dimensions
  canvas.width = 300; // Adjust the width as needed
  canvas.height = 200; // Adjust the height as needed

  // Set background color to white
  context.fillStyle = '#fff';
  context.fillRect(0, 0, canvas.width, canvas.height);

  // Set font and text color
  context.font = 'bold 14px Arial';
  context.fillStyle = '#000';

  // Wrap text function to handle line breaks
  function wrapText(text, x, y, maxWidth, lineHeight) {
    const lines = text.split('\n');
    for (let i = 0; i < lines.length; i++) {
      context.fillText(lines[i], x, y + i * lineHeight);
    }
  }

  // Draw receipt content on the canvas
  wrapText(receiptContent, 10, 30, canvas.width - 20, 18);

  // Create a data URL for the canvas as a PNG image
  const dataURL = canvas.toDataURL('image/png');

  // Create a temporary anchor element
  const anchor = document.createElement('a');

  // Set the anchor's download attribute and href to the data URL
  anchor.download = 'receipt.png';
  anchor.href = dataURL;

  // Append the anchor to the document
  document.body.appendChild(anchor);

  // Trigger a click on the anchor to start the download
  anchor.click();

  // Remove the anchor from the document
  document.body.removeChild(anchor);
}
  return (
    <>
    <div className=" w-full max-w-[700px] mx-auto  md:p-10 ">
      <div className=' h-[80vh] overflow-y-scroll'>
    <h3 className="text-[#202020]  text-[22px] text-center leading-9 font-bold mb-10">Transactions</h3>

      {transactions.length > 0 ? (
          <div className="w-[80%]">
            {transactions.map((transaction, index) => (
<div key={index} className="py-8 border border-secondary rounded-2xl shadow-xl px-2 max-w-[500px] relative">
<HiDotsVertical color='#202020' size={20} className="cursor-pointer absolute right-2 top-2" onClick={() => handleDownload(transaction)}/>
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
      </div> 
         </>
  );
}
export default History;
