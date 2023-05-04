import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import CategoryNames from "../components/CategoryNames";
import Footer from "../components/Footer";

function PageNotFound() {
  return (
    <>
      <Navbar />
      <CategoryNames />
      <div
        style={{ display: "flex", justifyContent: "center", margin: "10rem" }}
      >
        <div
          style={{
            width: "50%",
            padding: "5rem",
            backgroundColor: "lightblue",
          }}
          className="card"
        >
          <div className="text-center h1">PageNotFound</div>
          <div className="text-center h3">
            <button className="btn btn-primary">
              <Link style={{ color: "white" }} to={"/"}>
                Go Home
              </Link>
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default PageNotFound;
