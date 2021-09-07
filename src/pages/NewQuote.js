import {useEffect} from 'react'
import QuoteForm from '../components/quotes/QuoteForm'
import useHttp from '../hooks/use-http'
import { useHistory} from 'react-router-dom'
import {addQuote} from '../lib/api'

 const NewQuote = (props) => {
     const history = useHistory()
    const {sendRequest, status} = useHttp(addQuote)

    useEffect(() => {
        if (status ===  "completed") {
         history.push('/quotes')   
        }
    }, [status, history])

    const addQuoteHandler = (quoteData) => {
        sendRequest(quoteData)
    }

    return (
        <div>
           <QuoteForm isLoading={status === "pending"} 
            onAddQuote={addQuoteHandler}/>
        </div>
    )
}

export default NewQuote
