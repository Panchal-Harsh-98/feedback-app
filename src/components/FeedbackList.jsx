import React from "react";
import FeedbackItem from "./FeedbackItem";
import PropTypes from "prop-types";
import { motion, AnimatePresence } from "framer-motion";

function FeedbackList({ feedback, handleDelete }) {
  if (!feedback || feedback.length === 0) {
    return <p>No data found</p>;
  } else {
    return (
      <div className="feedback-list">
        <AnimatePresence>
        {feedback.map((item, index) => (
         <motion.div
            key={item.id}
            initial={{opacity:0}}
            animate={{opacity:1}}
            exit={{opacity:0}}
         >
            <FeedbackItem
            key={index}
            itemData={item}
            handleDelete={handleDelete}
          />
         </motion.div>
        ))}
        </AnimatePresence>
      </div>
      // <div className="feedback-list">
      //   {feedback.map((item, index) => (
      //     <FeedbackItem
      //       key={index}
      //       itemData={item}
      //       handleDelete={handleDelete}
      //     />
      //   ))}
      // </div>
    );
  }
}

FeedbackList.propTypes = {
  feedback: PropTypes.array.isRequired,
};

export default FeedbackList;
