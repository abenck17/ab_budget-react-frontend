import React, {Component} from 'react'

class UserDetail extends Component {

    render() {

        console.log(this.props.users)
        console.log(this.props.user_incomes)
        console.log(this.props.user_expenses)

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

        const userExpenseList = userExpenseDetail.map(expenseList => {
            return <ul key={expenseList.id}>
                    <li>{expenseList.expense_name}</li>
                    <li>{expenseList.expense_type}</li>
                    <li>{expenseList.expense_reocurrence}</li>
                    <li>{expenseList.expense_amount}</li>
                    </ul>
        })

        return (
            <div>
                <h1>
                    {userDetail.name}
                </h1>
                <h5>Edit User</h5>
                <form onSubmit={this.props.updateUser}>
                    <input type="hidden" name="userId" value={userDetail.id}/>
                    <input type="text" name="name" placeholder={userDetail.name} />
                    <input type="text" name="username" placeholder={userDetail.username} />
                    <input type="text" name="password" placeholder={userDetail.password} />
                    <input type="submit" value="Update Artist"/>
                </form>

                <h5>Add a new user income</h5>
                <form onSubmit={this.props.addUserIncome}>
                    <input type="hidden" name="userId" value={userDetail.id}/>
                    <input type="hidden" name="user_id" value={userDetail.id}/>
                    <input type="text" name="income_name" />
                    <input type="text" name="income_type" />
                    <input type="integer" name="income_reocurrence" />
                    <input type="integer" name="income_amount" />
                    <input type="submit" value="Add User Income"/>
                </form>

                <h5>Add a new user expense</h5>
                <form onSubmit={this.props.addUserExpense}>
                    <input type="hidden" name="userId" value={userDetail.id}/>
                    <input type="hidden" name="user_id" value={userDetail.id}/>
                    <input type="text" name="expense_name" />
                    <input type="text" name="expense_type" />
                    <input type="integer" name="expense_reocurrence" />
                    <input type="integer" name="expense_amount" />
                    <input type="submit" value="Add User Expense"/>
                </form>

                <ul>{userIncomeList}</ul>
                <ul>{userExpenseList}</ul>
            </div>

        )
    }
}

export default UserDetail;