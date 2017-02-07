const yqlUrl = 'https://query.yahooapis.com/v1/public/yql?q=';
const yqlQuery = 'SELECT * FROM xml WHERE url=';
const baseUrl = 'https://www.goodreads.com/search/index.xml?key=';
const apiKey = 'Ujgra4GzfeKFgcsd6pNWg';
const requestUrl = baseUrl + apiKey + '&q=';

export const loadBooks = (q) => {
	let fullUrl = yqlUrl + encodeURI(yqlQuery ) + encodeURIComponent('"') + encodeURIComponent(encodeURI(requestUrl + q)) + encodeURIComponent('"');
	return fetch(fullUrl)
		.then(books => books.text())
};