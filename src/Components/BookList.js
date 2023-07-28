import BookShow from './BookShow';
import BooksContext from '../Context/Books';
import { useContext } from 'react';


function BookList({ books, onDelete, onEdit }) {
  const { count, incrementCount } = useContext(BooksContext);
  const renderedBooks = books.map((book) => {

    return (
      <BookShow onEdit={onEdit} onDelete={onDelete} key={book.id} book={book} />
    );
  });

  return <div className="book-list">
    {count}
    <button onClick={() => incrementCount()}>+</button>
    {renderedBooks}
  </div>;
}

export default BookList;
