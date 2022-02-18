import React from 'react';
import spinner from '../../assets/spinner.gif';

function Loader() {
  return (
    <>
      <img
        src={spinner}
        alt='spinner'
        style={{
          width: '50px',
          margin: 'auto',
          display: 'block',
        }}
      />
      {/* style={{ color: 'white' }} */}
    </>
  );
}

export default Loader;
