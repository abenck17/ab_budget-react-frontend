import React, { Component } from 'react';
import {Link} from 'react-router-dom'; 
import './Homepage.css'

class Homepage extends Component {
    render(){

        // if (this.props.loggedIn === "true") {
        //     return this.props.homePage
        //   }

        //   console.log(this.props.loggedIn)

      
        // if (this.props.loggedIn === "true" || this.props.loggedIn === "false") {
            return (
            <div className="body">
                <div className="extraBody">
                <h1><i>Benck</i> Budget</h1>
                  
                    <div className="homepageNav">
                        <nav className="homepageNavBar">
                            <Link to='/signup' className="homepageLink">
                                SIGN UP
                            </Link>
                            <Link to='/login' className="homepageLink">
                                SIGN IN
                            </Link>
                            <Link to='/allusers' className="homepageLink">
                                ABOUT US
                            </Link>
                        </nav>
                        
                </div>
            </div>

                <footer className="footer">
                    <p>&copy; 2020 Benck Budget | Austin  Benckendorf GA student &middot;</p>
                </footer>
                
            </div>


        )


        }
    }



export default Homepage