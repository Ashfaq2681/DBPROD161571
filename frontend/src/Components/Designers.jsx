import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import UserTile from './UserTile';

export default function Designers() {
  const [designers, setDesigners] = useState([]);

  useEffect(() => {
    setDesigners([
      {
        email: "design@xyz.com"
      },
      {
        email: "mario@abc.com"
      }
    ]);
  });

  return (
    <div className='w-full mt-6'>
      <div>
        {designers.map((customer, index) => {
          return <UserTile
            key={index}
            email={customer.email}/>
        })}
      </div>
    </div>
  )
}
