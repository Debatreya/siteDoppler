import React, { useState } from 'react';
import axios from 'axios';
import './Cloneform.css'

const Cloneform = () => {
  const [url, setUrl] = useState('');
  const [filename, setFilename] = useState('');
  const download = async (e) => {
    try {
      console.log(filename);
      // Make a GET request directly to trigger the download
      window.location.href = `http://localhost:5000/api/download?filename=${filename}`;
      console.log("Downloaded");
    } catch (error) {
      // Handle errors
      console.error('Error:', error.message);
    }
  };
  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/api/clone', {
        url: url,
        filename: filename,
      });
      console.log("Hello");
      // Handle the response if needed
      console.log(response);
      download()
    } catch (error) {
      // Handle errors
      console.error('Error:', error.message);
    }
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <label>
          URL:
          <input type="text" value={url} onChange={(e) => setUrl(e.target.value)} />
        </label>
        <br />
        <label>
          Filename:
          <input type="text" value={filename} onChange={(e) => setFilename(e.target.value)} />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Cloneform;
