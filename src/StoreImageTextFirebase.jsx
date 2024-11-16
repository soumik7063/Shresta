import React, { useState, useEffect } from 'react';
import { imgDB, txtDB } from "./storageFirebase";
import { v4 } from "uuid";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import background from './pic3.avif';
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { useNavigate } from 'react-router-dom';
import useSpeechRecognition from './useSpeechRecognition'; // Ensure this path is correct
import "./hello.css";

function StoreImageTextFirebase() {
  const navigate = useNavigate();
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [uploadedImages, setUploadedImages] = useState([]);
  const [data, setData] = useState([]);
  const [isUploaded, setIsUploaded] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState(''); // New state for phone number
  const { text, interimText, isListening, startListening, stopListening, message, isSupported, setText } = useSpeechRecognition();

  const handleUpload = (e) => {
    setSelectedFiles([...selectedFiles, ...Array.from(e.target.files)]);
  };

  const uploadFiles = async () => {
    const imagesArray = [];
    for (let i = 0; i < selectedFiles.length; i++) {
      const file = selectedFiles[i];
      const imgs = ref(imgDB, `Imgs/${v4()}`);
      await uploadBytes(imgs, file).then(data => {
        return getDownloadURL(data.ref).then(val => {
          imagesArray.push(val);
        });
      });
    }
    return imagesArray;
  };

  const handleClick = async () => {
    if (!phoneNumber) {
      toast.error('Please enter your phone number.', {
        position: 'top-center'
      });
      return;
    }
    
    const imagesArray = await uploadFiles();
    const valRef = collection(txtDB, 'txtData');
    for (let i = 0; i < imagesArray.length; i++) {
      await addDoc(valRef, { 
        txtVal: text, 
        imgUrl: imagesArray[i], 
        phoneNumber: phoneNumber // Add phone number to Firestore
      });
    }
    setIsUploaded(true);
    setSelectedFiles([]);
    setUploadedImages(imagesArray);
    setData([]);
    toast.success('Complaint Filed Successfully! We will reach you soon :)', {
      position: 'top-center'
    });
    navigate('/thankyou');
  };

  const getData = async () => {
    const valRef = collection(txtDB, 'txtData');
    const dataDb = await getDocs(valRef);
    const allData = dataDb.docs.map(val => ({ ...val.data(), id: val.id }));
    setData(allData);
  };

  useEffect(() => {
    getData();
  }, [isUploaded]);

  if (!isSupported) {
    return (
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <h1>Speech to Text Converter</h1>
        <p>Speech recognition is not supported in your browser. Please use Google Chrome for this feature.</p>
      </div>
    );
  }

  return (
    <div className="store-image-text-firebase" style={{ backgroundImage: `url(${background})` }}>
      <div className="container">
        <h1>Register Complaint here</h1>
        <div>
          <h2>Selected Files:</h2>
          <ul>
            {selectedFiles.map((file, index) => (
              <li key={index}>{file.name}</li>
            ))}
          </ul>
        </div>
        <input
          type="file"
          onChange={(e) => handleUpload(e)}
          className="file-input"
          multiple
        /><br /><br />

        <div className="textarea-container">
          <textarea
            id="complaint"
            value={text + interimText}
            onChange={(e) => setText(e.target.value)} // Allow text modification
            placeholder="Enter your Complaint.... ^_^"
            className="textarea"
          />
        </div>

        <div className="speech-buttons">
          <button
            onClick={startListening}
            disabled={isListening}
            className={`speech-button mic`}
            title="Start Listening"
          >
            🎤
          </button>
          <button
            onClick={stopListening}
            disabled={!isListening}
            className={`speech-button stop`}
            title="Stop Listening"
          >
            🛑
          </button>
        </div>
        
        {message && <p>{message}</p>}

        {/* New input for phone number */}
        <div className="phone-number-container">
          <input
            type="text"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            placeholder="Enter your phone number"
            className="phone-number-input"
          />
        </div>

        <button onClick={handleClick} className="add-button">Upload</button>
      </div>
    </div>
  );
}

export default StoreImageTextFirebase;
