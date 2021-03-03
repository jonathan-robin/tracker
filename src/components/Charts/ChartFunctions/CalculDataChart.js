import getTaille from './getTaille';
import getBackground from './getBackground';
global.jQuery = require('jquery');
require('bootstrap');

function CalculDataChart(lesSessions, lesDates){
    var data=[];
    var lesStack = [];

    try{
        var Jour1=[];
        function getTableauDeZero(Jour1){
                for (var i = 0; i < lesDates.length; i++){
                    Jour1.push({duration:'0/0/0/0/0/0/0/0', domaines:'0/0/0/0/0/0/0/0', jour:'0/0/0/0/0/0/0/0', nom:'none/none/none/none/none/none', 
                    objectif:'none/none/none/none/none/none', startingDay:'none/none/none/none/none/none'});
                }
            };

        getTableauDeZero(Jour1);

        lesSessions.map(element=>{
            var lestack = '';
            var ledomaine = '';
            var keep = '';
            var nom = ''; 
            var objectif =''; 

            for (var i = 0; i < lesSessions.length; i++){
                if(element.startingDay === lesSessions[i].startingDay){
                    ledomaine += "/"+lesSessions[i].domaines;
                    lestack += "/" + lesSessions[i].duration;
                    nom += "/" + lesSessions[i].nom; 
                    objectif += "/" + lesSessions[i].objectifs;
                    keep = element.startingDay;
                }
            };
            for(var j =0; j <= lesDates.length; j++){
                if(keep === lesDates[j]){
                    const getIndex = (element) => element === keep;
                    var index = lesDates.findIndex(getIndex);
                    Jour1[index] ={
                        duration:lestack,
                        domaines:ledomaine,
                        jour:keep, 
                        nom:nom, 
                        objectif:objectif
                    }
                }
            };
            lesStack.push({
                duration:lestack,
                domaines:ledomaine,
                startingDay:keep, 
                nom:nom, 
                objectif:objectif
            });
        })

        var madata=[];
        var meslabels=[];
        var mesback=[];
        var mesinfos=[];
        var data=[];

        for (var h = 1; h < 6; h++){
            var madata='';
            var meslabels='';
            var mesback=[];
            var mesNoms = ''; 
            var mesObjectifs = ''; 
            var mesJour = '';
            var mesDurations ='';

            for(var i = 0; i < Jour1.length;i++){
                var cap = Jour1[i].domaines.split('/');
                var cap1 = Jour1[i].duration.split('/');
                var cap2 = Jour1[i].nom.split('/');
                var cap3 = Jour1[i].objectif.split('/');
                var cap5 = Jour1[i].duration.split('/')

                if(getTaille(cap1[h]) === undefined || isNaN(getTaille(cap1[h]))){
                    madata+=String(0);
                }else{
                    madata += String(Math.round(getTaille(cap1[h])));
                }
                if(getBackground(cap[h]) === undefined){
                    mesback.push("none");
                }else{
                    mesback.push(getBackground(cap[h]));
                }
                    meslabels  += cap[h] + "," ;
                    mesNoms += cap2[h]+",";
                    mesObjectifs += cap3[h] +","; 
                    mesDurations += cap5[h] + ",";
            };
            mesinfos.push({ duration:madata,
                            label:meslabels,
                            background:mesback,
                            nom:mesNoms,
                            objectif:mesObjectifs,
                            jour:mesJour,
                            prettyduration:mesDurations
                            })
        };
        for (var i = 0; i < mesinfos.length; i ++){
            data.push({
                data : mesinfos[i].duration,
                backgroundColor:mesinfos[i].background, 
                label:mesinfos[i].label,
                nom:mesinfos[i].nom,
                objectif:mesinfos[i].objectif,
                jour:mesinfos[i].jour,
                prettyduration:mesinfos[i].prettyduration
            })
        }
    }catch(error){
        console.log(error)
    }
    return data;
}
export default CalculDataChart;