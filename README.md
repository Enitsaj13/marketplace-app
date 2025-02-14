Marketplace App

A Marketplace App built with React Native and TypeScript.
This app allows users to browse products, view details, add items to their cart, and more.
It uses modern libraries like zustand for state management, react-navigation for navigation, and expo for cross-platform development.

Table of Contents

1. Features
2. Prerequisites
3. Setup Instructions
4. Running the App
5. Project Structure
6. Dependencies
7. Contributing
8. License

Features

- Product Browsing: View a list of products with details like name, price, category, and distance.
- Product Details: Tap on a product to view more details in a modal.
- Add to Cart: Add products to the cart with a single tap.
- Toast Notifications: Get feedback when adding items to the cart.
- Responsive Design: Works on both Android and iOS.
- TypeScript Support: Strongly typed codebase for better maintainability.

Prerequisites

- Before setting up the project, ensure you have the following installed:
- Node.js (v18 or higher)
- npm (v9 or higher) or Yarn (v1.22 or higher)
- Expo CLI (install globally via npm install -g expo-cli)
- Git (for version control)

Setup Instructions

1. Clone the Repository

   Clone the repository to your local machine:
   git clone https://github.com/your-username/marketplace-app.git
   cd marketplace-app

2. Install Dependencies

   Install all the required dependencies using npm or yarn:
   npm install or yarn install

3. Start the Development Server

   Run the development server using Expo:
   npm start or yarn start

Running the App
Running on Android

1. Ensure you have an Android emulator set up or a physical device connected.
2. Run the following command:
   npm run android or yarn android

Running on iOS

1. Ensure you have Xcode installed and an iOS simulator set up.
2. Run the following command:
   npm run ios or yarn ios

Project Structure
Here’s an overview of the project structure:

marketplace-app/
├── src/ # Source code
│ ├── apis/ # API-related files (e.g., API calls, endpoints)
│ ├── assets/ # Static assets like images, fonts, etc.
│ ├── components/ # Reusable UI components
│ ├── screens/ # App screens (e.g., Home, Product Details)
│ ├── store/ # Zustand state management (global state)
│ ├── themes/ # Theme configurations (colors, fonts, etc.)
│ ├── navigations/ # Navigation configurations (e.g., stack, tab navigators)
├── App.tsx # Main application entry point
├── index.ts # Entry point for the app
├── package.json # Project dependencies and scripts
├── tsconfig.json # TypeScript configuration
└── README.md # Project documentation

Dependencies
Here are the key dependencies used in this project:

Core Dependencies

- React Native: Framework for building mobile apps.
- Expo: Tools and services for React Native development.
- TypeScript: Adds static typing to JavaScript.
- React Navigation: Routing and navigation for React Native apps.
- zustand: State management library.
- react-native-toast-message: Toast notifications for user feedback.

Development Dependencies

- @types/react: TypeScript definitions for React.
- @types/react-native-vector-icons: TypeScript definitions for vector icons.
- TypeScript: TypeScript compiler.

For a complete list, refer to the package.json file.

Contributing
Contributions are welcome! Follow these steps to contribute:

1. Fork the repository.
2. Create a new branch (git checkout -b feature/your-feature-name).
3. Commit your changes (git commit -m 'Add some feature').
4. Push to the branch (git push origin feature/your-feature-name).
5. Open a pull request.

License
This project is licensed under the MIT License. See the LICENSE file for details.

Author

- Jastine Formentera
- GitHub: @Enitsaj13
- Email: enitsajformentera.13@gmail.com

Acknowledgments

- Thanks to the React Native and Expo teams for their amazing tools.
- Special thanks to the open-source community for providing libraries like zustand and react-navigation.

You can also see the video demonstration below:
https://drive.google.com/file/d/1B0aULpZm4mQ70jSnjtlR0G4TqVQUjY41/view?usp=sharing
