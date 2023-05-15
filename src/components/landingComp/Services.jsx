import React from 'react'

const Services = () => {
  return (
    <div className="main-container">
      <h1 className="text-3xl lg:text-4xl font-bold leading-9  pb-4 main-heading">Services</h1>
      <div className="container flex items-center justify-center flex-wrap m-4 mx-auto mb-10 mt-4 md:space-y-0 space-y-6 text-white">
        <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
          <div
            className="w-20 h-20 inline-flex items-center justify-center rounded-full dark:bg-purple-900 text-indigo-400 mb-5 flex-shrink-0">
            <svg fill="none" stroke="white" strokeLinecap="round" strokeWidth="2"
              className="w-10 h-10" viewBox="0 0 24 24">
              <path d="M8 17l4 4 4-4m-4-5v9"></path>
              <path d="M12 12h.01"></path>
            </svg>
          </div>
          <div className="text">
            <h2 className="text-white  font-extrabold  mb-3 tajawal text-[26px]">Content Creation</h2>
            <p className="tajawal  text-[20px] ">Our AI-based tool will help you create beautiful, high-quality
              content in a matter of minutes.</p>

          </div>
        </div>
        <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
          <div
            className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-purple-900 text-indigo-400 mb-5 flex-shrink-0">
            <svg fill="none" stroke="white" strokeLinecap="round" strokeWidth="2"
              className="w-10 h-10" viewBox="0 0 24 24">
              <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
              <path d="M22 4L12 14.01l-3-3"></path>
            </svg>
          </div>
          <div className="flex-grow">
            <h2 className="text-white  font-extrabold  mb-3  tajawal text-[26px]">Content Management</h2>
            <p className="tajawal  text-[20px]  ">Our AI-based tool will help you create beautiful, high-quality
              content in a matter of minutes.</p>

          </div>
        </div>
        <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
          <div
            className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-purple-900 text-indigo-400 mb-5 flex-shrink-0">
            <svg fill="none" stroke="white" strokeLinecap="round" strokeWidth="2"
              className="w-10 h-10" viewBox="0 0 24 24">
              <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
            </svg>
          </div>
          <div className="flex-grow">
            <h2 className="text-white  font-extrabold  mb-3  tajawal text-[26px]">Content Marketing</h2>
            <p className="tajawal  text-[20px]  ">Our AI-based tool will help you create beautiful, high-quality
              content in a matter of minutes.</p>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Services
