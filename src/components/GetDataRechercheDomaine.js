function GetDataRechercheDomaine(idDomaine, matiere_session, projet_sessions, langage_sessions, jeux_sessions){
    var laDataToReturn = [];

    try{
        matiere_session.map(element => {
            if(element.idMatiere === idDomaine){
                laDataToReturn.push(element);
            }
        });
    }catch(error){
        console.log(error);
    }
    try{
        projet_sessions.map(element => {
            if(element.idProjet === idDomaine){
                laDataToReturn.push(element);
            }
        });
    }catch(error){
        console.log(error);
    }
    try{
        langage_sessions.map(element => {
            if(element.idLangage === idDomaine){
                laDataToReturn.push(element);
            }  
        });
    }catch(error){
        console.log(error);
    }
    try{
        jeux_sessions.map(element => {
            if(element.idJeux === idDomaine){
                laDataToReturn.push(element);
            }
        })
    }catch(error){
        console.log(error);
    }
    return laDataToReturn;
}

export default GetDataRechercheDomaine;