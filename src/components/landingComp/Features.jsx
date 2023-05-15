import React from 'react'
import data from '../../assets/data/FeaturesData'
const Features = () => {
  return (
    <div>
      <div className="features">
        <h1 className="text-3xl lg:text-4xl font-bold leading-9  pb-4 main-heading">Services</h1>
        <div className="container">

          {data.map(el => {
            return (
              <div className='box'>
                <div className="img">
                  <img src={el.img} alt="" />
                </div>
                <div className="content min-h-[300px]">
                  <h1>{el.title}</h1>
                  <p>
                    {el.description}
                  </p>

                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>

  )
}

export default Features
