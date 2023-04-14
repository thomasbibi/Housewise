import React from 'react'
import icons from '../utils/aboutUsUtils'
import Icon from './Icon'

const AboutUs = () => {
  return (
    <section>
      <main className='about'>
        <div className='about-img'>
          <img src="assets/about-us-img.png" alt="" />
        </div>
        <div className='about-items'>
          <h2>About Us</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem, iste! Quisquam, iure veniam voluptatum fugiat odit accusantium nihil pariatur
            voluptas debitis quae. Esse quae voluptate laudantium excepturi reprehenderit quo eius.</p>
          <button className='btn'>Learn More</button>
        </div>
      </main>
      <footer className='about-foot'>
        {icons.map((item, index) => {
          return <Icon data={item} key={index} />
        })}
      </footer>
    </section>
  )
}

export default AboutUs