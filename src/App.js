import React from 'react'
import { Route } from 'react-router-dom'
import './App.css'
import { getAll, update } from "./BooksAPI";
import Myreads from './Components/Myreads'
import Search from './Components/Search'


class BooksApp extends React.Component {
  state = {
    books: []
  }

  componentDidMount(){
    getAll()
   .then((books) => {
         this.setState(() => ({
             books
           }));
       });
 }


  BookUptade = (book, shelf) => {
  	update(book,shelf)
    	.then((result) => {
      		book.shelf = shelf;
    		this.setState((currState) => ({
            	books: currState.books.filter(filter => filter.id !== book.id).concat([book])
            }));
    	});
  }



  render() {
    const { books } = this.state;
    return (
      <div className="app">
       	<Route exact path='/' render={() => (
    		<Myreads books={books} BookUptade={this.BookUptade} />)} />
    	<Route path='/search' render={() => (
        	<Search books={books} BookUptade={this.BookUptade} /> )} />
      </div>
    )
  }
}

export default BooksApp