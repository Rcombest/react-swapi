import './App.css'
import {Route, Routes} from 'react-router-dom'
import AllStarships from './pages/AllStarships/AllStarships'
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <>
    <NavBar />
    <Routes>
      <Route
      path='/all-starships'
      element={<AllStarships />}
      />
    </Routes>
    </>
  )
}

export default App;
