// import logo from './logo.svg';
// import './App.css';
import React, { useState } from "react";
import HpLogo from "./Assets/Images/Harry-Potter-W.png";
import Favorites from "./Assets/Images/favorites.png";
import Add from "./Assets/Images/add.png";
import "./scss/Styles.scss";
import CardMini from "./components/CardMini";
import data from "./data/hp-characters.json";

function App() {
  // console.log(data);

  const [view, setView] = useState(true);

  const handleSetStudents = () => setView(true);
  const handleSetStaff = () => setView(false);

  const students = data.filter((student) => {
    return student.hogwartsStudent === true;
  })

  // console.log(students)

  const staff = data.filter((staff) => {
    return staff.hogwartsStaff === true;
  })

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
      <div className='Cards'>
        {/* <CardMini data={data}/>  */}
        {view ? <CardMini data={students}/> : <CardMini data={staff}/>}
      </div>
      <div className="GroupBtns">
        <button className="Favorites">
          FAVORITOS
          <img src={Favorites} alt="favorites" />
        </button>
        <button className="Add">
          AGREGAR
          <img src={Add} alt="add" />
        </button>
      </div>
      {/* {view ? <CardMini data={students}/> : <CardMini data={staff}/>} */}
    </div>
  );
}

export default App;
