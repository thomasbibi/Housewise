import React from 'react'
import steps from '../utils/stepsUtils'
import StepsCard from './StepsCard'


const Steps = () => {
  return (
    <section className='steps-cont'>
      <div className='steps-head'>
        <h2>How it Works </h2>
        <img src="/assets/element-5.png" alt="" />
        <img src="/assets/element-6.png" alt="" />
      </div>
      <div className='steps-items'>
        {steps.map((item, index) => {
          return <StepsCard data={item} index={index} key={index} />
        })}
      </div>
    </section>
  )
}

export default Steps