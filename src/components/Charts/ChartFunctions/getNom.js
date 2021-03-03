function getNom(lesSessions){
   var lesNoms =[];
   try{
        lesSessions.map(sessions=>{
        lesNoms.push(sessions.domaines);
    })
    }catch(error){
        console.log(error);
    }
    return lesNoms;
}
export default getNom;