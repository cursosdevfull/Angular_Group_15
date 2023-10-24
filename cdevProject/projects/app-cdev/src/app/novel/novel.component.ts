import { Component } from '@angular/core';

@Component({
  selector: 'cdev-novels',
  templateUrl: './novel.component.html',
  styleUrls: ['./novel.component.css'],
})
export class NovelComponent {
  novels = [
    {
      title: 'The Lord of the Rings',
      author: 'J.R.R. Tolkien',
      year: 1954,
      summary:
        'The Lord of the Rings is an epic high-fantasy novel written by English author and scholar J. R. R. Tolkien.',
      imageUrl:
        'https://images-na.ssl-images-amazon.com/images/I/51UoqRAxwEL._SX331_BO1,204,203,200_.jpg',
    },
    {
      title: 'The Hobbit',
      author: 'J.R.R. Tolkien',
      year: 1937,
      summary:
        "The Hobbit, or There and Back Again is a children's fantasy novel by English author J. R. R. Tolkien.",
      imageUrl:
        'https://images-na.ssl-images-amazon.com/images/I/51UoqRAxwEL._SX331_BO1,204,203,200_.jpg',
    },
    {
      title: 'The Great Gatsby',
      author: 'F. Scott Fitzgerald',
      year: 1925,
      summary:
        'The Great Gatsby is a 1925 novel by American writer F. Scott Fitzgerald.',
      imageUrl:
        'https://images-na.ssl-images-amazon.com/images/I/51UoqRAxwEL._SX331_BO1,204,203,200_.jpg',
    },
  ];
}
