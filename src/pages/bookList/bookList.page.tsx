import React, { useEffect } from "react";
import IBook from "../../interfaces/book.interface";

interface IBookListProps {
  books: Array<IBook>;
}

export const BookList: React.FC<IBookListProps> = ({
  books,
}: IBookListProps) => {


  /**useEffect*/

  if (books.length === 0) {
    return (
      <div>
        <p>Nenhum livro encontrado. </p>
      </div>
    );
  }

  return (
    <div>
      <h2>Lista de Livros</h2>
      <ul>
        {books.length ? (
          books.map((book) => (
            <li key={book.id}>
              <strong>{book.title}</strong> - {book.author}
            </li>
          ))
        ) : (
          <p>Nenhum livro encontrado. </p>
        )}
      </ul>
    </div>
  );
};
