import React from 'react'

const Advisors = () => {
  return (
    <section className='advisor-cont'>
      <div className='founder-cont'>
        <div className='advisor-icons'>
          <img src="assets/linkedin-icon.png" alt="" />
          <img src="assets/twitter-icon.png" alt="" />
          <img src="assets/insta-icon.png" alt="" />
          <img src="assets/fb-icon.png" alt="" />
        </div>
        <div className='founder'>
          <div className='founder-img'>
            <img src="assets/founder-image.png" alt="" />
          </div>
          <div className='founder-cont-content'>
            <h2>Priyank Agarwal</h2>
            <h3>Founder CEO</h3>
            <h4>IIT ROORKEE</h4>
            <h6>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates, distinctio incidunt. Ratione ad optio minima fuga in adipisci incidunt obcaecati.
              Nesciunt aut distinctio voluptas voluptatem! Obcaecati eligendi asperiores distinctio. Dolorem?</h6>

          </div>
        </div>

        <div>
          <img src="assets/element-3.png" alt="" />
        </div>

      </div>
      <hr />
      <main>
        <div className='advisor-head'>
          <h2>Advisory Board</h2>
          <img src="/assets/element-2.png" alt="" />
        </div>
        <div className="advisors-cards">
          <div className='advisors-cards-items-1'>
            <div className='opaque'>
              <h2>Ruchir Arora</h2>
              <h3>ISB Hyderabad</h3>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Eos voluptates veritatis deleniti distinctio assumenda recusandae, laboriosam ullam, ipsum autem animi commodi sed,
                aspernatur perspiciatis obcaecati similique amet quo perferendis quidem.</p>
            </div>
          </div>
          <div className='advisors-cards-items-2'>
          </div>
          <div className='advisors-cards-items-3'>
          </div>
        </div>
      </main>
    </section>
  )
}

export default Advisors