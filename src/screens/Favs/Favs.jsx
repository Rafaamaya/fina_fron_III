import React, { useContext } from "react";
import Card from "../../components/Card/Card";
import { FavsContext } from "../../context/FavsContect";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const { state } = useContext(FavsContext);




  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}
        { state.data?.map((dentist) => (
              <Card
                showButton={false}
                key={dentist.id}
                name={dentist.name}
                username={dentist.username}
                id={dentist.id}
              />
            ))
}
      </div>
    </>
  );
};

export default Favs;
