import Login from "./Login";
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { useEffect } from "react";
import { Navigate } from "react-router-dom";

const LoginPage=()=>{
    const navigate=useNavigate()
    const { isAuthenticated } = useSelector((state) => state.user);

    useEffect(() => {
      if(isAuthenticated === true){
        navigate("/profile");
      }
      // if (isAuthenticated) {
      //   return <Navigate to="/profile" replace />;
      // }
  
    }, [])

    return (
<>
<Login/>
</>
    )
}
export default LoginPage