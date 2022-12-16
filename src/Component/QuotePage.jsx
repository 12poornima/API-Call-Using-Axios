import React, { useState } from 'react'
import axios from 'axios'

function QuotePage() {
    const [quote, setQuote] = useState("")
    // let allQuotes = ["Quote1", "Quote2", "Quote3"]
    const [count, setCount] = useState(0)
    async function clickButton() {
        let response = await axios.get("https://api.quotable.io/random")
        console.log(response.data.content)
        setQuote(response.data.content)
        // if (count < allQuotes.length) {
        //     setQuote(allQuotes[count])
        //     setCount(count + 1)
        // } else {
        //     setCount(0)
        //     setQuote(allQuotes[count])
        // }
    }
    return (
        <div>
            <button onClick={clickButton} >Quote For You</button>
            <h1>{quote}</h1>
        </div>
    )
}

export default QuotePage