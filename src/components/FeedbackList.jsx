import React from "react";
import FeedbackItem from "./FeedbackItem";
import PropTypes from "prop-types";
function FeedbackList({ feedback }) {
  if (!feedback || feedback.length === 0) {
    return <p>No data found</p>;
  } else {
    return (
      <div className="feedback-list">
        {feedback.map((item, index) => (
          <FeedbackItem key={index} itemData={item}/>
        ))}
      </div>
    );
  }
}
FeedbackItem.propTypes = {
  feedback: PropTypes.array.isRequired
}


export default FeedbackList;
