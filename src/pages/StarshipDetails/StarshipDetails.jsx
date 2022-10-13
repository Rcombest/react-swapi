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
      <div className="starship-details-div">
        {starshipDetails.name ? 
        <>
          <h2 className="starship-name">NAME: {starshipDetails.name}</h2>
          <h3>MODEL: {starshipDetails.model}</h3>
          <Link to='/all-starships' className='return'>Return</Link>
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