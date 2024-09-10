import axios from "axios";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import AuthorRecords from "./AuthorRecords";

function CreateAuthorRecord() {
  const [authors, setAuthors] = useState([]);

  const formik = useFormik({
    initialValues: {
      authorName: "",
      birthDate: "",
      biography: "",
    },
    validate: (values) => {
      const error = {};

      if (values.authorName === "") {
        error.authorName = "Please enter the author name";
      }

      if (values.birthDate === "") {
        error.birthDate = "Please enter the birth date";
      }

      if (values.biography == "") {
        error.biography = "Please add the biography";
      }

      return error;
    },
    onSubmit: async (values) => {
      await axios.post(
        "https://66deccb7de4426916ee26ef6.mockapi.io/author",
        values
      );
      const response = await axios.get(
        "https://66deccb7de4426916ee26ef6.mockapi.io/author"
      );
      console.log(response.data);
      setAuthors(response.data);
      formik.resetForm();
    },
  });

  const getAuthorRecords = async () => {
    const response = await axios.get(
      "https://66deccb7de4426916ee26ef6.mockapi.io/author"
    );
    setAuthors(response.data);
  };

  useEffect(() => {
    getAuthorRecords();
  }, []);

  return (
    <>
      <h1 className="text-5xl font-bold text-center mt-5 mb-10">
        Create New Author Record
      </h1>
      <form onSubmit={formik.handleSubmit}>
        <div className="flex justify-center">
          <div className="container w-3/4 grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 mt-10 gap-4">
            <div className="flex flex-col ml-20 gap-2">
              <label>Author Name</label>
              <div>
                <input
                  type="text"
                  className="input input-bordered input-primary w-full max-w-xs"
                  name="authorName"
                  value={formik.values.authorName}
                  onChange={formik.handleChange}
                />
              </div>
              <div>
                <span className="text-red-300">{formik.errors.authorName}</span>
              </div>
            </div>
            <div className="flex flex-col ml-20 gap-2">
              <label>Birth date</label>
              <div>
                <input
                  type="date"
                  className="input input-bordered input-primary w-full max-w-xs"
                  name="birthDate"
                  value={formik.values.birthDate}
                  onChange={formik.handleChange}
                />
              </div>
              <div>
                <span className="text-red-300">{formik.errors.birthDate}</span>
              </div>
            </div>
            <div className="flex flex-col ml-20 gap-2">
              <label>Biography</label>
              <div>
                <textarea
                  name="biography"
                  value={formik.values.biography}
                  onChange={formik.handleChange}
                  className="textarea textarea-primary w-full max-w-xs"
                  placeholder="Bio"
                />
              </div>
              <div>
                <span className="text-red-300">{formik.errors.biography}</span>
              </div>
            </div>
            <div className="flex justify-end mt-5 mr-3 mb-10 max-w-md">
              <button type="submit" className="btn btn-primary mr-14">
                Submit
              </button>
            </div>
          </div>
        </div>
      </form>
      <AuthorRecords authors={authors} getAuthorRecords={getAuthorRecords} />
    </>
  );
}

export default CreateAuthorRecord;
