import './App.css';
import React, { useState } from 'react';
import { Button, Toggle, ButtonGrid, ButtonGridItem, Slider } from 'reslajs';

function App() {
  const [checked, setChecked] = useState(false);
  const [sliderValue, setSliderValue] = useState(0);
  return (
    <>
      <Button
        onClick={() => {
          alert('clicked');
        }}
        className="buttontest"
      >
        Open trunk
      </Button>

      <Toggle
        leftText="Off"
        rightText="On"
        onClick={() => {
          console.log('clicked');
        }}
        onChange={(newChecked) => {
          console.log('changed to', newChecked);
          setChecked(newChecked);
        }}
        checked={checked}
        style={{ marginTop: '100px', marginLeft: '100px' }}
      />

      <Slider
        style={{ width: '300px', marginLeft: '100px', marginTop: '100px' }}
        value={sliderValue}
        onChange={(newValue) => {
          setSliderValue(newValue);
        }}
        type="percent"
      >
        {/* <img src="logo192.png" alt="" /> */}
      </Slider>

      <ButtonGrid
        style={{
          marginTop: '100px',
          width: '80%',
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
      >
        <ButtonGridItem>Lights</ButtonGridItem>
        <ButtonGridItem>Heater</ButtonGridItem>
        <ButtonGridItem>Radio</ButtonGridItem>
        <ButtonGridItem>Spotify</ButtonGridItem>
        <ButtonGridItem>Massage</ButtonGridItem>
        <ButtonGridItem>Camera</ButtonGridItem>
        <ButtonGridItem>Sentry mode</ButtonGridItem>
        <ButtonGridItem>Fan</ButtonGridItem>
      </ButtonGrid>
    </>
  );
}

export default App;
