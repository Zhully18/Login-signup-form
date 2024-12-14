import React, {useState} from "react";
import "./Login.css"; // Import CSS for styling

const Login = () => {

    const [currentState, setCurrentState] = useState('Login');


  return (
    <>
    <div className="login-container">
        {/* Right Section: Image */}
      <div className="image-section">
        {/* Background image set through CSS */}
      </div>
      {/* Left Section: Login Form */}
      <div className="form-section">
        <h2>{currentState}</h2>

        <form className="login-form">
        {currentState === 'Login' ? '' : <> <label htmlFor="name">Username</label>
          <input
            type="name"
            id="name"
            placeholder="Username"
            required
          /> </> }
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="email@gmail.com"
            required
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="password"
            required
          />

          <div className="options">
            <p className="forgot-password">forgot password ?</p>
            {
          currentState === 'Login'
          ? <p onClick={()=>setCurrentState('Sign Up')} className='cursor-pointer'>Create account</p>
          : <p onClick={()=>setCurrentState('Login')} className='cursor-pointer'>Login Here</p>
        }
          </div>

          <button type="submit" className="login-button">
          {currentState === 'Login' ? 'Sign In' : 'Sign Up'}
          </button>
        </form>
      </div>

      
    </div>
    </>
  );
};

export default Login;
