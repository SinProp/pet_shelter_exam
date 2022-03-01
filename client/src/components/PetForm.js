import React, { useState } from "react";
import axios from "axios";
import { Link, navigate } from "@reach/router";
import "../App.css";


const PetForm = () => {
    // const {submissionBoolean, setSubmissionBoolean} = props; // creates a prop that acts as our lifted state variable
    const [petName, setPetName] = useState("");
    const [petType, setPetType] = useState("");
    const [petDescription, setPetDescription] = useState("");
    const [skillOne, setSkillOne] = useState("");
    const [skillTwo, setSkillTwo] = useState("");
    const [skillThree, setSkillThree] = useState("");
    const [errors, setErrors] = useState("");
    
    const handleSubmit = (e) => {
        e.preventDefault();
        axios
        .post("http://localhost:8000/api/pets", {
            petName,
            petType,
            petDescription,
            skillOne,
            skillTwo,
            skillThree,
            
        })
        .then((response) => {
            console.log(response);
            console.log("POSTED BABYY");
            navigate("/");
            })
        .catch((err) => {
            console.log("ERROR FOUND")
            console.log(err.response.data.err.errors);
            setErrors(err.response.data.err.errors);
        });
    };

    return (
    
    // Form setup or front end formatting
    <div className="container text-center">
    <h1 className="">Pet Shelter </h1> 
    <h3>Know a pet needing a home?</h3>
    <hr />
    <h2 className=""><Link to="/">Back to Home
        </Link></h2>        

    
    <form className="border border-dark " onSubmit={handleSubmit}> 
        <div className="form-group text-center">Pet Name:{" "} 
        <input 
        type="text" 
        className="form-control"
        onChange={(e) => setPetName(e.target.value)}
        value={petName}
        />
        </div>
        {errors.petName ? <p>{errors.petName.message}</p> : null}

        <div className="form-group text-center">Pet Type:{" "} 
        <input 
        type="text"
        className="form-control" 
        onChange={(e) => setPetType(e.target.value)}
        value={petType}
        />
        </div>
        {errors.petType ? <p>{errors.petType.message}</p> : null}

        <div className="form-group text-center">Pet Description:{" "} 
        <input 
        type="text" 
        className="form-control"
        onChange={(e) => setPetDescription(e.target.value)}
        value={petDescription}
        />
        </div>
        {errors.petDescription ? <p>{errors.petDescription.message}</p> : null}

        <hr />
        <h1 className="text-center">Skills: (optional)</h1>
        <div className="form-group text-center">Skill One:{" "} 
        <input 
        type="text" 
        className="form-control"
        onChange={(e) => setSkillOne(e.target.value)}
        value={skillOne}
        />
        </div>
        <div className="form-group text-center">Skill Two:{" "} 
        <input 
        type="text" 
        className="form-control"
        onChange={(e) => setSkillTwo(e.target.value)}
        value={skillTwo}
        />
        </div>
        <div className="form-group text-center">Skill Three:{" "} 
        <input 
        type="text" 
        className="form-control"
        onChange={(e) => setSkillThree(e.target.value)}
        value={skillThree}
        />
        </div>

        <button className="btn btn-primary btn-lg" type="submit">Add Pet</button>
    </form>
    </div>
    );

};

export default PetForm;