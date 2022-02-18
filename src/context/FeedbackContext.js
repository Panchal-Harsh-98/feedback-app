import { createContext, useState, useEffect } from 'react';
import React from 'react';
const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [feedback, setFeedback] = useState([]);
  const [editFeedback, setEditFeedback] = useState({
    item: {},
    edit: false,
  });

  useEffect(() => {
    fetchFeedback();
  }, []);

  const fetchFeedback = async () => {
    const response = await fetch(`/feedback?_sort=id&_order=desc`);
    const data = await response.json();
    console.log(data);
    setFeedback(data);
    setIsLoading(false);
  };

  // update feedback data
  const updateFeedbackItem = async (id, newItem) => {
    const response = await fetch(`/feedback/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newItem),
    });
    const data = await response.json();
    setFeedback(
      feedback.map((item) => (item.id === id ? { ...item, ...data } : item))
    );
  };

  // function to edit feedback item
  const editFeedbackItem = (editItem) => {
    setEditFeedback({
      item: editItem,
      edit: true,
    });
  };

  // function to delete feedback item
  const deleteFeedback = async (deleteId) => {
    if (window.confirm('Are you sure you want to delete the feedback?')) {
      await fetch(`/feedback/${deleteId}`, { method: 'DELETE' });
      setFeedback(
        feedback.filter((item) => {
          return item.id !== deleteId;
        })
      );
    }
  };

  // function to add the feedback item
  const addFeedback = async (newFeedback) => {
    const response = await fetch('/feedback', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newFeedback),
    });

    const data = await response.json();
    setFeedback([data, ...feedback]);
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        editFeedback,
        isLoading,
        deleteFeedback,
        addFeedback,
        editFeedbackItem,
        updateFeedbackItem,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
