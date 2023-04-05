import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  const [doctor, setDoctor] = useState();
  const { id } = useParams();

  const getDetailDentist = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const data = await res.json();
    console.log(data);
    setDoctor(data);
  };

  useEffect(() => {
    getDetailDentist();
  }, []);
  return (
    <>
      <h1>Detail Dentist {id} </h1>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
      <div className="card">
        <p>{doctor?.name}</p>
        <p>{doctor?.email}</p>
        <p>{doctor?.phone} </p>
        <p>www.{doctor?.website} </p>
      </div>
    </>
  );
};

export default Detail;
