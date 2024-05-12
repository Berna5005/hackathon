import React, { useState, useEffect } from 'react';
import './App.css';
import CreateRepo from './Components/CreateRepo';
import Card from './Components/Card';
import Login from './Components/Login';
import axios from 'axios';

function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [showCreateRepo, setShowCreateRepo] = useState(false);

  const [cardsData, setCardsData] = useState([]); // State to store data for cards

  useEffect(() => {
    // Function to fetch data from endpoint
    const fetchData = async () => {
      try {
        // Make GET request to your endpoint
        const response = await axios.get('http://localhost:8080/posts');
        // Extract data from response
        const data = response.data;
        // Update state with fetched data
        setCardsData(data);
        console.log(response.data)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    // Call fetchData function when component mounts
    fetchData();

    // Cleanup function (optional)
    return () => {
      // Any cleanup code can go here
    };
  }, []); // Empty dependency array ensures the effect runs only once when component mounts

  const handlePostClick = () => {
    setShowCreateRepo(!showCreateRepo);
    setShowLogin(false);
  };

  useEffect(() => {
    console.log(showCreateRepo);
  }, [showCreateRepo]);

  const handleLoginClick = () => {
    setShowLogin(!showLogin); 
    setShowCreateRepo(false); 
  };

  const handleLogoClick = () => {
    setShowCreateRepo(false);
    setShowLogin(false);
  };

  return (
    <div className="App" style={{ backgroundColor: '#010409' }}>
      <nav className="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
        <div className="d-flex justify-content-between align-items-center w-100">
          <div className="d-flex">
            <div style={{ color: 'white', marginRight: '10px', marginLeft: '10px' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16" onClick={handleLogoClick}>
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
              </svg>
            </div>
            <h1 className="navbar-brand m-0 me-3">GitShorts</h1>
          </div>
          <div className="d-flex align-items-center">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button type="button" class="btn btn-outline-light" style={{marginRight:'2%'}} onClick={handleLoginClick}>Login</button>
            <svg xmlns="http://www.w3.org/2000/svg" style={{marginRight:'10'}} width="50" height="50" fill="white" class="bi bi-plus-circle" viewBox="0 0 16 16" onClick={handlePostClick}>
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
              <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="white" class="bi bi-person-circle" viewBox="0 0 16 16">
              <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
              <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
            </svg>
          </div>
        </div>
      </nav>
      {showCreateRepo && <CreateRepo />}
      {showLogin && <Login />}
      {!showCreateRepo && !showLogin && (
        <>
          <div>
            {cardsData.map((cardsData, index) => (
              <Card key={index} likeCounter={cardsData.likesCounter} video={cardsData.videoLink} textPost={cardsData.textPost}/>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default App;
