import React, { useEffect } from 'react'
import { useAuthContext } from '../../context/AuthContext'
import { TiMessages } from "react-icons/ti";
import useConversation from '../../hooks/useConversation';
import Messages from './Messages';


const MessageContainer = () => {

  const {selectedConversation, setSelectedConversation} = useConversation();

  useEffect(()=>{
      // cleanup function
      return ()=>setSelectedConversation(null)
  },[setSelectedConversation])

  return (
    <div className=' md:min-w-[450px] flex flex-col'>
    {!selectedConversation ? <NoChatSelected/> : (
          <>
          {/* {Header} */}
          <div className=' bg-slate-200 px-4 py-6 flex justify-between border-r border-green-500 '>
              <span className=' text-gray-900  font-semibold text-[20px] md:text-[30px] flex items-center'>
               {selectedConversation.fullName}</span>
               <img src={selectedConversation.profilePic} alt=""  className=' w-[30px] h-[30px] md:w-[60px] md:h-[60px] object-contain'/>
          </div>
          <Messages/>
          </>
    )}
     
   </div>
  )
}

export default MessageContainer

const NoChatSelected = ()=>{
  const {authUser} = useAuthContext()
  return(
      <div className=' flex items-center justify-center w-full h-full bg-pink-700'>
          <div className=' px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2'>
              <p className=' text-[23px] md:text-[32px]'>Welcome 🙌 {authUser.fullName} </p >
              <p className=' md:text-[25px]'>Select a chat to start messaging</p>
              <TiMessages className=' text-5xl md:text-[60px] text-center'/>
          </div>
      </div>
  )
}
