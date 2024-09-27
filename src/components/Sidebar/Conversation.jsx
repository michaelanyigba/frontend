import React from 'react'
import useConversation from '../../hooks/useConversation'
import { useSocketContext } from '../../context/SocketContext'

const Conversation = ({conversation, lastIdx, emoji}) => {
    const {selectedConversation, setSelectedConversation} = useConversation()
    const isSelected = selectedConversation?._id === conversation._id;
    const {onlineUsers} = useSocketContext();
    const isOnline = onlineUsers.includes(conversation._id);

    return (
        <>
            <div className={`flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-4 cursor-pointer ${isSelected ? " bg-sky-500" : ""}`}
            onClick={()=> setSelectedConversation(conversation)}>

                <div className={`avatar ${isOnline ? "online" : ""}`}>
                    <div className='w-[30px] md:w-[60px] lg:w-[60px] rounded-full'>
                        <img src={conversation.profilePic} />
                    </div>
                </div>

                <div className=' flex flex-col flex-1'>
                    <div className=' flex gap-3 justify-between'>
                        <p className=' font-bold text-gray-200 text-[15px] md:text-[27px] lg:text-[20px] font-serif'>{conversation.username}</p>
                        <span className=' text-[25px] hidden md:block'>{emoji}</span>
                    </div>
                </div>
            </div>

            {!lastIdx && <div className='divider my-0 py-0 h-1'></div>}
        </>
    )
}

export default Conversation