import React from "react";
import { useState } from "react";

function Login(){
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [username, setUsername] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // Perform validation if needed

    // Create the repository using an API call or other method
    console.log('Name:', name);
    console.log('Surname:', surname);
    console.log('Username:', username);

    // Reset form fields
    setName('');
    setSurname('');
    setUsername('');
  };
    return(
        <div style={{ marginTop:'5%', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', width:'100vw'}} className="row justify-content-center">
        <div className="col-md-6">
          <div className="card bg-dark text-light">
            <div className="card-body">
              <h2 className="card-title text-center mb-4">Login</h2>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Name:</label>
                  <input
                    type="text"
                    className="form-control bg-dark text-light"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="surname">Surname:</label>
                  <textarea
                    className="form-control bg-dark text-light"
                    id="surname"
                    value={surname}
                    onChange={(e) => setSurname(e.target.value)}
                    required
                  ></textarea>
                </div>
                <div className="form-group">
                  <label htmlFor="username">Username:</label>
                  <input
                    type="text"
                    className="form-control bg-dark text-light"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />
                </div>
                
                <button type="submit" className="btn btn-primary">Login</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Login;