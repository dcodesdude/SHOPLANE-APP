import { useState } from "react";
import CategoryNames from "../components/CategoryNames";
import Navbar from "../components/Navbar";
import Wishlist from "../components/Wishlist";

function FavoritesPage() {
  // const [data, setData] = useState(["hi"]);

  return (
    <>
      <Navbar />
      <CategoryNames />
      <Wishlist />
    </>
  );
}
export default FavoritesPage;
