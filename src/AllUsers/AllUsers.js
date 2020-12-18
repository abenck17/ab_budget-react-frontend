import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import { Helmet } from 'react-helmet'

const TITLE = 'My Page Title'

class AllUsers extends Component {

    componentWillMount() {
        document.title = 'Your page title here';
      }

    render() {

        document.title = 'Your page title here';

        const allUsers = this.props.users.map(user => {
            console.log(user)
            return (
                <li key={user.id}>
                    <Link to={`/users/${user.id}`}>{user.name}</Link>
                    <button key={user.id} id={user.id} onClick={this.props.deleteUser}>Delete</button>
                </li>
            )
        })

        return (
<div>
            <Helmet>
                <title>{ TITLE }</title>
            </Helmet>

           

            

                 <h1> All Users </h1>
                 <form onSubmit={this.props.addUser}>
                     <input type="text" name="name"/>
                     <input type="text" name="username"/>
                     <input type="text" name="password"/>
                     <input type="submit" value="Add User"/>
                 </form>
                 {allUsers}
            </div>
        )
    }
}

export default AllUsers; 