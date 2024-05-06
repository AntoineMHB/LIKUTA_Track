import React from 'react'

//assets
import wave from "../assets/wave.svg";

//react-route-dom imports
import { Outlet, useLoaderData } from 'react-router-dom';

//helper functions
import { fetchData } from '../helpers'

//components
import Nav from '../components/Nav';

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
    <div className="layout">
      <Nav userName={userName} />
      <main>
        <Outlet />
      </main>
      <h1>{birthDate}</h1>
      <img src={wave} alt="" />
      </div>
  )
}

export default Main;