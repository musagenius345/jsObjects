let currentYear = '2022';

class Book {
  constructor(title, author, year){
    this.title =title;
    this.author =author;
    this.year =year;
  }
  
  getSummary(){
    return `${this.title} was written by ${this.author} in ${this.year}`;
  }
  
  getAge(){
    const years = currentYear - this.year;
    return `${this.title} is ${this.years} years old`;
  }
}

const book1 = new Book('Book One', 'Jane Doe', '2013');


console.log(book1.getAge());

