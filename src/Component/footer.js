import React, { useState } from 'react'

export default function Footer(props) {
    const [state, setstate] = useState('let say it is working')
    return (
        <div style={{ height: '60px', border: 'solid black 2px' }}>
            <button  onClick={() => { props.footerfun(state) }}>
                send the data to parent
           </button>
        </div>
    )
}
