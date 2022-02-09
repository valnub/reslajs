import React, { useState } from 'react';
import './toggle.css';

export default function Toggle(props) {
  const {
    id,
    className,
    style,
    onClick,
    onChange,
    label,
    leftText,
    rightText,
    checked,
  } = props;
  const customId = `${id}-resla-toggle`;
  return (
    <div
      id={id}
      className={`reslajs-toggle-wrapper ${className}`}
      style={style}
    >
      {label && <label htmlFor={customId}>Scales</label>}
      {leftText && (
        <span className="reslajs-toggle-text reslajs-toggle-text-left">
          {leftText}
        </span>
      )}
      <div
        onClick={(e) => {
          const newChecked = !checked;
          if (onClick) onClick(e);
          if (onChange) onChange(newChecked);
        }}
        className={`reslajs-toggle ${checked ? 'reslajs-toggle-on' : ''}`}
        role="switch"
      />
      {rightText && (
        <span className="reslajs-toggle-text reslajs-toggle-text-right">
          {rightText}
        </span>
      )}
      <input
        id={customId}
        name={customId}
        className="reslajs-toggle-checkbox"
        type="checkbox"
        checked={checked}
      ></input>
    </div>
  );
}
