import React from 'react';
import './button.css';

export default function Button(props) {
  const { id, className, style, onClick, children } = props;
  return (
    <button
      id={id}
      style={style}
      onClick={onClick}
      className={`reslajs-button ${className}`}
    >
      {children}
    </button>
  );
}
