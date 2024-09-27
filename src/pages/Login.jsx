import React, {useState} from "react";
import useLogin from "../hooks/useLogin";
import { useAuthContext } from "../context/AuthContext";

const Login = () => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const {loading, login} = useLogin()
  const handleSubmit = async (e)=> {
      e.preventDefault();
      await login(username, password)

  }

  return (
    <>
    <div className="md:py-2 md:px-2 justify-center items-center flex bg-pink-50 min-h-screen">
      <div className=" bg-gray-300 rounded-lg mt-[40px] md:mt-[100px] w-[300px] md:w-[800px]">
        <div>
        <div className="">
          <h1 className=" flex justify-center text-[30px] font-bold text-white mt-4 md:text-[60px] font-serif">
            Login Page
          </h1>
        </div>
        <form onSubmit={handleSubmit}>
        <div className="mt-4">
          <div className=" ms-3 md:ms-[50px]">
            <p className=" text-[20px] md:text-[30px]">Username</p>
            <input type="text"
            value={username}
            onChange={(e)=> setUsername(e.target.value)} className=" w-[250px] h-[35px] mt-2 rounded-sm md:w-[600px] md:h-[40px] ps-2" />
          </div>
          <div className=" ms-3 mt-3 md:ms-[50px]">
            <p className="text-[20px] md:text-[30px] md:mt-6">Password</p>
            <input type="password"
            value={password}
            onChange={(e)=> setPassword(e.target.value)} className="w-[250px] h-[35px] mt-2 rounded-sm md:w-[600px] md:h-[40px]" />
          </div>
          <button className=" bg-pink-600 py-1 rounded-sm  cursor-pointer ms-3 w-[100px] mt-3 mb-5 text-white md:text-[30px] md:ms-[50px] md:w-[200px] md:py-3 md:mt-[50px] md:mb-8 "
          disabled={loading}>{loading ? <span className=' loading loading-spinner'></span> : "Login"}</button>      
        </div>
        </form>
      </div>
      </div>
      </div>
    </>
  );
};

export default Login;
