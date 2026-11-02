// Gaurav Sandilya | GLA University | Assignment 4 Q3
"use strict";
class Book{constructor(title,author,isbn,isIssued=false){Object.assign(this,{title,author,isbn,isIssued});}issueBook(){if(this.isIssued){console.log(`${this.title} is already issued.`);return false;}this.isIssued=true;console.log(`Issued ${this.title}`);return true;}returnBook(){this.isIssued=false;console.log(`Returned ${this.title}`);}}
const books=[new Book("The Alchemist","Paulo Coelho","9780061122415"),new Book("Wings of Fire","A. P. J. Abdul Kalam","9788173711466"),new Book("1984","George Orwell","9780451524935",true)];
const showAvailable=()=>books.filter(b=>!b.isIssued).forEach(b=>console.log(`${b.title} | ${b.author} | ${b.isbn}`));
function issueByISBN(isbn){const book=books.find(b=>b.isbn===String(isbn));if(!book){console.log("Book not found");return false;}return book.issueBook();}
showAvailable();issueByISBN("9780061122415");showAvailable();
