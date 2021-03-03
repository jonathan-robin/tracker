
function getLesSessions(lesSessions, ObjectEndOf, ObjectStartOf, lesDomaines){

    var tousLesResultats = [];
    try{
        lesSessions.matiere_sessions.map(element => {
            var nom ='';
            var dateStartingDay = element.startingDay.split("/");
            var ObjectStartingDay = new Date(+dateStartingDay[2], dateStartingDay[1] - 1, + dateStartingDay[0]);     
                if(ObjectStartingDay >= ObjectStartOf){
                    if (ObjectStartingDay <= ObjectEndOf){  
                        lesDomaines.matieres.map(matiere => {
                            if(matiere.idMatiere === element.idMatiere){
                                nom = matiere.nomMatiere;
                            };
                        });                                 
                        tousLesResultats.push({
                            session:element.session,
                            duration:element.duration,
                            domaines:'matieres',
                            startingDay:element.startingDay,
                            startingTime:element.startingTime,
                            endingTime: element.endingTime,
                            id:element.idMatiere,
                            nom:nom
                        });
                    };
                };
        });
    }catch(error){
        console.log(error);
    };

    try{
        lesSessions.projet_sessions.map(element => {
            var nom ='';
            var dateStartingDay = element.startingDay.split("/");
            var ObjectStartingDay = new Date(+dateStartingDay[2], dateStartingDay[1] - 1, + dateStartingDay[0]);     
                if(ObjectStartingDay >= ObjectStartOf){
                    if (ObjectStartingDay <= ObjectEndOf){     
                        lesDomaines.projets.map(projet => {
                            if(projet.idProjet === element.idProjet){
                                 nom = projet.nomProjet;
                           };
                        });                              
                        tousLesResultats.push({
                            session:element.session,
                            duration:element.duration,
                            domaines:'projets',
                            startingDay:element.startingDay,
                            startingTime:element.startingTime,
                            endingTime: element.endingTime,
                            id:element.idProjet,
                            nom:nom, 
                            objectifs:element.objectifs,
                        });
                    };
                };
        });
    }catch(error){
        console.log(error)
    };

    try{
        lesSessions.langage_sessions.map(element => {
            var nom ='';
            var dateStartingDay = element.startingDay.split("/");
            var ObjectStartingDay = new Date(+dateStartingDay[2], dateStartingDay[1] - 1, + dateStartingDay[0]);     
                if(ObjectStartingDay >= ObjectStartOf){
                    if (ObjectStartingDay <= ObjectEndOf){   
                        lesDomaines.langages.map(langage => {
                            if(langage.idlangage === element.idLangage){
                                nom = langage.nomLangage;
                            };
                        });                                          
                        tousLesResultats.push({
                            session:element.session,
                            duration:element.duration,
                            domaines:'langages',
                            startingDay:element.startingDay,
                            startingTime:element.startingTime,
                            endingTime: element.endingTime,
                            id:element.idLangage,
                            nom:nom
                        });
                    };
                };
        });
    }catch(error){
        console.log(error);
    };

    try{
        lesSessions.jeux_sessions.map(element => {
            var nom ='';
            var dateStartingDay = element.startingDay.split("/");
            var ObjectStartingDay = new Date(+dateStartingDay[2], dateStartingDay[1] - 1, + dateStartingDay[0]);     
                if(ObjectStartingDay >= ObjectStartOf){
                    if (ObjectStartingDay <= ObjectEndOf){  
                        lesDomaines.jeux.map(jeu => {
                            if(jeu.idJeux === element.idJeux){
                                nom = jeu.nomJeux;
                            };
                        });                                         
                        tousLesResultats.push({
                            session:element.session,
                            duration:element.duration,
                            domaines:'Jeux',
                            startingDay:element.startingDay,
                            startingTime:element.startingTime,
                            endingTime: element.endingTime,
                            id:element.idJeux,
                            nom:nom
                        });
                    };
                };
        });
    }catch(error){
        console.log(error);
    };
    return tousLesResultats;
}

export default getLesSessions