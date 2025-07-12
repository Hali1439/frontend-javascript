# 0x04. TypeScript

## 📌 Description

This project introduces the fundamentals of **TypeScript**, a strongly typed superset of JavaScript that compiles to plain JavaScript. The tasks focus on mastering:

- Basic and advanced typing
- Interfaces and classes
- DOM manipulation with TypeScript
- Using ambient namespaces
- Project setup using Webpack and TypeScript configuration
- Practical object-oriented programming in a TypeScript environment

All code is transpiled and bundled using **Webpack** and follows TypeScript best practices.

---

## 📂 Project Structure

Each task is organized under its own folder:


---

## ✅ Tasks

### `task_0`: Student Interface & DOM Manipulation
- Defines a `Student` interface.
- Creates and renders student data into an HTML table.
- Uses TypeScript with Webpack for project setup and compilation.

### `task_1`: Interfaces, Classes, and Utility Functions
- Builds `Teacher`, `Directors`, and `StudentClass` interfaces.
- Implements a class with typed methods and constructor.
- Uses string manipulation with a `printTeacher` function.

### `task_2`: Advanced Typing
- Uses interfaces with methods (`TeacherInterface`, `DirectorInterface`).
- Implements classes with logic based on salary input.
- Demonstrates type guards (`isDirector`) and conditional logic (`executeWork`).
- Uses literal string types (`Subjects`) for class names.

### `task_3`: Ambient Namespaces
- Defines `RowID` and `RowElement` types.
- Creates type declarations for a third-party CRUD library.
- Uses ambient declarations with triple-slash directive and type-safe CRUD operations.

---

## 🛠 Installation & Build

To build and run any task locally:

```bash
# Navigate to a task directory
cd task_0

# Install dependencies
npm install

# Build project
npm run build

# Start live dev server (if configured)
npm run start-dev
