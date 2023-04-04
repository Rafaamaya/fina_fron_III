import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  const [beer, setBeer] = useState();
  const { id } = useParams();

  const getBeer = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const data = await res.json();
    console.log(data);
    setBeer(data);
  };

  useEffect(() => {
    getBeer();
  }, []);
  return (
    <>
      <h1>Detail Dentist {id} </h1>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
      <div className="card">
        <p>{beer?.name}</p>
        <p>{beer?.email}</p>
        <p>{beer?.phone} </p>
        <p>www.{beer?.website} </p>
      </div>
    </>
  );
};

export default Detail;
