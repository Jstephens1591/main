function findAuthorById(authors, id) {
for (let i = 0; i < authors.length; i++){
  if (authors[i].id === id)
  return authors[i]
}


}

function findBookById(books, id) {
  for (let i = 0; i < books.length; i++){
    if (books[i].id === id )
    return books[i];
  }
}

function partitionBooksByBorrowedStatus(books) {
  let allBooks = [];
  let checkedOut = books.filter((book) => book.borrows[0].returned === false);
  let returnedBooks = books.filter((book) => book.borrows[0].returned === true);
  allBooks[0] = checkedOut;
  allBooks[1] = returnedBooks;
  return allBooks;
}

  function getBorrowersForBook(book, accounts) {
      const { borrows } = book;
      const renters = borrows.map(({ id, returned })=> {
        const account = accounts.find(account => account.id === id);
        return {
          ...account,
          returned,
        };
      });
      return renters
        .sort((borrowA, borrowB) => {
          const companyA = borrowA.company;
          const companyB = borrowB.company;
          return companyA.localeCompare(companyB);
        })
        .slice(0, 10);
    

}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
