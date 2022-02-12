import React, { useState, useRef, useEffect } from 'react';
import './slider.css';

export default function Slider(props) {
  const {
    id,
    className,
    style,
    onClick,
    value,
    type,
    max,
    onChange,
    children,
  } = props;
  const sliderRef = useRef(null);
  const draggerRef = useRef(null);
  const [offsetLeft, setOffsetLeft] = useState(0);

  useEffect(() => {
    if (!value && onChange) {
      if (type === 'percent') onChange('0 %');
      else onChange(0);
    }
  }, []);

  const onDrag = (e) => {
    const mousePos = Math.round(e.touches[0].clientX);
    const clientOffset = Math.round(sliderRef.current.offsetLeft);
    const sliderWidth = Math.round(sliderRef.current.clientWidth);
    const draggerWidth = Math.round(draggerRef.current.clientWidth);
    const maxValue = sliderWidth + clientOffset - draggerWidth;
    if (mousePos >= clientOffset && mousePos < maxValue) {
      const newOffset = mousePos - clientOffset;
      setOffsetLeft(newOffset);
      if (onChange && type) {
        const percentage = Math.round(
          (newOffset / (sliderWidth - draggerWidth)) * 100
        );
        if (type.toLowerCase() === 'percent') {
          onChange(percentage + ' %');
        } else {
          if (max) {
            const currentAbsoluteValue = Math.round((percentage / 100) * max);
            onChange(currentAbsoluteValue);
          } else {
            console.error(
              'ReslaJS: Slider type if set to absolute but not max prop is set!'
            );
          }
        }
      }
    }
  };

  const customIconClass = children ? 'customicon' : '';

  return (
    <div style={style} className={`reslajs-slider-wrapper ${className}`}>
      <div
        ref={sliderRef}
        onClick={(e) => {
          // TODO
          if (onClick) onClick(e);
        }}
        className={`reslajs-slider`}
      >
        <div
          style={{ marginLeft: offsetLeft + 'px' }}
          ref={draggerRef}
          onTouchMove={onDrag}
          onDrag={onDrag}
          className={`reslajs-slider-dragger ${customIconClass}`}
        >
          {children && children}
        </div>
      </div>
      {type && <div className="reslajs-slider-value">{value}</div>}
    </div>
  );
}
