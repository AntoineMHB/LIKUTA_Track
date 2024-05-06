import React from 'react'

//react-route-dom imports
import { useLoaderData } from 'react-router-dom';
//helper functions
import { fetchData } from '../helpers'

//loader 
export function dashboardLoader()
{
   const userName = fetchData("userName");
   const birthDate = fetchData("birthDate");
  
   return { userName, birthDate }
}; 
const Dashboard = () => {
  const { userName, birthDate } = useLoaderData()
 return (
    <div>
    <h2>{birthDate}</h2>
      <h1>{userName}</h1>
      Dashboard</div>
  )
}

export default Dashboard;