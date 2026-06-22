import React from "react";
function Hero() {
  return (
    <>
      <div className="container">
        <div
          className="row p-5 mt-5 border-bottom "
          style={{ textAlign: "center" }}
        >
          <h2>Charges</h2>
          <h4 className="text-muted mt-3">List of all charges and taxes</h4>
        </div>
        <div className="row p-5 mt-1 text-center">
          <div className="col-4 p-4 ">
            <img src="Media/pricing-eq.svg" style={{ width: "80%" }} />
            <h2 style={{ fontSize: "28px" }}>Free equity delivery</h2>
            <p className="mt-4 text-muted" style={{ textAlign: "center" }}>
              All equity delivery investments (NSE, BSE), are absolutely free —
              ₹ 0 brokerage.
            </p>
          </div>
          <div className="col-4 p-4">
            <img src="Media/other-trades.svg" style={{ width: "80%" }} />
            <h2 style={{ fontSize: "28px" }}>Intraday and F&O trades</h2>
            <p className="mt-4 text-muted" style={{ textAlign: "center" }}>
              Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
              intraday trades across equity, currency, and commodity trades.
              Flat ₹20 on all option trades.
            </p>
          </div>
          <div className="col-4 p-4">
            <img src="Media/pricing-eq.svg" style={{ width: "80%" }} />
            <h2 style={{ fontSize: "28px" }}>Free direct MF</h2>
            <p className="mt-4 text-muted" style={{ textAlign: "center" }}>
              All direct mutual fund investments are absolutely free — ₹ 0
              commissions & DP charges.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
