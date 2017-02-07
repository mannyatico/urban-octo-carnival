import React from 'react';
import { generateId } from '../../helpers/bookHelpers';

export const BookRating = (props) => {
	let r = Math.round(props.rating);

	return (
		<p title={r + ' stars'}>
			{
				Array.apply(null, Array(r)).map((el, i) => {
					let newId = generateId();
					return (
						<i key={newId} className="glyphicon glyphicon-star"></i>
					);
				})
			}
		</p>
	)
}

BookRating.propTypes = {
	rating: React.PropTypes.number.isRequired
}