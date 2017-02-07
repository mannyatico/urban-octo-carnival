import React from 'react';

export const BookCover = (props) => {
	return (
		<div className="media-left">
			<img className="media-object" src={props.cover} alt={props.title} title={props.title} />
		</div>
	)
};

BookCover.propTypes = {
	cover: React.PropTypes.string.isRequired,
	title: React.PropTypes.string.isRequired
}