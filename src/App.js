import Header from "./components/Header";
import {useState} from 'react';
import FeedbackData from "./data/FeedbackData";
import FeedbackList from "./components/FeedbackList";
import React from 'react';

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);
  const deleteFeedback = (deleteId) => {
    if(window.confirm("Are you sure you want to delete the feedback?")){
      setFeedback(feedback.filter((item) => {
        return item.id !== deleteId
      }))  
    }
    console.log("APP.JS",deleteId);
  };
  
  return (
    <>
      <Header />
      <div className="container">
        <FeedbackList feedback={feedback} handleDelete={deleteFeedback}/>
      </div>
    </>
  );
}

export default App;