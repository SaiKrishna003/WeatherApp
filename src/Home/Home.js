import React, { useEffect, useState, useContext } from "react";
import { contextStore } from "../Layout/Layout";
import axios from "axios";
import { GeoAltFill, Clock } from "react-bootstrap-icons";

import "./Home.css";
import Astronomy from "./Astronomy/Astronomy";
import WeatherInfo from "./WeatherInfo";
import HourlyFC from "./HourlyFC";

const apiKey = "2b4bfe5f065946ee80e61859232403";

const Home = () => {
  let city = useContext(contextStore);
  const [data, setData] = useState({});
  const [location, setLocation] = useState({});
  const [err, setErr] = useState("");

  const [todayFC, setTodayFC] = useState({});
  const [tommorrowFC, setTommorrowFC] = useState({});
  const [datFC, setDatFC] = useState({});

  const [astronomy, setAstronomy] = useState({});
  const [tommorrowAstro, setTommorrowAstro] = useState({});
  const [datAstro, setDatAstro] = useState({});

  const [todayHourFC, setTodayHourFC] = useState([]);
  const [tommorrowHourFC, setTommorrowHourFC] = useState([]);
  const [datHourFC, setDatHourFC] = useState([]);

  const [showFC, setShowFC] = useState({});
  const [showAstro, setShowAstro] = useState({});
  const [showHourFC, setShowHourFC] = useState([]);

  useEffect(() => {
    // if (city === "") city = "London";
    axios
      .get(
        "http://api.weatherapi.com/v1/forecast.json?key=" +
          apiKey +
          "&q=" +
          city +
          "&days=3" +
          "&aqi=no" +
          "&alerts=no"
      )
      .then((response) => {
        setLocation(response.data.location);

        setData(response.data.current);
        setTodayFC(response.data.forecast.forecastday[0].day);
        setAstronomy(response.data.forecast.forecastday[0].astro);
        setTodayHourFC(response.data.forecast.forecastday[0].hour);

        setTommorrowFC(response.data.forecast.forecastday[1].day);
        setTommorrowAstro(response.data.forecast.forecastday[1].astro);
        setTommorrowHourFC(response.data.forecast.forecastday[1].hour);

        setDatFC(response.data.forecast.forecastday[2].day);
        setDatAstro(response.data.forecast.forecastday[2].astro);
        setDatHourFC(response.data.forecast.forecastday[2].hour);

        setShowFC(response.data.forecast.forecastday[1].day);
        setShowAstro(response.data.forecast.forecastday[1].astro);
        setShowHourFC(response.data.forecast.forecastday[1].hour);

        setErr(null);
      })
      .catch((error) => {
        error.response && setErr(error.response.data.error.message);
      });
    // console.log(
    //   "data ",
    //   data,
    //   "location ",
    //   location,
    //   "astro",
    //   astronomy,
    //   "err ",
    //   err
    // );
    // console.log("todayFC ", todayFC, "todayAstro", astronomy);
    // console.log("tommorrowFC", tommorrowFC, "tommorrowAstro", tommorrowAstro);
    // console.log("hFC", todayHourFC);
  }, [city]);

  const handleOnClick = (event) => {
    const myButtons = document.querySelectorAll(".forecast");
    myButtons.forEach(
      (btn) =>
        btn.classList.contains("active") && btn.classList.remove("active")
    );
    event.target.classList.add("active");

    if (event.target.id === "tommorrow") {
      setShowFC(tommorrowFC);
      setShowAstro(tommorrowAstro);
      setShowHourFC(tommorrowHourFC);
    } else {
      setShowFC(datFC);
      setShowAstro(datAstro);
      setShowHourFC(datHourFC);
    }
  };
  return (
    <div className="bg-black text-white p-3 rounded-5 shadow-lg border border-3 border-opacity-50 border-info">
      {err ? (
        <p>{err}</p>
      ) : (
        location && (
          <>
            <div className="border-bottom p-2">
              <h5>
                <GeoAltFill className="me-1" />
                {location.name} - {location.country}
              </h5>
              <div className="text-end text-warning">
                <Clock /> Local Time<p>{location.localtime}</p>
              </div>
            </div>
            {astronomy && <Astronomy astronomy={astronomy} />}
            {data && (
              <WeatherInfo data={data} forecast={false} todayFC={todayFC} />
            )}
            {todayHourFC && <HourlyFC hourlyFC={todayHourFC} />}
            <hr className="border border-3 border-light mt-5" />
            <div className="mt-4">
              <div className="text-center">
                <h3>ForeCast</h3>
                <button
                  id="tommorrow"
                  onClick={(event) => handleOnClick(event)}
                  className="forecast btn btn-outline-warning w-50 active"
                >
                  Tommorrrow
                </button>
                <button
                  id="dat"
                  onClick={(event) => handleOnClick(event)}
                  className="forecast btn btn-outline-warning w-50"
                >
                  After Tomorrow
                </button>
              </div>
              <div>
                {showAstro && <Astronomy astronomy={showAstro} />}
                {showFC && <WeatherInfo data={showFC} forecast={true} />}
                {showHourFC && <HourlyFC hourlyFC={showHourFC} />}
              </div>
            </div>
          </>
        )
      )}
    </div>
  );
};

export default Home;
