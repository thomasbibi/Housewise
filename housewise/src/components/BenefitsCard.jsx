import React from 'react'

const BenefitsCard = ({ data }) => {
  const { img, title, txt } = data
  return (
    <div className='benifit-card-cont'>
      <div className='benifit-card-items'>
        <div className='benifit-card-img'>
          <img src={img} alt="" />
        </div>
        <h3>{title}</h3>
        <h6>{txt}</h6>
      </div>

    </div>
  )
}

export default BenefitsCard