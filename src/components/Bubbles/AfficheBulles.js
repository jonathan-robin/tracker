import '../../App.css';
import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
require('bootstrap');

function AfficheBulles(props){
    var bulles = props.bulles;
    function switchText(element){
        return element.nom   
    }

    function switchBackground(element){
        switch(element.domaines){
            case "Matieres": 
                return "radial-gradient(circle at 15% 5%, #7CFC00, #000)";
            case "Projets" : 
                return "radial-gradient(circle at 5% 20%, #5cabff, #000)";
            case "Langages":
                return "radial-gradient(circle at 20% 20%, #ff0000, #000)"
            case "Jeux":    
                return "radial-gradient(circle at 5% 10%, #ffFF00, #000)"
        }
    }

    return(
        bulles.map(element => {
            var infos = element.domaines + ' : ' + element.nom + "\n" + 'Durée session : ' + element.duration + "\n" + 'Date : ' + element.startingDay + '\n' + 'Objectif :' + element.objectif;
            return (
                <div title={infos} style={{
                    cursor:'help',
                    animation:'growBubble 0.5s linear',
                    background:switchBackground(element),
                    borderRadius:"50%",
                    width:element.r + "%",
                    height:(element.r)+ "%",
                    position:"absolute",
                    top:element.x + "%",
                    left:element.y + "%",                                     
                    boxShadow:element.r/2.5 + 'px ' + element.r/2.5 + 'px ' + element.r/2.5 + 'px ' + ' black',
                    }}>

                    <p style={{
                        animation: 'bubble-anim '+ element.r/3 +'s ease-out infinite',
                        fontFamily:"Calibri",
                        textAlign:"center",
                        paddingTop:(element.r / 10) +'vh',
                        fontSize:element.r/4+'vh'
                    }}>
                {switchText(element) + `\n` + Math.round(element.r)}%
                    </p>
                </div>
            )
        })
    )
}
export default AfficheBulles;