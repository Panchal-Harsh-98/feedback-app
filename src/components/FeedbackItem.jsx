import React from "react";
import { useState } from "react";
import Card from "./shared/Card";
import PropType from 'prop-types';
import {FaTimes} from 'react-icons/fa';

function FeedbackItem({ itemData, handleDelete }) {
  const [rating, setRating] = useState(itemData.rating);
  const [feedbackText, setFeedbackText] = useState(itemData.text);

  
  
  return (
   
      <Card>
          <div className="num-display">{rating}</div>
          <button className="close" onClick={() => {
            handleDelete(itemData.id)
          }}>
              <FaTimes color="purple" />
          </button>
          <div className="text-display">{feedbackText}</div>
      </Card>
  );
}

FeedbackItem.propType = {
    itemData: PropType.object.isRequired
}

export default FeedbackItem;
