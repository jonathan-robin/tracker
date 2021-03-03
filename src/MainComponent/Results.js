import '../App.css';
import React, {useState, useEffect, useReducer} from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap';
import 'bootstrap/js/dist/dropdown';
import getLesSessions from '../components/getLesSessions';
import RegrouperLineComponent from '../components/Line/RegrouperLineComponent';
import CalculBulles from '../components/Bubbles/CalculBulles';
import AfficheBulles from '../components/Bubbles/AfficheBulles';
import CalculTaillesBullesRegroupes from '../components/Bubbles/CalculTaillesBullesRegroupes'
import RegrouperChartComponent from '../components/Charts/RegrouperChartComponent';
import ChartComponent from '../components/Charts/ChartComponent';
import GetDataRegroupement from '../components/Charts/ChartFunctions/GetDataRegroupement';
import GetLesDates from '../components/Charts/ChartFunctions/GetLesDates';
import CalculDataChart from '../components/Charts/ChartFunctions/CalculDataChart';
import PieComponent from '../components/Pie/PieComponent';
import PieRegroupeComponent from '../components/Pie/PieRegroupeComponent';
import getLines from '../components/Line/LineFunction/getLines';
import CalculBullesRegroupes from '../components/Bubbles/CalculBullesRegroupes.js';
import ConvertirDates from '../components/ConvertirDates';
import Chart1 from '../resources/chart1.png'
import Boutons from '../resources/buttons.svg';
import search from '../resources/web-search-engine.svg';
import calendarsvg from '../resources/calendar.svg';
import Merging from '../resources/merging.png'
import Delete from '../resources/remove.svg';
import RechercheRapideRaccourci from '../components/ShortcutMainComponent/RaccourciRechercheRapide';
import RechercheDomaineRaccourci from '../components/ShortcutMainComponent/RaccourciRechercheDomaine';
import RaccourciCalendar from '../components/ShortcutMainComponent/RaccourciCalendar';
global.jQuery = require('jquery');
require('bootstrap');

function Results(props){
    const initialState = {
        lesDomaines:{jeux:props.jeux, projets:props.projets, matieres:props.matieres,langages: props.langages},
        lesSessions:{matiere_sessions: props.matiere_sessions, projet_sessions:props.projet_sessions, langage_sessions: props.langage_sessions, jeux_sessions: props.jeux_sessions}
    }
    
    function reducer(state, action){
        switch(action.type){
            case 'matiere':
                return {lesSessions : state.lesSessions = {matiere_sessions:props.matiere_sessions}, 
                        lesDomaines : state.lesDomaines = {jeux:props.jeux, projets:props.projets, matieres:props.matieres,langages: props.langages}};
            case 'projet':
                return {lesSessions : state.lesSessions = {projet_sessions:props.projet_sessions},
                        lesDomaines : state.lesDomaines = {jeux:props.jeux, projets:props.projets, matieres:props.matieres,langages: props.langages}};
            case 'jeux':
                return {lesSessions : state.lesSessions = {jeux_sessions:props.jeux_sessions},
                        lesDomaines : state.lesDomaines = {jeux:props.jeux, projets:props.projets, matieres:props.matieres,langages: props.langages}};
            case 'langage' :
                return {lesSessions : state.lesSessions = {langage_sessions:props.langage_sessions},
                        lesDomaines : state.lesDomaines = {jeux:props.jeux, projets:props.projets, matieres:props.matieres,langages: props.langages}};
            case 'all' : 
                return {lesSessions : state.lesSessions = {matiere_sessions: props.matiere_sessions, projet_sessions:props.projet_sessions, langage_sessions: props.langage_sessions, jeux_sessions: props.jeux_sessions},
                        lesDomaines : state.lesDomaines = {jeux:props.jeux, projets:props.projets, matieres:props.matieres,langages: props.langages}};
            default:
                throw new Error();
        }
    }

    useEffect(()=> {
        RenderDate();
    },[props.startCalendar,props.endCalendar, props.tagDomaine, props.matiere_sessions, props.jeux_sessions,  props.langage_sessions, props.projet_sessions]);

    const [state, dispatch] = useReducer(reducer, initialState);
    const [nbHours, setNbHours] = useState(props.nbHours);
    const [startEnd, setStartEnd] = useState(ConvertirDates(props.startCalendar, props.endCalendar));
    const [isRegroupe, setIsRegroupe] = useState(false);
    const [affichage, setAffichage] = useState('Bulles');
    const [otherAffichage, setOtherAffichage] = useState(['Chart', 'Line', 'Pie', 'Bulles']);
    const [BullesRegroupes, SetBullesRegroupes]= useState([]);
 
    const handlerClickRegrouperResultats = () => {
        setIsRegroupe(!isRegroupe);
        var TailleBullesRegroupes = (CalculTaillesBullesRegroupes(calculBulles));
        var BullesRegroupes = CalculBullesRegroupes(TailleBullesRegroupes);
        SetBullesRegroupes(BullesRegroupes);
    }

    function RenderDate(){
        setNbHours(props.nbHours);
        setStartEnd(ConvertirDates(props.startCalendar, props.endCalendar));
        setIsRegroupe(false);
    }
    
    var lesSessionsCalculees = getLesSessions(state.lesSessions, startEnd[1], startEnd[0], state.lesDomaines, nbHours);
    var calculBulles = CalculBulles(lesSessionsCalculees, state.lesDomaines, nbHours);
    var lesDates = GetLesDates(startEnd[0], startEnd[1], nbHours);
    var CalculChartPie = CalculDataChart(lesSessionsCalculees , lesDates,nbHours);
    var DataChartPieRegroupement = GetDataRegroupement(lesSessionsCalculees,nbHours);
    var LineProjet = getLines(lesSessionsCalculees, "projets", lesDates);
    var LineMatiere = getLines(lesSessionsCalculees, "matieres", lesDates);
    var LineJeux = getLines(lesSessionsCalculees, "Jeux", lesDates);
    var LineLangages = getLines(lesSessionsCalculees, "langages", lesDates);

    return (       
        <div>
            <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.11.0/umd/popper.min.js" integrity="sha384-b/U6ypiBEHpOf/4+1nzFpr53nxSS+GLCkfwBdFNTxtclqqenISfwAzpKaMNFNmj4" crossorigin="anonymous"></script>
            <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/js/bootstrap.min.js" integrity="sha384-h0AbiXch4ZDo7tp9hKZ4TsHbi047NrKGLO3SEJAg45jXxnGIfYzk4Si90RDIqNm1" crossorigin="anonymous"></script>
            <div className="divInter" style={{marginTop:'2%', marginBottom:'2%', fontFamily:"'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif", fontSize:"2vh" }}> 
                <h1 className='resultsDates'>{props.startCalendar} - {props.endCalendar}</h1>
            </div>
            <div className='raccourcis'>
                <div className='RaccourciRechercheRapide'>
                    <button onClick={() => {}} type="button" className="btn rechercheRapideButton" >
                        <img src={Boutons} alt='Recherche Rapide' style={{width:'2.5vw',height:'4vh'}}/>
                    </button>
                    <RechercheRapideRaccourci clickHandlerToday={props.clickHandlerToday} clickHandlerWeek={props.clickHandlerWeek} startWeek={props.startWeek}
                    clickHandlerMonth={props.clickHandlerMonth} startMonth={props.startMonth} clickHandlerSevenDays={props.clickHandlerSevenDays}
                    startSeven={props.startSeven} startThirty={props.startThirty}/>
                </div>
                <div className='RaccourciRechercheDomaine'>
                    <button onClick={() => { }} type="button" className="btn rechercheDomaineBouton" >
                        <img src={search} alt='Recherche par Domaine' style={{width:'2.5vw', height:'4vh'}} />
                    </button>
                    <RechercheDomaineRaccourci HandlerClickMatiere={props.HandlerClickMatiere} 
                        HandlerClickProjet={props.HandlerClickProjet} HandlerClickLangage={props.HandlerClickLangage} HandlerClickJeux={props.HandlerClickJeux}
                        matieres={props.matieres} langages={props.langages} projets={props.projets} jeux={props.jeux} 
                        reducer={(n) => dispatch({type:n})} />
                </div>
                <div className='RaccourciCalendar'>
                    <button onClick={() => { }} type="button" className="btn calendarButton" >
                        <img src={calendarsvg} alt='Recherche par Domaine' style={{width:'2.5vw', height:'4vh'}}/>
                    </button>
                    <RaccourciCalendar clickHandlerCalendar={props.clickHandlerCalendar}/>
                </div>
            </div>
            <div className="divResultsCalendar">  
                <div style={{marginLeft:'-12%', position:'sticky', top:'2vh' }}>
                    <button type="button" class="btn btn-success dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <img className='chartIcon' style={{width:'4vw',height:'4vh'}}src={Chart1} alt='Chart-icon1' onClick={() => {}}/>
                    </button>
                    <div class="dropdown-menu">
                        <a class="dropdown-item" onClick={() => {setOtherAffichage([affichage, otherAffichage[1] ,otherAffichage[2], otherAffichage[0]]);
                                                                 setAffichage(otherAffichage[0]);}}href="#">
                            {otherAffichage[0]}</a>
                        <a class="dropdown-item"  onClick={() => {setOtherAffichage([otherAffichage[0], affichage, otherAffichage[2], otherAffichage[1]]);
                                                                  setAffichage(otherAffichage[1]);}} href="#">
                            {otherAffichage[1]}</a>
                        <a class="dropdown-item" onClick={() => {setOtherAffichage([otherAffichage[0], otherAffichage[1], affichage, otherAffichage[2]]);
                                                                 setAffichage(otherAffichage[2]);}}href="#">
                            {otherAffichage[2]}</a>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item" style={{enabled:'false'}} onClick={() => {}}href="#">{otherAffichage[3]}</a>
                    </div>
                    <div style={{marginTop:'1.5%', marginLeft:'3%',}}>
                        <button onClick={() => {handlerClickRegrouperResultats();}} type="button" class="btn">
                            <img src={Merging} alt='mergin results' style={{width:'2.5vw', height:'4vh'}} />
                        </button>
                    </div>
                    {props.tagDomaine ?         
                    <div className='tags'>
                        <h1 className='titreDomaine'>{props.tagDomaine}
                            <button type="button" class="btn" onClick={() => {props.HandlerResetClick(); dispatch({type:'all'})  }}>
                                <img src={Delete} style={{width:'2.5vw', height:'4vh'}}/>
                            </button>
                        </h1>
                    </div> : null }
                </div>
                {affichage=='Chart' && !isRegroupe ? <ChartComponent CalculChartPie={CalculChartPie} lesDates={lesDates} /> : null }
                {affichage=='Chart' && isRegroupe? <RegrouperChartComponent regroupement={DataChartPieRegroupement} nbHours={nbHours}/> : null}
                {affichage == 'Pie' && !isRegroupe? <PieComponent  test={CalculChartPie} lesDates={lesDates}/> :null }
                {affichage == 'Pie' && isRegroupe? <PieRegroupeComponent regroupement={DataChartPieRegroupement} nbHours={nbHours}/> :null }
                {affichage == 'Line' ? <RegrouperLineComponent projet={LineProjet} matiere={LineMatiere} langage={LineLangages} jeux={LineJeux} lesDates={lesDates}/> :null}
                {isRegroupe && affichage == 'Bulles' ? <AfficheBulles bulles={BullesRegroupes}/> : null }
                {affichage == 'Bulles'  && !isRegroupe ? <AfficheBulles bulles={calculBulles} /> : null}
            </div>
        </div>
    )
}
export default Results;