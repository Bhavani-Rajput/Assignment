import React from 'react'

const SectionOne = () => {
  return (
    <section className='section-one'>
      <div className="profile">
        <span className='avatar'></span>
        <div>
          <h2>Hi Mike,</h2>
          <p>Welcome Back</p>
        </div>
      </div>  
      
      <div className="today">
        <h2>today</h2>
        <div className="account">
          <h1>$19,892</h1>
          <p>account balance</p>
        </div>
        <div className="account">
          <h4>$4,000</h4>
          <p>year-to-date contributions</p>
        </div>
        <div className="account">
          <h4>$1,892</h4>
          <p>total interest</p>
        </div>
      <button>I want to</button>
      </div>
      <div className="recent">
        <h2>recent transactions</h2>
        <div className="transaction">
          <span>2020-08-11</span>
          <p>Widthdrawal transfer to bank-XX11</p>
          <hr />
        </div>
        <div className="transaction">
          <span>2020-08-11</span>
          <p>Widthdrawal transfer to bank-XX11</p>
          <hr />
        </div>
        <div className="transaction">
          <span>2020-08-11</span>
          <p>Widthdrawal transfer to bank-XX11</p>
          <hr />
        </div>
      </div>
    </section>
  )
}

export default SectionOne