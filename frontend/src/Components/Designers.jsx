import { useEffect } from 'react';
import { useState } from 'react'
import UserTile from './UserTile';
import { baseUrl } from '../constants/strings';

export default function Designers() {
  const [designers, setDesigners] = useState([]);

  useEffect(() => {
    fetch(`${baseUrl}/user/getDesigners`)
      .then((res) => res.json())
      .then((data) => setDesigners(data));
  }, []);

  return (
    <div className='w-full mt-6'>
      <div>
        {designers == []
        ? <div>No designers found</div>
        : designers.map((customer, index) => {
          return <UserTile
            key={index}
            email={customer.email}/>
        })}
      </div>
    </div>
  )
}
