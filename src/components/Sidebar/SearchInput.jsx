import React, { useState } from 'react'
import { CiSearch } from "react-icons/ci";
import useConversation from '../../hooks/useConversation'
import useGetConversation from '../../hooks/useGetConversations'
import toast from 'react-hot-toast';

const SearchInput = () => {
    const [search, setSearch] = useState("");
    const {setSelectedConversation} = useConversation();
    const {conversations} = useGetConversation();

    const handleSubmit = (e)=> {
        e.preventDefault();
        if(!search) return;
        if(search.length < 3){
          return  toast.error("Search term must be at least 3 characters long")
        }

        const conversation = conversations.find((e)=>e.fullName.toLowerCase().includes(search.toLowerCase()));

        if(conversation){
            setSelectedConversation(conversation);
            setSearch("");
        }else toast.error("No such user found");
    }
    
  return (
   <form onSubmit={handleSubmit} action="" className=' flex items-center gap-2 justify-between'>
    <input
    value={search}
    onChange={(e)=> setSearch(e.target.value)}
     type="text" placeholder='' className=' input input-bordered rounded-sm w-[100px] md:w-[250px] lg:w-[430px] lg:mt-5 md:py-4 md:pt-1 md:ps-2'/>
    <button
     type='submit' className=''><CiSearch className='w-[25px] h-[45px] md:h-[50px] md:w-[50px] md:mt-2 font-bold text-white' /></button>
   </form>
  )
}

export default SearchInput