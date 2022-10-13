import { useState, useEffect } from "react"
import { useLocation } from "react-router-dom"
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
        <h1>Starship Details</h1>
      </div>
    </>
  )
}

export default StarshipDetails