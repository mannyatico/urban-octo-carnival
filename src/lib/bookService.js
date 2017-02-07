const baseUrl = 'https://www.goodreads.com/search/index.xml?key=';
const apiKey = 'Ujgra4GzfeKFgcsd6pNWg';
const requestUrl = baseUrl + apiKey + '&q=';

export const loadBooks = (q) => {
	console.log('q: %s', q);
	return fetch(requestUrl + q, {'mode': 'no-cors'})
		.then(res => res);
};