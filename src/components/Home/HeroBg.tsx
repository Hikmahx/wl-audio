import React from "react";
import five from "../../assets/5ive-person.png";
import fiveMobile from "../../assets/5ive-person-mobile.png";
import semiCircle from "../../assets/semi-circle.png";
import angle from "../../assets/Angle.png";
import ellipse from "../../assets/Ellipse-3.png";
import vector from "../../assets/Vector-1.png";
import lilfive from '../../assets/LIL5IVE.png'

const HeroBg = () => {
  return (
    <div className="">
      <img
        src={five}
        alt="five background"
        className="hidden lg:block absolute top-0 bottom-0 right-0 z-10 bg-cover h-full"
      />
      <img
        src={fiveMobile}
        alt="five mobile background"
        className="lg:hidden absolute bottom-0 right-0 z-10"
      />
      <img
        src={angle}
        alt=" two triangle icon"
        className="hidden lg:block absolute top-32 left-[47%] z-20"
      />
      <img
        src={vector}
        alt="vector icon"
        className="absolute  bottom-0 lg:bottom-auto lg:top-0 right-0"
      />
      <img
        src={ellipse}
        alt="ellipse icon"
        className="hidden lg:block absolute bottom-0 right-0 z-20"
      />
      <img
        src={semiCircle}
        alt="gray semicircle"
        className="absolute bottom-40 lg:bottom-0 -right-[93px] lg:left-40 z-20 -rotate-90 lg:rotate-0"
      />
      <img src={lilfive} alt="lil five text" className="absolute bottom-20 z-[30] inset-x-0 w-full" /> 
    </div>
  );
};

export default HeroBg;
