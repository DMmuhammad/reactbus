import {useState} from "react";

function State() {
  const [conuter, setCounter] = useState(0);
  const increment = () => {
    setCounter(conuter + 1);
  };

  const refresh = () => {
    setCounter(0);
  };

  return (
    <div className="container">
      <h1 className="text-center mb-5 mt-5">Счётчик: {conuter}</h1>
      <div className="d-flex justify-content-center column-gap-3">
        <button className="btn btn-primary btn-lg" onClick={increment}>
          +
        </button>
        <button className="btn btn-primary btn-lg" onClick={refresh}>
          refresh
        </button>
      </div>
    </div>
  );
}

export default State;
