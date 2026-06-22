import React from "react";
function RightSection({
  imageUrl,
  productName,
  productDescription,
  learnMore,
}) {
  return (
    <>
      <div className="container mt-5">
        <div className="row ">
          <div className="col-6 p-5  mt-4 ">
            <h1>{productName}</h1>
            <p className="fs-5 mt-4">{productDescription}</p>
            <div className="fs-5">
              <a href={learnMore} style={{ textDecoration: "none" }}>
                Learn Demo→{" "}
              </a>
            </div>
          </div>
          <div className="col-6" style={{ width: "50%" }}>
            <img src={imageUrl} />
          </div>
        </div>
      </div>
    </>
  );
}

export default RightSection;
