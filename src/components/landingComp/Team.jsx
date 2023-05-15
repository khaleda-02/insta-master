import React from 'react'
import data from '../../assets/data/TeamData'
const Team = () => {
  return (
    <section className=" main-container min-h-[100vh]">
      <h1 className="text-3xl lg:text-4xl font-bold leading-9  pb-4 main-heading">Our Team</h1>
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          {data.map(el => {
            return (
              <div className='p-4 lg:w-1/2'>
                <div
                  className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                  <img src={el.img} alt="team" className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" />
                  <div className="flex-grow sm:pl-8">
                    <h2 className="font-extrabold capitalize text-2xl purple sono">{el.name}</h2>
                    <h3 className="text-white  mb-3">{el.position}</h3>
                    <p className="mb-4 text-gray-400 text-sm">{el.bio}</p>
                    {el.links.map(link => {
                      return (
                        <span className="inline-flex">
                          <a className="text-gray-500" href={link.value} target="_blank" >
                            <i className={` ${link.icon}  text-[20px] mr-2 shadow-lg`}></i>
                          </a>
                        </span>
                      )
                    })}
                  </div>
                </div></div>
            )
          })}

        </div>
      </div>
    </section>
  )
}

export default Team;