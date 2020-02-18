import React from 'react';
import ReactDOM from 'react-dom';
import App from './paltrows-power-toes/App';
import { BrowserRouter } from "react-router-dom";
import './index.css';
// import HelloWorld from './state-drills/HelloWorld'
// import Bomb from './state-drills/Bomb'
// import RouletteGun from './state-drills/RouletteGun'

// ReactDOM.render(<HelloWorld />, document.getElementById('root'));
// ReactDOM.render(<Bomb />, document.getElementById('root'));
// ReactDOM.render(<RouletteGun bulletInChamber={8}/>, document.getElementById('root'));

// ReactDOM.render(<App />, document.getElementById('root'));

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById('root')
);

