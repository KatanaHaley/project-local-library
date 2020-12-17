/* eslint-disable strict */

// total count for all books. 
const totalBooksCount = books => books.length; 

// total count for all accounts. 
const totalAccountsCount = (accounts) => accounts.length;

const booksBorrowedCount = (books) => books.filter(book => book.borrows[0].returned === false).length;

function getMostCommonGenres(books) {
  const allGenres = [];

  // Adds {name: <genre name>, count: <genre totalCount> } to allGenres array.
  books.reduce((accumulator, book) => {
    const genresArray = books.filter(book1 => book1.genre === book.genre).map(book2 => book2.genre);
    allGenres.push({ name: genresArray[0], count: genresArray.length });
    return accumulator;
  }, 0);

  // Removes Duplicates from allGenres array
  const result = allGenres.filter((genre, index, self) => index === self.findIndex((temp) => temp.name === genre.name && temp.count === genre.count));

  // Sorts results and limits the output to 5 genres.
  return result.sort((genre1, genre2) => genre2.count - genre1.count).slice(0, 5);

}


function getMostPopularBooks(books) {
  let result = [];

  // Sorts books array by popularity then iterate through items then add them to result array. 
  books.sort((book1, book2) => book2.borrows.length - book1.borrows.length).forEach(book => {
    result.push({ name: book.title, count: book.borrows.length }); // formatting
  });

  // Returns the final result, slice limit to 5. 
  const finalResult = result.filter((book, index, self) => index === self.findIndex((temp) => temp.name === book.name && temp.count === book.count)).slice(0, 5);
  return finalResult;
  
}

function getMostPopularAuthors(books, authors) {
  const results = [];

  // forEach to iterate through each author in the array. 
  authors.forEach(author => {

    // Filters books array by author.
    const filtered = books.filter(book => book.authorId === author.id);

    // Template literals to retrieve author first and last name 
    const authorName = `${author.name.first} ${author.name.last}`;

    // total books borrowed by author. 
    const count = filtered.reduce((acc, book) => {
      return acc + book.borrows.length;
    }, 0);

    // .push() the authors into the results array.
    results.push({ name: authorName, count: count });
  });

  // returns the 5 most popular authors.
  return results.sort((author1, author2) => author2.count - author1.count).slice(0, 5);
}

module.exports = {
  totalBooksCount,
  totalAccountsCount,
  booksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};