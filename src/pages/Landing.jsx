import { Link } from "react-router-dom";

function Landing() {
  return (
    <div>
      <h1 className="lg:text-8xl md:text-7xl sm:text-5xl text-center font-bold mt-10 mb-10">
        Library Management System
      </h1>
      <div className="flex justify-center gap-6 mt-20">
        <Link to={"/book-records"}>
          <button className="btn btn-primary">Book records</button>
        </Link>
        <Link to={"/author-records"}>
          <button className="btn btn-primary">Author records</button>
        </Link>
      </div>
    </div>
  );
}

export default Landing;
