import React, {Component, useEffect, useState} from 'react';
import {Bar, Line, Pie} from 'react-chartjs-2';

function RegrouperChartComponent(props){

    const [chartData, setChartData ]= useState({
        datasets:
            [{
                label:'Projets',
                backgroundColor:'#6897E8',
                borderColor:'#195ED6',
                hoverBackgroundColor:'#195ED6',
                hoverBorderColor:'#6897E8',
                borderWidth:2,
                hoverBorderWidth:'5',
                data:[props.regroupement.Projets/(props.nbHours/2.4)*100],
            },
            {
                label:'Matieres',
                backgroundColor:'#68E879',
                borderColor:'#23C739',
                hoverBackgroundColor:'#23C739',
                hoverBorderColor:'#68E879',
                borderWidth:2,
                hoverBorderWidth:'5',
                data:[props.regroupement.Matieres/(props.nbHours/2.4)*100]
            },
            {
                label:'Jeux',
                backgroundColor:'#D4E660',
                borderColor:'#CBE80C',
                hoverBackgroundColor:'#CBE80C',
                hoverBorderColor:'#D4E660',
                borderWidth:2,
                hoverBorderWidth:'5',
                data:[props.regroupement.Jeux/(props.nbHours/2.4)*100]
            },
            {
                label:'Langages',
                backgroundColor:'#E67260',
                borderColor:'#C73923',
                hoverBackgroundColor:'#C73923',
                hoverBorderColor:'#E67260',
                borderWidth:2,
                hoverBorderWidth:'5',
                data:[props.regroupement.Langages/(props.nbHours/2.4)*100]
            }],
    });

    function datasetKeyPovider(){
        return Math.random();
    };

    return (
        <div className="chart" style={{marginLeft:'5%', marginRight:'5%',backgroundColor:'rgba(255, 255, 255, 0.6)'}}>         
            <Bar datasetKeyProvider={datasetKeyPovider} data={chartData}
                options={{
                    scales: {
                        yAxes: [{
                            display: true,
                            ticks: {
                                suggestedMax: 100,
                                beginAtZero: true,
                            }
                        }]
                    }
                }}/>    
        </div>
    )
}

export default RegrouperChartComponent;