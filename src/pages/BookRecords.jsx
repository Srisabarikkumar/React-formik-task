/* eslint-disable react/prop-types */
import axios from "axios";
import { Link } from "react-router-dom";

function BookRecords({ books, getBookRecords }) {
  const deleteBook = async (bookId) => {
    try {
      const confirmation = confirm("Are you sure on deleting the book?");
      if (confirmation) {
        await axios.delete(
          `https://66deccb7de4426916ee26ef6.mockapi.io/books/${bookId}`
        );
        getBookRecords();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h1 className="text-5xl font-bold text-center mb-10">
        Existing Book Records
      </h1>
      <div className="ml-16 mr-16 mb-10">
        <div className="container grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-6"></div>
        <div className="overflow-x-auto">
          <table className="table table-zebra">
            <thead>
              <tr>
                <th>Id</th>
                <th>Book title</th>
                <th>Author name</th>
                <th>ISBN Number</th>
                <th>Publication date</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {books.map((book) => (
                <tr key={book.id}>
                  <th>{book.id}</th>
                  <td>{book.title}</td>
                  <td>{book.author}</td>
                  <td>{book.isbnNumber}</td>
                  <td>{book.publicationDate}</td>
                  <td>
                    <div className="flex gap-2">
                      <Link to={`/edit-book/${book.id}`}>
                        <button className="btn btn-primary">Edit</button>
                      </Link>
                      <button
                        onClick={() => {
                          deleteBook(book.id);
                        }}
                        className="btn btn-primary"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default BookRecords;
