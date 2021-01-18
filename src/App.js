import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Searchbar from "./components/search/Searchbar";
import Title from "./components/title/Title";

function App() {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});
  const [error, setError] = useState(false);
  useEffect(() => {
    search();
  }, [query]);
  const search = () => {
    axios
      .get(
        `http://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&APPID=0dab5eddf0fd42089995a0bbd0932c3f`
      )
      .then((result) => {
        setWeather(result.data);
        console.log("njarb", result);
        setError(false);
      })
      .catch((error) => {
        setError(true);
      });
  };
  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div className="search">
      <Searchbar
        handleChange={handleChange}
        handlePress={search}
        value={query}
      />
      {error ? <h1>something went wrong </h1> : <Title title={weather.name} />}
    </div>
  );
}

export default App;
