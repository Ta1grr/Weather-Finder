import React from "react";
import { Component } from "react";
import Titles from "../Titles";
import Form from "../Form";
import Weather from "../Weather";

const API_KEY = "c0ef1f3b156c81a35bca1e761dd84d07";

class App extends Component {
  getWeather = async e => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(
      `https://openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`
    );
    const data = await api_call.json();
    console.log(data);
  };
  render() {
    return (
      <div>
        <Titles />
        <Form getWeather={this.getWeather} />
        <Weather />
      </div>
    );
  }
}

export default App;
