import React from "react";
import "../index.css";
import { MdOutlineMenu } from "react-icons/md";
import { IoPersonCircleOutline } from "react-icons/io5";
function Home() {
  return (
    <div className="w-full h-screen bg-slate-600">
      <Toolbar />
    </div>
  );
}

export function Toolbar() {
  return (
    <div className="w-full bg-indigo-500 h-[70px] text-3xl shadow-3xl  drop-shadow-md flex  justify-between items-center px-10">
      <div className="flex gap-4 items-center justify-center">
        <MdOutlineMenu />
        <p className="text-white text-lg">Netflix</p>
      </div>
      <IoPersonCircleOutline />
    </div>
  );
}

export default Home;
