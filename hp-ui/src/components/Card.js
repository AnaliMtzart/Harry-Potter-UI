import React from "react";
import Save from "../Assets/Images/save.png";
import "../scss/Styles.scss";

const colors = {
  Gryffindor: "linear-gradient(90deg, #FF0000 4.67%, #FED482 96.97%)",
  Slytherin: "linear-gradient(90deg, #1C792B 0%, #82E95E 100%)",
  Ravenclaw: "linear-gradient(90deg, #0597B7 0%, #66D1FF 100%)",
  Hufflepuff: "linear-gradient(90deg, #FFC700 0%, #FFF388 100%)",
};

function Card({ data }) {
  console.log("card", data);

  return (
    <>
      {data.map((character, index) => {
        return (
          <div className="Card" key={index}>
            <div
              className="PhotoCard"
              style={{ background: colors[character.house] }}
            >
              <img
                className="CircleImgCard"
                src={character.image}
                alt="chracter"
              />
            </div>
            <div className="InfoCard">
              {character.alive ? (
                <>
                  {(() => {
                    if (character.hogwartsStudent)
                      return <p className='pStatus'>VIVO/ESTUDIANTE</p>;
                    if (character.hogwartsStaff) return <p className='pStatus'>VIVO/STAFF</p>;
                  })()}
                </>
              ) : (
                <>
                  {(() => {
                    if (character.hogwartsStudent)
                      return <p className='pStatus'>FINADO/ESTUDIANTE</p>;
                    if (character.hogwartsStaff) return <p className='pStatus'>FINADO/STAFF</p>;
                  })()}
                </>
              )}
              <br />
              <h4 className="pName">{character.name}</h4>
              <p className="InfoP">Cumpleaños: {character.dateOfBirth}</p>
              <p className="InfoP">Género: {character.gender}</p>
              <p className="InfoP">Color de ojos: {character.eyeColour}</p>
              <p className="InfoP">Color de pelo: {character.hairColour}</p>
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

export default Card;
