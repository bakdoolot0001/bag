import Admin from "./components/pages/admin/Admin";
import Breadcrumbs from "./components/ui/breadCrumbs/BreadCrumbs";
import Cart from "./components/pages/cart/Cart";
import Favorite from "./components/pages/favorite/Favorite";
import Header from "./components/layout/header/Header";
import MainPages from "./components/pages/main/mainPages";
import Product from "./components/pages/product/Product";
import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Footer from "./components/layout/footer/Footer";

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
    {
      id: 5,
      path: "/favorite",
      element: <Favorite />,
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
      <Footer/>
    </div>
  );
}

export default App;
