import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom'
import { BsArrowRightSquareFill } from 'react-icons/bs'
import SidebarItems from "./SidebarItems";
import { useSelector, useDispatch } from 'react-redux';

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false)
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logOutHandler = () => {
    dispatch(logout()).unwrap().then(() => navigate('/', { replace: true }));
  }
  return (
    <div className={`${isOpen ? 'left-0' : 'left-[-250px]'} fixed  top-0 h-screen w-[250px] px-2 py-3 bg-gray-800 z-[999] flex flex-col items-center justify-between`}>

      <BsArrowRightSquareFill onClick={() => setIsOpen((pre) => !pre)} className="text-5xl text-purple  absolute bottom-0 rounded-none  right-[-50px]" />
      <div>
        <Link to='/' className="text-purple block text-center text-3xl sono font-extrabold">
          InstaMaster
          <div className="divider"></div>
        </Link>
        <ul className="space-y-2">
          <SidebarItems itemName="create post" />
          <SidebarItems itemName="calendar" />
          <SidebarItems itemName="management" />
          <SidebarItems itemName="insights" />
        </ul>
      </div>

      <ul className='flex items-center justify-between gap-3'>
        <li className=' text-purple text-lg sono '><Link to="/dashboard/create">Dashboard</Link> </li>
        <li className='  text-purple text-lg sono '><button onClick={logOutHandler}>logout</button></li>
      </ul>

    </div>



    //*h-full
    //* h-full
    // <div className={`${isOpen ? "w-0 hidden" : " block h - full "}`}>
    //   <button onClick={() => setIsOpen(true)}>
    //     <BiSidebar size={40} className="text-[#D644D6] hover:scale-110 duration-300" />
    //   </button>
    // </div>

    //   <div className={` relative ${isOpen ? 'left-0 ' : 'left-[-100%]'} px-3 pb-4 overflow-y-auto bg-white`}>
    // <ul className="space-y-2">
    //   <button onClick={() => setIsOpen(false)} className="bg-[#D644D6]  cursor-pointer ext-2xl font-bold capitalize text-white sono p-3  w-[200px] hover:text-white rounded-sm ">close</button>
    //   <SidebarItems itemName="create post" />
    //   <SidebarItems itemName="calendar" />
    //   <SidebarItems itemName="management" />
    //   <SidebarItems itemName="insights" />
    // </ul>
    // </div>
  );
}