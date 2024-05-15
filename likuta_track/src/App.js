import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

//Routes
import Dashboard, { dashboardAction, dashboardLoader } from "./pages/Dashboard";
import Error from "./pages/Error";
import ExpensesPage, { expensesAction, expensesLoader } from "./pages/ExpensesPage";

//Layouts
import Main, { mainLoader } from "./layouts/Main";

// Actions 
import { logoutAction } from "./actions/logout";

// Library
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


// We define the Root component
//const Root = () => <div>Hi</div>;

// We define the Team component
//const About = () => <div>About us</div>;

// We define the loaders
// const rootLoader = () => {
//   // Implement the loader function to return a value or null
//   return null;
// };
// const teamLoader = () => {
//   // Implement the loader function to return a value or null
//   return null;
// };

const router = createBrowserRouter([
  {
    path: "/",
    element:  <Main />,
    loader: mainLoader,
    errorElement: <Error />,
    children: [  
    {
       index: true,
       element:  <Dashboard />,
       loader: dashboardLoader,
       action: dashboardAction,
       errorElement: <Error />
    },
     {
       path: "expenses",
       element:  <ExpensesPage />,
       loader: expensesLoader,
       action: expensesAction,
    },
    {
        path: "logout",
        action: logoutAction,
    }

   ]
  }, 
 
      // {
      //   path: "/about",
      //   element: <About />,
      // //  loader: teamLoader,
      // },
    
  
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
      <ToastContainer />
    </div>
  );
}

export default App;