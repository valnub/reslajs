import './App.css';
import React, { useState } from 'react';
import { Button, Toggle } from 'reslajs';

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
    </>
  );
}

export default App;
