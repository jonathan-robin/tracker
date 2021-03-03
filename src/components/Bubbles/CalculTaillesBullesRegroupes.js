import '../../App.css';
import 'bootstrap/dist/css/bootstrap.css';
global.jQuery = require('jquery');
require('bootstrap');

function regrouperAllResultats(lesBulles){
    var largeurProjets = 0;
    var largeurLangages = 0;
    var largeurJeux = 0;
    var largeurMatiere = 0;
    lesBulles.map(session => {
        if (session.domaines === "Projets"){
            largeurProjets += session.r;
        }
    })
    lesBulles.map(session => {
        if (session.domaines === "Jeux"){
            largeurJeux += session.r
        }
    })
    lesBulles.map(session => {
        if (session.domaines === "Matieres"){
            largeurMatiere += session.r;
        }
    })
    lesBulles.map(session => {
        if (session.domaines === "Langages"){
            largeurLangages += session.r
        }
    })
    var lesResultats = [{
            nom:'Projets',
            r:largeurProjets,
            domaines:'Projets',
    }];
    lesResultats.push({
            nom:'Jeux',
            r:largeurJeux,
            domaines:'Jeux',
    });
    lesResultats.push({
            nom:'Matieres',
            r:largeurMatiere,
            domaines:'Matieres',
    });
    lesResultats.push({
            nom:'Langages',
            r:largeurLangages,
            domaines:'Langages',
    });
    return lesResultats;
}

export default regrouperAllResultats