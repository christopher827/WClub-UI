import  { useEffect, useRef, useState } from "react";
// import { useSelector } from "react-redux";
// import socketIO from "socket.io-client";
import { server } from "../server";
// import axios from "axios";
import { useNavigate } from "react-router-dom";
// import { AiOutlineArrowRight, AiOutlineSend } from "react-icons/ai";
// import { TfiGallery } from "react-icons/tfi";
// const ENDPOINT = "https://socket-ecommerce-tu68.onrender.com/";
// const socketId = socketIO(ENDPOINT, { transports: ["websocket"] });

function InboxReceiver() {
    // const { user } = useSelector((state) => state.user);
    // const [conversations, setConversations] = useState([]);
    // const [arrivalMessage, setArrivalMessage] = useState(null);
    // const [currentChat, setCurrentChat] = useState();
    // const [messages, setMessages] = useState([]);
    // const [newMessage, setNewMessage] = useState("");
    // const [userData, setUserData] = useState(null);
    // const [onlineUsers, setOnlineUsers] = useState([]);
    // const [images, setImages] = useState();
    // const [activeStatus, setActiveStatus] = useState(false);
    const [open, setOpen] = useState(false);
    // const scrollRef = useRef(null);
  
    // useEffect(() => {
    //   socketId.on("getMessage", (data) => {
    //     setArrivalMessage({
    //       sender: data.senderId,
    //       text: data.text,
    //       createdAt: Date.now(),
    //     });
    //   });
    // }, []);
  
    // const onlineCheck = (chat) => {
    //   const chatMembers = chat.members.find((member) => member !== user?._id);
    //   const online = onlineUsers.find((user) => user.userId === chatMembers);
  
    //   return online ? true : false;
    // };
  
  
    // const handleImageUpload = async (e) => {
    //   const reader = new FileReader();
    //   reader.onload = () => {
    //     if (reader.readyState === 2) {
    //       setImages(reader.result);
          // imageSendingHandler(reader.result);
    //     }
    //   };  
    //   reader.readAsDataURL(e.target.files[0]);
    //   }
    // const sendMessageHandler=async(e)=>{
    //     e.preventDefault()
    // }
  return (
    <div className="w-full">
      {!open && (
        <>
          <h1 className="text-center text-[30px] py-3 font-Poppins">
            All Messages
          </h1>
          {/* All messages list */}
          {/* {conversations &&
            conversations.map((item, index) => (
              <MessageList
                data={item}
                key={index}
                index={index}
                setOpen={setOpen}
                setCurrentChat={setCurrentChat}
                me={user?._id}
                setUserData={setUserData}
                userData={userData}
                // online={onlineCheck(item)}
                setActiveStatus={setActiveStatus}
              />
            ))} */}
        </>
      )}

    </div>
  )
}

function MessageList({data,index,setOpen,setCurrentChat,me,setUserData,userData,online,setActiveStatus,loading}){
  const [active, setActive] = useState(0);
  const [user, setUser] = useState([]);
  const navigate = useNavigate();
  const handleClick = (id) => {
    navigate(`/inbox?${id}`);
    setOpen(true);
  };

  return(
    <div
      className={`w-full flex p-3 px-3 ${active === index ? "bg-[#00000010]" : "bg-transparent"
      }  cursor-pointer`}
      onClick={(e) =>
        setActive(index) ||
        handleClick(data._id) ||
        setCurrentChat(data) ||
        setUserData(user) ||
        setActiveStatus(online)
      }
    >
      <div className="relative">
        <img
          src={`${server}/${user.avatar}`}
          alt=""
          className="w-[50px] h-[50px] rounded-full"
        />
        {online ? (
          <div className="w-[12px] h-[12px] bg-green-400 rounded-full absolute top-[2px] right-[2px]" />
        ) : (
          <div className="w-[12px] h-[12px] bg-[#c7b9b9] rounded-full absolute top-[2px] right-[2px]" />
        )}
      </div>
      <div className="pl-3">
        <h1 className="text-[18px]">{user?.name}</h1>
        <p className="text-[16px] text-[#000c]">
          {!loading && data?.lastMessageId !== userData?._id
            ? "You:"
            : userData?.name.split(" ")[0] + ": "}{" "}
          {data?.lastMessage}
        </p>
      </div>

    </div>
  )

}

const SellerInbox=({setOpen,newMessage,setNewMessage,sendMessageHandler,
  messages,sellerId,userData,activeStatus,scrollRef,handleImageUpload,})=>{
  return(
    <div className="w-[full] min-h-full flex flex-col justify-between p-5">
      {/* message header */}
      <div className="w-full flex p-3 items-center justify-between bg-slate-200">
        <div className="flex">


</div>
</div>    
  </div>
  )
}
export default InboxReceiver