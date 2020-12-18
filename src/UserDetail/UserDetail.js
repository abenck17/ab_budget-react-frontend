import React, {Component} from 'react'
import {Link} from 'react-router-dom'; 
import "./UserDetail.css"

class UserDetail extends Component {

     openForm = () => {
        document.getElementById("myForm").style.display = "block";
      }
      
     closeForm = () => {
        document.getElementById("myForm").style.display = "none";
      }

      openForm1 = () => {
        document.getElementById("myForm1").style.display = "block";
      }
      
     closeForm1 = () => {
        document.getElementById("myForm1").style.display = "none";
      }

      openForm2 = () => {
        document.getElementById("myForm2").style.display = "block";
      }
      
     closeForm2 = () => {
        document.getElementById("myForm2").style.display = "none";
      }

      myFunction= () => {
        var popup = document.getElementById("myPopup");
        popup.classList.toggle("show");
      }

      myFunction1= () => {
        var popup = document.getElementById("myPopup1");
        popup.classList.toggle("show");
      }
      
    //   monthlyBalanceColorRed = () => {
    //      document.getElementById("monthlyBalances").style.color = "red";
    //   }

    //   monthlyBalanceColorGreen = () => {
    //     document.getElementById("monthlyBalances").style.color = "green";
    //   }


    render() {

        // console.log(this.props.users)
        // console.log(this.props.user_incomes)
        // console.log(this.props.user_expenses)

        const paramsId = parseInt(this.props.match.params.id)

        
        const userDetail = this.props.users.find(user => {
            return user.id === paramsId
        })
        
        console.log(userDetail)
        
        const userIncomeDetail = this.props.user_incomes.filter(user_income => user_income.user_id === userDetail.id)

        console.log("user income detail", userIncomeDetail)

        const userExpenseDetail = this.props.user_expenses.filter(user_expense => user_expense.user_id === userDetail.id)

        console.log("user expense detail", userExpenseDetail)

        const userIncomeList = userIncomeDetail.map(incomeList => {
            return <ul key={incomeList.id}>
                    <li>{incomeList.income_name}</li>
                    <li>{incomeList.income_type}</li>
                    <li>{incomeList.income_reocurrence}</li>
                    <li>{incomeList.income_amount}</li>
                    </ul>
        })

        let incomeTotal = 0 

        const userIncomeTotal = userIncomeDetail.map(income => {
            return income.income_amount
        })

        for (let i = 0; i < userIncomeTotal.length; i++) {
            incomeTotal = incomeTotal + userIncomeTotal[i]
        }

        console.log(userIncomeTotal)
        console.log("incomeTotal", incomeTotal)

        const userExpenseList = userExpenseDetail.map(expenseList => {
            return <ul key={expenseList.id}>
                    <li>{expenseList.expense_name}</li>
                    <li>{expenseList.expense_type}</li>
                    <li>{expenseList.expense_reocurrence}</li>
                    <li>{expenseList.expense_amount}</li>
                    </ul>
        })

        let expenseTotal = 0 

        const userExpenseTotal = userExpenseDetail.map(expense => {
            return expense.expense_amount
        })

        for (let i = 0; i < userExpenseTotal.length; i++) {
            expenseTotal = expenseTotal + userExpenseTotal[i]
        }

        console.log(userExpenseTotal)
        console.log("expenseTotal", expenseTotal)

        const monthlyBalance = incomeTotal - expenseTotal

        // if (monthlyBalance < 0) {
        //     this.monthlyBalanceColorRed()
        // } else {
        //     this.monthlyBalanceColorGreen()
        // }

        // if (monthlyBalance < 0) {
        //     document.querySelector(".red").style.visibility = "visible"
        // } else {
        //     document.querySelector(".green").style.visibility = "visible"
        // }

        console.log(document.querySelector(".red"))
        console.log(document.querySelector(".green"))



        return (
            <div className="body1">
                <div className="extraBody1">
                    <div className="userName">
                        <h1>
                            {userDetail.name}'s Budget
                        </h1>
                    </div>

                    <div className="monthlyBalance">
                        <p>
                            Monthly Balance = Monthly Income Total (${incomeTotal}) - Monthly Expense Total (${expenseTotal})
                            = $ {monthlyBalance}
                        </p>
                        {/* <div className="red" style={{color:"red"}, {visibility:"hidden"}} >{monthlyBalance}</div>
                        <div className="green" style={{color:"green"}, {visibility:"hidden"}}>{monthlyBalance}</div> */}
                    </div>

                    <div className="incomeTotal">
                        <h3>Income Total</h3>
                            <div className="popup" onClick={this.myFunction}>
                                <a>$ {incomeTotal}</a>
                                <span className="popuptext" id="myPopup">{userIncomeList}</span>
                            </div>
                    </div>

                    <div className="expenseTotal">
                        <h3>Expense Total</h3>
                        <div className="popup1" onClick={this.myFunction1}>
                                <a>$ {expenseTotal}</a>
                                <span className="popuptext1" id="myPopup1">{userExpenseList}</span>
                            </div>
                    </div>

                    {/* <ul>{userIncomeList}</ul>
                    <ul>{userExpenseList}</ul> */}

                    <button className="open-button" onClick={this.openForm}>Update User</button>

                    <div className="form-popup" id="myForm">
                        <h5>Edit User</h5>
                            <form onSubmit={this.props.updateUser} action="/action_page.php" className="form-container">
                                <input type="hidden" name="userId" value={userDetail.id}/>
                                <label htmlFor="name"><b>Name</b></label>
                                <input type="text" name="name" placeholder={userDetail.name} />
                                <label htmlFor="username"><b>Username</b></label>
                                <input type="text" name="username" placeholder={userDetail.username} />
                                <label htmlFor="psw"><b>Password</b></label>
                                <input type="text" name="password" placeholder={userDetail.password} />

                                <button type="submit" className="btn">Update User</button>
                                <button type="button" className="btn cancel" onClick={this.closeForm}>Close</button>
                            </form>
                    </div>

                    <button className="open-button1" onClick={this.openForm1}>Add User Income</button>

                    <div className="form-popup1" id="myForm1">
                        <h5>Add a new user income</h5>
                            <form onSubmit={this.props.addUserIncome}>
                                <input type="hidden" name="userId" value={userDetail.id}/>
                                <input type="hidden" name="user_id" value={userDetail.id}/>
                                <input type="text" name="income_name" placeholder="income name"/>
                                <input type="text" name="income_type" placeholder="income type"/>
                                <input type="integer" name="income_reocurrence" placeholder="income reocurrence"/>
                                <input type="integer" name="income_amount" placeholder="income amount"/>
                                <input type="submit" value="Add User Income"/>
                                <button type="button" class="btn cancel" onClick={this.closeForm1}>Close</button>
                            </form>
                    </div>
                    
                    <button className="open-button2" onClick={this.openForm2}>Add User Expense</button>

                    <div className="form-popup2" id="myForm2">
                        <h5>Add a new user expense</h5>
                            <form onSubmit={this.props.addUserExpense}>
                                <input type="hidden" name="userId" value={userDetail.id}/>
                                <input type="hidden" name="user_id" value={userDetail.id}/>
                                <input type="text" name="expense_name" placeholder="expense name"/>
                                <input type="text" name="expense_type" placeholder="expense type"/>
                                <input type="integer" name="expense_reocurrence" placeholder="expense reocurrence"/>
                                <input type="integer" name="expense_amount" placeholder="expense amount"/>
                                <input type="submit" value="Add User Expense"/>
                                <button type="button" class="btn cancel" onClick={this.closeForm2}>Close</button>
                            </form>
                    </div>
                    <Link to='/' className="btn1">
                        <p className="fa fa-home"></p>
                    </Link>
                </div>
            </div>

        )
    }
}

export default UserDetail;