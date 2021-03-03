import '../App.css';
import {react, useState, useEffect, useContext} from "react";
import React, { Component } from 'react'; 
import Home from './Home';
import Calendar from 'react-calendar';
import Moment from 'moment';
import 'bootstrap/dist/css/bootstrap.css';
global.jQuery = require('jquery');
require('bootstrap');

function Calendars(props){
    const [date1, setDate1] = useState(new Date());
    const [date2, setDate2] = useState(new Date());

    return(
        <div>
            <h3 className='calendrierTitre'>Recherche Par Calendrier...</h3>
         <div className='CalendrierContent'>
         <div className={"myCalendar"}>
         <Calendar className="myItem" name="StartCalendar" onChange={ 
             setDate1
             }/>
             <Calendar className="myItem" name="EndCalendar" onChange={ 
                 setDate2
                 }/>
         </div>
         <div className={"myCalendar"}>
             <div className="myDatePicked">
                     {Moment(date1).format('DD/MM/YYYY')}
             </div>
             <div className="myDatePicked">
                     {Moment(date2).format('DD/MM/YYYY')}       
             </div>             
         </div>
         <button style={
             {float:"right",
             fontSize:"larger", 
             margin:"2%"}
             
         } onClick={ () => {
            props.clickHandlerCalendar(Moment(date1).format('DD/MM/YYYY'), Moment(date2).format('DD/MM/YYYY'), date1, date2)
         }
        }>CLICK ME CALENDRIER</button>
        </div>
         </div>
    );
}

export default Calendars;