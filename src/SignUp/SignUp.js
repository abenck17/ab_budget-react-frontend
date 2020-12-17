import React, { Component } from 'react';
// import {Link} from 'react-router-dom'; 
// import './Signup.css'

class Signup extends Component {


    handleSubmit = (event) => { // multiple functions for the onSubmit
        event.preventDefault()

        this.props.addUser(event)
        this.props.history.push('/login')

    }



    render(){


        return (
            <div>
            <main>
                <h1>Sign Up</h1>
                <div className="logInForm">
                    {/* <form action="/auth/login" method="POST"> */}
                    <form onSubmit={this.handleSubmit}>
                    Name: <input type="text" name="name" className="formInput"/> <br />
                    <br />
                    Username: <input type="text" name="username" className="formInput" /> <br />
                    <br />
                    Password: <input type="password" name="password" className="formInput" /><br />
                    <br />
                    <input type="submit" value="Sign Up" className="signUpButton"/>
                    </form>
                </div>
            </main>
            {/* <button className="btn" onClick="document.location='/'"><i className="fa fa-home"></i></button> */}
            </div>
        )

        // <form onSubmit={this.props.addUser}>
        //              <input type="text" name="name"/>
        //              <input type="text" name="username"/>
        //              <input type="text" name="password"/>
        //              <input type="submit" value="Add User"/>
        //          </form>


    }
}

export default Signup;