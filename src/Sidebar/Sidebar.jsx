import "./sidebar.scss";
import { FaShoppingCart } from "react-icons/fa";
import Category from "./Category/Category";
import Price from "./Price/Price";
import Colors from "./Colors/Colors";

export default function Sidebar({ handleChange }) {
  return (
    <section className="sidebar">
      <div className="logo-container">
        <h1 className="sidebar-title">
          <FaShoppingCart />
        </h1>
      </div>
      <Category handleChange={handleChange} />
      <Price handleChange={handleChange} />
      <Colors handleChange={handleChange} />
    </section>
  );
}
