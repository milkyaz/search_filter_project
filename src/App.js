import { Data } from "./DATA";
import { Card } from "./components/card";
import { useState } from "react";

function App() {
  const [tempData, setTempData] = useState(Data);
  const onSearchChange = (value) => {
    const newData = Data.filter(
      (el) =>
        el.lastName.toLocaleLowerCase().includes(value.toLocaleLowerCase()) ||
        el.firstName.includes(value)
    );
    setTempData(newData);
  };
  return (
    <div className="App">
      <div className="row">
        <form className="col s12">
          <div className="row">
            <div className="input-field col s6">
              <label htmlFor="first_name">Search...</label>
              <input
                placeholder=""
                id=""
                type="text"
                className="validate"
                onChange={(e) => onSearchChange(e.target.value)}
              />
              {tempData.map((el, index) => (
                <Card userInfo={el} key={index} />
              ))}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
