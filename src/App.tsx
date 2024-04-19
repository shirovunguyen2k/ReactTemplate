import { Link, Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <nav className="m-5 p-5 flex justify-center gap-5 text-xl text-orange-600">
        <Link to="/AppKeeper">AppKeeper</Link>
        <Link to="/Product">Product</Link>
      </nav>
      <Outlet />
    </>
  );
}

export default App;
