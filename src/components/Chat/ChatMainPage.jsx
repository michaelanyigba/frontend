import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import MessageContainer from '../Messages/MessageContainer'

const ChatMainPage = () => {
  return (
    <div className=' min-h-screen py-5 w-full bg-gray-100 flex justify-center items-center'>
    <div className=' h-[900px] flex rounded-lg overflow-hidden bg-red-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
        <Sidebar/>
        <MessageContainer/>
    </div>
    </div>
  )
}

export default ChatMainPage
