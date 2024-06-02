import React from "react";
import { MDBFooter } from "mdb-react-ui-kit";

const Footer = () => {
  return (
    <>
      <MDBFooter
        className="text-center text-white"
        style={{ backgroundColor: "#f1f1f1" }}
      >
        <div
          className="text-center text-dark p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          © 2024 Copyright:
          <a className="text-dark" href="https://mdbootstrap.com/">
            Rotich K Novestus
          </a>
        </div>
      </MDBFooter>
    </>
  );
};

export default Footer;
