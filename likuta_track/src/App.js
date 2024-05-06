import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

//Routes
import Dashboard, { dashboardLoader } from "./pages/Dashboard";
import Error from "./pages/Error";

//Layouts
import Main, { mainLoader } from "./layouts/Main";

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
    errorElement: <Error />
  },
  

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
    </div>
  );
}

export default App;