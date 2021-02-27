import React, { Component } from 'react'
import {PropTypes} from 'prop-types'
import Book from './Book'

class Shelf extends Component {

 static propTypes = {
    
      BookUptade : PropTypes.func.isRequired,
      books : PropTypes.array.isRequired,
      shelf : PropTypes.string.isRequired,
      
  }
	render(){
    const { books,shelf,BookUptade } = this.props;
      	return(
          <div className="bookshelf">
                  <h2 className="bookshelf-title">{shelf === 'currentlyReading' ? 'Currently Reading':
          				shelf === 'wantToRead' ? 'Want To Read' : shelf === 'read' ? 'Read' : ''}</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
					             {books.filter(filter => filter.shelf === shelf).map(book => {
                      return( <Book book={book} key={book.id} BookUptade={BookUptade} /> );
                      })}
                    </ol>
                  </div>
          </div>
        );
    }
}


export default Shelf;