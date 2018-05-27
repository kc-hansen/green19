import React, { Component } from 'react';
import Header from './../components/header';

export default class Home extends Component {
    render() {
        return (
            <div className='Apps'>
            <Header/>
                <div className='loginbox'>
                    {/* <a href={process.env.REACT_APP_LOGIN}><button className='title'>START</button></a> */}
                    {/* <a href={process.env.REACT_APP_CONTINUE}><button className='title'>CONTINUE</button></a> */}
                </div>
            </div>
        )
    }
}
