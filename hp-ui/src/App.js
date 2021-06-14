import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import HpLogo from "./Assets/Images/Harry-Potter-W.png";
import Favorites from "./Assets/Images/favorites.png";
import Add from "./Assets/Images/add.png";
import "./scss/Styles.scss";
import CardMini from "./components/CardMini";
import data from "./data/hp-characters.json";
import AddModal from "./components/AddModal";
import { DropdownButton, Dropdown } from "react-bootstrap";
import Card from './components/Card';

function App() {
  // console.log(data);

  const [view, setView] = useState("all");
  const [modalShow, setModalShow] = useState(false);

  const isDesktop = useMediaQuery({ query: "(min-width: 1024px)" });
  const isMobileOrTable = useMediaQuery({ query: "(max-width: 768px)" });

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
      <p className="Title">Selecciona tu filtro</p>
      <div className="Btns">
        <button className="btn" onClick={handleSetStudents}>
          ESTUDIANTES
        </button>
        <button className="btn" onClick={handleSetStaff}>
          STAFF
        </button>
      </div>
      <div className="Cards">
        {isMobileOrTable && (
          <>
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
          </>
        )}
        {isDesktop && (
          <>
            {(() => {
              switch (view) {
                // console.log(view);
                case "all":
                  return <Card data={data} />;
                case "students":
                  return <Card data={students} />;
                case "staff":
                  return <Card data={staff} />;
                default:
                  return null;
              }
            })()}
          </>
        )}
      </div>
      <div className="GroupBtns">
        <DropdownButton
          className="Favorites"
          id="button"
          drop="up"
          variant="secondary"
          title={
            <>
              FAVORITOS
              <img src={Favorites} alt="favorites" />
            </>
          }
        >
          <div>
            <img src={Favorites} alt="favorites" />
          </div>

          <Dropdown.Item eventKey="1" className="Drop">
            Character
          </Dropdown.Item>
        </DropdownButton>
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
