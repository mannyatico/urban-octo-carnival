import React from 'react';

export const ListTitle = (props) => {
	let title = null;

	if (props.currentTitle) {
		title = <h3 className="text-center">Books related to <i>{props.currentTitle}</i></h3>;
	}

	return title;
}

ListTitle.propTypes = {
	currentTitle: React.PropTypes.string
};