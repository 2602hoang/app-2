"use client";
import React from 'react'
import  { useLogicProfile } from './useLogic';
const Profile = () => {
  const {user,data} = useLogicProfile();

    
  return (
  <>
    <div className='flex flex-col  w-full overflow-x-hidden'>
        <div>
          <h1>Profile</h1>
          <pre>{JSON.stringify(user ?? data , null, 2)}</pre>
        </div>
      </div>  
  </>
  )
}

export default Profile