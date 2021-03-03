import '../../App.css';
import 'bootstrap/dist/css/bootstrap.css';
global.jQuery = require('jquery');
require('bootstrap');

function CalculBulles(circles,lesDomaines, nbHours){
    const nbs = (parseInt(nbHours) * 3600 ) / 2.4;
    
    function getTaille(element){
        var cap = element.split(':');
        var h = Number(cap[0]);
        var m = Number(cap[1]);
        var s = Number(cap[2]);
        var hs = h * 3600;
        var ms = m *60;
        var ss = s + ms + hs;
        return ss;        
    }
    var lesBulles= [];

    while(lesBulles.length < circles.length){
        lesBulles.length = 0;

    circles.map(element => {
        var nbS = getTaille(element.duration);
        var ratio = parseFloat(nbS/nbs);
        var rayon = ratio * 100;
        var laBulle = new Object();
        laBulle.r = rayon;
        laBulle.duration = element.duration
        laBulle.startingDay = element.startingDay;
        laBulle.objectif = element.objectifs;

        switch (element.domaines){
            case 'matieres':
                laBulle.domaines = 'Matieres';
                lesDomaines.matieres.map(matiere=>{
                    if(matiere.idMatiere === element.id){
                laBulle.nom = matiere.nomMatiere;       
                    }
                });
                break;
            case 'projets':
                laBulle.domaines = 'Projets';
                lesDomaines.projets.map(projet=>{
                    if(projet.idProjet === element.id){
                laBulle.nom = projet.nomProjet;       
                    }
                });
                break;
            case 'langages':
                laBulle.domaines = 'Langages';
                lesDomaines.langages.map(langage=>{
                    if(langage.idlangage === element.id){
                laBulle.nom = langage.nomLangage;       
                    }
                });
                break;            
            case 'Jeux':
                laBulle.domaines = 'Jeux';
                lesDomaines.jeux.map(jeu=>{
                    if(jeu.idJeux === element.id){
                laBulle.nom = jeu.nomJeux;       
                    }
                });
                break; 
        }

        var overlapping = false;
        var x = parseInt(Math.floor(Math.random() * 100) );
        var y = parseInt(Math.floor(Math.random() * 100) ); 

        for (var j = 0; j < lesBulles.length ; j++){

            var other = lesBulles[j]; 

            var centreCircleX = x + (laBulle.r/2);
            var centreCircleY = y + (laBulle.r/2);

            var centreOtherX = other.x + (other.r/2);
            var centreOtherY = other.y + (other.r/2);

            var d1 = (centreCircleX + (laBulle.r/2)) - (centreOtherX + (other.r/2));
            var d1C = Math.pow(d1, 2); 

            var d2 = (centreCircleY + (laBulle.r/2)) - (centreOtherY + (other.r/2));

            var d2C = Math.pow(d2, 2);       

            var d12 = parseInt(d1C) + parseInt(d2C);

            var d = Math.sqrt(d12);

            var r1 = (laBulle.r/2)
            var r2 = (other.r/2)
            var rayons = ( r1 + r2)

            if( d < rayons*1.5){
                overlapping = true;
                break;
            }
        }

        if (!overlapping){
            laBulle.x = x;
            laBulle.y = y;
            if(laBulle.x + (laBulle.r) <= 100){
                if(laBulle.y + (laBulle.r) <= 100){                 
                    lesBulles.push(laBulle)
                }   
            } 
        }    
    })
}
    return lesBulles;
}
export default CalculBulles