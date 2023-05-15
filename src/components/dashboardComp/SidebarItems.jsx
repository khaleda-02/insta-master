import React from 'react'
import { NavLink } from 'react-router-dom'

const SidebarItems = ({ itemName }) => {
  return (
    <li className="flex w-full justify-between text-gray-300 hover:text-gray-500 cursor-pointer items-center mb-6">
      <div className="flex items-start">
        <NavLink to={`/dashboard/${itemName.split(' ')[0]}`}
          className={({ isActive }) => {
            return 'text-2xl font-bold capitalize text-white sono p-3  w-[200px] hover:text-white ' +
              (isActive
                ? " white" :
                " purple"
              )
          }}
        >
          {itemName}
        </NavLink>
      </div>
    </li >
  )
}

export default SidebarItems
