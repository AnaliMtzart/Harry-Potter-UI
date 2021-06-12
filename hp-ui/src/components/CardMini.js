import React from "react";
import "../scss/Styles.scss";
import Save from '../Assets/Images/save.png'

function CardMini() {
  return (
    <div className="CardMini">
      <div className="Photo">
        <img
          className="CircleImg"
          src="http://hp-api.herokuapp.com/images/harry.jpg"
          alt="chracter"
        />
      </div>
      <h4>Harry Potter</h4>
      <div className='Info'>
        <p>VIVO</p>
        <p>ESTUDIANTE</p>
      </div>
      <button><img src={Save} alt='save'/></button>
    </div>
  );
}

export default CardMini;
