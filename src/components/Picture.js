import React from 'react'
import './css/Picture.css'

export default function Picture({errors}) {
  return (
    <div className='picture'>
      <div className="v-beam vertical"></div>
      <div className="rope vertical"></div>
      <div className="corner left horizontal"></div>
      <div className="h-beam horizontal"></div>
      <div className="corner right horizontal"></div>
      <div className="support horizontal right"></div>
      <div className="support horizontal left"></div>
      
      { errors > 0 && <div className="head"></div> }
      { errors > 1 && <div className="body vertical"></div> }
      { errors > 2 && <div className="hand horizontal right"></div> }
      { errors > 3 && <div className="hand horizontal left"></div> }
      { errors > 4 && <div className="leg horizontal right"></div> }
      { errors > 5 && <div className="leg horizontal left"></div> }
    </div>
  )
}
