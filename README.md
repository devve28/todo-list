# TODO List Application

This project is a TODO list application designed to meet specific requirements and conditions. The application allows users to add, manage, and filter tasks. The code is written in a clean, maintainable style and adheres to the provided guidelines.

## Requirements

### Task Creation:
- An input field for the task title.
- An input field for the task description.
- An "Add" button to create a new task.

### Task Management:
- Each task has a checkbox to indicate its status (completed or not).
- Tasks can be deleted.
- Completed tasks are displayed after incomplete tasks.
- A filter to show only incomplete tasks, which hides completed tasks.

### Additional Constraints:
- Functional components are not allowed.
- Task display must be in a separate component.
- Task names cannot:
  - Be empty.
  - Start with whitespace characters.
  - End with whitespace characters.
- Each task displays the time it was created.
- The option to delete a task appears when hovering over the task.
- Code style is consistent and adheres to the general style guide.
- Class names, function names, and variable names are concise and descriptive.
- The code does not contain unnecessary comments, files, or unused code.
- The application has a clean and tidy appearance.

### Layout
The application layout aims to be visually appealing and user-friendly. UI and UX improvements are encouraged.

### Additional Features (Optional)
- Comments in the main component about additional tasks that were completed.
- The application is responsive to different screen sizes.
- On mobile devices, alternative methods for task deletion are implemented since "hover" is not available.

## Project Structure

TODO-List/ │ ├── src/
           │ ├── components/ 
           │ │ ├── Task.js # Task display component
           │ │ └── TaskList.js # Main task list component
           │ │
           │ ├── utils/ 
           │ │ └── helpers.js # Helper functions for validation, etc.
           │ │ │ ├── App.js # Main application component
           │ ├── index.js # Entry point 
           │ └── styles.css # CSS styles 
           │ ├── public/
           │ ├── index.html # HTML template
           │ ├── package.json # Project metadata and dependencies 
           └── README.md # Project documentation

markdown


## Installation

### Prerequisites
- Node.js (for running the development environment)
- npm or yarn (for managing dependencies)

### Setup Instructions

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/todo-list.git
Navigate to the project directory:

bash
Копировать код
cd todo-list
Install the dependencies:

bash
Копировать код
npm install
# or
yarn install
Start the development server:

bash
Копировать код
npm start
# or
yarn start
Open http://localhost:3000 in your browser to view the application.

Usage
Add a new task by entering a title and description, then clicking "Add".
Mark tasks as completed by checking the checkbox.
Delete tasks by hovering over them and clicking the delete button.
Use the filter to show only incomplete tasks.
Contributing
Fork the repository.
Create a new branch.
Make your changes.
Submit a pull request.
License
This project is open-source and available under the MIT License.
