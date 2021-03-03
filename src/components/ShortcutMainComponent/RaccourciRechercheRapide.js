import '../../App.css';
import {react, useState, useEffect, useContext} from "react";
import React, { Component } from 'react'
import moment from 'moment';
import 'bootstrap/dist/css/bootstrap.css';
global.jQuery = require('jquery');
require('bootstrap');

function RechercheRapideRaccourci(props){

    const today1 = new Date(Date.now());
    const today2 = new Date(Date.now());
    const startWeek = props.startWeek;
    const startMonth = props.startMonth;
    const startSeven = props.startSeven;
    const startThirty = props.startThirty;

    return (
        <div className="RRRContent">
            <div className='ligne1' style={{marginTop:'5%'}}>
                <button name="today" className="btn btn-primary" 
                onClick={() => {props.clickHandlerToday(moment(today1).format('DD/MM/YYYY'), moment(today1).format('DD/MM/YYYY'), today1,  today2)}}>
                    Aujourd'hui
                </button>
                <button name="thisWeek" className="btn btn-primary"
                onClick={() => {props.clickHandlerWeek(moment(startWeek).format('DD/MM/YYYY'), moment(today1).format('DD/MM/YYYY'), startWeek,  today1)}}>
                    Cette semaine
                </button>
                <button name="thisMonth" className="btn btn-primary"
                onClick={() => {props.clickHandlerMonth(moment(startMonth).format('DD/MM/YYYY'), moment(today1).format('DD/MM/YYYY'), startMonth,  today1)}}>
                    Ce mois-ci
                </button>
            </div>
            <div className='ligne2' style={{marginBottom:'5%'}}>
                <button name="last7Days" className="btn btn-primary"
                onClick={() => {props.clickHandlerSevenDays(moment(startSeven).format('DD/MM/YYYY'), moment(today1).format('DD/MM/YYYY'), startSeven,  today1)}}>                                
                    7 derniers jours
                </button>
                <button name="last30Days" className="btn btn-primary"
                onClick={() => {props.clickHandlerSevenDays(moment(startThirty).format('DD/MM/YYYY'), moment(today1).format('DD/MM/YYYY'), startThirty,  today1)}}>
                    30 derniers jours
                </button>
            </div>
        </div>
    );
}

export default RechercheRapideRaccourci;