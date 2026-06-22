import React from "react";
function Universe() {
  return (
    <>
      <div className="container mt-5">
        <div className="row " style={{ textAlign: "center" }}>
          <h1>The Zerodha Universe</h1>
          <p className="mb-5">
            Extend your trading and investment experience even further with our
            partner platforms
          </p>
          <div className="col-4 p-3 mt-5">
            <img src="Media/smallcase-.png" style={{ width: "55%" }} />
            <p className="text-muted text-small">Thematic investing platform</p>
          </div>
          <div className="col-4 p-3 mt-5">
            <img src="Media/streak.png" style={{ width: "50%" }} />
            <p className="text-muted text-small">Systematic trading platform</p>
          </div>
          <div className="col-4 p-3 mt-5">
            <img src="Media/sensibull.svg" style={{ width: "60%" }} />
            <p className="text-muted text-small">Options trading platform</p>
          </div>
          <div className="col-4 p-3 mt-5">
            <img src="Media/zerodhafund.png" style={{ width: "55%" }} />
            <p className="text-muted text-small">asset management venture</p>
          </div>
          <div className="col-4 p-3 mt-5">
            <img src="Media/tijori.svg" style={{ width: "50%" }} />
            <p className="text-muted text-small">
              Investment research platform
            </p>
          </div>
          <div className="col-4 p-3 mt-5">
            <img src="Media/ditto.png" style={{ width: "50%" }} />
            <p className="text-muted text-small">Insurance</p>
          </div>
          <button
            className="p-2 btn btn-primary fs-5 mt-5 mb-5"
            style={{ width: "20%", margin: "0 auto" }}
          >
            SignUp for Free
          </button>
        </div>
      </div>
    </>
  );
}

export default Universe;
