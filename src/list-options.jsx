import React, { useState } from "react";
import "./Summary.css";

const YourComponent = () => {
  const [selectedOption, setSelectedOption] = useState("name-1");

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="option-1">
      <form>
        <p className="option-p">Опция 1</p>
        <label className="custom-select">
          <select
            name="names"
            value={selectedOption}
            onChange={handleSelectChange}
          >
            <option value="name-1">Григорий Григорьев</option>
            <option value="name-2">Григорий Григорьев</option>
            <option value="name-3">Григорий Григорьев</option>
          </select>
        </label>
      </form>
    </div>
  );
};

export default YourComponent;
