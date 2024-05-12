import React, { useState } from 'react';
import axios from 'axios';

function CreateRepo() {
  const [video, setVideo] = useState(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [features, setFeatures] = useState('');
  const [stackUsed, setStackUsed] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Perform validation if needed

    // Create the repository using an API call or other method
    console.log('Video:', video);
    console.log('Title:', title);
    console.log('Description:', description);
    console.log('Features:', features);
    console.log('Stack Used:', stackUsed);

    
    // const formData = new FormData();
    // formData.append('video', video);
    // formData.append('data', JSON.stringify({"username": "user1", title, description, features, technologies: stackUsed }));
    // console.log(formData);
    await axios.post('http://localhost:8080/upload-post', {"username": sessionStorage.getItem("username"),
                                                      "title": title,
                                                      "description": description,
                                                      "features": features,
                                                      "technologies": stackUsed},);
    // Reset form fields
    // setVideo(null);
    // setTitle('');
    // setDescription('');
    // setFeatures('');
    // setStackUsed('');
  };

  const uploadVideo = async (video) => {
      setVideo(video)
      await axios.post('http://localhost:8080/upload-video', {video}, {
      headers: {
        'Content-Type': 'multipart/form-data',
        'Accept': 'application/json'
      }});
  }

  return (
    <div style={{ marginTop:'10%', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', width:'100vw'}} className="row justify-content-center">
        <div className="col-md-6">
          <div className="card bg-dark text-light">
            <div className="card-body">
              <h2 className="card-title text-center mb-4">Attach a Video to Your Project</h2>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="video">Upload Video:</label>
                  <input
                    type="file"
                    className="form-control bg-dark text-light"
                    id="video"
                    onChange={(e) => uploadVideo(e.target.files[0])}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="title">Title:</label>
                  <input
                    type="text"
                    className="form-control bg-dark text-light"
                    id="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="description">Description:</label>
                  <textarea
                    className="form-control bg-dark text-light"
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                  ></textarea>
                </div>
                <div className="form-group">
                  <label htmlFor="features">Features:</label>
                  <input
                    type="text"
                    className="form-control bg-dark text-light"
                    id="features"
                    value={features}
                    onChange={(e) => setFeatures(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="stackUsed">Stack Used:</label>
                  <input
                    type="text"
                    className="form-control bg-dark text-light"
                    id="stackUsed"
                    value={stackUsed}
                    onChange={(e) => setStackUsed(e.target.value)}
                    required
                  />
                </div>
                <button style={{marginTop:'5%'}} type="submit" className="btn btn-light">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
  );
}

export default CreateRepo;