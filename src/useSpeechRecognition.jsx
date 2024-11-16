// src/hooks/useSpeechRecognition.js

import { useState, useRef, useEffect } from 'react';

const useSpeechRecognition = () => {
  const [text, setText] = useState('');
  const [interimText, setInterimText] = useState('');
  const [isListening, setIsListening] = useState(false);
  const [message, setMessage] = useState('');
  const [isSupported, setIsSupported] = useState(true);
  const recognitionRef = useRef(null);

  useEffect(() => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SpeechRecognition) {
      const recognitionInstance = new SpeechRecognition();
      recognitionInstance.continuous = true;
      recognitionInstance.interimResults = true;
      recognitionInstance.lang = 'en-US'; // Set language if needed

      recognitionInstance.onresult = (event) => {
        let interimTranscript = '';
        let finalTranscript = '';

        for (let i = event.resultIndex; i < event.results.length; ++i) {
          if (event.results[i].isFinal) {
            finalTranscript += event.results[i][0].transcript;
          } else {
            interimTranscript += event.results[i][0].transcript;
          }
        }

        setText((prevText) => prevText + finalTranscript);
        setInterimText(interimTranscript);
      };

      recognitionInstance.onerror = (event) => {
        console.error(event.error);
        setMessage('An error occurred during listening: ' + event.error);
        if (isListening) {
          recognitionInstance.start();
        }
      };

      recognitionInstance.onend = () => {
        if (isListening) {
          recognitionInstance.start();
        } else {
          setMessage('Stopped listening.');
        }
      };

      recognitionRef.current = recognitionInstance;
    } else {
      setIsSupported(false);
      console.warn('SpeechRecognition is not supported in this browser.');
    }
  }, [isListening]);

  const startListening = () => {
    if (recognitionRef.current) {
      recognitionRef.current.start();
      setIsListening(true);
      setMessage('Started listening...');
    }
  };

  const stopListening = () => {
    if (recognitionRef.current) {
      recognitionRef.current.stop();
      setIsListening(false);
      setMessage('Stopped listening.');
    }
  };

  return {
    text,
    interimText,
    isListening,
    isSupported,
    startListening,
    stopListening,
    message,
    setText, // Expose setText to allow updating text externally
  };
};

export default useSpeechRecognition;
