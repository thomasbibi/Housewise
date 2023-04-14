import React from 'react'

const Home = () => {
    return (
        <main className="">
            <header>
                <nav className="home-nav">
                    <div>
                        <img src='/assets/logo.png' className='nav-img' alt='' />
                    </div>
                    <div className='nav-items'>
                        <button className='nav-button'>Home</button>
                        <button className='nav-button'>Services</button>
                        <button className='nav-button'>About Us</button>
                        <button className='nav-button'>Contact Us</button>
                        <button className='nav-button'><img src='/assets/nav-login-icon.png' /><span className='nav-login'>Login/Register</span></button>
                        <button className='submit-property'>Submit Property</button>
                    </div>
                </nav>
            </header>
            <section className='home-sec'>
                <div className='home-content'>
                    <h1>Property Management For NRI's in India</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                        Pariatur, nulla ipsa nisi eos alias,
                        neque cum libero odit quia aliquam
                        illum enim voluptatum magni eum non illo inventore maxime! Itaque!</p>
                    <button className='explore-btn'>Explore Services</button>
                    <p>click here if you are a Tenant</p>
                </div>
                <div>
                    <img src='/assets/banner-img.png' alt='' />
                </div>
            </section>
            <section className='home-footer-cont'>
                <div className='home-footer-items'>
                    <img src='/assets/pune.png' alt='' />
                    <h5>Pune</h5>
                </div>
                <div className='home-footer-items'>
                    <img src='/assets/bangalore.png' alt='' />
                    <h5>Banglore</h5>
                </div>
                <div className='home-footer-items'>
                    <img src='/assets/hyderabad.png' alt='' />
                    <h5>Hyderabad</h5>
                </div>
                <div className='home-footer-items'>
                    <img src='/assets/gurugram.png' alt='' />
                    <h5>Gurugram</h5>
                </div>
                <div className='home-footer-items'>
                    <img src='/assets/noida.png' alt='' />
                    <h5>Noida</h5>
                </div>
                <div className='home-footer-items'>
                    <img src='/assets/chennai.png' alt='' />
                    <h5>Chennai</h5>
                </div>
                <div className='home-footer-items'>
                    <img src='/assets/delhi.png' alt='' />
                    <h5>Delhi</h5>
                </div>
                <div className='home-footer-items'>
                    <img src='/assets/mumbai.png' alt='' />
                    <h5>Mumbai</h5>
                </div>

            </section>
        </main>
    )
}

export default Home