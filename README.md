# Expense Tracker Application

### Project Description
This **Expense Tracker Application** is a React-based web application that helps users manage their financial transactions by tracking income and expenses. The app provides a clear and straightforward way to add, view, and delete transactions. Users can view their current balance, income, and expense totals, making it an effective tool for personal finance management.

---

### Features
1. **Add Transactions**:
   - Add transactions with a description and an amount (positive for income, negative for expense).

2. **Transaction List**:
   - Displays a list of all transactions with options to delete individual items.

3. **Balance Display**:
   - Shows the current balance based on the transactions.

4. **Income and Expense Summary**:
   - Separately displays total income and total expenses.

---

### Technologies Used
- **React**: Frontend framework for building UI components.
- **Context API**: For global state management across the app.
- **CSS**: For styling and layout.
- **JavaScript**: For logic and functionality.

---
## Demo Video

https://github.com/user-attachments/assets/1756dc09-5473-424e-92b6-081fabf85dbe


--- 
### How to Run the Project
1. **Clone the repository**:
   ```bash
   git clone https://github.com/nisch-mhrzn/Expense-Tracker
   ```
2. **Navigate to the project directory**:
   ```bash
   cd expense-tracker
   ```
3. **Install dependencies**:
   ```bash
   npm install
   ```
4. **Run the application**:
   ```bash
   npm start
   ```
   The application will open in your default browser at `http://localhost:3000`.

---

### Folder Structure
```
src/
├── components/
│   ├── AddTransaction.js
│   ├── Balance.js
│   ├── Header.js
│   ├── IncomeExpenses.js
│   ├── TransactionList.js
├── context/
│   ├── GlobalState.js
│   ├── AppReducer.js
├── App.css
├── App.js
├── index.js
```

---

### Functional Details
1. **Global State**:
   - Uses the `useReducer` hook and `Context API` to manage the application's state.
   - `GlobalProvider` wraps the app to provide state and actions globally.

2. **Adding Transactions**:
   - Users can enter a transaction description and amount.
   - New transactions are added with a unique ID.

3. **Deleting Transactions**:
   - Users can remove transactions from the list, which updates the balance, income, and expense summary.

4. **Dynamic Calculations**:
   - The balance, income, and expense values are dynamically updated using array methods like `map` and `reduce`.

---

### Future Enhancements
- Add user authentication for personalized data.
- Introduce categories for better transaction organization.
- Add graphical visualizations (e.g., pie charts, bar charts) for income and expense breakdowns.

