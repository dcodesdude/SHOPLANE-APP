import axios from "axios";
import { useEffect, useRef, useState } from "react";
import Endpoints from "../api/Endpoints";
import Stars from "./Stars";
import { BsFillCartFill } from "react-icons/bs";
import { RingLoader } from "react-spinners";
import { FaHeart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  addToWishlist,
  changeATCbtnName,
  removeFromCart,
} from "../Redux/Slice/CartSlice";

function ProductDetail(props) {
  const cart = useSelector((state) => state.cart);
  const id = props.data;
  const [product, setProduct] = useState({});
  const [rating, setRating] = useState({});

  const fetchData = () => {
    axios
      .get(Endpoints.PRODUCTS_URL + id)
      .then((response) => {
        setProduct(response.data);
        setRating(response.data.rating);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchData();
  }, [id]);

  let price = product.price;

  let roundPrice = (Math.floor(price * 100) / 100).toFixed(2);

  const priceString = String(roundPrice);
  const priceArr = priceString.split("");
  const mainPrice = priceArr.slice(0, priceArr.indexOf("."));
  const subPrice = priceArr.slice(priceArr.indexOf(".") + 1);

  const heart = useRef();
  const atcBtn = useRef();
  const dispatch = useDispatch();
  const removeFromCartChanges = {
    name: "Remove from Cart",
    color: "red",
  };
  const addToCartChanges = {
    name: "Add to Cart",
    color: "#0d6efd",
  };

  function handleHeartClick() {
    heart.current.classList.toggle("heartColor");
    dispatch(addToWishlist(product));
  }

  function handleATCclick() {
    if (atcBtn.current.innerText === "Add to Cart") {
      dispatch(addToCart(product));
      dispatch(changeATCbtnName(removeFromCartChanges));
      atcBtn.current.innerText = cart.atcBtnName.name;
      atcBtn.current.style.backgroundColor = cart.atcBtnName.color;
    } else if (atcBtn.current.innerText === "Remove from Cart") {
      dispatch(removeFromCart(product));
      dispatch(changeATCbtnName(addToCartChanges));
      atcBtn.current.innerText = cart.atcBtnName.name;
      atcBtn.current.style.backgroundColor = cart.atcBtnName.color;
    }
  }

  return (
    <>
      {Object.keys(product).length > 0 ? (
        <div className="productDetailDiv">
          <div className=" card productDetailImageDiv">
            <img
              src={product.image}
              className="card-img-top productDetailImg"
              alt={product.title}
            />
          </div>

          <div className="productDetailContentDiv">
            <div className="productDetailBrand">BRAND</div>
            <h2 className="productDetailTitle">{product.title}</h2>
            <Stars stars={rating.rate} reviews={rating.count} />
            <div className="productDetailDescription">
              {product.description}
            </div>
            <hr />
            <div className="productDetailContent2">
              <div className="productDetailContent2Left">
                <p className="dollarSign">$</p>
                <p className="mainPrice">{mainPrice}</p>
                <p className="subPrice">{subPrice}</p>
              </div>
              <div className="productDetailContent2Right">
                <div>
                  <button
                    onClick={handleATCclick}
                    ref={atcBtn}
                    className="btn btn-primary addToCartBtnInAllProducts"
                  >
                    {/* <BsFillCartFill size={"20px"} /> */}
                    Add to Cart
                  </button>
                </div>
                <div id="a" onClick={handleHeartClick} ref={heart}>
                  <FaHeart className="detailedProductHeart" size={"1.8rem"} />
                </div>
              </div>
            </div>
          </div>
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
    </>
  );
}
export default ProductDetail;
