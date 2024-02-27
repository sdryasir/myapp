import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div style={{textAlign:'center'}}>
      <h1>404</h1>
      <p >The page you are lookig  for is not available!</p>
      <Link to={'/'} className='btn btn-primary'>Go back to Home</Link>
    </div>
  )
}

export default NotFound