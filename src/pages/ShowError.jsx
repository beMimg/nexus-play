import { Link, useRouteError } from "react-router-dom";

export default function ShowError() {
  const error = useRouteError();

  return (
    <div>
      <h2></h2>
      <p>{error ? error.message : "Ups, something went wrong."}</p>
      <Link to="/">Back to homepage</Link>
    </div>
  );
}
