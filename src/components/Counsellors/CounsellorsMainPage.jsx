import React, { useEffect, useState } from "react";
import Navbar from "../Home/Navbar";

const CounsellorsMainPage = () => {

    const [counsellors, setCounsellors] = useState([])
    const [searchTerm, setSearchTerm ] = useState("")

    useEffect(() => {
        getCounsellors();
      }, [searchTerm]);
    
      const getCounsellors = async () => {
        try {
          await fetch(`/api/counsellors/all?search=${searchTerm}`, {
            method: "GET",
          })
            .then((res) => res.json())
            .then((data) => {
              setCounsellors(data);
            });
        } catch (error) {
          console.log("Error: ", error);
        }
      };

      

  return (
    <div>
      <Navbar />
      <div className=" bg-gray-100 py-3 px-3  flex flex-col items-center min-h-screen ">
      <div className=" flex justify-center items-center mt-6 h-9 mb-4">
        <div className=" flex me-8  items-center justify-center rounded-md ms-2 h-4 ">
          <form action="">
          <input
            type="text" 
            placeholder="Search" value={searchTerm} onChange={(e)=> setSearchTerm(e.target.value)}
            className=" p-4 w-[400px] outline-1 mb-3 mt-2 border-2 border-pink-100 outline-none" 
          />
          </form>
        </div>
      </div>
        {counsellors.map((counsellor)=>((
        <div className=" bg-white overflow-y-auto rounded-lg p-2 md:w-[500px] md:h-[200px] mb-3 md:pb-2 lg:w-[800px] lg:h-[300px] ">
          <div className=" flex flex-col">
            {/* info */}
            <div className="info mt-5  ms-6 me-1">
              <div className="flex">
                <div className=" font-semibold lg:text-[30px]">Full Name: </div>
                <div className=" ms-3 lg:text-[30px]">{counsellor.name}</div>
              </div>
              <div className="flex mt-2">
                <div className=" font-semibold lg:text-[30px]">Email: </div>
                <div className=" ms-3 lg:text-[30px]">{counsellor.email}</div>
              </div>
              <div className="flex mt-2">
                <div className=" font-semibold lg:text-[30px]">Gender: </div>
                <div className=" ms-3 lg:text-[30px]">{counsellor.gender}</div>
              </div>
              <div className="flex mt-2">
                <div className=" font-semibold lg:text-[30px]">Contact: </div>
                <div className=" ms-3 lg:text-[30px]">{counsellor.phone}</div>
              </div>
              <div className="flex mt-2  leading-5">
                <div className=" font-semibold lg:text-[30px]">Bio: </div>
                <div className=" ms-3 text-[14px] lg:text-[25px] lg:leading-7">
                  {counsellor.bio} 
                </div>
              </div>
            </div>
            {/* button */}
          </div>
        </div>
        )))}
        
      </div>
    </div>
  );
};

export default CounsellorsMainPage;
