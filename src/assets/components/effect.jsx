import {useEffect} from "react";
import {useState} from "react";

function Effect() {
  const [type, setType] = useState("users");
  const [data, setData] = useState([]);
  const [load, setLoad] = useState(true);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then((response) => response.json())
      .then((json) => setData(json), setLoad(false));
  }, [type]);

  return (
    <div className="container">
      <h1>Ресурс: {type}</h1>
      <button className="btn btn-primary btn-lg" onClick={() => setType("Users")}>
        Users
      </button>
      <button className="btn btn-primary btn-lg m-3" onClick={() => setType("Todos")}>
        Todos
      </button>
      <button className="btn btn-primary btn-lg" onClick={() => setType("Posts")}>
        Posts
      </button>

      {load ? (
        <div>loading...</div>
      ) : (
        data.map((item, index) => {
          return (
            <div key={index}>
              <div className="d-flex mb-3">
                <div className="bg-dark-subtle border border-dark-subtle p-1 m-2">{item.id}</div>
                <div className="bg-dark-subtle border border-dark-subtle p-1 m-2">{item.title}</div>
                <div className="bg-dark-subtle border border-dark-subtle p-1 m-2">{item.name}</div>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
}

export default Effect;
