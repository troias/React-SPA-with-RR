import { useState, useEffect, useCallback } from 'react';
import { getAllComments } from '../../lib/api'
import { useParams } from 'react-router-dom'
import useHttp from '../../hooks/use-http'
import classes from './Comments.module.css';
import NewCommentForm from './NewCommentForm';
import LoadingSpinner from '../UI/LoadingSpinner'
import CommentsList from '../comments/CommentsList'

const Comments = () => {
  const [isAddingComment, setIsAddingComment] = useState(false);
  const { sendRequest, status, data: allComments, error } = useHttp(getAllComments)
  const params = useParams()



  const { quoteId } = params.quoteID

  console.log("paramsObj", params)

  const pullComments = useCallback(() => {
    sendRequest(quoteId)
  }, [sendRequest, quoteId]
  )
  useEffect(() => {
    pullComments()
  }, [pullComments])

  console.log("allComments", allComments)

  const commentCompleteHandler = useCallback(() => {
    sendRequest(quoteId)

  }, [sendRequest, quoteId])

  const startAddCommentHandler = () => {
    setIsAddingComment(true);
  };
  // const addedCommentHandler = useCallback(() => {

  // }, [])

  console.log("LoadingSpinner", status)


  let comments

  if (status === "pending") {
    comments = <div> <LoadingSpinner /> </div>
  }

  if (status === "completed" && (allComments || allComments.length > 0)) {
    comments = <CommentsList comments={allComments} />
  }

  if (status === "completed" && (!allComments || allComments.length === 0)) {
    comments = <p> No comments were added yet </p>
  }


  return (

    <section className={classes.comments}>
      <h2>User Comments</h2>
      {!isAddingComment && (
        <button className='btn' onClick={startAddCommentHandler}>
          Add a Comment
        </button>
      )}
      {isAddingComment && <NewCommentForm
        onAddedComment={commentCompleteHandler}
        quoteId={quoteId}
      />}
      {comments}
    </section>
  );
};

export default Comments;
