import './App.css';
import React, { useState } from 'react';
import { Button, Toggle, ButtonGrid, ButtonGridItem } from 'reslajs';

function App() {
  const [checked, setChecked] = useState(false);
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
