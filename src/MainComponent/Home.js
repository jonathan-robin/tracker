import '../App.css';
import React,{useState, useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import Calendars from './../MainComponent/Calendars';
import RechercheRapide from './RechercheRapide';
import RechercheDomaine from './RechercheDomaine';
import Results from "./Results";
import moment from 'moment';
import GetDataRechercheDomaine from '../components/GetDataRechercheDomaine';
global.jQuery = require('jquery');
require('bootstrap');

function Home(props){
    const jeux = props.jeux;
    const matieres = props.matieres; 
    const projets = props.projets;
    const langages = props.langages;
    const jeux_sessions = props.jeux_sessions;
    const [sJeux, setSJeux] = useState(jeux_sessions);
    const matiere_sessions = props.matiere_sessions; 
    const [sMatiere, setSMatiere] = useState(matiere_sessions);
    const projet_sessions = props.projet_sessions;
    const [sProjet, setSProjet] = useState(projet_sessions);
    const langage_sessions = props.langage_sessions;
    const [sLangage, setSLangage] = useState(langage_sessions);
    const pause = props.pause
    const [isCalendar, setIsCalendar] = useState(true); 
    const [startCalendar, setStartCalendar] = useState(); 
    const [endCalendar, setEndCalendar] = useState();
    const [nbHours, setNbHours] = useState();
  
    function setToMonday( date ) {
        var day = date.getDay();  
        if( day !== 1 )
            date.setHours(-24 * (day - 1)); 
            return date;
    }
    function getCurrMonth(m){
        var month = m.getMonth();
        return new Date(2021, month, 1);
    }
    const [RechercheRapideC, setRechercheRapideC] = useState();
    const today = new Date(Date.now());
    const startWeek = new Date();
    setToMonday(startWeek);
    const Month = new Date();
    const startMonth = getCurrMonth(Month);
    const startSeven = new Date();
    startSeven.setDate(startSeven.getDate() - 7);
    const startThirty = new Date(); 
    startThirty.setDate(startThirty.getDate() - 30);
    const [tagDomaine, setTagDomaine] = useState('');
    
    useEffect(()=>{
        if (props.clickLogo){
            setIsCalendar(true)
        }
    })
    
    useEffect(() => {
        setTagDomaine('');
    },[props.clickLogo])

    function HandlerResetClick(){
        setTagDomaine('');
        setSJeux(jeux_sessions);
        setSLangage(langage_sessions);
        setSProjet(projet_sessions);
        setSMatiere(matiere_sessions);
        setStartCalendar('25/12/2020');
        setEndCalendar(moment(today).format('DD/MM/YYYY'));
    }
    function HandlerClickMatiere(id, dom){
        setTagDomaine(dom);
        var e = GetDataRechercheDomaine(id, matiere_sessions, null,null,null);
        setSMatiere(e);
        setSJeux([]);
        setSLangage([]);
        setSProjet([]);
        setIsCalendar(false);
        var a = Math. abs(today - new Date('December 25, 2020 15:00:00')) / 36e5; 
        var e = (a / 24) * 13; 
        setNbHours(e);
        setStartCalendar('25/12/2020');
        setEndCalendar(moment(today).format('DD/MM/YYYY'));
    }
    var HandlerClickProjet = (id, dom) => {
        setTagDomaine(dom);
        var f = GetDataRechercheDomaine(id, null, projet_sessions,null,null);
        setSProjet(f);
        setSMatiere([]);
        setSJeux([]);
        setSLangage([]);
        setIsCalendar(false);
        var a = Math. abs(today - new Date('December 25, 2020 15:00:00')) / 36e5; 
        var e = (a / 24) * 13; 
        setNbHours(e);
        setStartCalendar('25/12/2020');
        setEndCalendar(moment(today).format('DD/MM/YYYY'));
    }
    var HandlerClickLangage = (id, dom) => {
        setTagDomaine(dom);
        var g = GetDataRechercheDomaine(id, null,null,langage_sessions,null);
        setSLangage(g);
        setSMatiere([]);
        setSJeux([]);
        setSProjet([]);
        setIsCalendar(false);
        var a = Math. abs(today - new Date('December 25, 2020 15:00:00')) / 36e5; 
        var e = (a / 24) * 13; 
        setNbHours(e);
        setStartCalendar('25/12/2020');
        setEndCalendar(moment(today).format('DD/MM/YYYY'));
    }
    var HandlerClickJeux = (id, dom) => {
        setTagDomaine(dom);
        var h = GetDataRechercheDomaine(id, null,null,null,jeux_sessions);
        setSJeux(h);
        setSMatiere([]);
        setSLangage([]);
        setSProjet([]);
        setIsCalendar(false);
        var a = Math. abs(today - new Date('December 25, 2020 15:00:00')) / 36e5; 
        var e = (a / 24) * 13; 
        setNbHours(e);
        setStartCalendar('25/12/2020');
        setEndCalendar(moment(today).format('DD/MM/YYYY'));
    }
    var clickHandlerCalendar = (startOf, endOf, date1, date2) => {
        setSMatiere(props.matiere_sessions);
        setSJeux(props.jeux_sessions);
        setSLangage(props.langage_sessions);
        setSProjet(props.projet_sessions);
        setIsCalendar(false)
        setStartCalendar(startOf)
        setEndCalendar(endOf)
        date2 = new Date(date2.setHours(date2.getHours() + 23,59,59));
        var diff =(date2.getTime() - date1.getTime()) / 1000;
        diff /= (60 * 60);
        setNbHours(Math.round(diff));
        };
    var clickHandlerToday = (startOf,endOf,date1, date2) => {
        setSMatiere(props.matiere_sessions);
        setSJeux(props.jeux_sessions);
        setSLangage(props.langage_sessions);
        setSProjet(props.projet_sessions);
        setIsCalendar(false);
        setStartCalendar(startOf)
        setEndCalendar(endOf)
        date2 = new Date(date2.setHours(date2.getHours() + 23,59,59));
        var diff =(date2.getTime() - date1.getTime()) / 1000;
        diff /= (60 * 60);
        setNbHours(Math.round(diff));
        setRechercheRapideC("Aujourd'hui");
    };
    var clickHandlerWeek = (startOf,endOf,date1, date2) => {
        setSMatiere(props.matiere_sessions);
        setSJeux(props.jeux_sessions);
        setSLangage(props.langage_sessions);
        setSProjet(props.projet_sessions);
        setIsCalendar(false);
        date2 = new Date(date2.setHours(date2.getHours() + 23,59,59));
        var diff =(date2.getTime() - date1.getTime()) / 1000;
        diff /= (60 * 60);
        setNbHours(Math.round(diff));
        setStartCalendar(startOf)
        setEndCalendar(endOf)
        setRechercheRapideC("Week");
    };
    var clickHandlerMonth = (startOf,endOf,date1, date2) => {
        setSMatiere(props.matiere_sessions);
        setSJeux(props.jeux_sessions);
        setSLangage(props.langage_sessions);
        setSProjet(props.projet_sessions);
        setIsCalendar(false);
        date2 = new Date(date2.setHours(date2.getHours() + 23,59,59));
        var diff =(date2.getTime() - date1.getTime()) / 1000;
        diff /= (60 * 60);
        setNbHours(Math.round(diff));
        setStartCalendar(startOf)
        setEndCalendar(endOf)
        setRechercheRapideC("Month");
    };
    var clickHandlerSevenDays = (startOf,endOf,date1, date2) => {
        setSMatiere(props.matiere_sessions);
        setSJeux(props.jeux_sessions);
        setSLangage(props.langage_sessions);
        setSProjet(props.projet_sessions);
        setIsCalendar(false);
        date2 = new Date(date2.setHours(date2.getHours() + 23,59,59));
        var diff =(date2.getTime() - date1.getTime()) / 1000;
        diff /= (60 * 60);
        setNbHours(Math.round(diff));
        setStartCalendar(startOf)
        setEndCalendar(endOf)
        setRechercheRapideC("SevenDays");
    };
    var clickHandlerThirtyDays = (startOf,endOf,date1, date2) => {
        setSMatiere(props.matiere_sessions);
        setSJeux(props.jeux_sessions);
        setSLangage(props.langage_sessions);
        setSProjet(props.projet_sessions);
        setIsCalendar(false);
        date2 = new Date(date2.setHours(date2.getHours() + 23,59,59));
        var diff =(date2.getTime() - date1.getTime()) / 1000;
        diff /= (60 * 60);
        setNbHours(Math.round(diff));
        setStartCalendar(startOf)
        setEndCalendar(endOf)
        setRechercheRapideC("ThirtyDays");    
    };

    return (       
        <div className='Home'> {isCalendar ?
            <div>
                <div className='calendrier'>
                    <Calendars style={{  }} clickHandlerCalendar={clickHandlerCalendar} clickHandlerToday={clickHandlerToday} startWeek={startWeek} startMonth={startMonth} 
                    startSeven={startSeven} startThirty={startThirty} clickHandlerWeek={clickHandlerWeek} clickHandlerMonth={clickHandlerMonth} clickHandlerSevenDays={clickHandlerSevenDays}
                    clickHandlerThirtyDays={clickHandlerThirtyDays}/>
                </div>
                <div className='rechercheRapide' >
                    <RechercheRapide clickHandlerToday={clickHandlerToday} startWeek={startWeek} startMonth={startMonth} startSeven={startSeven} startThirty={startThirty}
                    clickHandlerWeek={clickHandlerWeek} clickHandlerMonth={clickHandlerMonth} clickHandlerSevenDays={clickHandlerSevenDays}
                    clickHandlerThirtyDays={clickHandlerThirtyDays} />   
                </div>
                <div className='rechercheDomaine'>
                    <RechercheDomaine HandlerClickMatiere={HandlerClickMatiere} startCalendar={startCalendar} HandlerClickProjet={HandlerClickProjet}
                    HandlerClickLangage={HandlerClickLangage} HandlerClickJeux={HandlerClickJeux}
                    matieres={matieres} langages={langages} projets={projets} jeux={jeux}/>          
                </div>
            </div>: 
            <div>
            <Results matieres={matieres} projets={projets} langages={langages} jeux={jeux} projet_sessions={sProjet} matiere_sessions={sMatiere} jeux_sessions={sJeux} 
            langage_sessions={sLangage} startWeek={startWeek} startMonth={startMonth} startSeven={startSeven} startThirty={startThirty} today={today} startCalendar={startCalendar} 
            endCalendar={endCalendar} pause={pause} nbHours={nbHours} clickHandlerToday={clickHandlerToday} clickHandlerWeek={clickHandlerWeek} clickHandlerMonth={clickHandlerMonth} 
            clickHandlerSevenDays={clickHandlerSevenDays} clickHandlerThirtyDays={clickHandlerThirtyDays} HandlerClickMatiere={HandlerClickMatiere} HandlerClickProjet={HandlerClickProjet} 
            HandlerClickLangage={HandlerClickLangage} HandlerClickJeux={HandlerClickJeux} clickHandlerCalendar={clickHandlerCalendar} tagDomaine={tagDomaine} HandlerResetClick={HandlerResetClick}/>
            </div>}
        </div>
    )
}
export default Home;