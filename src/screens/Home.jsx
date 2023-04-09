import React, { useEffect, useState } from "react";
import Card from "../components/Card/Card";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const [dentist, setDentist] = useState([]);

  const getDentist = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    setDentist(data);
  };

  useEffect(() => {
    getDentist();
  }, []);

  return (
    <main className="">
      <h1>Home</h1>
      <div className="card-grid">
        {dentist.length
          ? dentist.map((dentist) => (
              <Card
                showButton={true}
                key={dentist.id}
                name={dentist.name}
                username={dentist.username}
                id={dentist.id}
              />
            ))
          : null}
      </div>
    </main>
  );
};

export default Home;
