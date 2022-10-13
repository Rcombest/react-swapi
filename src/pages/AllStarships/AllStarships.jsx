import {useEffect, useState} from 'react'
import {getStarship} from '../../services/sw-api'
import { Link } from 'react-router-dom'

const AllStarships = () => {
  const [starships, setStarship]=useState([])

  useEffect(() => {
    const fetchStarshipList = async () => {
      const starshipData = await getStarship()
      setStarship(starshipData.results)
    }
    fetchStarshipList()
  }, [])

  return (
    <>
    <h1> STAR WARS STARSHIPS </h1>
      <div>
        {starships.map(starship => 
          <Link key={starship.model} state={{ starship }} to='/starship'>
            <div className='starship-name-div'>
              {starship.name}
            </div>
          </Link>
          )}
      </div>
    </>
  )
}

export default AllStarships