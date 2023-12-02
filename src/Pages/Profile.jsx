import { useState } from "react";
import Navigation from "../components/Navigation.js"
import ProfileContent from "../components/profile/ProfileContent.jsx"
import ProfileSideBar from "../components/profile/ProfileSideBar.jsx"

function Profile() {
    const [active, setActive] = useState(1);
  return (
    <>
      <Navigation/>
<div className="w-11/12 mx-auto flex bg-[#f5f5f5] py-10">
            <div className="w-[355px] ">
              <ProfileSideBar active={active} setActive={setActive}  />
            </div>
            <ProfileContent active={active} />
          </div>
    </>
  )}
export default Profile