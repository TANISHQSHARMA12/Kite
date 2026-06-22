import React from "react";
function Hero() {
  return (
    <>
      <div className="container p-5">
        <div className="row text-center text-muted p-5">
          <h1 className=" fs-2 mb-4">Zerodha Products</h1>
          <h3 className=" fs-4 mb-4">Sleek, modern, and intuitive trading platforms</h3>
          <h5 className=" fs-5">
            Check out our{" "}
            <a href="" style={{ textDecoration: "none" }}>
              investment offerings→
            </a>
          </h5>
        </div>
      </div>
    </>
  );
}

export default Hero;
