import React, { Component } from 'react'
import {PropTypes} from 'prop-types'
import { Link } from 'react-router-dom'
import { search } from "../BooksAPI";
import Book from './Book'

class Search extends Component {

	static propTypes = {
		books: PropTypes.array.isRequired,
	    BookUptade: PropTypes.func.isRequired,
    }

  	state = {
    	bookquery: '',
      	BookFound: []
       }
	
	BookSearch = (bookquery) => {
    	if (bookquery && bookquery !== '') {
        	search(bookquery)
				.then((result) => {
                	this.setState({
                    	BookFound: result
                    })
            })
        }
     }

	 ChangeSearch = (event) => {
    	const bookquery = event.target.value;
      
      	this.setState({
          bookquery
        });
      
      	this.BookSearch(bookquery);
    }

	render(){
      	const { bookquery,BookFound } = this.state;
		const { books } = this.props;

    	return(
        	<div className="search-books">
            <div className="search-books-bar">
              <Link to='/' className='close-search'>Close</Link>
              <div className="search-books-input-wrapper">
                <input type="text" placeholder="Search by title or author" onChange={this.ChangeSearch}/>
              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
      			{BookFound.length > 0 && bookquery.length > 0 &&
                 	BookFound.map(book => {

                 		book.shelf = books.filter(filter => filter.id === book.id).length > 0 ?
					    books.filter(filter => filter.id === book.id)[0].shelf : 'none';

                		return (
                 			<Book book={book} key={book.id} BookUptade={this.props.BookUptade} />
                 		)
                	})
                }
				{
                  BookFound.error === 'empty query' &&
                  	<p>No found..</p>
                }
      		  </ol>
            </div>
          </div>
        );
    }
}


export default Search;