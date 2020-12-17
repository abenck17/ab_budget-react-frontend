import React, { Component } from 'react';
import {Link, Redirect} from 'react-router-dom'; 
// import './Login.css'

class Login extends Component {

    handleSubmit = (event) => { // multiple functions for the onSubmit
        event.preventDefault()

        this.props.logIn(event)
        this.props.history.push('/')

    }



    render(){


            // if (this.props.loggedIn === "true") {
            //   return <Redirect to="/" />
            // }

            // console.log(this.props.loggedIn)

        return (
            <div>
            <main>
                <h1>Login</h1>
                <div className="logInForm">
                    {/* <form action="/auth/login" method="POST"> */}
                    <form onSubmit={this.handleSubmit}>
                    Username: <input type="text" name="username" className="formInput" /> <br />
                    <br />
                    Password: <input type="password" name="password" className="formInput" /><br />
                    <br />
                    <input type="submit" value="Login" className="signUpButton"/>
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

export default Login;