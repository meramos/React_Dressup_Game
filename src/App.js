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
    setDressupState({
      ...dressupState,
      [item]: {
        current: dressupState[item].current = new_current, 
        total: dressupState[item].total
      }
    })
  }


  return (
    <div className="App">
      <div id="container">
        <div id="background">
            <div id="body"></div>
            <div id="eyes" className={"eyes"+(dressupState["eyes"].current+1)} ></div>
            <div id="ears" className={"ears"+(dressupState["ears"].current+1)}></div>
            <div id="nose" className={"nose"+(dressupState["nose"].current+1)}></div>
            <div id="mouth" className={"mouth"+(dressupState["mouth"].current+1)}></div>
            <div id="clothes" className={"clothes"+(dressupState["clothes"].current+1)}></div>
        </div>
      </div>

      <input type="button" value="next eyes" id="nexteyes" onClick={() => next("eyes")}/>
      <input type="button" value="next ears" id="nextears" onClick={() => next("ears")}/>
      <input type="button" value="next mouth" id="nextmouth" onClick={() => next("mouth")}/>
      <input type="button" value="next nose" id="nextnose" onClick={() => next("nose")}/>
      <input type="button" value="next clothes" id="nextclothes" onClick={() => next("clothes")}/>

    </div>
  );
}

export default App;
