import React, {Fragment, useEffect, useState} from 'react';
import Book from "./Book";
import "./BooksTable.css"
import {Modal} from "@mui/material";

const Books = (props) => {

    const [data, setData] = useState([]);


    useEffect(() => {
      fetch("https://fakerapi.it/api/v1/books?_quantity=15")
          .then(res => res.json())
          .then((result) => {
              console.log(result);
              setData(result.data)
      });
    }, [])

    return(
            <table>
                <thead>
            <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Author</th>
                <th>Genre</th>
                <th>Description</th>
                <th>Action</th>
            </tr>
                </thead>
                <tbody>
            {data.map((book, bookIndex) => {
                return (
             <Fragment>
                    <Book
                        image = {book.image}
                        bookIndex = {bookIndex}
                        id = {book.id}
                        title ={book.title}
                        author ={book.author}
                        genre ={book.genre}
                        description={book.description}
                    />
             </Fragment>
                );
            })}
                </tbody>
            </table>
    );
};

export default Books;


