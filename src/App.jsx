import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Header from "./components/layout/header/Header";
import MainPages from "./components/pages/main/mainPages";
import Admin from "./components/pages/admin/Admin";
import Product from "./components/pages/product/Product";

function App() {
  const routes = [
    {
      id: 1,
      path: "/",
      element: <MainPages />,
    },
    {
      id: 2,
      path: "/admin",
      element: <Admin />,
    },
    {
      id: 3,
      path: "/product",
      element: <Product />,
    },
  ];
  return (
    <div className="app">
      <Header />
      <Routes>
        {routes.map((el) => (
          <Route path={el.path} element={el.element} key={el.id} />
        ))}
      </Routes>
    </div>
  );
}

export default App;
