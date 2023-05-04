import { BsFillCartFill } from "react-icons/bs";
import Stars from "./Stars";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  addToWishlist,
  changeATCbtnName,
  removeFromCart,
} from "../Redux/Slice/CartSlice";

function Product(props) {
  const { id, title, price, description, category, image, rating } = props.data;

  let productPrice = price;

  let roundPrice = (Math.floor(productPrice * 100) / 100).toFixed(2);

  const priceString = String(roundPrice);
  const priceArr = priceString.split("");
  const mainPrice = priceArr.slice(0, priceArr.indexOf("."));
  const subPrice = priceArr.slice(priceArr.indexOf(".") + 1);

  const heart = useRef();
  const atcBtn = useRef();

  function handleHeartClick() {
    heart.current.classList.toggle("heartColor");
    dispatch(addToWishlist(props.data));
  }

  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const removeFromCartChanges = {
    name: "Remove from Cart",
    color: "red",
  };
  const addToCartChanges = {
    name: "Add to Cart",
    color: "#0d6efd",
  };
  function handleATCclick() {
    dispatch(addToCart(props.data));

    // if (atcBtn.current.innerText === "Add to Cart") {
    //   dispatch(addToCart(props.data));
    //   dispatch(changeATCbtnName(removeFromCartChanges));
    //   atcBtn.current.innerText = cart.atcBtnName.name;
    //   atcBtn.current.style.backgroundColor = cart.atcBtnName.color;
    // } else if (atcBtn.current.innerText === "Remove from Cart") {
    //   dispatch(removeFromCart(props.data));
    //   dispatch(changeATCbtnName(addToCartChanges));
    //   atcBtn.current.innerText = cart.atcBtnName.name;
    //   atcBtn.current.style.backgroundColor = cart.atcBtnName.color;
    // }

    //------------------- simple logic -------------
    // if (atcBtn.current.innerText === "Add to Cart") {
    //   dispatch(addToCart(props.data));
    //   dispatch(changeATCbtnName(removeFromCartChanges));
    //   atcBtn.current.innerText = cart.atcBtnName.name;
    //   atcBtn.current.style.backgroundColor = cart.atcBtnName.color;
    // } else if (atcBtn.current.innerText === "Remove from Cart") {
    //   dispatch(removeFromCart(props.data));
    //   dispatch(changeATCbtnName(addToCartChanges));
    //   atcBtn.current.innerText = cart.atcBtnName.name;
    //   atcBtn.current.style.backgroundColor = cart.atcBtnName.color;
    // }
    //------------------- simple logic end -------------

    //----------------------complex logic------------------
    // // if (atcBtn.current.innerText === "Add to Cart") {
    // if (cart.atcBtnName.name === "Add to Cart") {
    //   for (let each of cart.cartItems) {
    //     if (each.id === props.data.id) {
    //       alert("item already added to the cart");
    //     } else {
    //       dispatch(addToCart(props.data));
    //     }
    //   }
    //   dispatch(addToCart(props.data));
    //   dispatch(changeATCbtnName(removeFromCartChanges));
    //   atcBtn.current.innerText = cart.atcBtnName.name;
    //   atcBtn.current.style.backgroundColor = cart.atcBtnName.color;
    //   // } else if (atcBtn.current.innerText === "Remove from Cart") {
    // } else if (cart.atcBtnName.name === "Remove from Cart") {
    //   dispatch(removeFromCart(props.data));
    //   dispatch(changeATCbtnName(addToCartChanges));
    //   atcBtn.current.innerText = cart.atcBtnName.name;
    //   atcBtn.current.style.backgroundColor = cart.atcBtnName.color;
    // }
    //----------------------complex logic end------------------
  }

  return (
    <>
      <div style={{ margin: "1rem" }} className="col-xs-auto">
        <div className="card h-100" style={{ width: "14.7rem" }}>
          <div className="productHeartDivContainer">
            <div
              className="productHeartDiv"
              id="a"
              onClick={handleHeartClick}
              ref={heart}
            >
              <FaHeart className="productHeart" />
            </div>
          </div>
          <div className="imageContainingDiv">
            <Link to={"/products/" + id}>
              <img
                src={image}
                className="card-img-top productImgMain"
                alt={title}
              />
            </Link>
          </div>
          <div className="card-body">
            <h6 style={{ display: "flex", gap: "0.2rem" }}>
              Brand,
              <p className="card-title allProductTitle">{title}</p>
            </h6>
            <Stars stars={rating.rate} reviews={rating.count} />
            <div className="productPriceDiv">
              <p className="dollarSign">$</p>
              <p className="mainPrice">{mainPrice}</p>
              <p className="subPrice">{subPrice}</p>
            </div>
            <button
              id="b"
              onClick={handleATCclick}
              ref={atcBtn}
              className="btn btn-primary addToCartBtnInAllProducts"
            >
              {/* <BsFillCartFill size={"20px"} /> */}
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default Product;
