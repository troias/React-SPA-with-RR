import React from 'react'
import {useParams} from 'react-router-dom'

const QuoteDetail = (props) => {
    const params = useParams()
    console.log("params", params)
    console.log("QuoteDetail", props)
    return (
        <div>
            {props.text}
        </div>
    )
}

export default QuoteDetail

