import { Link, useRouteError } from "react-router-dom";

export default function ShowError() {
  const error = useRouteError();

  return (
    <div className="flex items-center justify-center h-72  flex-col">
      <p>{error ? error.message : "Ups, something went wrong."}</p>
      <Link
        to="/"
        className="grid justify-center p-4 bg-blue-800 text-white m-2"
      >
        Back to homepage
      </Link>
    </div>
  );
}
