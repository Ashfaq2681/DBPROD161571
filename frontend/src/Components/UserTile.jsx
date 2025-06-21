import React from 'react'

export default function UserTile({ email }) {
  return (
    <div className='mx-3 my-2 p-3 bg-[#E1E6EF] rounded-xl'>
      {email}
    </div>
  )
}
