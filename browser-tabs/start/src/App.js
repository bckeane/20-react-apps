import React, { useState } from 'react';
import './App.css';

function Tab({children}){
  const[highlightStyle, setHighlightStyle] = useState({left: 0, opacity: 0});

  function moveHighlight(e){
      setHighlightStyle({
        left: e.nativeEvent.layerX - 150 ,
      });
  }

  function hideHighlight(e){
       setHighlightStyle({
         opacity: 0,
         left: e.nativeEvent.layerX - 150,
       });
  }

  return (
    <div className="tab" onMouseOut={hideHighlight} onMouseMove={moveHighlight}> 
            <div className="highlight" style={highlightStyle}></div>
            {children}
          </div>
  )
}

function App() {



  return (
    <div className="app">
      <div className="browser">
        <div className="tabs">
         <Tab> <a>Home</a> </Tab>
         <Tab> <a>About</a> </Tab>
         <Tab> <a>Features</a> </Tab>
        </div>

        <div className="viewport">Pages Go Here</div>
      </div>
    </div>
  );
}

export default App;
