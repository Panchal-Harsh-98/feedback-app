
import React from 'react';
import PropTypes from 'prop-types';

function Card({children, invert}) {
  return <div className={`card ${invert && 'reverse'}`}>{children}</div>;
}


Card.defaultProps = { 
    invert: false,
}

Card.propTypes = { 
    invert: PropTypes.bool,
    children: PropTypes.node.isRequired
}

export default Card;
