import React from "react";
import { useNavigate } from "react-router-dom";

const Card = ({ name, username, id, showButton }) => {
  const navigate = useNavigate();

  const addFav = () => {
    let value: [] = [];
    if (sessionStorage.getItem("token")) {
      value = JSON.parse(sessionStorage.getItem("token"));
      value.push({ id, name, username });
      sessionStorage.setItem("token", JSON.stringify(value));
      console.log(value);
    } else {
      sessionStorage.setItem("token", JSON.stringify([{ id, name, username }]));
    }
  };

/*   const borrar = () => {
    sessionStorage.clear();
  }; */

  const selectItem = () => {
    navigate(`/home/detail/${id}`);
  };

  return (
    <div className="card">
      <div onClick={selectItem}>
        {/* En cada card deberan mostrar en name - username y el id */}
        <img src="./images/doctor.jpg" alt="DH-logo" />
        <p>{id}</p>
        <p>{name}</p>
        <p>{username}</p>
        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}
        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
      </div>
      {showButton && (
        <button onClick={addFav} className="favButton">
          Add fav
        </button>
      )}

      {/* <button onClick={borrar}>borrar</button> */}
    </div>
  );
};

export default Card;
