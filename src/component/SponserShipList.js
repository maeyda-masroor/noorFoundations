import React, {Component} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function topBrand(){
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 6,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear"
    };
    return(
      <div class="container">
        <h1 className="text-center md-4">Our Sponsers</h1>
        <Slider {...settings}>
          <div class="container">
            <p>ABC XXM </p>
          </div>
          <div className="container">
          <p>ABC XXM </p>
          
          </div>
          <div className="container">
          <p>ABC XXM </p>
          
          </div>
          <div className="container">
          <p>ABC XXM </p>
          
          </div>
          <div className="container">
          <p>ABC XXM </p>
          
          </div>
          <div className="container">
          <p>ABC XXM </p>
          
          </div>
          <div className="container">
          <p>ABC XXM </p>
          </div>
        </Slider>
      </div>
    );
  }


export default topBrand;