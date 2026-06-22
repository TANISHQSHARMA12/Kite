import React from "react";
import Hero from "./Hero";
import LeftSectio from "./LeftSectio";
import RightSection from "./RightSection";
import Universe from "./Universe";
function Products() {
  return (
    <>
      <Hero />
      <LeftSectio
        imageUrl="Media/kite.png"
        productName="Kite"
        productDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        tryDemo=""
        learnMore=""
        GooglePlay=""
        Apple=""
      />
      <RightSection imageUrl="Media/console.png"
        productName="Console"
        productDescription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
        learnMore=""
        />
      <LeftSectio
        imageUrl="Media/coin.png"
        productName="Coins"
        productDescription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        tryDemo=""
        learnMore=""
        GooglePlay=""
        Apple=""
      />
      <RightSection imageUrl="Media/kite2.svg"
        productName="Kite Connect API"
        productDescription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
        learnMore=""
        />
      <LeftSectio
        imageUrl="Media/varsity.svg"
        productName="Varsity Mobile"
        productDescription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
        tryDemo=""
        learnMore=""
        GooglePlay=""
        Apple=""
      />
      <h3 style={{textAlign:"center",marginTop:"50px",marginBottom:"150px"}}  className="text-muted">Want to know more about our technology stack? Check out the <a href=""style={{textDecoration:"none"}}>Zerodha.tech </a> blog.</h3>
      <Universe />
    </>
  );
}

export default Products;
