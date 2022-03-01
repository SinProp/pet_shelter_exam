import { navigate } from "@reach/router";
import axios from "axios";
import React, { useState, useEffect} from "react";

const ShowPet = (props) => {
    const { _id } = props;    
    const [petInfo, setPetInfo] = useState({});
    useEffect(() => {
        axios
        .get(`http://localhost:8000/api/pets/${_id}`)
        .then(response => {
            console.log(response.data);
            setPetInfo(response.data);
        })
        .catch(err => console.log(err));
    }, );

    const deleteHandler = () => {
        axios.delete(`http://localhost:8000/api/pets/${_id}`)
        .then(response => {
            console.log(response.data);
            navigate("/");
        })
        .catch(err => console.log(err));
    }
    

    console.log(_id);
    return (
    <div>
        <h1>Pet Record: {petInfo.petName}</h1>
        <hr />
        <p>Pet Type: ${petInfo.petType}</p>
        <p>Description: {petInfo.petDescription}</p>
        <button onClick={deleteHandler}>Delete</button>

        </div>
    );
};

export default ShowPet;