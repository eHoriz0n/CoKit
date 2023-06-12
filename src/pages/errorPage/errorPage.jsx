import { Link } from "react-router-dom";
const ErrorPage = () => {
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center  ">
      <h1 className="text-777">We are sorry page not found... (404)</h1>
      <Link to={"/"} className="underline text-xl ">
        Go home
      </Link>
    </div>
  );
};

export default ErrorPage;
