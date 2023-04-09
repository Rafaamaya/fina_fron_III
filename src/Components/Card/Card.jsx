import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { FavsContext } from "../../context/FavsContect";

const Card = ({ name, username, id, showButton }) => {
  const navigate = useNavigate();
  const { state, dispatch } = useContext(FavsContext);

  const addFav = () => {
    dispatch({ type: "ADD", payload: { id, name, username } });
  };
  
  const takeFav = () => {
    dispatch({ type: "TAKE", payload: { id, name, username } });
  };

  const selectItem = () => {
    navigate(`/home/detail/${id}`);
  };

  return (
    <div className="card">
      <div onClick={selectItem}>
        {/* En cada card deberan mostrar en name - username y el id */}
        <img src="./images/doctor.jpg" alt="DH-logo" />
        <h4>{name}</h4>
        <p>{username}</p>
        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}
        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
      </div>

      {showButton && !state.data.some((element) => element.id === id) ? (
        <button onClick={addFav} className="favButton">
          Add fav
        </button>
      ) : (
        <button onClick={takeFav}>
          TAKE FAV
        </button>
      )}

      {/* <button onClick={borrar}>borrar</button> */}
    </div>
  );
};

export default Card;
