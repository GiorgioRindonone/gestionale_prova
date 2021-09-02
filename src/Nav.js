import React from 'react'

import './style/App.scss';

// const navVoices = ['Home', 'Shop', 'About Me'];

const Nav = () => {

    
    return (       
        // container navigazione 
        <nav className="nav"> 
            {/* logo */}
            <img src="https://" />
            {/* input search */}
            <input type="text" />
            {/* div elemeni nav */}
            <div className="nav__container--icon">
                <ul>
                    <li><a href="https://"><span>1</span></a></li>
                    <li><a href="https://"><span>1</span></a></li>
                    <li><a href="https://"><span>1</span></a></li>
                    <li><a href="https://"><span>1</span></a></li>
                </ul>
            </div>
            <select className="">
                <option value="">Tivoli</option>
            </select>
        </nav>
    )
}

export default Nav;
