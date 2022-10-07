# ld-app

## Introduction

This is a take-home project from Lean Data. Goal is to create a single page application containing 3 tables that allow you to add/edit/delete users, add/edit/delete expenses for each user, and display a summary of expenses by expense category. You are allowed to use any frontend framework and library to complete this assignment. Using the best of my abilities, I was unsuccessful in completing every objective laid out for this project, but did find other successes in learning about tables and how the useState method can manipulate data in React.

### Technologies

Project was created using create-react-app to kickstart, uses front end only. Can be run locally with node on localhost:3000. Fake data was created in mock-data.json and the application itself is stored in App.js. The application uses the front-end library React JS. A simple CSS file for styling was used, just to make the tables legible. 

## Required Functionality 

#### User Table
- [x] Table Columns: First Name, Last Name, Total Expenses

##### When adding/editing a user
- [x] First Name and Last Name should be standard input boxes
- [x] All fields must be filled out before being able to save the user
- [x] Multiple users can have the same name, but each user must still be considered unique
- [x] Total Expenses column is a read-only column when displaying or editing a user
- [ ] When editing/deleting a user, data in the other 2 tables should be updated as well

#### Expense Table
- [x] Table Columns: Full Name, Category, Description, Cost
##### When adding/editing an expense
- [x] Full Name should be a dropdown of users from the users table
- [ ] Category will be a dropdown with the following options: Food, Travel, Equipment
- [ ] Description will be a standard input box
- [ ] Cost will be a standard input box
- [ ] All fields must be filled out before being able to save the expense

- [x] Each expense should be displayed as a separate row in the table
- [ ] When editing/deleting an expense, data in the other 2 tables should be updated as well

#### Company Expenses Table
- [x] Table Columns: Category, Total ($)
- [x] This is a read-only table and will only display the total amount of expenses for each category

## Description

The mock data is first saved into state, then the functions therefore manipulate the state. For documentation on state see: [Using the State Hook - React](https://reactjs.org/docs/hooks-state.html)

7 unique functions are used in the App component to manipulate data. 
- `handleAddFormChange`  Adds the data from the inputs into state, using the inputs underneath. 
- `handleEditFormChange` Allows user to change data to state only. 
- `handleAddFormSubmit`  Adds the data entered into state into the data itself. 
- `handleEditFormSubmit` Adds the edited data from state into the data itself.
- `handleEditClick`  Makes sure the user only edits the selected data with id only.
- `handleCancelClick` Allows the user to cancel, and undo the changed state.
- `handleDeleteClick` Removes the selected data from state and then the data itself

`nanoid()` just returns a UUIDv4 string 

## Issues

The main wall I faced was dealing with the expenses data. I initially tried to add the expenses data into a separate json file, but realized that it would be difficult to tie in with the unique person that has an expense. So instead I just added an array of expenses into each person with unique id. Manipulating data with this is when I got stuck because the expenses data has different set up for the state. And some persons may have an empty array and some may not. Using state to manipulate the data deemed something out of my understanding, I tried multiple console logs with `data` but could not figure out how to capture just expenses.
getting the data to change table 1 from editing 2 was not something I could I achieve.

Making sure that the sum of expenses equated to the totalExpenses, although that wasn't really mentioned in the requirements. 

## Successes

To see a functioning table 1, open `index.js` and  replace `<App />`  with `<AppCopy />`

I was able to successfully render data into the tables it self. Although it does not appear to work, if you comment out any code that uses the `expenses` array, and remove the `expenses` property from every piece of data, the functionality of table 1 works. I was successfully able to Add/Edit/Delete/Save data. And the table would reflect that. Using `.map()` I was able to render both the other tables but table 2 and 3 at least. 

Using standard html `<inputs>` and `<select>` I was able to succesfully to make it required for the user to enter all pieces of information before submitting, and also uses the correct types. 

I was able to render table 3 which sums up the expenses by category. 

## Note 

Thank you for taking the time to read this, and giving me the oppurtinity. This is a coding project that I never done before and my exposure to using State with lot of data is limited. The majority of my experience is more standard styling and rendering components in react, and creating CMS properties. Allowing users to manipulate data is not something I have much experience in. I have much to learn and would like to learn this subject, as I found this project to be challenging and am in need of a challenge. 

Jack Lambert
[My Portfolio](https://jacklmbrt07.netlify.app/)