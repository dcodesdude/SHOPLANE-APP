import Cart from "../components/Cart";
import CategoryNames from "../components/CategoryNames";
import Navbar from "../components/Navbar";

function CartPage() {
  return (
    <>
      <div style={{ backgroundColor: "white" }} className="sticky-top">
        <Navbar />
        <CategoryNames />
      </div>
      <Cart />
    </>
  );
}
export default CartPage;
