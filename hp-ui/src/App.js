// import logo from './logo.svg';
// import './App.css';
import HpLogo from './Assets/Images/Harry-Potter-W.png';
import Favorites from './Assets/Images/favorites.png'
import Add from './Assets/Images/add.png'
import './scss/Styles.scss'
import CardMini from './components/CardMini';


function App() {
  return (
    <div className="App">
      <img src={HpLogo} className='HpLogo' alt='logo'></img>
      <h3 className='Title'>Selecciona tu filtro</h3>
      <div className="Btns">
        <button className='btn'>ESTUDIANTES</button>
        <button className='btn'>STAFF</button>
      </div>
      <div className='Cards'>
        <CardMini />
        <CardMini />
      </div>
      <div className='GroupBtns'>
        <button className='Favorites'>FAVORITOS<img src={Favorites} alt='favorites'/></button>
        <button className='Add'>AGREGAR<img src={Add} alt='add'/></button>
      </div>
    </div>
  );
}

export default App;
