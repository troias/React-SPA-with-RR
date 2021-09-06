import { useRef, useState } from 'react';
import { Prompt } from "react-router-dom"
import Card from '../UI/Card'
import LoadingSpinner from '../UI/LoadingSpinner';
import classes from './QuoteForm.module.css';

const QuoteForm = (props) => {
  const [isEntering, setIsEntered] = useState(false)
  const authorInputRef = useRef();
  const textInputRef = useRef();

  function submitFormHandler(event) {
    event.preventDefault();

    const enteredAuthor = authorInputRef.current.value;
    const enteredText = textInputRef.current.value;

    // optional: Could validate here
    const item = { id: Math.random().toFixed(2) * 100, author: enteredAuthor, text: enteredText }
    props.onAddQuote(item);
  }

  const formFocusHandler = () => {
    // console.log("focus")
    setIsEntered(true)
    // props.isFocused(true)
  }
  const finishedEnteringHandler = () => {
    setIsEntered(false)
  }

  return (
    <>
      <Prompt when={isEntering}
        message={(location) => 'Are you sure you want to leave all your entered data will be lost '}
      />

      <Card>
        <form onFocus={formFocusHandler} className={classes.form} onSubmit={submitFormHandler}>
          {props.isLoading && (
            <div className={classes.loading}>
              <LoadingSpinner />
            </div>
          )}

          <div className={classes.control}>
            <label htmlFor='author'>Author</label>
            <input type='text' id='author' ref={authorInputRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor='text'>Text</label>
            <textarea id='text' rows='5' ref={textInputRef}></textarea>
          </div>
          <div className={classes.actions}>
            <button onClick={finishedEnteringHandler}className='btn'>Add Quote</button>
          </div>
        </form>
      </Card>
    </>
  );
};

export default QuoteForm;
