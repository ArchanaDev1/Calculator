# Calculator Application

This is a simple calculator application built using HTML, CSS, and JavaScript. It supports basic arithmetic operations (addition, subtraction, multiplication, division) as well as advanced functions such as square root calculation.

# Features

- Basic Arithmetic Operations:
  - Addition (`+`)
  - Subtraction (`-`)
  - Multiplication (`*`)
  - Division (`/`)
  
- # Advanced Operations:

  - Square root calculation (`√`)

- # Additional Functionalities:
  - Clear input (`AC`)
  - Delete one character (`DE`)
  - Prevents division by zero errors
  - Toggle visibility of advanced operations using the "more" button
  - Responsive button size change when more options are shown or hidden

- # Keyboard Support:
  - Numbers, operators (`+`, `-`, `*`, `/`)
  - Decimal point (`.`)
  - Enter (`=`) to calculate
  - Backspace (`DE`) to delete one character
  - Escape (`AC`) to clear the display
  - `r` key for square root

# File Structure

- `index.html`: The HTML structure of the calculator
- `style.css`: The styling for the calculator
- `script.js`: The JavaScript logic for performing calculations (included in the HTML file as an inline script)

# How to Run

1. Download the project files or clone the repository.
2. Open the `index.html` file in your browser.

# Calculator Buttons

- AC is used to Clears all inputs
- DE is used Deletes the last entered character
- +, -,*, / is used to Basic operators
- 00,0 - Number inputs
- . is used for Decimal point for floating-point calculations
- = ise used to Performs the calculation based on the input
- √ is used to Calculates the square root of the current input
- more is used to Toggles the square root function button visibility

# JavaScript Functions

- `addInput(char)`: Adds a character to the display (handles operator restrictions).
- `deleteOne()`: Deletes the last character in the input.
- `deleteAll()`: Clears the entire input.
- `calculate()`: Evaluates the input expression and handles errors like division by zero.
- `calculateSquareRoot()`: Evaluates the square root of the current input.
- `toggleMore()`: Toggles the visibility of the square root button and adjusts the size of other buttons.

# CSS Styling

- # Calculator Layout: 
  - The calculator is centered in the screen with a responsive design.
  - Button styles include shadows for a 3D effect and smooth hover transitions.
  
- # The `more` button: 
  - Used to show/hide additional functionality (square root).
  - When additional options are shown, button sizes are adjusted dynamically.

# License

This project is open-source and free to use.
