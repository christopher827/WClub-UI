import axios from "axios";
import {server} from "../../server"

//Getting All the users data(information) from the database through the API's
// load user
export const loadUser = () => async (dispatch) => {
    try {
      dispatch({
        type: "LoadUserRequest",
      });
      const { data } = await axios.get(`${server}/api/user/getuser`, {
        withCredentials: true,
      });
      dispatch({
        type: "LoadUserSuccess",
        payload: data.user,
      });
    } catch (error) {
      dispatch({
        type: "LoadUserFail",
        payload: error.response.data.message,
      });
    }
  };
  
//   export const updateUserInformation =  (pin,newPin,confirmNewPin) => async (dispatch) => {
//     try {
//       dispatch({
//         type: "updateUserInfoRequest",
//       });

//       const { data } = await axios.put(
//         `${server}/api/user/change-pin`,
//         {
// pin,newPin,confirmNewPin
//         },
//         {
//           withCredentials: true,
//           headers: {
//             "Access-Control-Allow-Credentials": true,
//           },
//         }
//       );

//       dispatch({
//         type: "updateUserInfoSuccess",
//         payload: data.user,
//       });
//     } catch (error) {
//       dispatch({
//         type: "updateUserInfoFailed",
//         payload: error.response.data.message,
//       });
//     }
//   };