import React from 'react';
import { BookCover } from './BookCover'
import { BookInfo } from './BookInfo'

export const Book = (props) => {
	return (
		<div className="media">
			<BookCover
				cover={props.cover}
				title={props.title}
			/>
			<BookInfo
				title={props.title}
				author={props.author}
				rating={props.rating}
			/>
		</div>
	)
}

Book.propTypes = {
	cover: React.PropTypes.string.isRequired,
	title: React.PropTypes.string.isRequired,
	author: React.PropTypes.string.isRequired,
	rating: React.PropTypes.number.isRequired
}