import React from "react";
import background from "../src/assets/images/1.jpg";
import logo from "../src/assets/images/logo.jpeg";
import { Link } from "react-router-dom";
const Home = () => {
  console.log("App rendering");

  return (
    <>
      <div
        style={{
          display: "flex",
          flex: 1,
          background: `url(${background})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          minHeight: "100vh",
          minWidth: "100%",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            backgroundColor: "#AD343D",
            height: "70px",
            width: "100%",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", width: "40%" }}>
            <img
              src={logo}
              alt="React Image"
              style={{
                height: "50px",
                width: "50px",
                borderRadius: 99,
                padding:'10px'
              }}
            />
            <p
              style={{
                color: "#fff",
                fontSize: "24px",
                textAlign: "center",
                padding: "5px",
                marginLeft: "20px",
              }}
            >
              Shanti Niketan Library
            </p>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              width: "60%",
            }}
          >
            <button
              style={{
                color: "#AD343D",
                fontSize: "16px",
                textAlign: "center",
                padding: "5px",
                backgroundColor: "#fff",
                border: "1px solid red",
                borderRadius: 99,
                paddingLeft: "15px",
                paddingRight: "15px",
              }}
            >
              Home
            </button>
            <button
              style={{
                color: "#AD343D",
                fontSize: "16px",
                textAlign: "center",
                padding: "5px",
                backgroundColor: "#fff",
                border: "1px solid red",
                borderRadius: 99,
                paddingLeft: "15px",
                paddingRight: "15px",
              }}
              onClick={()=>Link("About")}
            >
              About
            </button>
            <button
              style={{
                color: "#AD343D",
                fontSize: "16px",
                textAlign: "center",
                padding: "5px",
                backgroundColor: "#fff",
                border: "1px solid red",
                borderRadius: 99,
                paddingLeft: "15px",
                paddingRight: "15px",
              }}
            >
              Photos
            </button>
            <button
              style={{
                color: "#AD343D",
                fontSize: "16px",
                textAlign: "center",
                padding: "5px",
                backgroundColor: "#fff",
                border: "1px solid red",
                borderRadius: 99,
                paddingLeft: "15px",
                paddingRight: "15px",
              }}
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
