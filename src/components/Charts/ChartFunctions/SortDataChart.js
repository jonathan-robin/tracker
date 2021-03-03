import '../../../App.css';
import 'bootstrap/dist/css/bootstrap.css';
global.jQuery = require('jquery');
require('bootstrap');

function SortDataChart(lesSessions){

  try{
    function compare( a, b ) {
      var stringifyDatea = a.startingDay.split('/');
      var newDatea = stringifyDatea[1] +"/" + stringifyDatea[0] + "/" + stringifyDatea[2]
      var stringifyDateb = b.startingDay.split('/');
      var newDateb = stringifyDateb[1] +"/" + stringifyDateb[0] + "/" + stringifyDateb[2]
      var datea = String(newDatea) + " " + String(a.startingTime);
      var dateb = String(newDateb) + " " + String(b.startingTime);
      if ( Date.parse(datea) < Date.parse(dateb)){
        return -1;
      }
      if (Date.parse(datea) > Date.parse(dateb)){
        return 1;
      }
      return 0;
    }
    lesSessions.sort(compare);
  }catch(error){
    console.log(error)
  }
  return lesSessions;
}
export default SortDataChart