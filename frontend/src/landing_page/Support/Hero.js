import React from "react";
function Hero() {
  return (
    <>
      <div style={{ backgroundColor: "lightgray", width: "100%" }}>
        <div className="container ">
          <div className="row ">
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
              }}
            >
              <h1 className="mt-5 text-muted fs-1">Support Portal</h1>
              <button type="button" class="btn btn-primary px-4 py-2 mt-5 fs-5">
                My Ticket
              </button>
            </div>
            <div class="input-group flex-nowrap mt-3 py-3 mb-5">
              <span class="input-group-text border-end-0" id="addon-wrapping">
                <i class="fa-solid fa-magnifying-glass"></i>
              </span>
              <input
                type="text"
                class="form-control pl-3 py-3 fs-4 border-start-0"
                placeholder="Eg: How do I open my account, How do i activate F&O..."
                aria-label="Username"
                aria-describedby="addon-wrapping"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
