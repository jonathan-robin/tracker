import '../App.css';
import 'bootstrap/dist/css/bootstrap.css';
import ResultatsJeux from '../Resultats/ResultatsJeux';
global.jQuery = require('jquery');
require('bootstrap');

function RegrouperCharts(props){

    function getTaille(element){
        var cap = element.split(':');
        return parseInt(parseInt((cap[2])) + ( parseInt((cap[0] * 60)) + parseInt(cap[1]) ) * 60);               
    }

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
                return "radial-gradient(circle at 20% 20%, #ff0000, #000)";
            case "Jeux":    
                return "radial-gradient(circle at 5% 10%, #ffFF00, #000)";
    }
        };

    function getOpacitedColor(element){
        switch(element.domaines){
            case "Matieres": 
                return  "#7dfa00";
            case "Projets" : 
                return "#5cabff";
            case "Langages":
                return "#ff0000"
            case "Jeux":    
                return "#ffff00"
        }
    }

    var nb = props.nbHours * 3600;
    var nbS = nb / 2.4;
    var largeurProjets = 0;
    var largeurLangages = 0;
    var largeurJeux = 0;
    var largeurMatiere = 0;

    props.lesSessions.map(session => {
        if (session.domaines === "projets"){
            largeurProjets += getTaille(session.duration);
        }
    });

    var lesResultats = [{
            nom:'Projets',
            taille:(largeurProjets/nbS)*100,
            domaines:'Projets',
            position:'0'
    }];

    props.lesSessions.map(session => {
        if (session.domaines === "Jeux"){
            largeurJeux += getTaille(session.duration);
        }
    });

    lesResultats.push({
            nom:'Jeux',
            taille:(largeurJeux/nbS)*100,

            domaines:'Jeux',
            position:'25'
    });

    props.lesSessions.map(session => {
        if (session.domaines === "matieres"){
            largeurMatiere += getTaille(session.duration);
        }
    });
    
    lesResultats.push({
            nom:'Matieres',
            taille:(largeurMatiere/nbS)*100,

            domaines:'Matieres',
            position:'50'
    });

    props.lesSessions.map(session => {
        if (session.domaines === "langages"){
            largeurLangages += getTaille(session.duration);
        }
    });

    lesResultats.push({
            nom:'Langages',
            taille:(largeurLangages/nbS)*100,
            domaines:'Langages',
            position:'75'
    });

    return (
        lesResultats.map(resultat =>{
            return (
                <div style={{
                    animation:'growRight 1.5s linear',          
                    height:'25%', 
                    background:switchBackground(resultat),
                    position:'absolute',
                    left:'0%',
                    top:resultat.position+"%",
                    width:resultat.taille+'%',
                    overflow:'hidden', }}>
                    <p style={{
                        textAlign: 'center',
                        fontFamily:'Calibri',
                        fontSize: resultat.taille*10+'%',
                        textDecoration:' underline overline'+getOpacitedColor(resultat)+'',}}>
                        {switchText(resultat)} - {Math.round(resultat.taille)}%</p>
                </div>
            )
        })
    )
}

export default RegrouperCharts