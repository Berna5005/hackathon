import React, { useState, useEffect } from 'react';
import './App.css';
import CreateRepo from './Components/CreateRepo';
import Card from './Components/Card';
import Login from './Components/Login';

function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [showCreateRepo, setShowCreateRepo] = useState(false);

  useEffect(() => {
    console.log(showCreateRepo);
  }, [showCreateRepo]);

  const handlePostClick = () => {
    setShowCreateRepo(true);
  };

  const handleLoginClick = () => {
    setShowLogin(true); // Show the login component when login button is clicked
  };

  return (
    <div className="App" style={{ backgroundColor: '#010409' }}>
      <div class="collapse" id="navbarToggleExternalContent" data-bs-theme="dark">
        <div class="bg-dark p-4">
          <h5 class="text-body-emphasis h4">Collapsed content</h5>
          <span class="text-body-secondary">Toggleable via the navbar brand.</span>
        </div>
      </div>
      <nav className="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
        <div className="d-flex justify-content-between align-items-center w-100">
          <div className="d-flex">
            <button type="button" class="btn btn-outline-light" onClick={handlePostClick}>Post</button>
            <button type="button" class="btn btn-outline-light" onClick={handleLoginClick}>Login</button>
            <div style={{ color: 'white', marginRight: '10px', marginLeft: '10px' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
              </svg>
            </div>
            <h1 className="navbar-brand m-0 me-3">GitHub</h1>
          </div>
          <div className="d-flex align-items-center">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" class="bi bi-person-circle" viewBox="0 0 16 16">
              <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
              <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
            </svg>
          </div>
        </div>
      </nav>
      {showCreateRepo ? 
        <CreateRepo /> :
        // Show login component if showLogin is true
        showLogin ?
        <Login /> :
        // Default content when neither createRepo nor login is shown
        <div style={{ alignItems: "center" }}>
          <Card />
          <Card />
          <Card />
        </div>
      }
    </div>
  );
}

export default App;
