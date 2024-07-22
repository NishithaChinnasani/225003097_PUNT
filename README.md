# Text Editor with Font Selection

## Overview

This project is a simple text editor built using React and TypeScript. It allows users to select a font family, adjust font weight, and toggle italics for the entire text. The editor also includes auto-save functionality, which stores the text content and font settings locally in the browser. On page reload, the previously saved content and settings are restored.

## Features

- **Font Family Selector:** Choose from a list of Google Fonts.
- **Font Weight Selector:** Adjust font weight based on the selected font family.
- **Italic Toggle:** Enable or disable italic styling if supported by the selected font and weight.
- **Auto-save:** Automatically saves text content and font settings to local storage.
- **Load Saved State:** Restores the last used text content, font family, and weight on page reload.

## Setup and Installation

1.project setup
npx create-react-app text-editor --template typescript
cd text-editor
2.Install Dependencies
npm install
3.Create Components
4.npm start to run
Code Structure:
src/: Contains the source code.
components/: Includes reusable components such as FontSelector and FontWeightSelector.
TextEditor.tsx: Main text editor component where font family, weight, and italic settings are managed.
public/fonts.json: JSON file with font data.

Assumptions:
Font Data: The fonts.json file is assumed to be in the public directory and correctly formatted.
Local Storage: The application uses local storage for saving user settings and text. In a production environment, this would typically be replaced with a backend service.

Future Improvements:
Backend Integration: Implement a backend service for managing font data and user settings instead of using local storage.
Error Handling: Improve error handling, especially for network requests and local storage operations.
User Interface: Enhance the UI with more styling and better user experience.

Testing:
Unit Tests: Write unit tests for components and functions to ensure code reliability.
Manual Testing: Test the application manually to verify that all features work as expected.
If you have any questions or feedback, please reach out to your-email@example.com.
