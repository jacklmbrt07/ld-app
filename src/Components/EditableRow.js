import React from "react";

const EditableRow = ({
  editFormData,
  handleEditFormChange,
  handleCancelClick,
}) => {
  return (
    <tr>
      <td>
        <input
          type="text"
          name="firstName"
          required
          placeholder="Enter First Name..."
          onChange={handleEditFormChange}
          value={editFormData.firstName}
        />
      </td>
      <td>
        {" "}
        <input
          type="text"
          name="lastName"
          required
          placeholder="Enter Last Name..."
          onChange={handleEditFormChange}
          value={editFormData.lastName}
        />
      </td>
      <td>
        {" "}
        <input
          type="number"
          step="0.01"
          max="2500"
          name="totalExpenses"
          required
          placeholder="Enter Total Expenses..."
          onChange={handleEditFormChange}
          value={editFormData.totalExpenses}
        />
      </td>
      <td>
        <button type="submit">Save</button>
        <button type="button" onClick={handleCancelClick}>
          Cancel
        </button>
      </td>
    </tr>
  );
};

export default EditableRow;
