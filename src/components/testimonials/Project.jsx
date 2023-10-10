import { useState } from "react";
import "./project.scss";
import React from "react"
import img from '../assets/arrow.png';
import tenzieimg from '../assets/tenzies.png';
import notesimg from '../assets/notes-app.png';
import facts from '../assets/react-facts.png'

export default function Project() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: "1",
      icon: "./assets/mobile.png",
      title: "Tenzies",
      desc:
        "Play the game of Tenzies and check your luck.",
      img:
        tenzieimg,
      link:"https://tenzies-gamma-ecru.vercel.app/",  
    },
    {
      id: "2",
      icon: "./assets/globe.png",
      title: "Notes App",
      desc:
        "Create your own notes, delete them, add new and view them in markup format",
      img:
        notesimg,
      link:"https://notes-app-psi-one.vercel.app/",  
    },
    {
      id: "3",
      icon: "./assets/writing.png",
      title: "React-facts",
      desc:
        "Some facts on React ",
      img:
        facts,
      link:"https://react-facts-five.vercel.app/",    
    },
  ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };
  
  return (
    <div className="project" id="project">
      <div>
      <h1 className="header">Projects</h1>
        </div>
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((d,i) => (
          <div className="container" key={i}>
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={d.icon} alt="" />
                  </div>
                  <h2 >{d.title}</h2>
                  <p>{d.desc}</p>
                  <a href={d.link}>open project</a>
                </div>
              </div>
              <div className="right">
                <img
                  src={d.img}
                  alt=""
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        src={img}
        className="arrow left"
        alt=""
        onClick={() => handleClick("left")}
      />
      <img
        src={img}
        className="arrow right"
        alt=""
        onClick={() => handleClick()}
      />
    </div>
  );
}
