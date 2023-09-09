import { Dropdown } from "flowbite-react";
/* import React from "react";
import axios from "axios"; */
export default function Perfil() {
  /* const [post, setPost] = React.useState(null); */

  /*   React.useEffect(() => {
    axios.get(baseURL)
    .then((response) => {
      setPost(response.data);
    });
  }, []); */
  /* 
  if (!post) return null; */
  return (
    <div>
      <main className="flex flex-col items-center justify-center">
        <nav className="flex items-center justify-center">
          <div className="flex flex-row justify-between items-center w-screen h-16 px-7">
            <img src="./icons/devchallenges-light.svg" alt="devchallenges" />

            <Dropdown inline label="Admin">
              <div className=" m-4">
                <a href="/perfil">My Profile</a>
              </div>
              <div className=" m-4">
                <a href="/login">Logout</a>
              </div>
              <div className=" m-4">
                <a href="/dashboard">Dashboard</a>
              </div>
            </Dropdown>
          </div>
        </nav>
        <div>
          <div className="flex flex-col justify-center items-center mt-4">
            <h1 className="font-normal text-2xl">Personal info</h1>
            <p className="text-sm font-light">
              Basic info, like your name and photo
            </p>
          </div>
          <div className="w-screen md:w-[845px] md:border md:border-[#D3D3D3] rounded-xl">
            <div className="flex flex-row justify-between items-center mt-6 px-5">
              <div className="w-[180px]">
                <h2 className="text-2xl font-normal">Profile</h2>
                <p className="text-[13px] text-[#828282]">
                  Some info may be visible to other people
                </p>
              </div>
              <div>
                <a href="change.php">
                  <button className="border border-[#828282] w-[95px] h-[35px] rounded-xl">
                    Edit
                  </button>
                </a>
              </div>
            </div>
            <div className="flex flex-row items-center justify-between md:justify-start px-7 py-4 border-b border-[#E0E0E0]">
              <p className="text-[#BDBDBD] md:w-[240px]">PHOTO</p>
              <div>
                <img src="" alt="foto" />
              </div>
            </div>
            <div className="flex flex-row items-center justify-between px-7 py-7 border-b border-[#E0E0E0] md:justify-start">
              <p className="text-[#BDBDBD] md:w-[240px]">NAME</p>
              <p>Diego</p>
            </div>
            <div className="flex flex-row items-center justify-between px-7 py-7 border-b border-[#E0E0E0] md:justify-start">
              <p className="text-[#BDBDBD] md:w-[240px]">BIO</p>
              <p>biografia</p>
            </div>
            <div className="flex flex-row items-center justify-between px-7 py-7 border-b border-[#E0E0E0] md:justify-start">
              <p className="text-[#BDBDBD] md:w-[240px]">EMAIL</p>
              <p>email</p>
            </div>
            <div className="flex flex-row items-center justify-between px-7 py-7 border-b border-[#E0E0E0] md:justify-start">
              <p className="text-[#BDBDBD] md:w-[240px]">PASSWORD</p>
              <p>*********</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
