import React from 'react';
import './button.css';

export default function Button(props) {
  const { children, className } = props;
  return <button className={`resla-button ${className}`}>{children}</button>;
}
