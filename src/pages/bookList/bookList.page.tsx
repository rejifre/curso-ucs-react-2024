import React, { useCallback, useEffect, useState } from "react";
import IBook from "../../interfaces/book.interface";
import { Avatar, List, ListItem, ListItemAvatar, ListItemText } from '@mui/material';
import { error } from "console";

interface IBookListProps {
  books: Array<IBook>;
}

export const BookList = () => {
  const [books, setBooks] = useState<IBook[]>();
  const fetchBooks = useCallback(async () => {
    fetch('https://potterapi-fedeperin.vercel.app/pt/books').then(async (res) => 
      res.json()
    ).then((books) => {
      setBooks(books)
    }).catch((error) => {
      console.log("Erro ao buscar os livros", error)
    })
  }, [])

  //precisa cuidar quando usar isso para não ficar eternamente.
  useEffect(() => {
    fetchBooks();
  }, []);


  if (books?.length === 0) {
    return (
      <div>
        <p>Nenhum livro encontrado. </p>
      </div>
    );
  }


  
  return (
    <div>
      <h2>Lista de Livros</h2>
      <List>
        {books?.length ? (
          books.map((book) => (
            <ListItem alignItems="flex-start" key = {book.index} >
              <ListItemAvatar>
                <Avatar alt={book.title} src={book.cover} sx = {{width: 56, height: 56}} variant="square" />
              </ListItemAvatar>
              <ListItemText primary = {book.title} secondary = {<p>{book.releaseDate}</p>}></ListItemText>
            </ListItem>
          ))
        ) : (
          <p>Nenhum livro encontrado. </p>
        )}
      </List>
    </div>
  );
};
