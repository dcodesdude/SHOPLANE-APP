import React from "react";
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaRedditSquare,
  FaCcVisa,
  FaCcMastercard,
} from "react-icons/fa";
import { AiFillInstagram, AiFillCreditCard } from "react-icons/ai";
import { ImLinkedin } from "react-icons/im";
import { GiTakeMyMoney } from "react-icons/gi";
import { SiFsecure } from "react-icons/si";

const Footer = () => {
  return (
    <div className="footerDiv">
      <div className="footerTitle text-center">
        <h2 className="">
          SHOP<span className="">LANE</span>
        </h2>
      </div>
      <div className="footerSocial">
        <p style={{ margin: "0" }} className="">
          Follow Us!
        </p>

        <div className="socialIconDiv">
          <div className="socialIcon">
            <FaFacebookSquare size={20} color="" />
          </div>
          <div className="socialIcon">
            <FaTwitterSquare size={20} color="" />
          </div>
          <div className="socialIcon">
            <AiFillInstagram size={20} color="" />
          </div>
          <div className="socialIcon">
            <ImLinkedin size={20} color="" />
          </div>
          <div className="socialIcon">
            <FaRedditSquare size={20} color="" />
          </div>
        </div>
      </div>

      <div className="footerExtra">
        <div className="footerPayment">
          <h5 className="">Payment methods:</h5>
          <div className="socialIconDiv">
            <div className="socialIcon">
              <FaCcVisa size={20} color="" />
            </div>
            <div className="socialIcon">
              <FaCcMastercard size={20} color="" />
            </div>
            <div className="socialIcon">
              <AiFillCreditCard size={20} color="" />
            </div>
            <div className="socialIcon">
              <GiTakeMyMoney size={20} color="" />
            </div>
          </div>
        </div>
        <div className="footerSubscription">
          <h5 className="">Subscribe to the fashion trend!</h5>
          <div className="subscriptionDiv">
            <input
              type="text"
              className="subscriptionInput"
              placeholder="Enter your Email here!"
            />
            <button className="btn btn-danger">Subscribe</button>
          </div>
        </div>
      </div>

      <hr className="mt-3" />

      <div className="footerEndNotes">
        <p style={{ margin: "0" }} className="">
          &#169;All Rights Reserved.
        </p>
        <div className="footerNoteEncryption">
          <SiFsecure />
          <p style={{ margin: "0" }} className="">
            Secured by 256 bit encryption
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
