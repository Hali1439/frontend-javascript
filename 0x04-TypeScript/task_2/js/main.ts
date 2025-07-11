// Interfaces
interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

// Classes implementing interfaces
class Director implements DirectorInterface {
  workFromHome(): string {
    return 'Working from home';
  }

  getCoffeeBreak(): string {
    return 'Getting a coffee break';
  }

  workDirectorTasks(): string {
    return 'Getting to director tasks';
  }
}

class Teacher implements TeacherInterface {
  workFromHome(): string {
    return 'Cannot work from home';
  }

  getCoffeeBreak(): string {
    return 'Cannot have a break';
  }

  workTeacherTasks(): string {
    return 'Getting to work';
  }
}

// Function that returns either a Director or Teacher
function createEmployee(salary: number | string): Director | Teacher {
  if (typeof salary === 'number' && salary < 500) {
    return new Teacher();
  }
  return new Director();
}

// Testing the function
console.log(createEmployee(200));    // Teacher
console.log(createEmployee(1000));   // Director
console.log(createEmployee('$500')); // Director

// ✅ Task 6 - isDirector type predicate
export function isDirector(employee: Teacher | Director): employee is Director {
  return (employee as Director).workDirectorTasks !== undefined;
}

// ✅ Task 6 - executeWork function
export function executeWork(employee: Teacher | Director): string {
  if (isDirector(employee)) {
    return employee.workDirectorTasks();
  } else {
    return employee.workTeacherTasks();
  }
}

// Example Test Cases
console.log(executeWork(createEmployee(200)));   // Getting to work
console.log(executeWork(createEmployee(1000)));  // Getting to director tasks

// ✅ Task 7 - String Literal Type
type Subjects = 'Math' | 'History';

export function teachClass(todayClass: Subjects): string {
  if (todayClass === 'Math') {
    return 'Teaching Math';
  }
  return 'Teaching History';
}

// Example Test Cases
console.log(teachClass('Math'));     // Teaching Math
console.log(teachClass('History'));  // Teaching History

