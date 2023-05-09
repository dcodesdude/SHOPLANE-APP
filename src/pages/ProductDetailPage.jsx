import { useParams } from "react-router-dom";
import CategoryNames from "../components/CategoryNames";
import Navbar from "../components/Navbar";
import ProductDetail from "../components/ProductDetail";
import Footer from "../components/Footer";

function ProductDetailPage() {
  const { id } = useParams();
  return (
    <>
      <Navbar />
      <CategoryNames />
      <ProductDetail data={id} />
      <Footer />
    </>
  );
}
export default ProductDetailPage;
