import React from 'react'
import QuoteForm from '../components/quotes/QuoteForm'

 const NewQuote = (props) => {
    return (
        <div>
           <QuoteForm onAddQuote={props.addQuote}/>
        </div>
    )
}

export default NewQuote
