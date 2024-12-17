import { useParams } from "react-router";
import { useState, useEffect } from "react"
import { getStarships } from "../../services/sw-api"
import Card from "../components/Card"

function Starships() {

    const [starships,setStarships] = useState([]);

    useEffect(()=>{
        async function fetchStarships() {
            const data = await getStarships();
            setStarships(data);
            
        }
        fetchStarships();
    },[]);

    return (
        <div>
            <div className='card-container'>
        {starships.length > 0 ? (
          starships.map((ship, index) => <Card key={index} starship={ship} />)
        ) : (
          <p>Loading starships...</p>
        )}
      </div>
        </div>
    )


}

export default Starships