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
  const booksBorrowed = [];
  for (let obj in books) {
    book = books[obj];
      for (let i = 0; i < book.borrows.length; i++) {
      booksBorrowed.push(book.title);
    }
  }
  
  const popularMap = booksBorrowed.reduce((prev, cur) => { 
    prev[cur] = (prev[cur] || 0) + 1; 
    return prev; 
  }, []);
  
  const popularArr = Object.entries(popularMap).map(([name, count]) => ({name, count}));
  const topPopularBooks = popularArr.sort((ctPrev, ctCur) => ctCur.count - ctPrev.count).slice(0,5);
    return topPopularBooks;
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
