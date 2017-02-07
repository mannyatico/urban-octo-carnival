export const generateId = () => Math.floor(Math.random()*10000);

export const retrieveResults = (obj) => {
	return obj.query.results[0].GoodreadsResponse[0].search[0].results[0].work;
};

export const getTotalResults = (obj) => {
	return obj.query.results[0].GoodreadsResponse[0].search[0].results[0].work.length;
};

export const createFinalBooksObj = (booksArr) => {
	let finalArr = [];

	booksArr.map((bookItem) => {
		let obj = {
			id: bookItem.id[0]['_'],
			title: bookItem['best_book'][0].title[0],
			rating: bookItem['average_rating'][0] * 1,
			author: bookItem['best_book'][0].author[0].name[0],
			cover: bookItem['best_book'][0]['image_url'][0]
		};

		finalArr.push(Object.assign({}, obj));
	});

	return finalArr;
};