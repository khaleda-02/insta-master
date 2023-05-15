import React from 'react'
import img from '../../assets/about.png'
const About = () => {
  return (
    <div className="main-container">
      <h1 className="text-3xl lg:text-4xl font-bold leading-9  pb-4 main-heading">About Us</h1>
      <div className="container flex flex-col lg:flex-row justify-between items-center gap-8 py-8">
        <div className="w-full lg:w-6/12 flex flex-col justify-center">
          <p className="text-white text-center md:text-left leading-8 capitalize ">
            Welcome to our Instagram tool management (InstaMaster)! Our
            mission is to empower Instagram users by providing them with the tools they need to grow their presence
            on the platform and achieve their goals.
          </p>
          <p className="text-white hidden  md:block text-left leading-8 capitalize my-6">
            We are a team of experienced developers and social media experts who are passionate about Instagram and
            its potential to help individuals and businesses connect with their audience. Our platform is designed
            to be intuitive and easy-to-use, allowing users to quickly and easily manage their Instagram accounts
            and access the features they need to succeed.
          </p>
        </div>
        <div className="img">
          <img src={img} alt="" />
        </div>
      </div>
    </div>
  )
}

export default About
