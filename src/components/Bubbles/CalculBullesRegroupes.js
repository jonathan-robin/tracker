import '../../App.css';
import 'bootstrap/dist/css/bootstrap.css';
global.jQuery = require('jquery');
require('bootstrap');

function CalculBullesRegroupes(carotte){

    var lespoils= [];
    console.log(carotte)

    while(lespoils.length < carotte.length){
        lespoils.length = 0;
    carotte.map(element => {
        var laBulle = new Object();
        laBulle.r = element.r;

        var overlapping = false;
        var x = parseInt(Math.floor(Math.random() * 100) );
        var y = parseInt(Math.floor(Math.random() * 100) ); 

        for (var j = 0; j < lespoils.length ; j++){

            var other = lespoils[j]; 

            var centreCircleX = x + (laBulle.r/2);
            var centreCircleY = y + (laBulle.r/2);

            var centreOtherX = other.x + (other.r/2);
            var centreOtherY = other.y + (other.r/2);

            var d1 = (centreCircleX + (laBulle.r/2)) - (centreOtherX + (other.r/2));
            var d1C = Math.pow(d1, 2); 

            var d2 = (centreCircleY + (laBulle.r/2)) - (centreOtherY + (other.r/2));

            var d2C = Math.pow(d2, 2);       

            var d12 = parseInt(d1C) + parseInt(d2C);

            var d = Math.sqrt(d12);

            var r1 = (laBulle.r/2)
            var r2 = (other.r/2)
            var rayons = ( r1 + r2)

            if( d < rayons*2){
                overlapping = true;
                break;
            }
        }

        if (!overlapping){
            laBulle.x = x;
            laBulle.y = y;
            if(laBulle.x + (laBulle.r) <= 100){
                if(laBulle.y + (laBulle.r) <= 100){                 
                    lespoils.push({
                        x:laBulle.x,
                        y:laBulle.y,
                        r:laBulle.r,
                        nom:element.nom,
                        domaines:element.domaines
        
                    })       
                }   
            } 
        }    
     
        if (lespoils.length === 0 ){
            laBulle.x = x;
            laBulle.y = y;
            if(laBulle.x + (laBulle.r) > 100){
                laBulle.x =  laBulle.x/4;
            }
            if(laBulle.y + (laBulle.r) > 100){
                laBulle.y =  laBulle.y/4;
            }    
            lespoils.push({
                x:laBulle.x,
                y:laBulle.y,
                r:laBulle.r,
                nom:element.nom,
                domaines:element.domaines

            })       
         }
    })}
    console.log(lespoils)
    return lespoils;
}
export default CalculBullesRegroupes