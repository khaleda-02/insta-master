import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BsArrowRightSquareFill } from "react-icons/bs";
import SidebarItems from "./SidebarItems";
import { useSelector, useDispatch } from "react-redux";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logOutHandler = () => {
    dispatch(logout())
      .unwrap()
      .then(() => navigate("/", { replace: true }));
  };
  return (
    <div
      className={`${
        isOpen ? "left-0" : "left-[-250px]"
      } fixed  top-0 h-screen w-[250px] px-2 py-3 bg-gray-800 z-[999] flex flex-col items-center justify-between`}
    >
      <BsArrowRightSquareFill
        onClick={() => setIsOpen((pre) => !pre)}
        className="text-5xl text-purple  absolute bottom-0 rounded-none  right-[-50px]"
      />
      <div>
        <Link
          to="/"
          className="text-purple block text-center text-3xl sono font-extrabold"
        >
          InstaMaster
          <div className="divider"></div>
        </Link>
        <ul className="space-y-2">
          <SidebarItems itemName="create post" />
          <SidebarItems itemName="calendar" />
          <SidebarItems itemName="management" />
          {/**<SidebarItems itemName="insights" />*/}
        </ul>
      </div>

      <ul className="flex items-center justify-between gap-3">
        <li className=" text-purple text-lg sono ">
          <Link to="/dashboard/create">Dashboard</Link>{" "}
        </li>
        <li className="  text-purple text-lg sono ">
          <button onClick={logOutHandler}>logout</button>
        </li>
      </ul>
    </div>

  );
}
