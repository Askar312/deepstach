import React from "react";
import "../Hero/Hero.css";
const Hero = () => {
  return (
    <>
      <div
        style={{
          width: "100%",
          paddingLeft: "unset",
          paddingRight: "unset",
          boxSizing: "border-box",
          backgroundColor: "rgb(235, 241, 244)",
          height: "85vh",
          paddingTop: "10rem",
        }}
      >
        <div
          className="sc-eCstlR iPmKUi"
          style={{
            left: "50%",
            transform: "translateX(-50%)",
            position: "relative",
            maxWidth: "59.0625rem",
          }}
        >
          <div className="sc-eCstlR gTdDoU">
            <div className="sc-hKgJUU">
              <h1 className="sc-jrAFXE kdLyRJ">
                <div className="sc-eCstlR czBtQV">Bite-sized knowledge</div>
                <div className="sc-eCstlR jUtnVU">
                  <p className="sc-gKseQn dcitaC">to upgrade</p>
                  <div className="sc-hKgJUU">
                    <span
                      style={{
                        color: "rgb(255, 177, 2)",
                        marginLeft: "8px",
                        display: "flex",
                        flexDirection: "column",
                        alainItems: "start",
                        width: "17.5rem",
                        opacity: 1,
                        transform: "none",
                      }}
                    >
                      <span
                        style={{
                          zIndex: 2,
                          position: "relative",
                        }}
                      >
                        your life
                      </span>
                      <svg
                        className="sc-hBEYId dpUtCv"
                        viewBox="0 0 317 13"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        {" "}
                        <path
                          d="M4.343 7.144c9.564-.468 256.889-5.317 305.249-6.262 5.467-.107 8.112 2.447 5.482 7.241-4.154 7.575-206.663 1.75-306.787 4.818-7.274.223-11.212-5.441-3.944-5.797z"
                          fill="#FF7B02"
                        ></path>
                      </svg>
                    </span>
                  </div>
                </div>
              </h1>
            </div>
            <h3 className="sc-iqHYmW cgLeYC">
              Ideas from books, articles & podcasts. " <br />
              <b style={{ color: "rgb(10, 137, 118)" }}>Read faster. </b>
              <b
                style={{
                  color: "rgb(212, 76, 58)",
                }}
              >
                Remember everything!
              </b>
            </h3>
            <div className="sc-eCstlR idhWmW">
              <button className="sc-bdfBQB DMZvI">
                <div className="sc-eCstlR jJVprb">
                  <p className="sc-gKseQn ebphTq">Try for free</p>
                </div>
              </button>
              <div className="sc-eCstlR iiLkZq">
                <p className="sc-gKseQn gQbrcj">Learn more</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
