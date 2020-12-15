import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';
import axios from 'axios';
import {Route, Link, Switch} from 'react-router-dom'
import AllUsers from './AllUsers'
import UserDetail from './UserDetail'

const backendUrl = "http://localhost:3000/api"

class App extends Component {
  constructor() {
    super()

    this.state = {
      users: [],
      user_incomes: [],
      user_expenses: []
    }
  }

  // calling getArtists before it's stated
  componentDidMount() {
    this.getUsers()
    this.getUserIncomes()
    this.getUserExpenses()
  }

  getUsers = async () => {
    const response = await axios(`${backendUrl}/users`) // axios get request

    this.setState({
      users: response.data.users
    })
  }

  getUserIncomes = async () => {
    const response = await axios(`${backendUrl}/user_incomes`) // axios get request

    this.setState({
      user_incomes: response.data.allUserIncomes
    })
  }

  getUserExpenses = async () => {
    const response = await axios(`${backendUrl}/user_expenses`) // axios get request

    this.setState({
      user_expenses: response.data.allUserExpenses
    })
  }

  // getUserExpenses = async () => {
  //   const response = await axios(`${backendUrl}/user_expenses`) // axios get request

  //   this.setState({
  //     user_expenses: response.data.allUserExpenses
  //   })
  // }

  addUser = async(event) => {
    event.preventDefault()

    await axios.post(`${backendUrl}/auth/signup`, { // axios post request
      name: event.target.name.value,
      username: event.target.username.value,
      password: event.target.password.value
    })

    this.getUsers()
    
  }

  addUserIncome = async(event) => {
    event.preventDefault()

    await axios.post(`${backendUrl}/user_incomes`, { // axios post request
      user_id: event.target.user_id.value,
      income_name: event.target.income_name.value,
      income_type: event.target.income_type.value,
      income_reocurrence: event.target.income_reocurrence.value,
      income_amount: event.target.income_amount.value
    })

    this.getUserIncomes()
    
  }

  addUserExpense = async(event) => {
    event.preventDefault()

    await axios.post(`${backendUrl}/user_expenses`, { // axios post request
      user_id: event.target.user_id.value,
      expense_name: event.target.expense_name.value,
      expense_type: event.target.expense_type.value,
      expense_reocurrence: event.target.expense_reocurrence.value,
      expense_amount: event.target.expense_amount.value
    })

    this.getUserExpenses()
    
  }

  // addSong = async(event) => {
  //   event.preventDefault()

  //   let artistId = event.target.artistId.value

  //   await axios.post(`${backendUrl}/artists/${artistId}/newsong`, {
  //     title: event.target.title.value,
  //     artistId: artistId
  //   })

  //   this.getArtists() // combining a post and get request 
  // }

  updateArtist = async(event) => {
    event.preventDefault()

    let artistId = event.target.artistId.value

    await axios.put(`${backendUrl}/artists/${artistId}`, {
      name: event.target.name.value,
      artistId: artistId
    })

    this.getArtists()
  }

  deleteUser = async(event) => {
    event.preventDefault()

    let userId = event.target.id

    await axios.delete(`${backendUrl}/users/${userId}`)

    this.getUsers()
  }

  render() {


    return (
      <div className="App">
        <nav>
          <Link to="/">HomePage</Link>
        </nav>

        <main>
          <Switch>

            <Route exact path="/" component={() => 
            <AllUsers users={this.state.users} addUser={this.addUser} deleteUser={this.deleteUser}/>}/>

            <Route path="/users/:id" component={(routerProps) => 
            <UserDetail users={this.state.users} user_incomes={this.state.user_incomes} user_expenses={this.state.user_expenses}
            addUserIncome={this.addUserIncome} addUserExpense={this.addUserExpense}
            {...routerProps} updateArtist={this.updateArtist}/>}/> 
          </Switch>
        </main>
      </div>
    );
  }
  
  }
  
export default App;
