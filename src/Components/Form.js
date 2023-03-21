import React ,{useState} from 'react'
import logo from '../Image/logo.png'
import Options from './Options'
import Input from './Input'
function Form() {

    const [login,settoLogin]=useState(true)
  return (
    <section>
    {/* First make a logo container */}
    <label>
    <img src={logo} className='logo'/>
    <p className='logoText'>
    SOME RANDOM TEXT, SOME RANDOM TEXT,SOME RANDOM TEXT,SOME RANDOM TEXT
    </p>
    </label>

    {/* Second We create login signup page */}
    <label >
    <div className="btn-container">
          <button type="button" className={ login ? 'btn active' : 'btn'} onClick={() => settoLogin(true)}>
            Login
          </button>
          <button type="button" className={ !login ? 'btn active' : 'btn'}  onClick={() => settoLogin(false)}>
            Signup
          </button>
        </div>

    {/* Add  Form there */}
  <form className='form-center'>
    <Input type='email' placeholder='Email Address'></Input>
    <Input type='password' placeholder='Password'></Input>
     {!login && <Input type='password' placeholder='Confirm Password'></Input>}
     <button type="button" className="login-Button">
            {login ? "LOGIN" : "SIGNUP"}
          </button>
          {login && <p className="password">Forgot Password?</p>}
          <p className="loginWith">
            {login ? "or login with" : "or signup with"}
          </p>
  </form>

  
{/* //Other otions */}

<Options/>

    </label>
     
    
   </section>

   
  )
}

export default Form