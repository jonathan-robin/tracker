import '../App.css';
import {react, useState, useEffect, useContext} from "react";
import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import {Dropdown} from 'react-bootstrap'
global.jQuery = require('jquery');
require('bootstrap');

function RechercheDomaine(props){

    return(
        <div>
    <h3 className='rechercheDomaineTitle'>Recherche par domaines...</h3>

<div className="rechercheDomaineContent">
    <Dropdown className='dropRD '>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
            Matières CNED
        </Dropdown.Toggle>
        <Dropdown.Menu>
            {props.matieres.map(matiere=>(
                <Dropdown.Item onClick={ () => {
                    props.HandlerClickMatiere(matiere.idMatiere, matiere.nomMatiere);
                }}>{matiere.nomMatiere}</Dropdown.Item>
            ))}
        </Dropdown.Menu>
    </Dropdown>
        {/* DropDown pour les projets  */}
        <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
            Projet
        </Dropdown.Toggle>
        <Dropdown.Menu>
            {props.projets.map(projet=>(
                <Dropdown.Item onClick={()=> {
                    props.HandlerClickProjet(projet.idProjet);
                }}>{projet.nomProjet}</Dropdown.Item>
            ))}
        </Dropdown.Menu>
    </Dropdown>
         {/* DropDown pour les langages  */}
         <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
            Langages
        </Dropdown.Toggle>
        <Dropdown.Menu>
            {props.langages.map(langage=>(
                <Dropdown.Item onClick={() => {
                    props.HandlerClickLangage(langage.idlangage);
                }}>{langage.nomLangage}</Dropdown.Item>
            ))}
        </Dropdown.Menu>
    </Dropdown>
         {/* DropDown pour les jeux  */}
         <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
        Jeux
        </Dropdown.Toggle>
        <Dropdown.Menu>
            {props.jeux.map(jeux=>(
                <Dropdown.Item onClick={()=> {
                    props.HandlerClickJeux(jeux.idJeux);
                }}>{jeux.nomJeux}</Dropdown.Item>
            ))}
        </Dropdown.Menu>
    </Dropdown>
</div>
</div>
    );
}

export default RechercheDomaine;