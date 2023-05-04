import AllProducts from "../components/AllProducts";
import CategoryNames from "../components/CategoryNames";
import Navbar from "../components/Navbar";

function HomePage() {
  return (
    <>
      <div style={{ backgroundColor: "white" }} className="sticky-top">
        <Navbar />
        <CategoryNames />
      </div>
      <AllProducts />
    </>
  );
}
export default HomePage;
