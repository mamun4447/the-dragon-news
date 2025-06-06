import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const FindUs = () => {
  return (
    <div>
      <h2 className="text-lg font-bold mb-2">Find Us on</h2>
      <div className="join flex join-vertical">
        <button className="btn join-item justify-start">
          <FaFacebook className="text-cyan-600" /> Facebook
        </button>
        <button className="btn join-item justify-start">
          <FaTwitter className="text-cyan-400" /> Twitter
        </button>
        <button className="btn join-item justify-start">
          {" "}
          <FaInstagram className="text-red-500" /> Instagram
        </button>
      </div>
    </div>
  );
};

export default FindUs;
