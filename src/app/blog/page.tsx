"use client";
import Link from 'next/link'
import React from 'react'

const PageBlog = () => {
 const getToken = async (email:string) => {
  try {
    const response = await fetch(`/api/token/${email}`);
    
    if (!response.ok) {
      const errorData = await response.json();
      console.error('Error:', errorData.error);
      return;
    }

    const data = await response.json();
    console.log('Token:', data.token);
  } catch (error) {
    console.error('Error fetching token:', error);
  }
};

getToken('vuhuyhoangboj@gmail.com');
  return (
      <div>
          <Link href="/detail" > Go to detail app 2</Link>
    </div>
  )
}

export default PageBlog