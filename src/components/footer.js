import React from 'react';
import logo from '../assets/logo.png'

class Footer extends React.Component{
    render(){
        return(
        <div className="footer">
            <div className="footer-content">
                <p>Crafted by</p>
                <img src={logo} alt="logo"/>
            </div>

        </div> 

        );
    }

}

export default Footer;