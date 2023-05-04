import CategoryNames from "../components/CategoryNames";
import Footer from "../components/Footer";
import Login from "../components/Login";
import Navbar from "../components/Navbar";

function LoginPage() {
  return (
    <>
      <div style={{ backgroundColor: "white" }} className="sticky-top">
        <Navbar />
        <CategoryNames />
      </div>
      <Login />
      <Footer />
    </>
  );
}
export default LoginPage;
