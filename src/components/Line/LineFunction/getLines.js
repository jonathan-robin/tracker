import $ from 'jquery';
import getTaille from '../../Charts/ChartFunctions/getTaille';
global.jQuery = require('jquery');
require('bootstrap');

function getLines(sessions, leDomaine, lesDates){
    var lesResultats, lesDatesRegroupes, lesDatesUniques, lesDatesString, lesDatesFinales, lesVraiesDatesFinales = [];
    try{
        for (var i =0; i < sessions.length; i ++){
            if (sessions[i].domaines == leDomaine){
                lesResultats.push(sessions[i]);
            }
        };

        for(var i =0; i < lesResultats.length; i++){
            var laduree = 0;
            var keep = '';
            var ladureePretier = ''; 
            var domain = ''; 
            var DomainName = '';
            var objectif = '';

            lesResultats.map(element=>{
                if (element.startingDay == lesResultats[i].startingDay){
                    laduree += getTaille(element.duration);
                    keep = element.startingDay;
                    ladureePretier = element.duration; 
                    DomainName = element.nom; 
                    domain = element.domaines;
                    objectif = element.objectifs
                }
            });
            lesDatesRegroupes.push({
                total:laduree,
                startingDay:keep,
                ladureePretier: ladureePretier, 
                DomainName:DomainName, 
                domain:domain,
                objectif:objectif
            })
        };

        function onlyUnique(value, index, self) {
            return self.indexOf(value) === index;
        }

        for (var i = 0; i < lesDatesRegroupes.length; i++){
            lesDatesString.push({   element : lesDatesRegroupes[i].total + "," + lesDatesRegroupes[i].startingDay,
                                    ladureePretier: lesDatesRegroupes[i].ladureePretier, 
                                    DomainName:lesDatesRegroupes[i].DomainName,
                                    domain:lesDatesRegroupes[i].domain,
                                    objectif:lesDatesRegroupes[i].objectif
        });
        };

        lesDatesUniques = lesDatesString.filter(onlyUnique);
        
        for (var i =0; i < lesDatesUniques.length; i ++){
            var cap = lesDatesUniques[i].element.split(',');
            console.log(lesDatesUniques)
            lesDatesFinales.push({
                duration:cap[0],
                date:cap[1], 
                ladureePretier: lesDatesRegroupes[i].ladureePretier, 
                DomainName:lesDatesRegroupes[i].DomainName,
                domain:lesDatesRegroupes[i].domain,
                objectif:lesDatesRegroupes[i].objectif
            })
        }

        for (var i = 0; i < lesDates.length; i++){
            lesVraiesDatesFinales[i] = {element : '0',
                                        date:'none', 
                                        ladureePretier:'none', 
                                        DomainName:'none',
                                        domain:'none',
                                        objectif:'none',
                                        };
            lesDatesFinales.map(element => {
                if (element.date === lesDates[i]){
                    lesVraiesDatesFinales[i] = {element : element.duration,
                                                date:element.date, 
                                                ladureePretier: element.ladureePretier, 
                                                DomainName:element.DomainName,
                                                domain:element.domain,
                                                objectif:element.objectif
                                                };
                }
            })
        }
    }catch(error){
        console.log(error);
    }
    return lesVraiesDatesFinales;
}
export default getLines