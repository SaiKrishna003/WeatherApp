import React from "react";
import "./WeatherInfo.css";
import HumidityIcon from "../../assets/icons/icons8-humidity-32.png";
import WindIcon from "../../assets/icons/icons8-wind-16.png";
import PrecipitationIcon from "../../assets/icons/icons8-precipitation-16.png";
import PressureIcon from "../../assets/icons/icons8-pressure-gauge-16.png";
import UVIcon from "../../assets/icons/icons8-uv-16.png";
import FeelsLikeIcon from "../../assets/icons/icons8-feels-guy-16.png";

const WeatherInfo = (props) => {
  const data = props.data;
  const forecast = props.forecast;
  const todayFC = props.todayFC;
  return (
    <>
      {data.condition && (
        <div className="bg-success bg-opacity-25 rounded-5 p-3">
          <div className="text-center">
            <h6 className="m-0 text-warning">{data.condition["text"]}</h6>
            <div className="d-flex justify-content-center align-items-center">
              <img src={data.condition["icon"]} alt="" />
              {forecast ? (
                <h4>Avg : {data.avgtemp_c} &#8451;</h4>
              ) : (
                <h3>{data.temp_c} &#8451;</h3>
              )}
            </div>
            <div className="fctemp d-flex justify-content-around border border-1 p-2 m-2 rounded-5 bg-warning bg-opacity-25 fw-bold">
              <div className="p-1">
                <p> Min Temp</p>
                <p>{forecast ? data.mintemp_c : todayFC.mintemp_c} &#8451;</p>
              </div>
              <div
                style={{ borderLeft: "1px solid white", height: "auto" }}
              ></div>
              <div className="p-1">
                <p>Max Temp</p>
                <p>{forecast ? data.maxtemp_c : todayFC.maxtemp_c} &#8451;</p>
              </div>
            </div>
          </div>

          <div className="pt-4 text-info fw-bold">
            <p>
              <img src={HumidityIcon} alt="" width="20px" className="mx-2" />
              {forecast ? (
                <>Avg Humidity : {data.avghumidity}</>
              ) : (
                <>Humidity : {data.humidity}</>
              )}{" "}
              %
            </p>
            <p>
              <img src={WindIcon} alt="" width="20px" className="mx-2" />
              {forecast ? (
                <>Max Wind : {data.maxwind_kph} km/h</>
              ) : (
                <>
                  Wind : {data.wind_kph} km/h {data.wind_dir}
                </>
              )}
            </p>
            <p>
              <img
                src={PrecipitationIcon}
                alt=""
                width="20px"
                className="mx-2"
              />
              {forecast ? (
                <>Total Precipitation : {data.totalprecip_mm}</>
              ) : (
                <>Precipitation : {data.precip_mm}</>
              )}{" "}
              mm
            </p>
            <p>
              <img src={UVIcon} alt="" width="20px" className="mx-2" />
              UV : {data.uv}
            </p>
            {!forecast && (
              <>
                <p>
                  <img
                    src={PressureIcon}
                    alt=""
                    width="20px"
                    className="mx-2"
                  />
                  Pressure : {data.pressure_mb} mb
                </p>
                <p>
                  <img
                    src={FeelsLikeIcon}
                    alt=""
                    width="20px"
                    className="mx-2"
                  />
                  Feels Like : {data.feelslike_c} &#8451;
                </p>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default WeatherInfo;
