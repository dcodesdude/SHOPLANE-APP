import CategoryNames from "../components/CategoryNames";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import SignUp from "../components/SignUp";

function SignupPage() {
  return (
    <>
      <div style={{ backgroundColor: "white" }} className="sticky-top">
        <Navbar />
        <CategoryNames />
      </div>
      <SignUp />
      <Footer />
    </>
  );
}
export default SignupPage;
