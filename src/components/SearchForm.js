import React from 'react';

export const SearchForm = (props) => (
	<div>
		<form className="form-inline" onSubmit={props.handleSubmit}>
			<div className={"form-group " + (props.errorMessage && 'has-error') }>
				<label className="sr-only" htmlFor="bookTitle">Enter Book Title:</label>
				<input
					type="text"
					className="form-control"
					id="bookTitle"
					placeholder="Enter Book Title"
					value={props.title2Search}
					onChange={props.handleInputChange}
				/>
			</div>
			<button type="submit" className="btn btn-primary">Search</button>
		</form>
		{props.errorMessage && <span className="text-danger">{props.errorMessage}</span>}
	</div>
);

SearchForm.propTypes = {
	title2Search: React.PropTypes.string.isRequired,
	errorMessage: React.PropTypes.string,
	handleInputChange: React.PropTypes.func.isRequired,
	handleSubmit: React.PropTypes.func.isRequired
}