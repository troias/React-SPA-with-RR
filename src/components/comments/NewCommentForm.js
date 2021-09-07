import { useRef } from 'react';
import  useHttp from '../../hooks/use-http'

import classes from './NewCommentForm.module.css';

const NewCommentForm = (props) => {
  const commentTextRef = useRef();
  const {sendRequest} = useHttp()
  console.log("sendComment", sendRequest)
  const submitFormHandler = (event) => {
    event.preventDefault();
   

    // optional: Could validate here
    // sendComment.sendRequest()
    // send comment to server
    sendRequest(commentTextRef)
    console.log("sendComment", sendRequest)

  };

  return (
    <form className={classes.form} onSubmit={submitFormHandler}>
      <div className={classes.control} onSubmit={submitFormHandler}>
        <label htmlFor='comment'>Your Comment</label>
        <textarea id='comment' rows='5' ref={commentTextRef}></textarea>
      </div>
      <div className={classes.actions}>
        <button className='btn'>Add Comment</button>
      </div>
    </form>
  );
};

export default NewCommentForm;
