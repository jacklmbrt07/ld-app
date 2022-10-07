import React from "react";
import ExpenseRow from "./ExpenseRow";

const ExpenseTable = ({ contacts, expensesData }) => {
  const categoryNames = ["Food", "Travel", "Equipment"];

  return (
    <div>
      <form>
        <table>
          <thead>
            <tr>
              <th>Full Name</th>
              <th>Category</th>
              <th>Description</th>
              <th>Cost</th>
            </tr>
          </thead>
          <tbody></tbody>
          <tbody>
            {contacts.map((contact, i) => {
              let name = `${contact.firstName} ${contact.lastName}`;
              return (
                <ExpenseRow
                  key={i}
                  expensesData={contact.expenses}
                  name={name}
                />
              );
            })}
          </tbody>
        </table>
      </form>
      {/* <h2>Add an Expense</h2>*/}
      <form>
        <label for="expenses">Choose a person:</label>
        <select name="fullName" id="fullName">
          {contacts.map((contact, i) => {
            let name = `${contact.firstName} ${contact.lastName}`;

            return (
              <option key={i} value={name}>
                {name}
              </option>
            );
          })}
        </select>
        <label for="category">Choose a category:</label>
        <select name="expenses[category]" id="category">
          {categoryNames.map((name, i) => (
            <option key={i} value={name}>
              {name}
            </option>
          ))}
        </select>
        <input
          type="text"
          name="expenses[description]"
          required
          placeholder="Enter Description..."
        />
        <input
          type="number"
          step="0.01"
          max="2500"
          name="expenses[cost]"
          required
          placeholder="Enter Cost..."
        />
        <button type="submit">Add</button>
      </form>{" "}
    </div>
  );
};

export default ExpenseTable;
