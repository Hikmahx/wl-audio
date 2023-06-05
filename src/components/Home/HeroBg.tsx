import React from "react";
import five from "../../assets/5ive-person.png";
import fiveMobile from "../../assets/5ive-person-mobile.png";
import semiCircle from "../../assets/semi-circle.png";
// import happy from "../../assets/Happy.png";
import angle from "../../assets/Angle.png";
import ellipse from "../../assets/Ellipse-3.png";
import vector from "../../assets/Vector-1.png";

const HeroBg = () => {
  return (
    <div className="">
      <img
        src={five}
        alt=""
        className="hidden lg:block absolute top-0 bottom-0 right-0 z-10 bg-cover h-full"
      />
      <img
        src={fiveMobile}
        alt=""
        className="lg:hidden absolute bottom-0 right-0 z-10"
      />
      <img
        src={angle}
        alt=""
        className="hidden lg:block absolute top-32 left-[47%] z-20"
      />
      <img
        src={vector}
        alt=""
        className="absolute  bottom-0 lg:bottom-auto lg:top-0 right-0"
      />
      <img
        src={ellipse}
        alt=""
        className="hidden lg:block absolute bottom-0 right-0 z-20"
      />
      <img
        src={semiCircle}
        alt=""
        className="absolute bottom-40 lg:bottom-0 -right-[93px] lg:left-40 z-20 -rotate-90 lg:rotate-0"
      />
      {/* <img src={happy} alt="" className="absolute top-1/3 left-1/3" />  */}
    </div>
  );
};

export default HeroBg;
