import React, { useState, useEffect, useCallback } from 'react'
import QuotesList from "../components/quotes/QuoteList"


const AllQuotes = (props) => {

    const [loading, setLoaded] = useState(false)

    const loaded = useCallback(() => {
        console.log("completed", props.status)
        if (props.status === "completed") {
            setLoaded(true)
        }
    }, [props.status])



    useEffect(() => {
        loaded()
    }, [loaded])
    console.log("loading", loading )
    return (
        <div>
            {loading && <QuotesList quotes={props.quotes} />}
        </div>
    )
}

export default AllQuotes
