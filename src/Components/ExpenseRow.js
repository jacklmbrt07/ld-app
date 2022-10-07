import React, { useState } from "react";
import { nanoid } from "nanoid";

const ExpenseRow = ({ expensesData, name, key }) => {
  const categoryNames = ["Food", "Travel", "Equipment"];

  const [expenses, setExpenses] = useState(expensesData);

  const [addExpenseFormData, setAddExpenseFormData] = useState({
    category: "",
    description: "",
    cost: 0,
  });

  // how can I pass in these functions in without iterating form?
  const handleAddExpenseFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newExpenseFormData = { ...addExpenseFormData };
    newExpenseFormData[fieldName] = fieldValue;

    setAddExpenseFormData(newExpenseFormData);
  };

  const handleAddExpenseFormSubmit = (event) => {
    event.preventDefault();

    const newExpense = {
      id: nanoid(),
      category: addExpenseFormData.category,
      description: addExpenseFormData.description,
      cost: addExpenseFormData.cost,
    };

    const newExpenses = [...expenses, newExpense];

    setExpenses(newExpenses);
  };

  console.log("contact.expenses", expenses);
  return (
    <React.Fragment key={key}>
      {expenses.map((expense) => {
        return (
          <tr>
            <td>{name}</td>
            <td>{expense.category}</td>
            <td>{expense.description}</td>
            <td>{expense.cost}</td>
          </tr>
        );
      })}
      <form onSubmit={handleAddExpenseFormSubmit}>
        <h2>Add an Expense</h2>
        <label for="expenses">Choose a person:</label>
        <select id="fullName">
          <option value={name}>{name}</option>
        </select>
        <label for="category">Choose a category:</label>
        <select
          name="expense.category"
          id="category"
          onChange={handleAddExpenseFormChange}
        >
          {categoryNames.map((name, i) => (
            <option key={i} value={name}>
              {name}
            </option>
          ))}
        </select>
        <input
          type="text"
          name="expense.description"
          required
          placeholder="Enter Description..."
          onChange={handleAddExpenseFormChange}
        />
        <input
          type="number"
          step="0.01"
          max="2500"
          name="expense.cost"
          required
          placeholder="Enter Cost..."
          onChange={handleAddExpenseFormChange}
        />
        <button type="submit">Add</button>
      </form>{" "}
    </React.Fragment>
  );
};

export default ExpenseRow;
