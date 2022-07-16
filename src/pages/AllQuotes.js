import React, { useState, useEffect, useCallback } from "react"
import QuotesList from "../components/quotes/QuoteList"
import LoadingSpinner from "../components/UI/LoadingSpinner"
import NoQuotesFound from "../components/quotes/NoQuotesFound"

const AllQuotes = (props) => {
  const [loading, setLoaded] = useState(false)

  const loaded = useCallback(() => {
    if (props.status === "completed") {
      setLoaded(true)
    }
  }, [props.status])

  useEffect(() => {
    loaded()
  }, [props.status, loaded])

  let loadingQuotes

  if (props.status === "pending") {
    loadingQuotes = (
      <div>
        <LoadingSpinner />
      </div>
    )
    return loadingQuotes
  }

  if (props.status === "error") {
    return <p className="centered focused">Error</p>
  }
  if (!props.quotes || props.quotes.length === 0) {
    return <NoQuotesFound />
  }

  return (
    <div>
      {loadingQuotes}
      {loading && <QuotesList quotes={props.quotes} />}
    </div>
  )
}

export default AllQuotes
