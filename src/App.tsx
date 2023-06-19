import { useState } from "react";
import SelectionBox from "./components/SelectionBox";
import data from "./data/selections.json";
import "./assets/sass/App.scss";
import { iApp, iResults } from "./types/App";
import { iSelectOptions } from "./types/Input";

export default function App() {
  const selectBox: iApp = {
    carMake: true,
    carColour: false,
    carCode: false,
  };
  const disableBtn: iApp = {
    carMake: true,
    carColour: true,
    carCode: true,
  };

  const resultArray: iResults = { make: "", colour: "", code: "" };

  const triggerState = (id: string) => {
    for (let i = 0; i < data.selections.length; i++) {
      if (data.selections[i].id === id) {
        const name = data.selections[i + 1].id;
        setIsVisible((prevState) => ({
          ...prevState,
          [name]: true,
        }));
      }
    }
  };

  const triggerResults = () => setShowResults(true);

  const updateResults = (name: string, data: iSelectOptions) => {
    setResult((prevState) => ({
      ...prevState,
      [name]: data,
    }));
  };

  const changeBtnStatus = (id: string) => {
    setIsDisabled((prevState) => ({
      ...prevState,
      [id]: false,
    }));
  };

  const [isVisible, setIsVisible] = useState<iApp>(selectBox);
  const [isDisabled, setIsDisabled] = useState(disableBtn);
  const [showResults, setShowResults] = useState(false);
  const [result, setResult] = useState(resultArray);

  return (
    <div className="container">
      {data.selections.map((select, i) =>
        isVisible[select.id as keyof typeof isVisible] ? (
          <SelectionBox
            selection={select}
            key={i}
            triggerState={triggerState}
            triggerResults={triggerResults}
            disableBtn={isDisabled[select.id as keyof typeof isDisabled]}
            changeBtnStatus={changeBtnStatus}
            updateResults={updateResults}
          />
        ) : (
          ""
        )
      )}
      {showResults ? (
        <div className="card mb-3">
          <div className="card-content">
            <div className="content">
              <h3>Results:</h3>
              <p>
                I have {result.make === "Audi" ? "an" : "a"} {result.make} and
                the colour is {result.colour}.
              </p>
              {result.colour === "Red" ? <p>THE CAR IS RED! NICE!!</p> : ""}
              <p>REF: {result.code}</p>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
