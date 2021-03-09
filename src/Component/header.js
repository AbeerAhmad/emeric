import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Header(props) {
  const [count, setcount] = useState(1)
  const [user, setuser] = useState({ name: 'abeer' })

  return (
    <div style={{ height: '60px', border: 'solid black 2px' }}>
      Header {count}
      <button onClick={() => {
        props.setcount(props.count + 1)
      }}>increament</button>
      {user.name}
      <Link to='/' >Home</Link>
      <Link to='/contactus/Evllin' >Contactus</Link>
      <button onClick={() => props.setuser({ name: 'ali' })}>
        react state changes
      </button>
    </div>
  )
}
