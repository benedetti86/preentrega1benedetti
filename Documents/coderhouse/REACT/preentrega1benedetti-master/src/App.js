import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
// import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar/>


      <header className="App-header">
        <Routes> 
          <Route path='/' element={<ItemListContainer greeting="Bienvenido a MusicStore"/>}/>
          <Route path='/instrumentos/:id' element={<ItemListContainer/>}/>


          
        </Routes>
       
      </header>

    </div>
    </BrowserRouter>
  );
}

export default App;

