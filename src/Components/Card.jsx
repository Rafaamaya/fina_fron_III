import React from "react";
import { useNavigate } from "react-router-dom";

const Card = ({ name, username, id }) => {
  const navigate =  useNavigate();
  
  const addFav = () => {
    // Aqui iria la logica para agregar la Card en el localStorage
  };
  
  const selectItem = () => {
    navigate(`/home/detail/${id}`);
  };

  return (
    <div className="card" onClick={selectItem}>
      {/* En cada card deberan mostrar en name - username y el id */}
      <p>{id}</p>
      <p>{name}</p>
      <p>{username}</p>

      {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

      {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
      <button onClick={addFav} className="favButton">
        Add fav
      </button>
    </div>
  );
};

export default Card;
