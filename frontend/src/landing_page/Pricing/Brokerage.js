import React from "react";
function Brokerage() {
  return (
    <>
      <div className="container">
        <div className="row p-5 mt-1  border-top">
            <h2 className="mb-5">Charges for Opening Account</h2>
          <table class="table border" style={{width:"100%",height:"400px"}}>
            <thead>
              <tr>
                <th  className="fs-5" scope="col">Types of account</th>
                <th  className="fs-5"scope="col">Charges</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="fs-5">Individual account</td>
                <td className="fs-5">Free</td>
              </tr>
              <tr>
                <td className="fs-5">Minor account</td>
                <td className="fs-5">Free</td>
              </tr>
              <tr>
                <td className="fs-5">NRI account</td>
                <td className="fs-5">$500/-</td>
              </tr>
              <tr>
                <td className="fs-5">HUF account</td>
                <td className="fs-5">Free</td>
              </tr>
              <tr>
                <td className="fs-5">Partnership, LLP, and Corporate accounts (offline only)</td>
                <td className="fs-5">$500/-</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Brokerage;
