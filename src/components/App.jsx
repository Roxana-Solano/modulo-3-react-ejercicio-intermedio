import "../styles/App.scss";
import adabalersData from "../data/adabalers.json";
import { useState } from "react";

function App() {
  const [girlsAdalabs] = useState(adabalersData);
  const [searchName, setSearchName] = useState("");

  const handleInput = (ev) => {
    setSearchName(ev.target.value);
  };

  return (
    <div className="container">
      <h1>Adalabers</h1>
      <label htmlFor="searchName">Nombre:</label>
      <input
        className=""
        type="text"
        placeholder="Buscar nombre"
        value={searchName}
        onChange={handleInput}
      />
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Tutora</th>
            <th>Especialidad</th>
          </tr>
        </thead>
        <tbody>
          {girlsAdalabs
            .filter((valueGirls) =>
              valueGirls.name
                .toLocaleLowerCase()
                .includes(searchName.toLocaleLowerCase())
            )
            .map((valueGirls, index) => (
              <tr key={index}>
                <td>{valueGirls.name}</td>
                <td>{valueGirls.counselor}</td>
                <td>{valueGirls.speciality}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
