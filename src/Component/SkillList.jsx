import React from 'react'
import SlickSlider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SkillList() {
  
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,

   };
   const Slider=SlickSlider.default?SlickSlider.default:SlickSlider;
   return(
    <div>
        <h3>My Skills</h3>
        <Slider {...settings}>
          <div style = {{width: "100px", height: "100px", backgroundColor: "lightblue"}}>
            <h4>JavaScript</h4>
          </div>
          <div style = {{width: "100px", height: "100px", backgroundColor: "lightgreen"}}>
            <h4>React</h4>
          </div>
          <div>
            <h4>Node.js</h4>
          </div>
        </Slider>
      </div>
   )
}

