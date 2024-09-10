import { useFormik } from "formik";
import { useState, useEffect } from "react";
import BookRecords from "./BookRecords";
import axios from "axios";

function CreateBookRecord() {
  const [books, setBooks] = useState([]);

  const formik = useFormik({
    initialValues: {
      title: "",
      author: "",
      isbnNumber: "",
      publicationDate: "",
    },
    validate: (values) => {
      const error = {};

      if (values.title === "") {
        error.title = "Please enter the title";
      }

      if (values.author === "") {
        error.author = "Please enter the author name";
      }

      if (values.isbnNumber <= 0) {
        error.isbnNumber = "Please enter the ISBN number";
      }

      if (values.publicationDate === "") {
        error.publicationDate = "Please enter the Publication date";
      }

      return error;
    },
    onSubmit: async (values) => {
      await axios.post(
        "https://66deccb7de4426916ee26ef6.mockapi.io/books",
        values
      );
      const response = await axios.get(
        "https://66deccb7de4426916ee26ef6.mockapi.io/books"
      );
      setBooks(response.data);
      formik.resetForm();
    },
  });

  const getBookRecords = async () => {
    const response = await axios.get(
      "https://66deccb7de4426916ee26ef6.mockapi.io/books"
    );
    setBooks(response.data);
    console.log(response.data);
  };

  useEffect(() => {
    getBookRecords();
  }, []);

  return (
    <>
      <h1 className="text-5xl font-bold text-center mt-5">
        Create New Book record
      </h1>
      <form onSubmit={formik.handleSubmit}>
          <div className="flex justify-center">
            <div className="container w-3/4 grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 mt-10 gap-4">
              <div className="flex flex-col ml-20 gap-2">
                <label>Book title</label>
                <input
                  type="text"
                  className="input input-bordered input-primary w-full max-w-xs "
                  name="title"
                  value={formik.values.title}
                  onChange={formik.handleChange}
                />
                <div>
                  <span className="text-red-300">{formik.errors.title}</span>
                </div>
              </div>
              <div className="flex flex-col ml-20 gap-2">
                <label>Author name</label>
                <input
                  type="text"
                  className="input input-bordered input-primary w-full max-w-xs"
                  name="author"
                  value={formik.values.author}
                  onChange={formik.handleChange}
                />
                <div>
                  <span className="text-red-300">{formik.errors.author}</span>
                </div>
              </div>
              <div className="flex flex-col ml-20 gap-2">
                <label>ISBN Number</label>
                <input
                  type="number"
                  className="input input-bordered input-primary w-full max-w-xs"
                  name="isbnNumber"
                  value={formik.values.isbnNumber}
                  onChange={formik.handleChange}
                />
                <div>
                  <span className="text-red-300">
                    {formik.errors.isbnNumber}
                  </span>
                </div>
              </div>
              <div className="flex flex-col ml-20 gap-2">
                <label>Publication date</label>
                <input
                  type="date"
                  className="input input-bordered input-primary w-full max-w-xs"
                  name="publicationDate"
                  value={formik.values.publicationDate}
                  onChange={formik.handleChange}
                />
                <div>
                  <span className="text-red-300">
                    {formik.errors.publicationDate}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="container flex justify-end mt-5 mb-10 w-4/5 xs:justify-center">
            <button type="submit" className="btn btn-primary mr-14">
              Submit
            </button>
          </div>
      </form>
      <BookRecords books={books} getBookRecords={getBookRecords} />
    </>
  );
}

export default CreateBookRecord;
