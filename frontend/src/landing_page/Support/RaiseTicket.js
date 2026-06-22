import React from "react";
function RaiseTIcket() {
  return (
    <>
      <div className="container p-3">
        <div className="row mt-5">
          <div className="col-8">
            <div class="accordion w-100" id="accountAccordion">
              <div class="accordion-item border rounded shadow-sm mb-3">
                <h2 class="accordion-header" id="headingOne">
                  <button
                    class="accordion-button bg-white text-dark d-flex align-items-center gap-3 py-3"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    <span>
                      <i class="fa-solid fa-plus"></i>
                    </span>
                    <strong class="fs-5 fw-normal">Account Opening</strong>
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  class="accordion-collapse collapse show"
                  aria-labelledby="headingOne"
                  data-bs-parent="#accountAccordion"
                >
                  <div class="accordion-body bg-white ps-5 pt-3 pb-4">
                    <ul class="text-primary lh-lg m-0">
                      <li>
                        <a href="#" class="text-decoration-none text-primary">
                          Resident individual
                        </a>
                      </li>
                      <li>
                        <a href="#" class="text-decoration-none text-primary">
                          Minor
                        </a>
                      </li>
                      <li>
                        <a href="#" class="text-decoration-none text-primary">
                          Non Resident Indian (NRI)
                        </a>
                      </li>
                      <li>
                        <a href="#" class="text-decoration-none text-primary">
                          Company, Partnership, HUF and LLP
                        </a>
                      </li>
                      <li>
                        <a href="#" class="text-decoration-none text-primary">
                          Glossary
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div class="accordion-item border rounded shadow-sm mb-3">
                <h2 class="accordion-header" id="headingTwo">
                  <button
                    class="accordion-button collapsed bg-white text-dark d-flex align-items-center gap-3 py-3"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    <span>
                      <i class="fa-solid fa-circle-user"></i>
                    </span>
                    <strong class="fs-5 fw-normal">Your Zerodha Account</strong>
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#accountAccordion"
                >
                  <div class="accordion-body bg-white ps-5 pt-3 pb-4">
                    <ul class="text-primary lh-lg m-0">
                      <li>
                        <a href="#" class="text-decoration-none text-primary">
                          Your Profile
                        </a>
                      </li>
                      <li>
                        <a href="#" class="text-decoration-none text-primary">
                          Account modification
                        </a>
                      </li>
                      <li>
                        <a href="#" class="text-decoration-none text-primary">
                          Client Master Report (CMR) and Depository Participant
                          (DP)
                        </a>
                      </li>
                      <li>
                        <a href="#" class="text-decoration-none text-primary">
                          Nomination
                        </a>
                      </li>
                      <li>
                        <a href="#" class="text-decoration-none text-primary">
                          Transfer and conversion of securities
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div class="accordion-item border rounded shadow-sm mb-3">
                <h2 class="accordion-header" id="headingThree">
                  <button
                    class="accordion-button collapsed bg-white text-dark d-flex align-items-center gap-3 py-3"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    <span>
                      <i class="fa-brands fa-accusoft"></i>
                    </span>
                    <strong class="fs-5 fw-normal">Kite</strong>
                  </button>
                </h2>
                <div
                  id="collapseThree"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingThree"
                  data-bs-parent="#accountAccordion"
                >
                  <div class="accordion-body bg-white ps-5 pt-3 pb-4">
                    <ul class="text-primary lh-lg m-0">
                      <li>
                        <a href="#" class="text-decoration-none text-primary">
                          IPO
                        </a>
                      </li>
                      <li>
                        <a href="#" class="text-decoration-none text-primary">
                          Trading FAQs
                        </a>
                      </li>
                      <li>
                        <a href="#" class="text-decoration-none text-primary">
                          Margin Trading Facility (MTF) and Margins
                        </a>
                      </li>
                      <li>
                        <a href="#" class="text-decoration-none text-primary">
                          Charts and orders
                        </a>
                      </li>
                      <li>
                        <a href="#" class="text-decoration-none text-primary">
                          Alerts and Nudges
                        </a>
                      </li>
                      <li>
                        <a href="#" class="text-decoration-none text-primary">
                          General
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div class="accordion-item border rounded shadow-sm mb-3">
                <h2 class="accordion-header" id="headingFour">
                  <button
                    class="accordion-button collapsed bg-white text-dark d-flex align-items-center gap-3 py-3"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFour"
                    aria-expanded="false"
                    aria-controls="collapseFour"
                  >
                    <span>
                      <i class="fa-solid fa-at"></i>
                    </span>
                    <strong class="fs-5 fw-normal">Console</strong>
                  </button>
                </h2>
                <div
                  id="collapseFour"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingFour"
                  data-bs-parent="#accountAccordion"
                >
                  <div class="accordion-body bg-white ps-5 pt-3 pb-4">
                    <ul class="text-primary lh-lg m-0">
                      <li>
                        <a href="#" class="text-decoration-none text-primary">
                          Portfolio
                        </a>
                      </li>
                      <li>
                        <a href="#" class="text-decoration-none text-primary">
                          Corporate actions
                        </a>
                      </li>
                      <li>
                        <a href="#" class="text-decoration-none text-primary">
                          Funds statement
                        </a>
                      </li>
                      <li>
                        <a href="#" class="text-decoration-none text-primary">
                          Reports
                        </a>
                      </li>
                      <li>
                        <a href="#" class="text-decoration-none text-primary">
                          Profile
                        </a>
                      </li>
                      <li>
                        <a href="#" class="text-decoration-none text-primary">
                          Segments
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div class="accordion-item border rounded shadow-sm mb-3">
                <h2 class="accordion-header" id="headingFive">
                  <button
                    class="accordion-button collapsed bg-white text-dark d-flex align-items-center gap-3 py-3"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFive"
                    aria-expanded="false"
                    aria-controls="collapseFive"
                  >
                    <span>
                      <i class="fa-solid fa-indian-rupee-sign"></i>
                    </span>
                    <strong class="fs-5 fw-normal">Funds</strong>
                  </button>
                </h2>
                <div
                  id="collapseFive"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingFive"
                  data-bs-parent="#accountAccordion"
                >
                  <div class="accordion-body bg-white ps-5 pt-3 pb-4">
                    <ul class="text-primary lh-lg m-0">
                      <li>
                        <a href="#" class="text-decoration-none text-primary">
                          Add money
                        </a>
                      </li>
                      <li>
                        <a href="#" class="text-decoration-none text-primary">
                          Withdraw money
                        </a>
                      </li>
                      <li>
                        <a href="#" class="text-decoration-none text-primary">
                          Add bank accounts
                        </a>
                      </li>
                      <li>
                        <a href="#" class="text-decoration-none text-primary">
                          eMandates
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-4">
            <p className="border p-2" style={{backgroundColor:"lightgray"}}>Quicks Links</p>
            <p className=" p-2"><a href="" style={{textDecoration:"none"}}>1. Track account opening</a></p>
            <p className=" p-2"><a href="" style={{textDecoration:"none"}}>2. Track segment activation</a></p>
            <p className=" p-2"><a href="" style={{textDecoration:"none"}}>3. Intraday margins</a></p>
            <p className=" p-2"><a href="" style={{textDecoration:"none"}}>4. Kite user manual</a></p>
            <p className=" p-2"><a href="" style={{textDecoration:"none"}}>5. Learn how to create a ticket</a></p>
          </div>
        </div>
      </div>
    </>
  );
}

export default RaiseTIcket;
