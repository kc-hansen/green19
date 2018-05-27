
import React, { Component } from 'react';
import './../_App.scss'
import axios from 'axios';


class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <div className="header">
                <a href={process.env.REACT_APP_RESUME}><button className='resume'>Resume Game</button></a>
                <div className="topName">Green9teen</div>
                <button className='resume'></button>
            </div>
        )
    }
}

export default Header;

