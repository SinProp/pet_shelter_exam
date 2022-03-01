import { Link, navigate } from "@reach/router";
import axios from "axios";
import { useState, useEffect} from "react";
import "../App.css";


const PetList = () => {
    const [pets, setPets] = useState([]);


    useEffect(() => {
        axios
        .get("http://localhost:8000/api/pets")
        .then((response) => {
            console.log(response.data);
            setPets(response.data);
        })
        .catch(err => console.log(err));
    }, []);

const deleteFilter = (idFromBelow) => {
    axios
    .delete(`http://localhost:8000/api/pets/${idFromBelow}`)
    .then(response => {
        console.log(response.data);
        setPets(pets.filter((pet, index) => pet._id !== idFromBelow));
    })
    .catch(err => console.log(err));
}

    return (
    <div className="container">
        

        <h1 className="text-center">Sheltered Pets: </h1> 
        <hr />
        <h2 className="text-center"><Link to="/new-pet">Add a pet to the shelter
        </Link>
        </h2>        

        <table className="table table-dark">
            <thead>
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Type</th>
                    <th scope="col">Actions</th>
                </tr>
            </thead>
            <tbody>
                {pets.map((pet) => {
                    return (
                    <tr key={pet._id}>
                                <td>{pet.petName}</td>
                                <td>{pet.petType}</td>
                                <td><button className="button-margin" onClick={()=>navigate(`/edit/${pet._id}`)}>Edit</button>
                                    <button className="button-margin" onClick={()=>deleteFilter(pet._id)}>Delete</button>
                                </td>
                                
                            </tr>
                            );
                    })}
            </tbody>
        </table>
        
            

        </div>
    );

}

export default PetList;