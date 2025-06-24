import Admin from "./components/pages/admin/Admin";
import Favorite from "./components/pages/favorite/Favorite";
import Header from "./components/layout/header/Header";
import MainPages from "./components/pages/main/mainPages";
import Product from "./components/pages/product/Product";
import Cart from "./components/pages/cart/Cart";
import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Footer from "./components/layout/footer/Footer";
import { useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";

function App() {
  const isDark = useSelector((state) => state.dark);

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
    <div style={{ background:isDark ? "white" : "#2f2f2f",
      color:isDark ? "black" : "white",
    }}className="app">
      <Header />
      <Routes>
        {routes.map((el) => (
          <Route path={el.path} element={el.element} key={el.id} />
        ))}
      </Routes>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
