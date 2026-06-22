import React from "react";
function Team() {
  return (
    <div className="container ">
      <div className="row p-5 mt-5   text-center border-top">
        <h1 className="text-center " style={{ color: "#424242" }}>
          People
        </h1>
      </div>
      <div
        className="row p-5  "
        style={{
          lineHeight: "1.8",
          fontSize: "1.05rem",
          color: "black",
          fontWeight: "350",
        }}
      >
        <div className="col-6 p-5 text-center">
          <img
            src="Media/nithin-kamath.jpg"
            style={{ borderRadius: "100%", width: "50%" }}
          />
          <h4 className="mt-4">Nithin Kamath</h4>;<h6>Founder, CEO</h6>
        </div>
        <div className="col-6 p-5 fs-5">
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.</p>
            <p>He is a member of the SEBI Secondary Market Advisory Committee (SMAC)
            and the Market Data Advisory Committee (MDAC).</p>
             <p>Playing basketball is his zen.</p>
        </div>
      </div>
    </div>
  );
}

export default Team;
