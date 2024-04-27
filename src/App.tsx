// import { Link, Outlet } from "react-router-dom";
import type { MenuProps } from "antd";
import { Menu } from "antd";
import { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const items: MenuProps["items"] = [
  {
    label: "AppKeeper",
    key: "/AppKeeper",
  },
  {
    label: "Product",
    key: "/Product",
  },
  {
    label: "AppWeather",
    key: "/AppWeather",
  },
];

const App = () => {
  const navigate = useNavigate();
  const [current, setCurrent] = useState("/AppKeeper");
  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
    navigate(e.key);
  };

  return (
    <div>
      <Menu
        onClick={onClick}
        selectedKeys={[current]}
        mode="horizontal"
        items={items}
      />
      <Outlet />
    </div>
  );
};

export default App;

// function App() {
//   return (
//     <>
//       <nav className="m-5 p-5 flex justify-center gap-5 text-xl text-orange-600">
//         <Link to="/AppKeeper">AppKeeper</Link>
//         <Link to="/Product">Product</Link>
//       </nav>
//       <Outlet />
//     </>
//   );
// }

// export default App;
