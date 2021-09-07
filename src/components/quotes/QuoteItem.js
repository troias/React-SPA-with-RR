import classes from './QuoteItem.module.css';
import {Link, useRouteMatch} from 'react-router-dom';

const QuoteItem = (props) => {

  const quotes = useRouteMatch()
  // console.log("quotesItem", quotes)
  // console.log("quotesItemiD", props.id)
  return (
    <li className={classes.item}>
      <figure>
        <blockquote>
          <p>{props.text}</p>
        </blockquote>
        <figcaption>{props.author}</figcaption>
      </figure>
      <Link className='btn' to={`${quotes.path}/${props.id}`}>

        View Fullscreen
 
      </Link>
    </li>
  );
};

export default QuoteItem;
