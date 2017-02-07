import React, { Component } from 'react';
import {parseString} from 'xml2js';
import logo from './logo.svg';
import './App.css';
import { SearchForm } from './components/SearchForm';
import { ListTitle } from './components/ListTitle';
import { BooksList } from './components/book/BooksList';
import { loadBooks } from './lib/bookService';


class App extends Component {
	constructor() {
		super()
		// this.state = {
		// 	books: [
		// 		{ id: 4640799, title: 'Harry Potter and the Sorcerer\'s Stone', rating: 4.43, author: 'J.K. Rowling', cover: 'https://images.gr-assets.com/books/1474154022m/3.jpg' },
		// 		{ id: 6231171, title: 'Harry Potter and the Chamber of Secrets', rating: 4.36, author: 'J.K. Rowling', cover: 'https://images.gr-assets.com/books/1474169725m/15881.jpg' },
		// 		{ id: 2402163, title: 'Harry Potter and the Prisoner of Azkaban', rating: 4.52, author: 'J.K. Rowling', cover: 'https://images.gr-assets.com/books/1362278317m/5.jpg' },
		// 	],
		// 	currentTitle: '',
		// }

		this.state = {
			books: [],
			currentTitle: '',
			title2Search: '',
			errorMessage: ''
		};

		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleEmptySubmit = this.handleEmptySubmit.bind(this);
	}

	handleInputChange(e) {
		this.setState({
			title2Search: e.target.value
		});
	}

	handleSubmit(e) {
		e.preventDefault();

		let p = new Promise((resolve, reject) => {
			this.setState({
				currentTitle: this.state.title2Search,
				title2Search: '',
				errorMessage: ''
			}, resolve());
		});

		// Search the books
		p.then(() => {
			loadBooks(this.state.currentTitle)
				.then(books => {
					parseString(books,  (err, res) => {
						console.log(res);
					})
				})
		});
	}

	handleEmptySubmit(e) {
		e.preventDefault();

		this.showTmpMessage('Please provide a title to search');
	}

	showTmpMessage = (msg) => {
		this.setState({
			errorMessage: msg
		});

		setTimeout(() => this.setState({
			errorMessage: ''
		}), 2500);
	}

	render() {
		const submitHandler = this.state.title2Search ? this.handleSubmit : this.handleEmptySubmit;

		return (
			<div className="App">
				<div className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h2>GoodReacts</h2>
				</div>
				<div className="container">
					<div className="row">
						<div className="col-xs-12 col-md-4 col-md-offset-4">
							<SearchForm
								title2Search={this.state.title2Search}
								errorMessage={this.state.errorMessage}
								handleInputChange={this.handleInputChange}
								handleSubmit={submitHandler}
							/>
						</div>
						<div className="col-xs-12"><hr /></div>
						<div className="col-xs-12 col-md-4 col-md-offset-4">
							<ListTitle currentTitle={this.state.currentTitle} />

							<BooksList books={this.state.books} />
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
