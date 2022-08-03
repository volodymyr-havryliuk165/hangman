import React from 'react'
import Picture from './Picture';

export default function Errors({errors}) {
  return (
    <div className="errors flexbox gap-1">
      <Picture errors={errors.length} />
      <div className="error-container">
        {errors.map((letter) => {
          return <span key={letter}>{letter}, </span>;
        })}
      </div>
    </div>
  )
}
