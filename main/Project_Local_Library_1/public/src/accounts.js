function findAccountById(accounts, id) {
  for(let i = 0; i < accounts.length; i++){
    if (accounts[i].id === id)
    return accounts[i]
  }

}

function sortAccountsByLastName(accounts)
  { return accounts.sort((first, second) => { return first.name.last > second.name.last ? 1 : -1 }) }


function getTotalNumberOfBorrows(account, books) {
  let borrowCount = 0;
  const accountId = account.id;

  books.forEach((book) => {
    book.borrows.forEach((borrow) => {
      if (accountId === borrow.id) {
        borrowCount += 1;
      }
    });
  });
  return borrowCount;
}

function getBooksPossessedByAccount(account, books, authors) {
  let checkedOut = [];
  books.forEach(book => {
      if (book.borrows.find(item => item.id === account.id && !item.returned))
          checkedOut.push(book);
  })

  console.log(checkedOut);
  checkedOut.forEach(book => {
      let theAuthor = authors.find(person => person.id === book.authorId);
      book['author'] = theAuthor;
  })

  console.log(checkedOut);
  
  return checkedOut;


}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
