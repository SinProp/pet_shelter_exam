import axios from "axios";
import React, { useState, useEffect} from "react";
import { Link, navigate }from "@reach/router"

const UpdatePet = (props) => {
    const [petName, setPetName] = useState("");
    const [petType, setPetType] = useState("");
    const [petDescription, setPetDescription] = useState("");
    const [skillOne, setSkillOne] = useState("");
    const [skillTwo, setSkillTwo] = useState("");
    const [skillThree, setSkillThree] = useState("");
    const [id, setId] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        axios
        .put(`http://localhost:8000/api/pets/${_id}`, {
            petName,
            petType,
            petDescription,
            skillOne,
            skillTwo,
            skillThree,

        })
        .then((response) => {
            console.log(response);
            navigate("/");
            })
        .catch((err) => console.log(err));
    
};
    const { _id } = props;    

    useEffect(() => {
        axios
        .get(`http://localhost:8000/api/pets/${_id}`)
        .then(response => {
            console.log(response.data);
            setPetName(response.data.petName);
            setPetType(response.data.petType);
            setPetDescription(response.data.petDescription);
            setSkillOne(response.data.skillOne);
            setSkillTwo(response.data.skillTwo);
            setSkillThree(response.data.skillThree);
            setId(response.data._id);

        })
        .catch(err => console.log(err));
    }, []);

    console.log(_id);
    return (
    <div className="container text-center">
        <h1>Pet Shelter</h1>
        <h1>Edit {petName}'s Record: </h1> 
        <hr/>
        <h2 className=""><Link to="/">Back to Home
        </Link></h2>        

        <form className="border border-dark" onSubmit={handleSubmit}> 
        <div className="form-group">Pet Name:{" "} 
        <input type="text" 
        onChange={(e) => setPetName(e.target.value)}
        value={petName}
        />
        </div>
        <div className="form-group">Pet Type:{" "} 
        <input type="text" 
        onChange={(e) => setPetType(e.target.value)}
        value={petType}
        />
        </div>
        <div className="form-group">Pet Description:{" "} 
        <input type="text" 
        onChange={(e) => setPetDescription(e.target.value)}
        value={petDescription}
        />
        </div>
        <div className="form-group">Skill One:{" "} 
        <input type="text" 
        onChange={(e) => setSkillOne(e.target.value)}
        value={skillOne}
        />
        </div>
        <div className="form-group">Skill Two:{" "} 
        <input type="text" 
        onChange={(e) => setSkillTwo(e.target.value)}
        value={skillTwo}
        />
        </div>
        <div className="form-group">Skill Three:{" "} 
        <input type="text" 
        onChange={(e) => setSkillThree(e.target.value)}
        value={skillThree}
        />
        </div>

        <button className="btn btn-success"type="submit" value="Update">Update</button>
    </form>

    </div>
    );
    };

export default UpdatePet;