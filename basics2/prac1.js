const books = [
    {
      title: 'The Great Gatsby',
      author: 'F. Scott Fitzgerald',
      publicationYear: 1925
    },
    {
      title: 'To Kill a Mockingbird',
      author: 'Harper Lee',
      publicationYear: 1960
    },
    {
      title: '1984',
      author: 'George Orwell',
      publicationYear: 1949
    },
    {
      title: 'The Catcher in the Rye',
      author: 'J.D. Salinger',
      publicationYear: 1951
    },
    {
      title: 'The Hunger Games',
      author: 'Suzanne Collins',
      publicationYear: 2008
    },
    {
      title: 'The Help',
      author: 'Kathryn Stockett',
      publicationYear: 2009
    },
    {
      title: 'The Fault in Our Stars',
      author: 'John Green',
      publicationYear: 2012
    }
  ];

 //a 
  let a = [];
  for (let i = 0; i < books.length; i++) 
  {
      if (books[i].publicationYear > 1960) 
      {
          a.push(books[i]);
      }
  }
  console.log("\n a(>1960): \n");
  console.log(a);
  
//b
  let b = [];
  for (let i = 0; i < books.length; i++) 
  {
      if (books[i].author === 'John Green') 
      {
          b.push(books[i]);
      }
  }
  console.log("\n b(by John Green): \n");
  console.log(b);
  
//c
let c = [];
for (let i = 0; i < books.length; i++) 
{
    if (books[i].author !== 'Suzanne Collins') 
    {
        c.push(books[i]);
    }
}
  console.log("\n c(except Suzanne Collins): \n");
  console.log(c);
  