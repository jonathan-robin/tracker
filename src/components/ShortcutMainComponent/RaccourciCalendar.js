import '../../App.css';
import {react, useState} from "react";
import React, { Component } from 'react'; 
import Calendar from 'react-calendar';
import Moment from 'moment';
import 'bootstrap/dist/css/bootstrap.css';
global.jQuery = require('jquery');
require('bootstrap');

function RaccourciCalendar(props){

    const [date1, setDate1] = useState(new Date());
    const [date2, setDate2] = useState(new Date());

    return (
        <div className='RaccourciCalendarContent'>
            <div style={{width:'17vw',float:'left', marginLeft:'2vw',marginRight:'2vw',marginTop:'2vh'}}>
                <Calendar className="calendarRaccourci1" name="calendarRaccourci1" onChange={setDate1}/>
            </div>
            <div style={{width:'35vw',marginTop:'2vh' }}>
                <Calendar className="calendarRaccourci2" name="calendarRaccourci2" onChange={setDate2}/>
            </div>
            <button style={{float:"right",fontSize:"larger",marginRight:'6%',marginTop:'2%'}} 
            onClick={ () => {props.clickHandlerCalendar(Moment(date1).format('DD/MM/YYYY'), Moment(date2).format('DD/MM/YYYY'), date1, date2)}}>
            Lancer la recherche...
            </button>
        </div>
    );
}

export default RaccourciCalendar;