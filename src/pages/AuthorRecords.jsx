/* eslint-disable react/prop-types */

import axios from "axios";
import { Link } from "react-router-dom";

function AuthorRecords({ authors, getAuthorRecords }) {
  const deleteAuthor = async (authorId) => {
    try {
      const confirmation = confirm("Are you sure to delete the author?");
      if (confirmation) {
        await axios.delete(
          `https://66deccb7de4426916ee26ef6.mockapi.io/author/${authorId}`
        );
        getAuthorRecords();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h1 className="text-5xl font-bold text-center mb-10 mt-10">
        Existing Author Records
      </h1>
      <div className="ml-10 mr-10 mb-10">
        <div className="container grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-6">
          {authors.map((author) => (
            <div
              key={author.id}
              className="card card-compact bg-base-100 shadow-xl"
            >
              <div className="card-body">
                <h2 className="card-title">
                  <strong>{author.authorName}</strong>
                </h2>
                <h5>
                  <strong>Birth date: </strong> {author.birthDate}
                </h5>
                <p>{author.biography}</p>
                <div className="card-actions justify-end">
                  <Link to={`/edit-author/${author.id}`}>
                    <button className="btn btn-primary">Edit</button>
                  </Link>
                  <button
                    onClick={() => {
                      deleteAuthor(author.id);
                    }}
                    className="btn btn-primary"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default AuthorRecords;
