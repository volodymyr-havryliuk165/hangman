import React from 'react'
import './css/Picture.css'

export default function Picture({errors}) {
  return (
    <div className='picture'>
      <div className="v-beam"></div>
      <div className="rope"></div>
      <div className="h-beam"></div>
      <div className="support right"></div>
      <div className="support left"></div>
      
      <div className="head"></div>
      <div className="body"></div>
      <div className="hand right"></div>
      <div className="hand left"></div>
      <div className="leg right"></div>
      <div className="leg left"></div>
    </div>
  )
}
