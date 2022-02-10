import { createContext, useState } from 'react';
import React from 'react';
import FeedbackData from '../data/FeedbackData';
import { v4 as uuidv4 } from 'uuid';

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState(FeedbackData);

  const [editFeedback, setEditFeedback] = useState({
    item: {},
    edit: false,
  });

  // function to edit feedback item
  const editFeedbackItem = (editItem) => {
    setEditFeedback({
      item: editItem,
      edit: true,
    });
  };

  // function to delete feedback item
  const deleteFeedback = (deleteId) => {
    if (window.confirm('Are you sure you want to delete the feedback?')) {
      setFeedback(
        feedback.filter((item) => {
          return item.id !== deleteId;
        })
      );
    }
  };

  // function to add the feedback item
  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        deleteFeedback,
        addFeedback,
        editFeedbackItem,
        editFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
