import { data } from 'jquery';
import React, {Component, useEffect, useState} from 'react';
import {Bar, Line, Pie} from 'react-chartjs-2';


function RegrouperLineComponent(props){

    useEffect(() => {
        setLineChartData({labels:props.lesDates,
            datasets:
            [
                {   
                    data:props.projet.map(element => {
                        return element.element
                    }),
                    label:'Projet',
                    fill: false,
                    lineTension: 0.1,
                    backgroundColor: 'rgba(75,192,192,0.4)',
                    borderColor: '#6897E8',
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    pointBorderColor: '#195ED6',
                    pointBackgroundColor: '#6897E8',
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: '#6897E8',
                    pointHoverBorderColor: 'rgba(220,220,220,1)',
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    line1: props.projet.map(element => {
                        return element.domain + ' : ' + element.DomainName
                    }),
                    line2:props.projet.map(element => {
                        return 'Durée : ' + element.ladureePretier
                    }),
                    line3: props.projet.map(element => {
                        return 'Objectif : ' + element.objectif
                    }),
                },
                {
                    label:"Langage",
                    data:props.langage.map(element => {
                        return element.element
                    }),
                    line1: props.langage.map(element => {
                        return element.domain + ' : ' + element.DomainName
                    }),
                    line2:props.langage.map(element => {
                        return 'Durée : ' + element.ladureePretier
                    }),
                    line3: props.langage.map(element => {
                        return 'Objectif : ' + element.objectif
                    }),
                    fill: false,
                    lineTension: 0.1,
                    backgroundColor: 'rgba(75,192,192,0.4)',
                    borderColor: '#E67260',
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    pointBorderColor: '#C73923',
                    pointBackgroundColor: '#fff',
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: '#C73923',
                    pointHoverBorderColor: 'rgba(220,220,220,1)',
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    
                },
                {
                    label:"Jeux",
                    data:props.jeux.map(element => {
                        return element.element
                    }),
                    line1: props.jeux.map(element => {
                        return element.domain + ' : ' + element.DomainName
                    }),
                    line2:props.jeux.map(element => {
                        return 'Durée : ' + element.ladureePretier
                    }),
                    line3: props.jeux.map(element => {
                        return 'Objectif : ' + element.objectif
                    }),
                    fill: false,
                    lineTension: 0.1,
                    backgroundColor: 'rgba(75,192,192,0.4)',
                    borderColor: '#D4E660',
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    pointBorderColor: '#CBE80C',
                    pointBackgroundColor: '#fff',
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: '#CBE80C',
                    pointHoverBorderColor: 'rgba(220,220,220,1)',
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                },
                {
                    label:"Matiere",
                    data:props.matiere.map(element => {
                        return element.element
                    }),
                    line1: props.matiere.map(element => {
                        return element.domain + ' : ' + element.DomainName
                    }),
                    line2:props.matiere.map(element => {
                        return 'Durée : ' + element.ladureePretier
                    }),
                    line3: props.matiere.map(element => {
                        return 'Objectif : ' + element.objectif
                    }),
                    fill: false,
                    lineTension: 0.1,
                    backgroundColor: 'rgba(75,192,192,0.4)',
                    borderColor: '#68E879',
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    pointBorderColor: '#23C739',
                    pointBackgroundColor: '#fff',
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: '#23C739',
                    pointHoverBorderColor: 'rgba(220,220,220,1)',
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                },
    
            ]    })
    }, [props])

    const [LineChartData, setLineChartData] = useState();

    function datasetKeyPovider(){
        return Math.random();
    };
    
    return (
        <div className="chart" style={{marginLeft:'5%', marginRight:'5%',backgroundColor:'rgba(255, 255, 255, 0.6)'}}>         
            <Line datasetKeyProvider={datasetKeyPovider} data={LineChartData} options={{ 
                    tooltips: {
                        callbacks: {
                            label: function(tooltipItem, data) {
                                let label1 = data.datasets[tooltipItem.datasetIndex].line1[tooltipItem.index];
                                let label2 = data.datasets[tooltipItem.datasetIndex].line2[tooltipItem.index];
                                let label3 = data.datasets[tooltipItem.datasetIndex].line3[tooltipItem.index];
                                return [label1, label2, label3]
                            }
                        }
                    },
                scales: {
                    yAxes: [{
                        display: true,
                        ticks: {
                            suggestedMax: 10,
                            beginAtZero: true
                                }
                            }]
                        },
                     }}/>    
        </div>
    )
}

export default RegrouperLineComponent;