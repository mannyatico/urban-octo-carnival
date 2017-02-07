import React from 'react';
import { BookRating } from './BookRating';

export const BookInfo = (props) => {
	return (
		<div className="media-body">
			<h4 className="media-heading">{props.title}<br /><small>{props.author}</small></h4>

			<BookRating rating={props.rating} />
		</div>
	)
};

BookInfo.propTypes = {
	title: React.PropTypes.string.isRequired,
	author: React.PropTypes.string.isRequired,
	rating: React.PropTypes.number.isRequired
}