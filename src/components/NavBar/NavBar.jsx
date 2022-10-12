import { Link } from "react-router-dom"

const NavBar = () => {
  return (
    <header className="App-header">
      <Link to="/all-starships">All Starships</Link>
    </header>
  )
}

export default NavBar