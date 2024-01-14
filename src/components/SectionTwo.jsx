import React from 'react'

const SectionTwo = () => {
  return (
    <section className='section-two'>
      <h2>retirement income</h2>
      <h1>starting year 2056</h1>

      <div className='sub-section-one'>
      <div>
        <h2>$300,000</h2>
        <p>my goal</p>
        <hr />
      </div>
      <div>
        <h2>59%</h2>
        <p>goal acheived</p>
        <hr />
      </div>
      <div>
        <h2>$300</h2>
        <p>est monthly income</p>
        <hr />
      </div>
      </div>

      <h4>contributions overtime</h4>
      <div className="bar-chart"></div>

      <h4>how do i compare to my peers ?</h4>
      <p>These number represent current goal acheivement</p>

      <div className='sub-section-two'>
        <div className='one'>
          <p>Age : under 20</p>
          <hr />
          <p>Salary : 20k - 30k</p>
          <hr />
          <p>gender : male</p>
        </div>
        <div className='two'> 
          <span className="seekbar"></span>
          <span className="seekbar"></span>
          <span className="seekbar"></span>
        </div>
      </div>
    </section>
  )
}

export default SectionTwo