import {  useSelector } from "react-redux";
import { lazy, Suspense } from 'react';
import { useEffect } from "react";
import { toast } from "react-toastify";
const LazyUserDetails= lazy(() => import('../UserDetails'));
const LazyAccInfo = lazy(()=>import(("../AccInfo")))
const LazySendMoney=lazy(()=>import("../SendMoney"))
const LazyInboxReceiver=lazy(()=>import("../../Pages/InboxReceiver"))
const LazyHistory =lazy(()=>import("../History"))
const LazyChangePin =lazy(()=>import("../ChangePin"))
const LazyChangePassword =lazy(()=>import("../ChangePassword"))
const LazyLoan =lazy(()=>import("../Loan"))
const LazySaveFund =lazy(()=>import("../SaveFunds"))
const LazyConvert =lazy(()=>import("../Convert"))


function ProfileContent({ active }) {
    const { error} = useSelector((state) => state.user);

    useEffect(()=>{
      if (error) {
        toast.error(error)
      }
    },[error])

  return (
    <div className="w-full">
      {active === 1 && (
        <>
<Suspense fallback={<div>Loading...</div>}>
<LazyUserDetails/>
</Suspense>

        </>
      )}
{
  active===2 &&(
    <Suspense fallback={<div>Loading...</div>}>
    <LazyAccInfo/>
    </Suspense>
)}

{
  active===3 &&(
    <Suspense fallback={<div>Loading...</div>}>
    <LazySendMoney/>
    </Suspense>
  )}

{
  active ===4 &&(
    <Suspense fallback={<div>Loading...</div>}>
    <LazyInboxReceiver/>
    </Suspense>
  )
}
{
  active ===5 &&(
    <Suspense fallback={<div>Loading...</div>}>
    <LazyHistory/>
    </Suspense>
  )
}

{active===6 &&(
      <Suspense fallback={<div>Loading...</div>}>
  <LazyChangePin/>
  </Suspense>
)}

  {active===7 &&(
      <Suspense fallback={<div>Loading...</div>}>
<LazyChangePassword/>
</Suspense>
)}

{active===8 &&(
        <Suspense fallback={<div>Loading...</div>}>
  <LazyLoan/>
  </Suspense>
)}
{active===9 &&(
        <Suspense fallback={<div>Loading...</div>}>
  <LazyConvert/>
  </Suspense>
)}

{active===11 &&(
        <Suspense fallback={<div>Loading...</div>}>
  <LazySaveFund/>
  </Suspense>
)}

    </div>
  )
}
export default ProfileContent;