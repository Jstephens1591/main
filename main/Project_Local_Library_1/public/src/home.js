function getTotalBooksCount(books) {
  let book = 0; 
  for (let i = 0; i < books.length; i++){
    book++
  }
  return book 
}

function getTotalAccountsCount(accounts) {
  let acc = 0; 
  for (let i = 0; i < accounts.length; i++){
    acc++
  }
  return acc
}

function getBooksBorrowedCount(books) {
  let booksCheckedOut = books.filter(book => book.borrows.filter(record => record.returned === false).length > 0);
  return booksCheckedOut.length;
  }


function getMostCommonGenres(books) { 
    const counts = books.reduce((acc, book) => {
      const genre = book.genre;
      if (acc.hasOwnProperty(genre)) {
        acc[genre] += 1;
      } else {
        acc[genre] = 1;
      }
      return acc;
    }, {});
    return Object
      .entries(counts)
      .sort((a,b) => {
        return b[1] - a[1];
      })
      .slice(0,5)
      .map(subArray => { 
        return {name: subArray[0], count: subArray[1]}
      
      });
  }


function getMostPopularBooks(books) {
  return books.map((book) => {
    return {name: book.title, count: book.borrows.length}
   }).sort((a, b) => (a.count < b.count ? 1 : -1)).slice(0, 5)
 }



function getMostPopularAuthors(books, authors) {
  let result = [];
  authors.forEach(author => {
    let theAuthor = { 
      name: `${author.name.first} ${author.name.last}`, 
      count: 0
    }
    books.forEach(book => {
      if (book.authorId === author.id) {
        theAuthor.count += book.borrows.length
      }
    })
    result.push(theAuthor)
  })
  return result.sort((a,b) => b.count - a.count).slice(0, 5)  
}


module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
