Baseball Player Tracker
Overview
Baseball Player Tracker is a React-based web application designed to track Major League Baseball (MLB) player statistics. The app integrates with an API to fetch real-time data, allowing users to maintain a watchlist and analyze player performance.
Features
- User Authentication – Secure login/logout functionality with context-based authentication.
- Player Watchlist – Add and remove players from a personalized watchlist.
- API Integration – Fetches up-to-date player statistics from the MLB API.
- State Management – Uses React Context API for efficient state handling.
- Testing Suite – Implements Jest and React Testing Library for robust testing.
- Responsive UI – Styled using MUI for an intuitive interface.
Installation
Prerequisites
Ensure you have Node.js and npm installed.
Steps
- Clone the repository:
git clone <https://github.com/mzb527/BaseballPlayerTracker>
cd baseballplayertracker
- Install dependencies:
npm install
- Start the development server:
npm start


Usage
- Create an account or log in.
- Search for players and add them to your watchlist.
- View detailed statistics for each player.
- Remove players from your watchlist as needed.
Folder Structure
baseballplayertracker/
├── src/
│   ├── components/      # Reusable UI components
│   ├── context/         # Context providers for state management
│   ├── pages/           # Page components for navigation
│   ├── services/        # API services and data fetching
│   ├── tests/           # Unit and integration tests
│   ├── styles/          # CSS styling files
│   ├── routes.jsx       # Route configuration
│   ├── theme.jsx        # Global MUI theme configuration
│   ├── App.jsx          # Main app wrapper
│   ├── index.jsx        # Entry point
├── public/              # Static assets
├── package.json         # Project metadata
├── .gitignore           # Ignored files for version control


Testing
Run the test suite to verify functionality:
npm test


Deployment
To deploy, follow these steps:
- Build the production version:
npm run build
- Deploy using Vercel, Netlify, or GitHub Pages.
