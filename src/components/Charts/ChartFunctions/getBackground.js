function getBackground(lesSessions){

    switch(lesSessions){
        case "matieres": 
            return ("#68E879");
            break;
        case "projets" : 
            return("#6897E8");
            break;
        case "langages":
            return("#E67260");
            break;
        case "Jeux":    
            return("#D4E660");
            break;
    }
}
export default getBackground;