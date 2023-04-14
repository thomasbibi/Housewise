import React from 'react'
import services from '../utils/servicesUtils'
import Card from './Card'
const Services = () => {
  return (
    <section className='services-cont'>
      <header className='services-head'>
        <img src='/assets/element-7.png' />
        <div><h2>What We Do</h2></div>

      </header>
      <main className='services-cards'>
        {services.map((item) => {
          return <Card data={item} />
        })}
      </main>
      <footer>
        <div className='services-btn'>
          <button className='btn'>Explore More</button>
        </div>
        <div className='services-icon'><img src='/assets/element-3.png' alt='' /></div>
      </footer>
    </section>
  )
}

export default Services