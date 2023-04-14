import React from 'react'

const Card = ({data}) => {
  const {img,text,title,icon} = data
  return (
    <div className='card-cont'>
        <div className='card-img'>
          <img src={img} alt=''/>
        </div>
        <h5>{title}</h5>
        <p>{text}</p>
        <h6>Read More<span className='card-icon'>{icon}</span></h6>
    </div>
  )
}

export default Card