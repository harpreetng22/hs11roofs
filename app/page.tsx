// Home.tsx
import React, { useEffect, useState } from "react";
import Nav from "./Nav";
import "./Home.css";
import Carousel from "./Carousel";
// import Footer from "./Footer";
import { readImagesFromDirectory } from "./utils/imageUtil";

const Home = async () => {
  const directoryPath = "./public/roofs";
  const images = await readImagesFromDirectory(directoryPath);
  console.log(images);
  return (
    <main className="">
      <div className="HomeImg">
        <Nav></Nav>
      </div>
      <div className="HomeSec">
        <Carousel images={images} />
      </div>
      {/* <Footer></Footer> */}
    </main>
  );
};

export default Home;
