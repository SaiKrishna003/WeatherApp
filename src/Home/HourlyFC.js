import React from "react";

const HourlyFC = (props) => {
  const hourlyFC = props.hourlyFC;

  return (
    <div className="mt-2">
        <h5 className="text-center">Hourly ForeCast</h5>
        <ul className="d-flex overflow-auto list-unstyled p-2 gap-4 bg-danger bg-opacity-25 my-3 rounded-4">
      {hourlyFC.map((hFC, index) => (
        <li key={index} className="text-center">
          {index} hr
          <img src={hFC.condition && hFC.condition.icon} alt="" />
          {hFC.temp_c} &#8451;
        </li>
      ))}
    </ul>
    </div>
    
  );
};

export default HourlyFC;
