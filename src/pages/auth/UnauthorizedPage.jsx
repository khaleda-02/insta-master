import { Link } from "react-router-dom";
import { Navbar } from "../../components";

const UnauthorizedPage = () => {
  return (
    <div>
      <Navbar />
      <div className="min-h-[90vh] flex flex-col justify-center items-center ">
        <h1>
          you are not authorized , so make sure to login or go back to the home
          page
        </h1>
        <div className="mt-4 text-white text-3xl font-extrabold capitalize">
          <Link to="/auth/login"> lgin ,</Link>
          <Link to="/auth/register"> register , </Link>
          <Link to="/">home </Link>
        </div>
      </div>
    </div>
  );
};

export default UnauthorizedPage;
