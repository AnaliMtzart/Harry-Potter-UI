import React from "react";
import "../scss/Styles.scss";
import Save from "../Assets/Images/save.png";

// const colors: {
//   Gryffindor: 'linear-gradient(90deg, #FF0000 4.67%, #FED482 96.97%)',
//   Slytherin: 'linear-gradient(135deg, #1C792B 0%, #82E95E 100%)',
//   Ravenclaw: 'linear-gradient(135deg, #0597B7 0%, #66D1FF 100%)',
//   Hufflepuff: 'linear-gradient(135deg, #FFC700 0%, #FFF388 100%)',
// };


function CardMini({ data }) {
  console.log(data);

  return (
    <>
      {data.map((character, index) => {
        return (
          <div className="CardMini" key={index}>
            <div className="Photo">
            {/* style={{background: '$theme-colors{characrer.house}'}} */}
              <img
                className="CircleImg"
                src={character.image}
                alt="chracter"
              />
            </div>
            <h5>{character.name}</h5>
            <div className="Info">
              <p>VIVO</p>
              <p>ESTUDIANTE</p>
            </div>
            <button>
              <img src={Save} alt="save" />
            </button>
          </div>
        );
      })}
    </>
  );
}

export default CardMini;
