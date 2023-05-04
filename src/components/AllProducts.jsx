import axios from "axios";
import { useEffect, useState } from "react";
import Endpoints from "../api/Endpoints";
import Product from "./Product";
import { RingLoader } from "react-spinners";

function AllProducts() {
  const [products, setProducts] = useState([]);

  const fetchData = () => {
    axios
      .get(Endpoints.PRODUCTS_URL)
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div>
        {products.length > 0 ? (
          <div className="row row-cols-auto justify-content-around allProductsRow">
            {products.map((product) => (
              <Product key={product.id} data={product} />
            ))}
          </div>
        ) : (
          <div
            style={{
              width: "200px",
              position: "absolute",
              top: "50%",
              left: "50%",
              right: "50%",
            }}
          >
            <RingLoader color="rgb(41, 170, 255)" />
            <p style={{ marginLeft: "-3rem", position: "fixed" }}>
              Loading, Please wait...
            </p>
          </div>
        )}
      </div>
    </>
  );
}
export default AllProducts;
