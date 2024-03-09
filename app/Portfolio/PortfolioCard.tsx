// components/PortfolioCard.tsx
"use client";
import { useState } from "react";
import "./PortfolioCard.css";
import React from "react";

interface PortfolioCardProps {
  title: string;
  image: string;
  description: string;
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({
  title,
  image,
  description,
}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const flipCard = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div
      className={`"card" ${
        isFlipped ? "flipped" : ""
      } border border-solid border-gray-500  rounded-lg h-[300px] w-[40%] p-[100px] flex  flex-col relative overflow-hidden shadow-xl`}
      onClick={flipCard}
    >
      <div className="front absolute inset-0">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover rounded-lg"
        />
      </div>
      <div className="back absolute bg-gradient-to-tr from-transparent to-gray-500 inset-0 p-4 duration-300 flex flex-col justify-center items-center">
        {/* <h2 className="text-black text-center">{title}</h2> */}
        <p className="text-black text-center">{description}</p>
      </div>
    </div>
  );
};

export default PortfolioCard;
