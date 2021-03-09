import React from 'react'

export default function Home(props) {
    console.log(props)

    return (
        <div>
            Home screen
            <div>asdasdasd</div>
            <button onClick={() => { props.history.push('/contactus') }}>Go to Contact page</button>
        </div>
    )
}
