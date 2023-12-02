import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { useEffect } from "react";
import SignUp from "./SignUp"

function SignUpPage() {
    const navigate=useNavigate()
    const { isAuthenticated } = useSelector((state) => state.user);

    useEffect(() => {
      if(isAuthenticated === true){
        navigate("/profile");
      }
    }, [])

  return (
<>
<SignUp/>
</>
    )
}
export default SignUpPage