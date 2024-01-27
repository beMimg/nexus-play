import { Outlet } from "react-router-dom";

export default function GamesLayout() {
  return (
    <div>
      <p>Games layouts</p>
      <Outlet></Outlet>
    </div>
  );
}
