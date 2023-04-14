import React from 'react'
import benefits from '../utils/benefitsUtils'
import BenefitsCard from './BenefitsCard'


const Benifits = () => {
  return (
    <section>
      <header className='benefits-head'>
        <div>
          <img src="/assets/element-8.png" alt="" />
        </div>
        <h2>Benefits</h2>
      </header>
      <main className='benefits-cards'>
        {benefits.map((item, index) => {
          return <BenefitsCard data={item} key={index} />
        })}
      </main>
    </section>
  )
}

export default Benifits