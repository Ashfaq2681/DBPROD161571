import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import UserTile from './UserTile';

export default function Customers() {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    setCustomers([
      {
        email: "abc@xyz.com"
      },
      {
        email: "xyz@abc.com"
      }
    ]);
  });

  return (
    <div className='w-full mt-6'>
      <div>
        {customers.map((customer, index) => {
          return <UserTile
            key={index}
            email={customer.email}/>
        })}
      </div>
    </div>
  )
}
