import axios from "axios";
import { useFormik } from "formik";
import { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

function EditAuthor() {
  const params = useParams();
  const navigation = useNavigate();
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
      try {
        await axios.put(
          `https://66deccb7de4426916ee26ef6.mockapi.io/author/${params.id}`,
          values
        );
        formik.resetForm();
        navigation("/author-records");
      } catch (error) {
        console.log(error);
      }
    },
  });

  const getData = async () => {
    try {
      const response = await axios.get(
        `https://66deccb7de4426916ee26ef6.mockapi.io/author/${params.id}`
      );
      formik.setValues(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <h1 className="text-5xl font-bold text-center mt-5 mb-10">
        Update Author Record
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
            <div className="flex justify-end gap-3 mt-5 mr-3 mb-10 max-w-md">
              <button type="submit" className="btn btn-primary">
                Update
              </button>
              <Link to={"/author-records"}>
                <button className="btn btn-primary mr-10">Cancel</button>
              </Link>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

export default EditAuthor;
