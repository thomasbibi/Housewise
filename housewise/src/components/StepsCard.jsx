import React, { useState } from 'react'

const StepsCard = ({ data, index }) => {
  const { img, title, txt } = data
  return (
    <div className='steps-card-cont' style={{ backgroundColor: index % 2 != 0 ? '#ffffff' : '#ffe6ff' }}>
      <div className="steps-card-items">
        <div className="steps-card-img">
          <img src={img} alt="" />
        </div>
        <h3>{title}</h3>
        <h6>{txt}</h6>
      </div>

    </div>
  )
}

export default StepsCard