import React from 'react'

const SectionThree = () => {
  return (
    <section className='section-three'>
      <div className="sub-section-one">
      <h1>retirement stategy</h1>
        <p>employee contribution</p>
        <div className='seekbar'></div>
        <p>Retirement Age </p>
        <div className='seekbar'></div>
        <hr />
        <div className='data'>
          <ul>
            <li>employee contribution</li>
            <li>8.4%</li>
          </ul>
          <ul>
            <li>Interest rate</li>
            <li>5%</li>
          </ul>
        </div>
        <div className='button'><button>update</button></div>
        <p className='help'>view help docs</p>
      </div>
      <div className="sub-section-two">
        <article>are you considering a <br />
          <strong>housing advance ?</strong>
        <p>limited time reduced interest.</p>
        </article> 
        <span>learn more</span>
      </div>
    </section>
  )
}

export default SectionThree