import React, { useState } from "react";
import { Search, Globe } from "react-bootstrap-icons";
import "./Header.css";

const Header = (props) => {
  const [city, setCity] = useState("");
  const handleOnChange = (event) => {
    setCity(event.target.value);
  };
  const handleOnSubmit = (event) => {
    event.preventDefault();
    if (city.trim() !== "") props.setCity(city);
  };
  return (
    <div className="d-flex align-items-center gap-3 mb-3 border-bottom border-success py-3">
      <h2 className="d-flex align-items-center text-success gap-1">
        <Globe className="globe-icon" />
        <p className="m-0 fw-bold app-title">Weather</p>
      </h2>
      <form className="input-group" onSubmit={handleOnSubmit}>
        <input
          type="text"
          value={city}
          placeholder="Enter City"
          onChange={handleOnChange}
          className="form-control border border-success"
          required
        />
        <button type="submit" className="btn btn-success">
          <Search size={20} title="Click Search" />
        </button>
      </form>
    </div>
  );
};

export default Header;
