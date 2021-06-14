import React, { useState } from "react";
import HpLogo from "./Assets/Images/Harry-Potter-W.png";
import Favorites from "./Assets/Images/favorites.png";
import Add from "./Assets/Images/add.png";
import "./scss/Styles.scss";
import CardMini from "./components/CardMini";
import data from "./data/hp-characters.json";
import AddModal from "./components/AddModal";

function App() {
  // console.log(data);

  const [view, setView] = useState("all");
  const [modalShow, setModalShow] = useState(false);

  const handleSetStudents = () => setView("students");
  const handleSetStaff = () => setView("staff");

  const students = data.filter((student) => {
    return student.hogwartsStudent === true;
  });

  // console.log(students)

  const staff = data.filter((staff) => {
    return staff.hogwartsStaff === true;
  });

  // console.log(staff)

  return (
    <div className="App">
      <img src={HpLogo} className="HpLogo" alt="logo"></img>
      <h3 className="Title">Selecciona tu filtro</h3>
      <div className="Btns">
        <button className="btn" onClick={handleSetStudents}>
          ESTUDIANTES
        </button>
        <button className="btn" onClick={handleSetStaff}>
          STAFF
        </button>
      </div>
      <div className="Cards">
        {(() => {
          switch (view) {
            case "all":
              return <CardMini data={data} />;
            case "students":
              return <CardMini data={students} />;
            case "staff":
              return <CardMini data={staff} />;
            default:
              return null;
          }
        })()}
      </div>
      <div className="GroupBtns">
        <button className="Favorites">
          FAVORITOS
          <img src={Favorites} alt="favorites" />
        </button>
        <button className="Add" onClick={() => setModalShow(true)}>
          AGREGAR
          <img src={Add} alt="add" />
        </button>
        <AddModal show={modalShow} onHide={() => setModalShow(false)} />
      </div>
    </div>
  );
}

export default App;
