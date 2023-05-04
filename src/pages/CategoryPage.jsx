import { useParams } from "react-router-dom";
import CategoryNames from "../components/CategoryNames";
import EachCategory from "../components/EachCategory";
import Navbar from "../components/Navbar";

function CategoryPage() {
  const catName = useParams();

  return (
    <>
      <div style={{ backgroundColor: "white" }} className="sticky-top">
        <Navbar />
        <CategoryNames />
      </div>
      <EachCategory data={catName} />
    </>
  );
}
export default CategoryPage;
