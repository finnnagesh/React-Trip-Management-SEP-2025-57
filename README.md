
# Trip Manager SPA

A **React.js Single Page Application (SPA)** to manage trips with full CRUD functionality, search, filtering, pagination, and form validation. Built using **React 18**, **React Router v6**, **React Hook Form**, and **Tailwind CSS**. This project uses **dummy JSON data** .

## **Quick Start**

```
# Clone the repository
git clone <your-repo-url>

# Navigate to the project directory
cd trip-manager

# Install dependencies
npm install

# Run the development server
npm run dev

```

Open your browser at `http://localhost:5173`.

## **Features**

-   Display trips in a **table layout** with destination, start & end dates, price, and status.
    
-   **Add new trips** via a form with validation.
    
-   **Edit existing trips**.
    
-   **Delete trips**.
    
-   **Search** trips by destination.
    
-   **Filter** trips by status (PLANNED, ONGOING, COMPLETED).
    
-   **Sort** trips by price or start date.
    
-   **Client-side pagination**.
    
-   Responsive design using **Tailwind CSS**.
    
-   Optional **Summary Widget** to display total trips and average price.
    

## **Folder Structure**

```
src/
├── components/
│   ├── Navbar.jsx
│   ├── TripList.jsx
│   ├── TripForm.jsx
│   ├── SearchFilter.jsx
│   ├── Pagination.jsx
│   └── SummaryWidget.jsx
├── data/
│   └── trips.js
├── pages/
│   ├── Dashboard.jsx
│   ├── AddTrip.jsx
│   └── EditTrip.jsx
├── App.jsx
└── main.jsx

```

## **Getting Started**

### **Prerequisites**

-   Node
    
-   npm
    

### **Installation**

1.  **Clone the repository:**
    
    ```
    git clone <https://github.com/finnnagesh/React-Trip-Management-SEP-2025-57.git>
    cd React-Trip-Management-SEP-2025-57
    
    ```
    
2.  **Install dependencies:**
    
    ```
    npm install
    
    ```
    
3.  **Run the development server:**
    
    ```
    npm run dev
    
    ```
    
4.  **Open your browser at `http://localhost:5173`.**
    

## **Usage**

-   **Navigate using the Navbar:**
    
    -   **Dashboard:** View trips with search, filter, sort, and pagination.
        
    -   **Add Trip:** Add a new trip with form validation.
        
-   On the **Dashboard**, use **Edit** to update a trip and **Delete** to remove it.
    
-   Use the **search bar** to filter by destination.
    
-   Use the **filter dropdown** to show trips by status.
    
-   Navigate pages using **pagination buttons**.
    
-   Optional: Check the **Summary Widget** for total trips and average price.
    

## **Tech Stack**

-   **Frontend:** React 18, React Router v6
    
-   **Form Validation:** React Hook Form
    
-   **Styling:** Tailwind CSS
    
-   **State Management:** React `useState` and `useEffect`
    
-   **Build Tool:** Vite
    

## **Screenshots**

_(Optional: add screenshots in a `screenshots/` folder)_

-   **Dashboard:** Trip list with search, filter, and pagination
    
-   **Add Trip Form:** Form with validation
    
-   **Edit Trip Form:** Update trip details
    
    

