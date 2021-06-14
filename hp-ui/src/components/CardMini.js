import React from "react";
import "../scss/Styles.scss";
import Save from "../Assets/Images/save.png";

const colors = {
  Gryffindor: "linear-gradient(90deg, #FF0000 4.67%, #FED482 96.97%)",
  Slytherin: "linear-gradient(90deg, #1C792B 0%, #82E95E 100%)",
  Ravenclaw: "linear-gradient(90deg, #0597B7 0%, #66D1FF 100%)",
  Hufflepuff: "linear-gradient(90deg, #FFC700 0%, #FFF388 100%)",
};

function CardMini({ data }) {
  // console.log(data);

  return (
    <>
      {data.map((character, index) => {
        return (
          <div className="CardMini" key={index}>
            <div
              className="Photo"
              style={{ background: colors[character.house] }}
            >
              {/* style={{background: '$theme-colors{characrer.house}'}} */}
              <img className="CircleImg" src={character.image} alt="chracter" />
            </div>
            <h5>{character.name}</h5>
            <div className="Info">
              {character.alive ? <p>VIVO</p> : <p>FINADO</p>}
              {/* {character.hogwartsStudent ? <p>ESTUDIANTE</p> : <p>STAFF</p>} */}
              {/* {character.hogwartsStudent <p>ESTUDIANTE</p> }
              {character.hogwartsStaff <p>STAFF</p> } */}
              {(() => {
                if (character.hogwartsStudent) return <p>ESTUDIANTE</p>;
                if (character.hogwartsStaff) return <p>STAFF</p>;
              })()}
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
