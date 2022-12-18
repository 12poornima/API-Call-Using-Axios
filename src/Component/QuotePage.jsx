import React, { useState } from 'react'
import axios from 'axios'
import "./Button.css"

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
        <div className='button' >
            <div className='btn-box' >
                <button className='btn' onClick={clickButton}  >Quote For You</button  >
                <h1 className='para' >{quote}</h1>
            </div>
        </div>
    )
}

export default QuotePage