import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { FavsContext } from "../../context/FavsContect";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import "./cardStyle.css";

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
        <img src="./images/doctor.jpg" alt="DH-logo" />
        <h4>{name}</h4>
        <p>{username}</p>
      </div>
      {showButton && !state.data.some((element) => element.id === id) ? (
        <FavoriteBorderIcon className="favIcon" onClick={addFav}></FavoriteBorderIcon>
      ) : (
        <FavoriteIcon className="favIcon" onClick={takeFav}></FavoriteIcon>
      )}
    </div>
  );
};

export default Card;
