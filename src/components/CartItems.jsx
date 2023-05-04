import { MdDeleteForever } from "react-icons/md";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../Redux/Slice/CartSlice";

function CartItems(props) {
  const { id, title, price, description, category, image, rating } = props.data;

  let productPrice = price;

  let roundPrice = (Math.floor(productPrice * 100) / 100).toFixed(2);

  const priceString = String(roundPrice);
  const priceArr = priceString.split("");
  const mainPrice = priceArr.slice(0, priceArr.indexOf("."));
  const subPrice = priceArr.slice(priceArr.indexOf(".") + 1);

  const dispatch = useDispatch();

  const handleRemoveItemFromCart = () => {
    dispatch(removeFromCart(props.data));
  };
  return (
    <>
      {/* <div className="col-sm-9 card"> */}
      <div className="card cartDiv">
        <div className="imageDiv">
          <img src={image} alt={title} />
        </div>
        <div className="contentDiv">
          <div>
            <h6>
              {category}
              <p style={{ color: "grey" }}>{title}</p>
            </h6>
          </div>
          <div className="priceDiv">
            <div className="productPriceDiv">
              <p className="dollarSign">$</p>
              <p className="mainPrice">{mainPrice}</p>
              <p className="subPrice">{subPrice}</p>
            </div>
          </div>
          <div className="deleteBtnDivContainer">
            <div>
              <MdDeleteForever
                onClick={handleRemoveItemFromCart}
                style={{ cursor: "pointer" }}
                size={"1.8rem"}
                color="#cc0f00"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default CartItems;
