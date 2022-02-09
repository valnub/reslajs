import React from 'react';
import './button.css';

export default function Button(props) {
  const { children, className } = props;
  return <button className={`reslajs-button ${className}`}>{children}</button>;
}
