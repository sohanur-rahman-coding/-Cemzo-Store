# Cemzo Store - Frontend Developer Intern Assignment

## Project Overview
This is a responsive Product Listing Page built with React. It fetches product data from the `dummyjson.com` API and displays it in a grid format. The application includes search functionality, error handling, loading states, and a clean, responsive UI suitable for desktop, tablet, and mobile devices.

## Technologies Used
- Next.js (App Router)
- React
- Tailwind CSS

## Setup/Run Instructions

1. **Clone the repository** (or download the source code):
   ```bash
   git clone <https://github.com/sohanur-rahman-coding/-Cemzo-Store>
   cd cemzo
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

4. **Open in browser**:
   Navigate to the URL provided in the terminal (usually `http://localhost:3000/`).

## Assumptions Made
- A search by product title is implemented by directly querying the `dummyjson.com/products/search` endpoint instead of filtering the frontend locally. This allows searching through all products in the database rather than just a single page of results.
- A debounce mechanism was used implicitly through `setTimeout` in the search to avoid hitting the API on every single keystroke excessively.
- Tailwind CSS was selected as the lightweight styling approach for rapid UI development and easy responsive design.

## Additional Features Implemented
No bonus features from the assignment description were implemented due to time constraints, focusing on the core requirements of code structure, state handling, UI/UX, and responsiveness.
