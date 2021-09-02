//react
import React from 'react'

//stile
import './style/App.scss';

//componenti
import Body from './Body';
import Nav from './Nav';
import Menu from './Menu';

//routing
//import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
    return (
        <div className="AppContainer">
            <Nav />
            <div className="containerMain">
                <Menu />
                <Body />
            </div>
            
        </div>
    );
}

export default App;