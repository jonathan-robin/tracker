import getTaille from './getTaille';

function GetDataRegroupement(resultats){
    var TotalMatieres,TotalLangages,TotalJeux,TotalProjet = 0;
    var jeux = 'Jeux';
    var matieres = 'matieres';
    var langages = 'langages';
    var projets = 'projets';

    for (var i = 0; i < resultats.length; i++){
        if(resultats[i].domaines === jeux){
            TotalJeux += getTaille(resultats[i].duration);
        }
        if(resultats[i].domaines === projets){
            TotalProjet += getTaille(resultats[i].duration);
        }
        if(resultats[i].domaines === langages){
            TotalLangages += getTaille(resultats[i].duration);
        }
        if(resultats[i].domaines === matieres){
            TotalMatieres += getTaille(resultats[i].duration);
        }
    };
    var regroupement = {Jeux: TotalJeux, Projets:TotalProjet, Langages:TotalLangages, Matieres:TotalMatieres};
    return regroupement;
}
export default GetDataRegroupement;