import React from 'react'
import './css/Notification.css'

export default function Notification({show}) {
  return (
    show && 
    <div className='notification'>Don't enter already used letters</div>
  )
}
