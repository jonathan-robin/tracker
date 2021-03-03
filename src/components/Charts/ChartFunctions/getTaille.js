function getTaille(lesSessions){
    try{
        var cap = lesSessions.split(':');
        var h = Number(cap[0]);
        var m = Number(cap[1]);
        var s = Number(cap[2]);
        var hs = h * 3600;
        var ms = m *60;
        var ss = s + ms + hs;
        var percentage = ss/3600;
    }
    catch(err){
        console.log(err)
    }
    return percentage;
}
export default getTaille;