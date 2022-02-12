import React, { useState } from 'react';
import './buttongrid-item.css';

export default function ButtonGridItem(props) {
  const { id, className, style, onClick, active, children } = props;

  return (
    <div
      id={id}
      style={style}
      onClick={(e) => {
        if (onClick) onClick(e, id, !active);
      }}
      role="switch"
      className={`reslajs-buttongrid-item ${
        active ? 'active' : ''
      } ${className}`}
    >
      {children}
    </div>
  );
}
