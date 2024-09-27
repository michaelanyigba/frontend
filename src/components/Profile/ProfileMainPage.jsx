import React from "react";
import { FaImage } from "react-icons/fa";
import Profile1 from "../../assets/profile1.jpg";
import Profile2 from "../../assets/profile2.jpg";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";
import useLogout from "../../hooks/useLogout";

const ProfileMainPage = () => {
  const { authUser } = useAuthContext();
  const { logout } = useLogout();
  return (
    <div className=" bg-gray-200 py-3 px-3 flex justify-center items-centerb min-h-screen ">
      <div className=" bg-white rounded-lg p-2 md:w-[500px] h-[500px] my-auto overflow-y-auto ">
        <div className=" flex flex-col">
          <div className="image ">
            <img
              src={authUser.profilePic}
              className=" h-[200px] w-full object-contain"
              alt=""
            />
          </div>
          {/* info */}
          <div className="info mt-5  ms-6 me-1">
            <div className="flex">
              <div className=" font-semibold">Full Name: </div>
              <div className=" ms-3">{authUser.fullName}</div>
            </div>
            <div className="flex mt-2">
              <div className=" font-semibold">Username: </div>
              <div className=" ms-3">{authUser.username}</div>
            </div>
            <div className="flex mt-2">
              <div className=" font-semibold">Email: </div>
              <div className=" ms-3">{authUser.email}</div>
            </div>
            <div className="flex mt-2">
              <div className=" font-semibold">Gender: </div>
              <div className=" ms-3">{authUser.gender}</div>
            </div>
            <div className="flex mt-2">
              <div className=" font-semibold">DOB: </div>
              <div className=" ms-3">{authUser.dob}</div>
            </div>
            <div className="flex mt-2  leading-5">
              <div className=" font-semibold">BIO: </div>
              <div className=" ms-3 text-[14px]">{authUser.bio}</div>
            </div>
          </div>
          {/* button */}
          <Link to={"/"}>
            <div className=" flex justify-center flex-col md:flex-row mx-auto">
              <button className=" bg-pink-600 rounded-lg text-white mt-6 font-bold py-1 w-[200px] text-[15px] mx-auto">
                Go back
              </button>
            </div>
          </Link>
          <button
            className=" bg-red-600 rounded-lg text-white mt-6 font-bold py-1 w-[200px] text-[15px] mx-auto"
            onClick={logout}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileMainPage;
