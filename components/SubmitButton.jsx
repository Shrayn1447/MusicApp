'use client'
 
import { useFormStatus } from 'react-dom'
import { useContext } from 'react'
import { ThemeContext } from './ContextProvider'
export function SubmitButton({onClick}) {
    const index = useContext(ThemeContext)
  return (
    <button onClick={onClick} type="submit">
      {index}
    </button>
  )
}