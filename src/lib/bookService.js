const yqlUrl = 'https://query.yahooapis.com/v1/public/yql?q=';
const yqlQuery = 'SELECT * FROM xml WHERE url=';
const baseUrl = 'https://www.goodreads.com/search/index.xml?key=';
const apiKey = 'Ujgra4GzfeKFgcsd6pNWg';
const requestUrl = baseUrl + apiKey + '&q=';

export const loadBooks = (q) => {
	// return fetch("https://query.yahooapis.com/v1/public/yql?q=SELECT%20*%20FROM%20xml%20WHERE%20url%3D%22https%3A%2F%2Fwww.goodreads.com%2Fsearch%2Findex.xml%3Fkey%3DUjgra4GzfeKFgcsd6pNWg%26q%3DHarry%2520Potter%22")
	// 	.then(books => books.text());
	let fullUrl = yqlUrl + encodeURI(yqlQuery ) + encodeURIComponent('"') + encodeURIComponent(encodeURI(requestUrl + q)) + encodeURIComponent('"');
	return fetch(fullUrl)
		.then(books => books.text())
};