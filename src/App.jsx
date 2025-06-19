import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Header from "./components/layout/header/Header";
import MainPages from "./components/pages/main/mainPages";
import Admin from "./components/pages/admin/Admin";
import Product from "./components/pages/product/Product";
import Cart from "./components/pages/cart/Cart";
import Breadcrumbs from "./components/ui/breadCrumbs/BreadCrumbs";

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
    {
      id: 4,
      path: "/cart",
      element: <Cart />,
    },
  ];
  return (
    <div className="app">
      <Header />
      <Breadcrumbs/>
      <Routes>
        {routes.map((el) => (
          <Route path={el.path} element={el.element} key={el.id} />
        ))}
      </Routes>
    </div>
  );
}

export default App;
