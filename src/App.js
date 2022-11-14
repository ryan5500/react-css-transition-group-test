import React, { useState } from 'react';
import './App.css';
import { SwitchTransition, CSSTransition } from 'react-transition-group'; // ES6

function Fade() {
    const nodeRef = React.useRef(null);
    const [display, setDisplay] = useState(true);

    const duration = 300;
    const defaultStyle = {
      transition: `opacity ${duration}ms ease-in-out`,
      opacity: 0,
    }

    const appearTransitionStyles = {
      entering: { opacity: 1 },
      entered:  { opacity: 1 },
      exiting:  { opacity: 0 },
      exited:   { opacity: 0 },
    };

    const data = display ? "in" : "out";

    return (
      <div>
        <button onClick={() => { setDisplay(display => !display); }}>toggle display</button>
        <SwitchTransition mode="out-in">
            <CSSTransition nodeRef={nodeRef} key={display} timeout={duration}>
              {state => (
                <div ref={nodeRef} style={{ ...defaultStyle, ...appearTransitionStyles[state]}}>
                  <p>{data}</p>
                </div>
              )}
            </CSSTransition>
        </SwitchTransition>
      </div>
    );
}

function App() {
  return (
    <div className="App">
      <Fade />
    </div>
  );
}

export default App;
