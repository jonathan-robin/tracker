import React from 'react';
import {Bar} from 'react-chartjs-2';

const ChartComponent = (props)=> {
    var dataToReturn=[];
    props.CalculChartPie.map(element => { 
        dataToReturn.push({data: element.data, backgroundColor: element.backgroundColor, 
            line1:element.label.split(','), 
            line2: element.nom.split(','), 
            line3:element.objectif.split(','),
            line4:element.prettyduration.split(','),
        })
    })

    function datasetKeyPovider(){
        return Math.random();
    };

    return (
        <div className="chart" style={{marginLeft:'5%', marginRight:'5%',backgroundColor:'rgba(255, 255, 255, 0.6)'}}>         
            <Bar datasetKeyProvider={datasetKeyPovider} style={{color:'white'}} data={{datasets:dataToReturn,labels:props.lesDates}}
                options={{
                    tooltips:{
                        callbacks:{
                                label: function(tooltipItem, data) {
                                    let label1 = data.datasets[tooltipItem.datasetIndex].line1[tooltipItem.index];
                                    let label2 = data.datasets[tooltipItem.datasetIndex].line2[tooltipItem.index];
                                    let label3 = data.datasets[tooltipItem.datasetIndex].line3[tooltipItem.index];
                                    let label4 = data.datasets[tooltipItem.datasetIndex].line4[tooltipItem.index];
                                    return [label1, label2, label3, label4]
                                }
                        }
                    },
                    legend: {
                        display: false
                    },
                    scales: {
                        xAxes: [
                            {
                            stacked: true,
                            },
                        ],
                        yAxes: [{
                            stacked: true,
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
export default ChartComponent;