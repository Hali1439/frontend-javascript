// 1. Define the Student interface
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// 2. Create two student objects
const student1: Student = {
  firstName: "Halima",
  lastName: "Muktar",
  age: 28,
  location: "Addis Ababa",
};

const student2: Student = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  location: "Nairobi",
};

// 3. Store them in an array
const studentsList: Student[] = [student1, student2];

// 4. Create and render a table
const table = document.createElement("table");
table.border = "1";

// Create the header row
const headerRow = document.createElement("tr");
const headerFirstName = document.createElement("th");
const headerLocation = document.createElement("th");
headerFirstName.textContent = "First Name";
headerLocation.textContent = "Location";
headerRow.appendChild(headerFirstName);
headerRow.appendChild(headerLocation);
table.appendChild(headerRow);

// Loop through students and create rows
studentsList.forEach((student) => {
  const row = document.createElement("tr");

  const firstNameCell = document.createElement("td");
  firstNameCell.textContent = student.firstName;

  const locationCell = document.createElement("td");
  locationCell.textContent = student.location;

  row.appendChild(firstNameCell);
  row.appendChild(locationCell);
  table.appendChild(row);
});

// Append the table to the body
document.body.appendChild(table);
