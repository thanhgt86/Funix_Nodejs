import { Link } from "react-router-dom";
import "./main.css";

export const MainNavigation = () => {
  return (
    <header className="main-header">
      <nav className="main-header__nav">
        <ul className="main-header__item-list">
          <li className="main-header__item">
            <Link to="/">Shop</Link>
          </li>

          <li className="main-header__item">
            <Link to="/">Products</Link>
          </li>

          <li className="main-header__item">
            <Link to="/">Cart</Link>
          </li>

          <li className="main-header__item">
            <Link to="/">Orders</Link>
          </li>

          <li className="main-header__item">
            <Link to="/add-product">Add Product</Link>
          </li>

          <li className="main-header__item">
            <Link to="/admin-product">Admin Products</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
