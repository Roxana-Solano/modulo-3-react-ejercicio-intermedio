import "../styles/App.scss";
import adabalersData from "../data/adabalers.json";
import { useState } from "react";

function App() {
  const [girlsAdalabs] = useState(adabalersData);
  /* console.log("aaaaaaaaaaa", adabalersData); */
  return (
    <div>
      <h1>Adalabers</h1>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Tutora</th>
            <th>Especialidad</th>
          </tr>
        </thead>
        <tbody>
          {girlsAdalabs.map((valueGirls, index) => (
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
