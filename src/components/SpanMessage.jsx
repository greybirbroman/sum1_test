import React from 'react';

const SpanMessage = ({ text, color }) => {
  return (
    <span className={`font-semibold lg:text-[20px] ${color}`}>{text}</span>
  );
};

export default SpanMessage;
