import './App.css';
import React, { useState } from 'react';
import { Button, Toggle, ButtonGrid, ButtonGridItem, Slider } from 'reslajs';

function copy(item) {
  return JSON.parse(JSON.stringify(item));
}

function App() {
  const [checked, setChecked] = useState(false);
  const [sliderValue, setSliderValue] = useState(0);
  const [carFunctions, setCarFunctions] = useState([
    { id: 'func0', label: 'Lights', active: false },
    { id: 'func1', label: 'Heater', active: false },
    { id: 'func2', label: 'Radio', active: true },
    { id: 'func3', label: 'Spotify', active: false },
    { id: 'func4', label: 'Massage', active: false },
    { id: 'func5', label: 'Camera', active: true },
    { id: 'func6', label: 'Sentry mode', active: false },
    { id: 'func7', label: 'Fan', active: false },
  ]);

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
        {carFunctions.map((carFunction) => {
          return (
            <ButtonGridItem
              id={carFunction.id}
              key={Math.random()}
              active={carFunction.active}
              onClick={(event, id, newState) => {
                const carFuncsCopy = copy(carFunctions);
                const foundCarFunc = carFuncsCopy.find((el) => el.id === id);
                foundCarFunc.active = newState;
                setCarFunctions(carFuncsCopy);
              }}
            >
              {carFunction.label}
            </ButtonGridItem>
          );
        })}
      </ButtonGrid>
    </>
  );
}

export default App;
