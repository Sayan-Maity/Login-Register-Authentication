import React, { useState } from 'react';
import { Alert } from 'react-bootstrap';
import Home from './Home';

function Login() {
  const [emaillog, setEmaillog] = useState(' ');
  const [passwordlog, setPasswordlog] = useState(' ');

  const [flag, setFlag] = useState(false);

  const [home, setHome] = useState(true);

  function handleLogin(e) {
    e.preventDefault();
    let pass = localStorage.getItem('sanskarPassword').replace(/"/g, '');
    let mail = localStorage.getItem('sanskarEmail').replace(/"/g, '');

    if (!emaillog || !passwordlog) {
      setFlag(true);
      console.log('EMPTY');
    } else if (passwordlog !== pass || emaillog !== mail) {
      setFlag(true);
    } else {
      setHome(!home);
      setFlag(false);
    }
  }

  return (
    <div>
      {home ? (
        <form onSubmit={handleLogin}>
          <h3>LogIn</h3>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              onChange={(event) => setEmaillog(event.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              onChange={(event) => setPasswordlog(event.target.value)}
            />
          </div>

          <button
            type="submit"
            className="btn btn-warning btn-lg btn-block color"
          >
            Login
          </button>

          {flag && (
            <Alert variant="danger" className="login-alert">
              Your email or username is incorrect ! Try again
            </Alert>
          )}
        </form>
      ) : (
        <Home />
      )}
    </div>
  );
}

export default Login;
