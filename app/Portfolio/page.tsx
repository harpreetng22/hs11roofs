import React from "react";
import Nav from "../Nav";
import PortfolioCard from "./PortfolioCard";
import { readImagesFromDirectory } from "../utils/imageUtil";

const projects = [
  {
    title: "Project 1",
    image: "HomeImg.jpg",
    description: "Description of Project 1",
  },
  {
    title: "Project 2",
    image: "HomeImg.jpg",
    description: "Description of Project 2",
  },
  {
    title: "Project 1",
    image: "HomeImg.jpg",
    description: "Description of Project 1",
  },
  {
    title: "Project 2",
    image: "HomeImg.jpg",
    description: "Description of Project 2",
  },
  {
    title: "Project 1",
    image: "HomeImg.jpg",
    description: "Description of Project 1",
  },
  {
    title: "Project 2",
    image: "HomeImg.jpg",
    description: "Description of Project 2",
  },
  {
    title: "Project 1",
    image: "HomeImg.jpg",
    description: "Description of Project 1",
  },
  {
    title: "Project 2",
    image: "HomeImg.jpg",
    description: "Description of Project 2",
  },
  {
    title: "Project 1",
    image: "HomeImg.jpg",
    description: "Description of Project 1",
  },
  {
    title: "Project 2",
    image: "HomeImg.jpg",
    description: "Description of Project 2",
  },
];
async function Portfolio() {
  const directoryPath = "./public/roofs";
  const images = await readImagesFromDirectory(directoryPath);
  const Projects = images.map((image) => {
    const project = {
      title: image.split("/")[1],
      image: image,
      description: " HS11 Project!!",
    };
    return project;
  });
  return (
    <div style={{ width: "100vw" }}>
      <Nav></Nav>
      <div
        style={{
          backgroundColor: "white",
          padding: "20px",
          display: "flex",
          flexFlow: "row",
          flexWrap: "wrap",
          // Add space between items in a row
          width: "100%",
          minHeight: "100vh",
          justifyContent: "space-evenly",
          gap: "50px",
        }}
      >
        {Projects.map((project, index) => (
          <PortfolioCard
            key={index}
            title={project.title}
            image={project.image}
            description={project.description}
          />
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
