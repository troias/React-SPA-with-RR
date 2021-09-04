import React from 'react'
import QuoteForm from './QuoteForm'

 const AddQuote = (props) => {
    return (
        <div>
           <QuoteForm onAddQuote={props.addQuote}/>
        </div>
    )
}

export default AddQuote
