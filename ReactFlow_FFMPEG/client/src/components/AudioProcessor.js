// src/components/AudioExtractor.js
import React, { useState } from 'react';
import axios from 'axios';

const AudioExtractor = () => {
  const [videoFile, setVideoFile] = useState(null);
  const [videoId , setVideoId] = useState('')

  const handleFileChange = (event) => {
    setVideoFile(event.target.files[0]);
  };

  const handleAudioExtraction = async () => {
    try {
      const formData = new FormData();
      formData.append('file', videoFile);

      const response = await axios.post('http://localhost:8000/api/exampleTable/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }).then(res=>{
        console.log(res)
        setVideoId(res.data.id)
      });

    } catch (error) {
      console.error('Error extracting audio:', error);
    }
  };

  const handleData = ()=>{
    axios.get(`http://localhost:8000/api/videos/${videoId}/`)
        .then(resp=>{
            console.log(resp)
        });
  }
  

  return (
    <div>
      <h2>Audio Extractor</h2>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleAudioExtraction}>Post Audio</button>
      {/* <button onClick={handleData}>view data</button> */}
    </div>
  );
};

export default AudioExtractor;
