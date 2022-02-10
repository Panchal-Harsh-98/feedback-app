import React, { useContext } from 'react';
import Card from './shared/Card';
import PropType from 'prop-types';
import { FaTimes, FaEdit } from 'react-icons/fa';
import FeedbackContext from '../context/FeedbackContext';

function FeedbackItem({ itemData }) {
  const { deleteFeedback, editFeedbackItem } = useContext(FeedbackContext);
  return (
    <Card>
      <div className='num-display'>{itemData.rating}</div>
      <button
        className='edit'
        onClick={() => {
          editFeedbackItem(itemData);
        }}
      >
        <FaEdit color='purple' />
      </button>
      <button
        className='close'
        onClick={() => {
          deleteFeedback(itemData.id);
        }}
      >
        <FaTimes color='purple' />
      </button>
      <div className='text-display'>{itemData.text}</div>
    </Card>
  );
}

FeedbackItem.propType = {
  itemData: PropType.object.isRequired,
};

export default FeedbackItem;
