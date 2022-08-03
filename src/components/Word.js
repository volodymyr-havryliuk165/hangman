import React from 'react'
import Letter from './Letter'

export default function Word({
  word,
  input
}) {
  return (
    <div className='flexbox gap-2 justify-center'>{[...word].map((letter, idx) => {
      return <Letter value={input.includes(letter)? letter : ''} key={idx} />
    })}</div>
  )
}
