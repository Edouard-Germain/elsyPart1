import React from "react";
import './App.css';
import Box from "./components/Box";
import "./styles/global.css"
const tempMin = -20
const tempMax = 40
const heartMin = 80
const heartMax = 180
const stepsMin = 0
const stepsMax = 50000
class App extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">

            <p>heart : {heartMin}</p>
            <p>tempereature : {tempMin}</p>
            <p>steps : {stepsMin}</p>
            {/* Water */}
            <Box icon="local_drink" unit="L" color="#3A85FF" value="1.5"/>
            {/* Steps */}
            <Box icon="directions_walk" value="3000" unit="steps" color="black"/>
            {/* Heart */}
            <Box icon="favorite" color="red" value="120" unit="bpm"/>
            {/* Temperature */}
            <Box icon="wb_sunny" color="yellow" value="-10" unit="°C"/>
          </div>
      </div>
    );
  }
}

export default App;