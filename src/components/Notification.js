import React from 'react'

export default function Notification({show}) {
  return (
    show && 
    <div className='notification'>Don't enter already used letters</div>
  )
}
