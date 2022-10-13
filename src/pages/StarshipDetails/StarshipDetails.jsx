import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"

import { getStarshipDetails } from "../../services/sw-api"

const StarshipDetails = () => {
  const [starshipDetails, setStarshipDetails] = useState({})
  const location = useLocation()

  useEffect(() => {
    const fetchDetails = async () => {
      const starshipDetails = await getStarshipDetails
      (location.state.starship.url)
      setStarshipDetails(starshipDetails)
    }
    fetchDetails()
  }, [location.state.starship.url])

  return ( 
    <>
      <div>
        {starshipDetails.name ? 
        <>
          <h2>{starshipDetails.name}</h2>
          <h3>{starshipDetails.model}</h3>
          <Link to='/all-starships'></Link>
        </>
        :
        <>
          <p>Loading starship details</p>
        </>
      }
      </div>
    </>
  )
}

export default StarshipDetails