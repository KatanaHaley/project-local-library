function findAuthorById(authors, id) {
  for (let i = 0; i < authors.length; i++) {
   if (authors[i].id === id) {
    return authors[i]
  }
 }
} 


/*
const findAuthorById = (authors, id) => findByID(authors, id) {
  return authors.find(author =>
    author.id === id);
}
*/

const findBookById = (array, id) => array.find((object) => object.id === id)

function partitionBooksByBorrowedStatus(books) {} 

const findById = (array, id) => array.find((object) => object.id === id)
const getBorrowersForBook = (book, accounts) => {
  let result = [];
  book.borrows.forEach(record => {
    let account = findById(accounts, record.id)
    account["returned"] = record.returned
    result.push(account)
  });

  return result.slice(0,10);
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
