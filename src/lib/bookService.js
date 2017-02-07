const baseUrl = 'https://www.goodreads.com/search/index.xml?key=';
const apiKey = 'Ujgra4GzfeKFgcsd6pNWg';
const requestUrl = baseUrl + apiKey + '&q=';

export const loadBooks = (q) => {
	return fetch(requestUrl + q, {
		mode: 'cors',
		method: 'GET',
		headers: {
			cacheControl: 'no-cache'
		}
	})
		.then(books => books.text());
};