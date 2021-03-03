function getLabel(lesSessions){

  var label=[];
  try{
    lesSessions.map(element=>{
        label.push("domaines");
  });
  }catch(error){
    console.log(error);
  }
  return label;
}
export default getLabel;