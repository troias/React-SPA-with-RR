import { useState, useEffect, useCallback } from 'react';
import { getAllComments } from '../../lib/api'
import  useHttp from '../../hooks/use-http'
import classes from './Comments.module.css';
import NewCommentForm from './NewCommentForm';

const Comments = () => {
  const [isAddingComment, setIsAddingComment] = useState(false);
  const { sendRequest, status, data: allComments} = useHttp(getAllComments)
  const startAddCommentHandler = () => {
    setIsAddingComment(true);
  };

  const pullComments = useCallback(() => {
    sendRequest()
  }, [sendRequest]
  )
  useEffect(() => {
    pullComments()
  }, [pullComments])

  console.log("allComments", allComments)

  
  return (
    <section className={classes.comments}>
      <h2>User Comments</h2>
      {!isAddingComment && (
        <button className='btn' onClick={startAddCommentHandler}>
          Add a Comment
        </button>
      )}
      {isAddingComment && <NewCommentForm />}
      <p>Comments...</p>
    </section>
  );
};

export default Comments;
