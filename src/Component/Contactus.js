import React from 'react'

export default function Contactus(props) {
    console.log(props)
    return (
        <div>
            this is contact us page
            <button onClick={() => { props.history.goBack() }}>Go back</button>
        </div>
    )
}
