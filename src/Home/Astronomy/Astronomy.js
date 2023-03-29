import React from "react";
import "./Astronomy.css";
import SunRiseIcon from "../../assets/icons/icons8-sunrise-32.png";
import SunSetIcon from "../../assets/icons/icons8-sunset-32.png";
import MoonRiseIcon from "../../assets/icons/icons8-moonrise-32.png";
import MoonSetIcon from "../../assets/icons/icons8-moonset-32.png";

const Astronomy = (props) => {
  const astronomy = props.astronomy;

  return (
    <div className="astronomy bg-info bg-opacity-25 rounded-3 my-3 fw-bold">
      <div className="d-flex justify-content-around">
        <div className="d-flex align-items-center gap-3 p-2 mx-2">
          <div>
            <img src={SunRiseIcon} alt="" />
          </div>
          <div>
            <p>Sun Rise</p>
            <p className="text-warning">{astronomy.sunrise}</p>
          </div>
        </div>
        <div className="d-flex align-items-center gap-3 p-2 mx-2">
          <div>
            <p>Sun Set</p>
            <p className="text-warning">{astronomy.sunset}</p>
          </div>
          <div>
            <img src={SunSetIcon} alt="" />
          </div>
        </div>
      </div>
      <hr className="m-0" />
      <div className="d-flex justify-content-around">
        <div className="d-flex align-items-center gap-3 p-2 mx-2">
          <div>
            <img src={MoonRiseIcon} alt="" />
          </div>
          <div>
            <p>Moon Rise</p>
            <p className="text-warning">{astronomy.moonrise}</p>
          </div>
        </div>
        <div className="d-flex align-items-center gap-3 p-2 mx-2">
          <div>
            <p>Moon Set</p>
            <p className="text-warning">{astronomy.moonset}</p>
          </div>
          <div>
            <img src={MoonSetIcon} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Astronomy;
