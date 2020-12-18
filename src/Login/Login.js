import React, { Component } from 'react';
import {Link} from 'react-router-dom'; 
import './Login.css'
const neededId = []

class Login extends Component {

    
    handleSubmit = (event) => { // multiple functions for the onSubmit
        event.preventDefault()

        // let allUsers = this.props.users
        // for (let i=0; i < allUsers; i++) {
        //     console.log(allUsers[i].username)
        // }
        
        // const neededId = this.props.users.find(user => {
        //     return 
        // })

        // console.log(event.target.username.value) 
        // console.log(this.props.users[0].username) 
        // const neededId = this.props.users.filter(user => event.target.username.value === this.props.users.username)
        // console.log(neededId)

        // const paramsId = parseInt(this.props.match.params.id)

        
        // const userDetail = this.props.users.find(user => {
        //     return user.id === paramsId
        // })
        
        // console.log(userDetail)

        let usersId = this.props.users[0].id

        this.props.logIn(event)
        this.props.history.push(`/users/${usersId}`)

    }


    render(){

            // if (this.props.loggedIn === "true") {
            //   return <Redirect to="/" />
            // }

            // console.log(this.props.loggedIn)

        return (
            <div>
            <main>
                {/* <h1>Login</h1> */}
                <div className="signUpForm">
                    <h2>Sign In</h2>
                        <h4>One account for everything, budgeting made easy LEARN MORE</h4>
                        {/* <form action="/auth/login" method="POST"> */}
                            <form onSubmit={this.handleSubmit}>
                            Username <input type="text" name="username" className="formInput" /> <br />
                            <br />
                            <br />
                            <br />
                            Password <input type="password" name="password" className="formInput" /><br />
                            <br />
                            <br />
                            <br />
                            <input type="submit" value="Login" className="signUpButton"/>
                            {/* <p>Don't have an account? <Link to="/signup">Sign Up!</Link></p> */}
                            </form>
                        
                </div>
                <Link to='/' className="btn">
                    <p className="fa fa-home"></p>
                </Link>
            </main>
            
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