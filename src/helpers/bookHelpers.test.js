import { createFinalBooksObj } from './bookHelpers';

test('Generates the right array of objects to use within the state', () => {
	const startArr = [{"id":[{"_":"4640799","$":{"type":"integer"}}],"books_count":[{"_":"471","$":{"type":"integer"}}],"ratings_count":[{"_":"4446138","$":{"type":"integer"}}],"text_reviews_count":[{"_":"68939","$":{"type":"integer"}}],"original_publication_year":[{"_":"1997","$":{"type":"integer"}}],"original_publication_month":[{"_":"6","$":{"type":"integer"}}],"original_publication_day":[{"_":"26","$":{"type":"integer"}}],"average_rating":["4.43"],"best_book":[{"$":{"type":"Book"},"id":[{"_":"3","$":{"type":"integer"}}],"title":["Harry Potter and the Sorcerer's Stone (Harry Potter, #1)"],"author":[{"id":[{"_":"1077326","$":{"type":"integer"}}],"name":["J.K. Rowling"]}],"image_url":["https://images.gr-assets.com/books/1474154022m/3.jpg"],"small_image_url":["https://images.gr-assets.com/books/1474154022s/3.jpg"]}]},{"id":[{"_":"2402163","$":{"type":"integer"}}],"books_count":[{"_":"346","$":{"type":"integer"}}],"ratings_count":[{"_":"1857709","$":{"type":"integer"}}],"text_reviews_count":[{"_":"33271","$":{"type":"integer"}}],"original_publication_year":[{"_":"1999","$":{"type":"integer"}}],"original_publication_month":[{"_":"7","$":{"type":"integer"}}],"original_publication_day":[{"_":"8","$":{"type":"integer"}}],"average_rating":["4.52"],"best_book":[{"$":{"type":"Book"},"id":[{"_":"5","$":{"type":"integer"}}],"title":["Harry Potter and the Prisoner of Azkaban (Harry Potter, #3)"],"author":[{"id":[{"_":"1077326","$":{"type":"integer"}}],"name":["J.K. Rowling"]}],"image_url":["https://images.gr-assets.com/books/1362278317m/5.jpg"],"small_image_url":["https://images.gr-assets.com/books/1362278317s/5.jpg"]}]}];

	const expected = [
		{id: '4640799', title: 'Harry Potter and the Sorcerer\'s Stone (Harry Potter, #1)', rating: 4.43, author: 'J.K. Rowling', cover: 'https://images.gr-assets.com/books/1474154022m/3.jpg'},
		{id: '2402163', title: 'Harry Potter and the Prisoner of Azkaban (Harry Potter, #3)', rating: 4.52, author: 'J.K. Rowling', cover: 'https://images.gr-assets.com/books/1362278317m/5.jpg'}
	];

	const result = createFinalBooksObj(startArr);

	expect(result).toEqual(expected);
});