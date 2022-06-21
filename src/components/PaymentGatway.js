import axios from 'axios'
import React from 'react'

function PaymentGatway() {
    const pay = () => {

        axios.head("http://localhost:9005/")
    }

    return (
        <div>
            <h1>PaymentGatway</h1>
            <button onClick={() => pay()}>pay</button>
        </div>
    )
}

export default PaymentGatway