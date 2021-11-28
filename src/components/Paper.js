import React from 'react';

const Paper = ({ children }) => {
  return (
    <div style={{ background: '#ccc', width: '100%', height: 500 }}>
      {children}
    </div>
  );
};

export default Paper;
