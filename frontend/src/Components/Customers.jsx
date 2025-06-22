import { useEffect } from 'react';
import { useState } from 'react'
import UserTile from './UserTile';
import { baseUrl } from '../constants/strings';

export default function Customers() {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    fetch(`${baseUrl}/user/getCustomers`)
      .then((res) => res.json())
      .then((data) => setCustomers(data));
  }, []);

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
