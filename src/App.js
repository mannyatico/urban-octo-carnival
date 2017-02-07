import React, { Component } from 'react';
import {parseString} from 'xml2js';
import logo from './logo.svg';
import './App.css';
import { SearchForm } from './components/SearchForm';
import { ListTitle } from './components/ListTitle';
import { BooksList } from './components/book/BooksList';
import { loadBooks } from './lib/bookService';
import { retrieveResults, getTotalResults, createFinalBooksObj } from './helpers/bookHelpers';


class App extends Component {
	constructor() {
		super();

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
					return new Promise((resolve, reject) => {
						parseString(books, (err, res) => {
							if (!err) {
								resolve(res);
							} else {
								reject(err);
							}
						})
					})
				})
				.then(objBooks => {
					let total = getTotalResults(objBooks);
					let books = retrieveResults(objBooks);

					if (total > 0) {
						this.setState({
							books: createFinalBooksObj(books)
						});
					}
				});
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
	};

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
