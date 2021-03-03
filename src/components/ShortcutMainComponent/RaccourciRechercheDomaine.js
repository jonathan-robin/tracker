import '../../App.css';
import {react, useState, useEffect, useContext} from "react";
import React, { Component } from 'react'
import moment from 'moment';
import 'bootstrap/dist/css/bootstrap.css';
import {Dropdown} from 'react-bootstrap'
global.jQuery = require('jquery');
require('bootstrap');

function RechercheDomaineRaccourci(props){

    return (
        <div className="RRDContent">
            <div className="ligne1" style={{marginTop:'5%'}}>
                <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        Matières CNED
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        {props.matieres.map(matiere=>(
                            <Dropdown.Item onClick={ () => {props.reducer("matiere");props.HandlerClickMatiere(matiere.idMatiere, matiere.nomMatiere);}}>
                                {matiere.nomMatiere}
                            </Dropdown.Item>))}
                    </Dropdown.Menu>
                </Dropdown>
                <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        Projet
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        {props.projets.map(projet=>(
                            <Dropdown.Item onClick={()=> {props.reducer("projet");props.HandlerClickProjet(projet.idProjet, projet.nomProjet);}}>
                                {projet.nomProjet}
                            </Dropdown.Item>))}
                    </Dropdown.Menu>
                </Dropdown>
            </div>
            <div className="ligne2" style={{marginBottom:'5%'}}>
                <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        Langages
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        {props.langages.map(langage=>(
                            <Dropdown.Item onClick={() => {props.reducer('langage'); props.HandlerClickLangage(langage.idlangage, langage.nomLangage);}}>
                                {langage.nomLangage}
                            </Dropdown.Item>))}
                    </Dropdown.Menu>
                </Dropdown>
                <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        Jeux
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        {props.jeux.map(jeux=>(
                            <Dropdown.Item onClick={()=> {props.reducer("jeux");props.HandlerClickJeux(jeux.idJeux, jeux.nomJeux);}}>
                                {jeux.nomJeux}
                            </Dropdown.Item>))}
                    </Dropdown.Menu>
                </Dropdown>
            </div>
        </div>
    )
}
export default RechercheDomaineRaccourci;