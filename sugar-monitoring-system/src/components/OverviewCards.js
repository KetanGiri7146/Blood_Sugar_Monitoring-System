import { useState } from "react";
import "./OverviewCards.css";

function OverviewCards() {

  const [inputValue, setInputValue] = useState("");
  const [readings, setReadings] = useState([]);

  const handleAddReading = () => {
    if (inputValue === "") return;

    const newReading = Number(inputValue);

    setReadings([...readings, newReading]);
    setInputValue("");
  };

  // Calculate daily average
  const calculateAverage = () => {
    if (readings.length === 0) return 0;

    const total = readings.reduce((sum, value) => sum + value, 0);
    return (total / readings.length).toFixed(2);
  };

  const currentGlucose =
    readings.length > 0 ? readings[readings.length - 1] : 0;

  return (
    <div>

      <div style={{ marginBottom: "20px" }}>
        <input
          type="number"
          placeholder="Enter Glucose Value"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={handleAddReading}>Add</button>
      </div>

      <div className="card-container">

        <div className="card">
          <h3>Current Glucose</h3>
          <p className="value">{currentGlucose} mg/dL</p>
        </div>

        <div className="card">
          <h3>Daily Average</h3>
          <p>{calculateAverage()} mg/dL</p>
        </div>

      </div>

    </div>
  );
}

export default OverviewCards;