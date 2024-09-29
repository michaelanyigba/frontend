import React, { useEffect, useState } from "react";
import { CgProfile } from "react-icons/cg";
import post1 from "../assets/post-img.png";
import post2 from "../assets/post-img1.jpg";
import { extractDate, extractTime } from "../utils/extractTime";

const HomeMainPage = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [products, setAllProducts] = useState([]);
  const [admin, setAdmin] = useState();
  const { loading, setLoading } = useState(false);
  const [date, setDate] = useState("")
  const [time, setTime] = useState();
  const [searchTerm, setSearchTerm] = useState("")

  useEffect(()=> {
    products.map((product)=> {
      setDate(product.createdAt)
      setTime()
    })
    
  },[searchTerm])  

  useEffect(() => {    
    getImage();
  }, [searchTerm]);

  const getImage = async () => {
    try {
      await fetch(`https://liv-backend-2.onrender.com/api/post/get-post?search=${searchTerm}`, {
        method: "GET",
      })
        .then((res) => res.json())
        .then((data) => {
          setAllProducts(data.data);
        });
    } catch (error) {
      console.log("Error: ", error);
    }
  }; 

  //   fetching admin

  useEffect(() => {
    getAdmin();
  }, []);

  const getAdmin = async () => {
    try {
      await fetch("/api/users/admin", {
        method: "GET",
      })
        .then((res) => res.json())
        .then((data) => {
          setAdmin(data);
        });
    } catch (error) {
      console.log("Error: ", error);
    }
  };


  return (
    <>
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
      {products.map((product) => (
        <div key={product._id} className=" rounded-sm bg-white mt-1 ms-1 me-1 mb-2 pb-1 md:w-[750px] md:mx-auto shadow-2xl">
          <div>
            {admin.map((a) => (
              <div key={a._id} className=" flex py-1 ps-2">
                <div className="image">
                  <img
                    src={a.profilePic}
                    className=" w-[30px] h-[30px] lg:w-[50px] lg:h-[50px]"
                    alt="admin image"
                  />{" "}
                </div>

                <div className=" flex flex-col">
                  <p className=" font-bold ms-2 text-[17px] mb-0">
                    {a.username}
                  </p>
                  <div className=" flex flex-col">
                  <p className=" text-[12px] ms-2"><span className=" font-bold">Time: </span> {extractTime(product.createdAt)}</p>
                  <p className="text-[12px] ms-2"><span className=" font-bold">Date: </span> {extractDate(product.createdAt)}</p>
                  </div>
                </div>
              </div>
            ))}

            <div>
              <p className=" ms-2 text-[15px] mb-1 font-semibold">
                {product.title}
              </p>
              <img
                src={product.image}
                alt=""
                className=" h-[250px] w-full flex"
              />
              <div className=" overflow-y-auto h-[40px]">
              <p
                className={`ms-2 text-[12px] mb-4 leading-4 mt-2 md:leading-6"
                }`}
              >
                {product.desc} 
              </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default HomeMainPage;
