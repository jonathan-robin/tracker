var moment = require('moment');
function GetLesDates(Debut, Fin) {

    const lesJours = [];
    var jourActuel = new Date(Debut);
    var ok = true;

    while(ok){ 
        if (jourActuel.setHours(jourActuel.getHours() + 23,59,59) <= Fin){
            lesJours.push(moment(jourActuel).format("DD/MM/YYYY"));
        }
        else{
            ok = false;
        }
    };
    
    return lesJours;
}
export default GetLesDates;