import React from 'react';
import ButtonGridItem from '../buttongrid-item';
import './buttongrid.css';

export default function ButtonGrid(props) {
  const { id, className, style, children } = props;
  return (
    <div
      id={id}
      style={style}
      className={`reslajs-buttongrid-wrapper ${className}`}
    >
      <div className="reslajs-buttongrid">{children}</div>
    </div>
  );
}
