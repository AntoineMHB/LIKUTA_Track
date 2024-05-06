import React from 'react'

//assets
import thewave from "../assets/wave.svg";

//react-route-dom imports
import { Outlet, useLoaderData } from 'react-router-dom';

//helper functions
import { fetchData } from '../helpers'

//loader 
export function mainLoader()
{
   const userName = fetchData("userName");
   const birthDate = fetchData("birthDate");
  
   return { userName, birthDate }
}; 
const Main = () => {
  const { userName, birthDate } = useLoaderData()
 return (
    <div>
      <h1>{userName}</h1>
      <main>
       <Outlet />
      </main>
      <h1>{birthDate}</h1>
      <img src="thewave" alt="" />
      </div>
  )
}

export default Main;