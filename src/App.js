import Header from "./components/Header";
import {useState} from 'react';
import FeedbackData from "./data/FeedbackData";
import FeedbackList from "./components/FeedbackList";
import React from 'react';
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import {v4 as uuidv4} from 'uuid';
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
  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4()
    console.log("App.js ", newFeedback)
    setFeedback([newFeedback,...feedback]) 
  };
  
  
  return (
    <>
      <Header />
      <div className="container">
        <FeedbackForm handleAdd={addFeedback}/>
        <FeedbackStats feedback={feedback} />
        <FeedbackList feedback={feedback} handleDelete={deleteFeedback}/>
      </div>
    </>
  );
}

export default App;