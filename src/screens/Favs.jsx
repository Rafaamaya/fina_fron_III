import React, { useEffect, useState } from "react";
import Card from "../components/Card";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const [dentist, setDentist] = useState([]);

  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      setDentist(JSON.parse(sessionStorage.getItem("token")));
    }
  }, []);

  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}
        {dentist.length
          ? dentist.map((dentist) => (
              <Card
                showButton={false}
                key={dentist.id}
                name={dentist.name}
                username={dentist.username}
                id={dentist.id}
              />
            ))
          : null}
      </div>
    </>
  );
};

export default Favs;
