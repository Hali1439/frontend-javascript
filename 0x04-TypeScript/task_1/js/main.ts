// Define Teacher interface
export interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  location: string;
  yearsOfExperience?: number;
  [key: string]: any; // allow additional properties
}

// Create a Teacher object with extra property
const teacher3: Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  fullTimeEmployee: false,
  location: 'London',
  contract: false,
};

console.log(teacher3);

// Extend Teacher to create Directors interface
export interface Directors extends Teacher {
  numberOfReports: number;
}

// Example usage of Directors
const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log(director1);

// Interface for printTeacher function
export interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// Implementing the function
export const printTeacher: printTeacherFunction = (firstName, lastName) => {
  return `${firstName.charAt(0)}. ${lastName}`;
};

console.log(printTeacher("John", "Doe")); // Output: J. Doe

// Interface for the StudentClass constructor
export interface StudentConstructor {
  new(firstName: string, lastName: string): StudentInterface;
}

// Interface describing the class
export interface StudentInterface {
  workOnHomework(): string;
  displayName(): string;
}

// Implementing the class
export class StudentClass implements StudentInterface {
  constructor(private firstName: string, private lastName: string) {}

  workOnHomework(): string {
    return 'Currently working';
  }

  displayName(): string {
    return this.firstName;
  }
}

// Example usage
const student = new StudentClass('Halima', 'Muktar');
console.log(student.displayName());       // Output: Halima
console.log(student.workOnHomework());    // Output: Currently working
