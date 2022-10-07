import React, { useState } from "react";
import "./App.css";
import data from "./data/mock-data.json";
import { nanoid } from "nanoid";
import ReadOnlyRow from "./Components/ReadOnlyRow";
import EditableRow from "./Components/EditableRow";
import ExpenseTable from "./Components/ExpenseTable";


const App = () => {
  const expensesData = [];

  data.map((data) => {
    expensesData.push({
      fullName: `${data.firstName} ${data.lastName}`,
      expenses: data.expenses,
    });
  });

  // console.log(expensesData);

  const [contacts, setContacts] = useState(data);
  const [addFormData, setAddFormData] = useState({
    firstName: "",
    lastName: "",
    totalExpenses: 0,
    expenses: [
      {
        category: "",
        description: "",
        cost: 0,
      },
    ],
  });

  const [editFormData, setEditFormData] = useState({
    firstName: "",
    lastName: "",
    totalExpenses: 0,
    expenses: [
      {
        category: "",
        description: "",
        cost: 0,
      },
    ],
  });

  const [editContactId, setEditContactId] = useState(null);

  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };

  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };

  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    const newContact = {
      id: nanoid(),
      firstName: addFormData.firstName,
      lastName: addFormData.lastName,
      totalExpenses: addFormData.totalExpenses,
      expenses: [addFormData.expenses]
    };
    
    const newContacts = [...contacts, newContact];

    setContacts(newContacts);
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedContact = {
      id: editContactId,
      firstName: editFormData.firstName,
      lastName: editFormData.lastName,
      totalExpenses: editFormData.totalExpenses,
      expenses: [editFormData.expenses]
    };

    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === editContactId);

    newContacts[index] = editedContact;

    setContacts(newContacts);
    setEditContactId(null);
  };

  const handleEditClick = (event, contact) => {
    event.preventDefault();
    setEditContactId(contact.id);

    const formValues = {
      firstName: contact.firstName,
      lastName: contact.lastName,
      totalExpenses: contact.totalExpenses,
    };

    setEditFormData(formValues);
  };

  const handleCancelClick = () => {
    setEditContactId(null);
  };

  const handleDeleteClick = (contactId) => {
    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === contactId);

    newContacts.splice(index, 1);

    setContacts(newContacts);
  };

  let categoriesTotal = {
    food: 0,
    travel: 0,
    equipment: 0,
  };

  expensesData.forEach((data) => {
    data.expenses.forEach((expense) => {
      switch (expense.category) {
        case "Food":
          categoriesTotal.food = Number(
            (categoriesTotal.food + expense.cost).toFixed(2)
          );
          break;
        case "Travel":
          categoriesTotal.travel = Number(
            (categoriesTotal.travel + expense.cost).toFixed(2)
          );
          break;
        case "Equipment":
          categoriesTotal.equipment = Number(
            (categoriesTotal.equipment + expense.cost).toFixed(2)
          );
          break;
      }
    });
  });

  return (
    <div className="app-container">
      {/* User Table  */}
      <form onSubmit={handleEditFormSubmit}>
        <table>
          <thead>
            <tr>
              <th>First</th>
              <th>Last</th>
              <th>Total Expenses</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => (
              <React.Fragment>
                {editContactId === contact.id ? (
                  <EditableRow
                    editFormData={editFormData}
                    handleEditFormChange={handleEditFormChange}
                    handleCancelClick={handleCancelClick}
                  />
                ) : (
                  <ReadOnlyRow
                    contact={contact}
                    handleEditClick={handleEditClick}
                    handleDeleteClick={handleDeleteClick}
                  />
                )}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </form>

      <h2>Add a Contact</h2>
      <form onSubmit={handleAddFormSubmit}>
        <input
          type="text"
          name="firstName"
          required
          placeholder="Enter a name..."
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="lastName"
          required
          placeholder="Enter lastName..."
          onChange={handleAddFormChange}
        />
        <input
          type="number"
          step="0.01"
          max="2500"
          name="totalExpenses"
          required
          placeholder="Enter Total Expenses..."
          onChange={handleAddFormChange}
        />
        <button type="submit">Add</button>
      </form>

      <br />

      <ExpenseTable contacts={contacts} />

      {/* Expense Table  */}


      <br />

      <h2>Company Expenses</h2>
      <form>
        <table>
          <thead>
            <tr>
              <th>Category</th>
              <th>Total ($)</th>
            </tr>
          </thead>

          <tr>
            <td>Food</td>
            <td>{categoriesTotal.food}</td>
          </tr>
          <tr>
            <td>Travel</td>
            <td>{categoriesTotal.travel}</td>
          </tr>
          <tr>
            <td>Equipment</td>
            <td>{categoriesTotal.equipment}</td>
          </tr>
        </table>
      </form>
    </div>
  );
};

export default App;
