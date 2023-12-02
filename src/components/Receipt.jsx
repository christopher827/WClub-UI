import {useLocation } from 'react-router-dom'

function Receipt() {
    const location = useLocation();
    const receiptURL = location.state.receiptURL;
  
    const handleDownload = () => {
      // Trigger the download by creating an invisible anchor element and simulating a click
      const link = document.createElement('a');
      link.href = receiptURL;
      link.download = 'transaction_receipt.pdf';
      link.style.display = 'none';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    };
  return (
    <div>
      <h2>Transaction Receipt</h2>
      <a href={receiptURL} target="_blank" rel="noopener noreferrer">View Receipt</a>
      <button onClick={handleDownload}>Download Receipt</button>
    </div>  )
}

export default Receipt
