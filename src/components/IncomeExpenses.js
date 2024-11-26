import React ,{useContext}from 'react'
import { GlobalContext } from '../context/GlobalState'
export const IncomeExpenses = () => {
  const {transactions} = useContext(GlobalContext)
  const amount = transactions.map(transaction => transaction.amount);
  // const total = amount.reduce((acc, current) => (acc += current),0).toFixed(2);
  const income = amount.filter(item => item > 0).reduce((acc, current) => (acc += current),0).toFixed(2);
  const expense = (amount.filter(item => item <0).reduce((acc, current) => (acc += current),0)*-1).toFixed(2);
  return (
        <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p className="money plus">{income}</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className="money minus">{expense}</p>
      </div>
    </div>

  )
}
