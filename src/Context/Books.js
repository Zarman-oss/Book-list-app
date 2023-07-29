import { createContext, useState } from 'react';
import axios from 'axios';

const BooksContext = createContext();

function Provider({ children }) {
  const [books, setBooks] = useState([]);

  const deleteBookById = async (id) => {
    await axios.delete(`http://localhost:3001/books/${id}`);
    const updateBooks = books.filter((book) => {
      return book.id !== id;
    });
    setBooks(updateBooks);
  };

  const editBookById = async (id, newtitle) => {
    const response = await axios.put(`http://localhost:3001/books/${id}`{

    title: newTitle,
    }
    
    

  )}

const updateBooks = books.map((book) =>{
    if (book.id ===id) {
        return {...book, ...response.data};
    }
    return book;
})


const createBook = async (title) =>{
    const response = await axios.post('http://localhost:3001/books',{
        title,
    });
    const updateBooks = [...books, reponse.data];
    setBooks(updateBooks);
}


  const fetchBooks = async () => {
    const response = await axios.get('https:localhost:3001/books');
    setBooks(response.data);
  };

  const valeuToShare = {
    books,
    deleteBookById,
    editBookById,
    createBook,
    fetchBooks,
  };

  return <BooksContext.Provider value={{valeuToShare}}>{children}</BooksContext.Provider>;
}

export { Provider };
export default BooksContext;
