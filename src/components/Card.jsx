import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import PreviewItemContext from "../context/PreviewItemContext";

const Card = ({ name, price, img }) => {
  const { cardClick } = useContext(PreviewItemContext);

  const navigate = useNavigate();
  return (
    <div
      className="flex flex-col items-center justify-center border filter shadow-md py-4 cursor-pointer hover:scale-105 parent"
      onClick={() => {
        cardClick(name, price, img);
        navigate(`/item/${name}`);
      }}
    >
      <img className="w-36" src={img} alt="img" />
      <h1 className="font-semibold text-center w-3/6 ">{name}</h1>

      <div className="mt-3 mb-5 flex gap-3">
        <h1 className="font-bold">${price}</h1>
      </div>
    </div>
  );
};

export default Card;
