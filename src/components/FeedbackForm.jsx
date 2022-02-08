import React from "react";
import Card from "./shared/Card";
import { useState } from "react";
import Button from "./shared/Button";
import RatingSelector from "./RatingSelector";
function FeedbackForm({ handleAdd }) {
  const [text, setText] = useState("");
  const [disabled, setDisabled] = useState(true);
  const [rating, setRating] = useState(10);
  const [message, setMessage] = useState("");

  const handleTextChange = (newText) => {
    if (text.trim().length === 0) {
      setDisabled(true);
      setMessage(null);
    } else if ((text !== "") & (text.trim().length <= 10)) {
      setMessage("The text needs to be more than 10 characters");
      setDisabled(true);
    } else {
      setMessage(null);
      setDisabled(false);
    }
    setText(newText.target.value);
  };

  const handleSubmit = (data) => {
    data.preventDefault();
    if (text.trim().length > 10) {
      const newFeedback = {
        text: text,
        rating: rating,
      };
      handleAdd(newFeedback);
      setText("");
    }
  };

  return (
    <>
      <Card>
        <form onSubmit={handleSubmit}>
          <h2>How would you rate your experience with us?</h2>
          {/* {@todo - rating component} */}
          <RatingSelector
            rating={(selectedRating) => {
              setRating(selectedRating);
            }}
          />
          <div className="input-group">
            <input
              onChange={handleTextChange}
              type="text"
              placeholder="Write a review"
              value={text}
            />
            <Button type="submit" isDisabled={disabled}>
              Send
            </Button>
          </div>
          {message !== null ? (
            <div className="message">{message}</div>
          ) : (
            <div></div>
          )}
        </form>
      </Card>
    </>
  );
}

export default FeedbackForm;
