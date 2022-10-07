import React, {useState} from "react";
import { nanoid } from "nanoid";

const ExpenseRow = ({ expensesData, name, key }) => {
  const [expenses, setExpenses] = useState(expensesData);

  const [addExpenseFormData, setAddExpenseFormData] = useState({
    category: "",
    description: "",
    cost: 0,
  });

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
      cost: addExpenseFormData.cost
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
    </React.Fragment>
  );
};

export default ExpenseRow;

