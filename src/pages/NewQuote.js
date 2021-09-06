import React from 'react'
import QuoteForm from '../components/quotes/QuoteForm'

 const NewQuote = (props) => {
    return (
        <div>
           <QuoteForm isFocused={props.isFocused} onAddQuote={props.addQuote}/>
        </div>
    )
}

export default NewQuote
