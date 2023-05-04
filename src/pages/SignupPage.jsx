import CategoryNames from "../components/CategoryNames";
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
    </>
  );
}
export default SignupPage;
