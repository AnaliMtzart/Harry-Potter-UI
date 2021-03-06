import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import "../scss/Styles.scss";
require("react-bootstrap/ModalHeader");

function AddModal(props) {
    
  const [character, setCharacter] = useState({
    name: "",
    birthday: "",
    eyes: "",
    hair: "",
    woman: "",
    men: "",
    student: "",
    staff: "",
    image: "",
  });

  const handleInputChange = (e) => {
    e.preventDefault();
    // console.log(e.target.value);
    setCharacter({
      ...character,
      [e.target.name]: e.target.value,
      [e.target.birthday]: e.target.value,
      [e.target.eyes]: e.target.value,
      [e.target.hair]: e.target.value,
      [e.target.woman]: e.target.value,
      [e.target.men]: e.target.value,
      [e.target.student]: e.target.value,
      [e.target.staff]: e.target.value,
      [e.target.image]: e.target.files,
    });
  };

  console.log("inputs", character);

  //post
const url = 'http://localhost:3004/character';

const addCharacter = () => {
  // console.log('guardar', character)
  fetch(url, {
      method: 'POST', 
      body: JSON.stringify(character), 
      headers:{
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => console.log('Success:', response));

//   fetch(url, {
//   method: 'post',
//   headers: {
//     'Accept': 'application/json, text/plain, */*',
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify(character)
// }).then(res => res.json())
//   .then(res => console.log(res));

}

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Agregar un personaje
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form>
          <div className="AddContainer">
            <label>
              Nombre:
              <br />
              <input
                className="AddText"
                type="text"
                name="name"
                onChange={handleInputChange}
              ></input>
            </label>

            <label>
              Cumplea??os:
              <br />
              <input
                className="AddText"
                type="date"
                name="birthday"
                data-date-format="DD-MMMM-YYYY"
                onChange={handleInputChange}
              ></input>
            </label>

            <label>
              Color de ojos:
              <br />
              <input
                className="AddText"
                type="text"
                name="eyes"
                onChange={handleInputChange}
              ></input>
            </label>

            <label>
              Color de pelo:
              <br />
              <input
                className="AddText"
                type="text"
                name="hair"
                onChange={handleInputChange}
              ></input>
            </label>
            <p>G??NERO</p>
            <p>POSICI??N</p>
            <div className="Options">
              <div className="Radio1">
                <input
                  type="radio"
                  value="woman"
                  name="woman"
                  onChange={handleInputChange}
                ></input>
                <label htmlFor="women">Mujer</label>
                <input
                  type="radio"
                  value="men"
                  name="men"
                  onChange={handleInputChange}
                ></input>
                <label htmlFor="men">Hombre</label>
              </div>
              <div className="Radio1">
                <input
                  type="radio"
                  value="student"
                  name="student"
                  onChange={handleInputChange}
                ></input>
                <label htmlFor="student">Estudiante</label>
                <input
                  type="radio"
                  value="staff"
                  name="staff"
                  onChange={handleInputChange}
                ></input>
                <label htmlFor="staff">Staff</label>
              </div>
            </div>
          </div>
          <div className="BtnFile">
            <label htmlFor="file">+ FOTOGRAF??A</label>
            <input className="FileBtn" type="file" name="image" />
          </div>
        </form>
      </Modal.Body>
      <Modal.Footer>
      <Button className="Close" 
        // onClick={props.onHide}
        onClick={()=> {addCharacter()}}
        >
          GUARDAR
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default AddModal;
