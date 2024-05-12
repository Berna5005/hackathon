import React from "react";
import { useState } from "react";
import axios from "axios";

function Login(){
  const [username, setUsername] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Perform validation if needed
    console.log('Username:', username);
    try {
      // await axios.post('http://localhost:8080/login', { username });
      sessionStorage.setItem('username', username);
      await axios.post('http://localhost:8080/login', {username});
      console.log('Login successful!');
      // You can redirect the user or perform any other action upon successful login
    } catch (error) {
      console.error('Error logging in:', error);
      // Handle error appropriately
    }
  };

  const handleChange = (e) => {
    setUsername(e.target.value);
  };

    return(
        <div style={{ marginTop:'5%', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', width:'100vw'}} className="row justify-content-center">
        <div className="col-md-6">
          <div className="card bg-dark text-light">
            <div className="card-body">
              <h2 className="card-title text-center mb-4">Login</h2>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="username">Username:</label>
                  <input
                    type="text"
                    className="form-control bg-dark text-light"
                    id="username"
                    value={username}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <button style={{marginTop:'5%'}} type="submit" className="btn btn-light">Login</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Login;