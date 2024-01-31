import { Link, useRouteError } from "react-router-dom";

export default function ShowError() {
  const error = useRouteError();

  return (
    <div className="flex h-72 flex-col items-center  justify-center">
      <p>{error ? error.message : "Ups, something went wrong."}</p>
      <Link
        to="/"
        className="m-2 grid justify-center bg-blue-800 p-4 text-white"
      >
        Back to homepage
      </Link>
    </div>
  );
}
