import React, { useState } from "react";
import logo from "../Image/logo.png";
import Input from "./Input";
import Options from "./Options";

const Form = () => {
  const [login, setLogin] = useState(true);

  return (
    <section className="container">
    {/* //Header Container or logo container */}
      <article>
        <img src={logo} alt="logo" className="logo" />
        <p className="logoText">
          SOME RANDOM TEXT, SOME RANDOM TEXT,SOME RANDOM TEXT,SOME RANDOM TEXT
        </p>
      </article>

{/* //Main Container of Form Container */}

      <label>
        <div className="btn-container">
          <button type="button" className={ login ? 'btn active' : 'btn'} onClick={() => setLogin(true)}>
            Login
          </button>
          <button type="button" className={ !login ? 'btn active' : 'btn'}  onClick={() => setLogin(false)}>
            Signup
          </button>
        </div>


        {/* //Main Form where user enters detail */}

        <form className="form-center">
          <Input type="email" placeholder="Email Address" />
          <Input type="password" placeholder="Password" />
          {!login && <Input type="password" placeholder="Confirm Password" />}
          <button type="button" className="login-Button">
            {login ? "LOGIN" : "SIGNUP"}
          </button>
          {login && <p className="password">Forgot Password?</p>}
          <p className="loginWith">
            {login ? "or login with" : "or signup with"}
          </p>
        </form>

{/* //Login OPtions like google facebook twitter */}

        <Options/>
      </label>
    </section>
  );
};

export default Form;
