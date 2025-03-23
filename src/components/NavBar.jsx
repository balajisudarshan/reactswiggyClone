import { Link } from "react-router";
import MyStore from "../utils/MyStore";
import { useSelector } from "react-redux";

function NavBar() {
  const cartItems = useSelector((state)=>state.cart.items)
  return (
    <nav>
      <div className="logo">
        <Link to="/">
        <img
          src="https://th.bing.com/th?q=Swiggy+Logo+JPEG+Images+Free+Download&w=120&h=120&c=1&rs=1&qlt=90&cb=1&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247"
          alt="Swiggy Logo"
        />
        </Link>
      </div>
      <ul className="links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><i class="fa-solid fa-cart-shopping"></i> <span className="text-blue-950">{cartItems.length}</span></li>
      </ul>
    </nav>
  );
}
export default NavBar;