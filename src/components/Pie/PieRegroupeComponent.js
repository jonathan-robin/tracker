import React, {useState} from 'react';
import {Pie} from 'react-chartjs-2';

function PieRegroupeComponent(props){

    console.log(props)
    const [PieChartData, setPieChartData] = useState({
        labels:['Projets','Matieres', 'Jeux','Langages'],
        datasets:
        [{
            backgroundColor:['#6897E8','#68E879','#D4E660','#E67260'],
            borderColor:['#195ED6','#23C739','#CBE80C','#E67260'],
            hoverBackgroundColor:['#195ED6','#23C739','#D4E660','#E67260'],
            hoverBorderColor:['#6897E8','#68E879','#CBE80C','#C73923'],
            borderWidth:2,
            hoverBorderWidth:5,
            data:[[props.regroupement.Projets/(props.nbHours/2.4)*100],[props.regroupement.Matieres/(props.nbHours/2.4)*100], [props.regroupement.Jeux/(props.nbHours/2.4)*100], [props.regroupement.Langages/(props.nbHours/2.4)*100]]
        }]
    });

    function datasetKeyPovider(){
        return Math.random();
    };

    return (
        <div className="chart" style={{marginLeft:'5%', marginRight:'5%',backgroundColor:'rgba(255, 255, 255, 0.6)'}}>         
            <Pie datasetKeyProvider={datasetKeyPovider}data={PieChartData}/>                
        </div>
    )
}

export default PieRegroupeComponent;