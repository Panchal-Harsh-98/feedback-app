import React, { useContext } from 'react';
import FeedbackItem from './FeedbackItem';
import { motion, AnimatePresence } from 'framer-motion';
import FeedbackContext from '../context/FeedbackContext';
import Loader from './shared/Loader';

function FeedbackList() {
  const { feedback, isLoading } = useContext(FeedbackContext);
  if (!isLoading && (!feedback || feedback.length === 0)) {
    return <p>No data found</p>;
  } else {
    return isLoading ? (
      <Loader />
    ) : (
      <div className='feedback-list'>
        <AnimatePresence>
          {feedback.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <FeedbackItem key={index} itemData={item} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    );
  }
}

export default FeedbackList;
