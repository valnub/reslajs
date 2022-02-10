import React, { useState } from 'react';
import './buttongrid-item.css';

export default function ButtonGridItem(props) {
  const { id, className, style, onClick, children } = props;
  const [active, setActive] = useState(false);

  return (
    <div
      id={id}
      style={style}
      onClick={(e) => {
        setActive(!active);
        if (onClick) onClick(e);
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
