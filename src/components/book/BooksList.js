import React from 'react';
import { Book } from './Book';

export const BooksList = (props) => {
	return (
		<div>
			{props.books.map((book) => <Book key={book.id} {...book} />)}
		</div>
	)
}

BooksList.propTypes = {
	books: React.PropTypes.array.isRequired
}