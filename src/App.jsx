import './App.css'
import {Route, Routes} from 'react-router-dom'
import AllStarships from './pages/AllStarships/AllStarships'
import NavBar from './components/NavBar/NavBar';
import StarshipDetails from './pages/StarshipDetails/StarshipDetails';

function App() {
  return (
    <>
    <NavBar />
    <Routes>
      <Route
      path='/all-starships'
      element={<AllStarships />}
      />
      <Route 
        path='/starship'
        element={<StarshipDetails />}
      />
    </Routes>
    </>
  )
}

export default App;
