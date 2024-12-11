import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMicrophone } from "@fortawesome/free-solid-svg-icons";
import "./ChatBot.css";

const VoiceRecord = () => {
  const [listening, setListening] = useState(false);
  const [transcripts, setTranscripts] = useState([
    { sender: "Camilla", message: "Hi, I'm Camilla! How can I assist you today?" }
  ]);
  const [recognition, setRecognition] = useState(null);
  const [isBotResponding, setIsBotResponding] = useState(false);

  useEffect(() => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (SpeechRecognition) {
      const recognitionInstance = new SpeechRecognition();
      recognitionInstance.continuous = true;
      recognitionInstance.interimResults = true;
      recognitionInstance.lang = "en-US";

      recognitionInstance.onresult = (event) => {
        const interimTranscript = Array.from(event.results)
          .map((result) => result[0].transcript)
          .join("");
        setTranscripts((prev) => [
          ...prev,
          { sender: "User", message: interimTranscript }
        ]);
      };

      recognitionInstance.onerror = (event) => {
        console.error("Speech Recognition Error:", event.error);
      };

      setRecognition(recognitionInstance);
    } else {
      alert("Speech Recognition is not supported in your browser.");
    }
  }, []);

  const startListening = () => {
    if (recognition) {
      recognition.start();
      setListening(true);
      setTranscripts((prev) => [
        ...prev,
        { sender: "Camilla", message: "Interview session started. I'm listening..." }
      ]);
    }
  };

  const stopListening = () => {
    if (recognition) {
      recognition.stop();
      setListening(false);
    }
  };

  // Function to send audio to backend for transcription
  const sendAudioToBackend = (audioBlob) => {
    const formData = new FormData();
    formData.append("audio", audioBlob, "audio.wav");

    fetch("http://localhost:5000/convert_audio_to_text", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        const botResponse = "This is the bot's response to your query: " + data.transcription;
        setTranscripts((prev) => [
          ...prev,
          { sender: "Camilla", message: botResponse }
        ]);
        speakResponse(botResponse);
      })
      .catch((error) => {
        console.error("Error sending audio:", error);
      });
  };

  const handleBotResponse = (userMessage) => {
    setIsBotResponding(true);
    const botResponse = "This is the bot's response to your query: " + userMessage;
    setTranscripts((prev) => [
      ...prev,
      { sender: "Camilla", message: botResponse }
    ]);
    speakResponse(botResponse);
    setIsBotResponding(false);
  };

  const speakResponse = (responseText) => {
    const speech = new SpeechSynthesisUtterance(responseText);
    speech.lang = "en-US";
    window.speechSynthesis.speak(speech);
  };

  const onStopListening = () => {
    stopListening();

    // Send audio to the backend for transcription
    const audioBlob = new Blob([recognition], { type: "mp3" });
    sendAudioToBackend(audioBlob);

    const latestUserMessage = transcripts[transcripts.length - 1]?.message;
    if (latestUserMessage) {
      handleBotResponse(latestUserMessage);
    }

    // Mark the end of the interview by calling the mwisho
    fetch("http://localhost:5000/end", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {

        const closingMessage = data.message || "Thank you for completing the interview!";
        setTranscripts((prev) => [
          ...prev,
          { sender: "Camilla", message: closingMessage }
        ]);
        speakResponse(closingMessage);
      })
      .catch((error) => {
        console.error("Error marking the end of the interview:", error);
      });
  };

  return (
    <div className="column">
      <h2>Voice Chatbot</h2>
      <button
        onClick={listening ? onStopListening : startListening}
        className={`voice-btn ${listening ? "listening" : ""}`}
      >
        <FontAwesomeIcon icon={faMicrophone} />
      </button>
      <p>{listening ? "Listening..." : "Start Listening"}</p>
      <div className="chat-box">
        <h3>Conversation:</h3>
        <div className="transcription-box">
          {transcripts.map((transcript, index) => (
            <div
              key={index}
              className={`message ${
                transcript.sender === "Camilla" ? "bot-message" : "user-message"
              }`}
            >
              {transcript.sender === "User" ? (
                <div className="me">
                  <strong>Me:</strong> {transcript.message}
                </div>
              ) : (
                <p>
                  <strong>{transcript.sender}: </strong>{transcript.message}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VoiceRecord;
