export const ConvertirDates = (start, end) => {
    console.log(start,end)
    var debut = start.split("/");
    var debutConverti = new Date(+debut[2], debut[1] - 1, +debut[0]); 
    var fin = end.split("/");
    var FinTransition = new Date(+fin[2], fin[1] - 1, +fin[0]); 
    var FinConverti = new Date(FinTransition.setHours(FinTransition.getHours() + 23,59,59));
console.log(debutConverti, FinConverti)
    return [debutConverti, FinConverti]

}
export default ConvertirDates