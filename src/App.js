import './assets/scss/style.scss';
import React, { useState } from 'react';

function App() {

  // ATM you need to manually add new items and update the total values per item 
  const [dressupState, setDressupState] = useState({
    eyes: {current: 0, total: 9},
    ears: {current: 0, total: 3},
    mouth: {current: 0, total: 4},
    nose: {current: 0, total: 3},
    clothes: {current: 0, total: 3},  
  });

  function next(item){
    let next_num = dressupState[item].current + 1
    // if next_num exceeds total, restart (set current to 0)
    let new_current = next_num < dressupState[item].total ? next_num : 0
    updateDressUp(item, new_current)
  }

  function updateDressUp(item,new_current){
    setDressupState({
      ...dressupState,
      [item]: {
        current: dressupState[item].current = new_current, 
        total: dressupState[item].total
      }
    })
  }

  function randomize(){
    // for each dressup item, generate a random integer and assign it to current 
    Object.keys(dressupState).map((item) => 
      updateDressUp(item, Math.floor(Math.random() * Math.floor(dressupState[item].total)))
    )
  }

  return (
    <div className="App">
      <div id="container">
        <div id="background">
            <div id="body"></div>
            { Object.keys(dressupState).map((item) => 
                <div id={item} className={item+(dressupState[item].current+1)} key={item}></div>
              )
            } 
        </div>
      </div>

      { Object.keys(dressupState).map((item) => 
          <input type="button" value={"next "+item} key={item} id={"next"+item} onClick={() => next(item)}/>
        )
      }

      <input type="button" value="RANDOMIZE" id="randomize" onClick={() => randomize()}/>

    </div>
  );
}

export default App;
