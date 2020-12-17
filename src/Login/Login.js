import React, { Component } from 'react';
import {Link, Redirect} from 'react-router-dom'; 

// import './Login.css'

class Login extends Component {


    handleSubmit = (event) => { // multiple functions for the onSubmit
        event.preventDefault()

        this.props.logIn(event)
        this.props.history.push('/')

    }

    // handleSubmit = (event) => {
    //     event.preventDefault() 

    //     this.props.users.findOne({
    //         where: {
    //           username: users.username,
    //         },
    //       }).then((foundUser) => {
    //         if (foundUser) {
    //           bcrypt.compare(req.body.password, foundUser.password, (err, match) => {
    //             if (match) {
    //               const token = jwt.sign(
    //                 {
    //                   username: foundUser.username,
    //                   id: foundUser.id,
    //                 },
    //                 process.env.JWT_SECRET,
    //                 {
    //                   expiresIn: "30 days",
    //                 }
    //               );
    //               console.log(token);
    //           res.cookie("jwt", token); // SEND A NEW COOKIE TO THE BROWSER TO STORE TOKEN
    //               res.redirect(`/users/${foundUser.id}`);
    //             } else {
    //               return res.sendStatus(400); // status(400) bad request
    //             }
    //           });
    //         }
    //       });
    // }



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