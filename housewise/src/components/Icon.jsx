import React from 'react'

const Icon = ({ data }) => {
    const { img, number, title } = data
    return (
        <div className='icon-cont'>
            <div className='icon-img'>
                <img src={img} alt="" />
            </div>
            <h3>{number}</h3>
            <p>{title}</p>
        </div>
    )
}

export default Icon