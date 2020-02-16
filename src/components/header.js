import React from 'react';
import logo from '../assets/logo.png'

class Header extends React.Component{
    render(){
        return(
            <div className="top-seciton bg-custom-dark">
            <div  className="nav">
              <img className="logo" src={logo} />
              
              <ul>
                <li><a href="https://aito.ai">Aito.ai</a></li>
                <li><a href="https://github.com">Github</a></li>
              </ul>

            </div>
            <div className="top-content">
                <div className="top-left">
                    <h1 className="font-lato-bold">Trending this week.</h1>
                    <h3 className="font-sans-regular">See what the GitHub community is most excited about this week.</h3>

                </div>
            </div>
          
         </div>
        );
    }
}

export default Header;