import React from 'react'

const Header = () => {
  return (
    <div className='head'>
      <div className='head-icons'>
        <img src='/assets/linkedin-icon.png' alt='' className='head-img' />
        <img src='/assets/fb-icon.png' alt='' className='head-img' />
      </div>
      <div className='head-details'>
        <img src='/assets/footer-mail-icon.png' alt='' className='head-img' />
        <p>sales@housewise.in</p>
        <img src='/assets/footer-phone-icon.png' alt='' className='head-img' />
        <p>+91-8448440693</p>
      </div>
    </div>
  )
}

export default Header