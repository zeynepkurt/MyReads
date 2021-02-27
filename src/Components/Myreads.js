import React from 'react'
import {PropTypes} from 'prop-types'
import { Link } from 'react-router-dom'
import Shelf from './Shelf'



const Myreads = (props) => {
  	const { books,BookUptade } = props;


Myreads.propTypes = {
	books: PropTypes.array.isRequired,
  BookUptade: PropTypes.func.isRequired,
}


	return(
    	<div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
          		<Shelf shelf='currentlyReading' books={books} BookUptade={BookUptade} />
		      		<Shelf shelf='wantToRead' books={books} BookUptade={BookUptade} />
			      	<Shelf shelf='read' books={books} BookUptade={BookUptade} />
              </div>
            </div>
            <div className="open-search">
			  <Link to='/search'>Add a book</Link>
            </div>
          </div>
    );
}



export default Myreads;