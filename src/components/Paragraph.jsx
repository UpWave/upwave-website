import React from 'react';

function Paragraph({ children }) {
  return (
    <p className="big-letter-paragraph">
      {children}
    </p>
  );
}

export default Paragraph;
