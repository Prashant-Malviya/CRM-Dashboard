# CRM Dashboard

## Description

The CRM Dashboard is a web application that provides a comprehensive overview of key metrics for customer relationship management. It includes visualizations such as line charts and pie charts to display user data and trends over various time ranges. This application is built using React.js for the frontend, along with Chart.js for rendering charts, and Axios for data fetching.

## Features

- **Dynamic Data Fetching**: Fetches and updates data based on selected time ranges.
- **User Metrics**: Displays total users, new leads, closed deals, and open tickets.
- **Charts**: Includes pie charts and line charts to visualize data.
- **Responsive Design**: Designed to be fully responsive and accessible on various devices.

## Technologies Used

- **Frontend**: React.js, Tailwind CSS
- **Charts**: Chart.js, React Chart.js 2
- **Data Fetching**: Axios
- **Styling**: Tailwind CSS

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm (v6 or later) or yarn

### Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/your-username/crm-dashboard.git

2. **Change Directory**
   ```bash
   cd crm-dashboard
   ```

3. **Install Dependencies**

  ```bash
    npm i
```

### Running the Application

1. **Start the Development Server**

```bash
npm run dev
```


### Usage

1. **Select Time Range**:  
   The `TimeSelector` component allows users to select a time range for the dashboard data. The available time ranges are:
   - 1 Day
   - 1 Week
   - 1 Month
   - 1 Year  

   When a time range is selected, the dashboard dynamically fetches and displays data corresponding to that period.

2. **View Metrics**:  
   The dashboard displays the following key metrics in the form of cards:
   - **Total Users**: The total number of active, inactive, and new users.
   - **New Leads**: The number of leads that have been converted over the selected time range.
   - **Closed Deals**: The number of deals that were lost.
   - **Open Tickets**: The number of unresolved tickets.

3. **View Charts**:
   - **Pie Chart**:  
     The `PieChart` component visually represents the distribution of users across different departments, such as:
     - Marketing
     - Sales
     - Support  
     Each department is color-coded to distinguish them easily.
   
   - **Line Chart**:  
     The `LineChart` component shows the trend of leads over the selected time range. It helps visualize how the number of leads fluctuates over time. Data points are plotted for each time period (e.g., monthly or yearly), allowing tracking of progress or changes effectively.

4. **Data Fetching**:  
   The data is fetched from a mock API using `axios`. The API returns the number of users, leads, and tickets for each time range. The data is dynamically updated based on the selected time range and displayed in the respective charts and cards.


### Folder Structure 

├── src/
│   ├── api/
│   │   └── dataService.js     # Contains fetchDummyData function for data fetching
│   ├── components/
│   │   ├── Cards.js           # Displays individual metrics
│   │   ├── LineChart.js       # Renders a line chart for leads over time
│   │   ├── PieChart.js        # Renders a pie chart for department distribution
│   │   └── TimeSelector.js    # Allows selection of different time ranges
│   ├── Pages/
│   │   └── Dashboard.jsx      # Main dashboard component that integrates charts and cards
│   ├── App.js                 # Main App component
│   ├── index.js               # Entry point of the React application
├── public/
│   └── index.html             # HTML template
├── .env                       # Environment file for API configuration
├── package.json               # Project metadata and dependencies
└── README.md                  # Documentation



   
