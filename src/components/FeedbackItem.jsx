import React from 'react';
import Card from './shared/Card';
import PropType from 'prop-types';
import { FaTimes } from 'react-icons/fa';

function FeedbackItem({ itemData, handleDelete }) {
  return (
    <Card>
      <div className='num-display'>{itemData.rating}</div>
      <button
        className='close'
        onClick={() => {
          handleDelete(itemData.id);
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
