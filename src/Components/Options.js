import React from 'react'
import facebook from '../Image/facebook.svg'
import google from '../Image/google.svg'
import twiter from '../Image/twiter.svg'
function Options() {
  return (
    <div className="Options">
    <div className="loginIcons">
      <div className="icon">
        <img src={google} alt="google" />
      </div>
      <div className="icon">
        <img src={facebook} alt="facebook" />
      </div>
      <div className="icon">
        <img src={twiter} alt="twitter" />
      </div>
    </div>



    {/* Terms and Condition Part Add there  */}


   <p className="form-Text">
      Don't have an Account? <span>Create new now!</span>
    </p>
    <p className="form-Text">
      By signing up, you are agree with our
      <span className="TandC">Term & Conditions</span>
    </p>
  </div>
  )
}

export default Options