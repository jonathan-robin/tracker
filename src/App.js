import './App.css';
import Home from "./MainComponent/Home.js";
import React, {useState, useEffect, useContext} from "react";
import Logo from './resources/logo.gif'

function App(){
  const [matieres, setMatieres] = useState([]); 
  const [projets, setProjets] = useState([]);
  const [langages, setLangages] = useState([]);
  const [jeux, setJeux] = useState([]);
  const [isCalendar, setIsCalendar] = useState(true);
  const [matiere_sessions, setMatiere_sessions] = useState([]); 
  const [projet_sessions, setProjet_sessions] = useState([]);
  const [langage_sessions, setLangage_sessions] = useState([]);
  const [jeux_sessions, setJeux_sessions] = useState([]);
  const [pause, setPause] = useState([]);
  const [clickLogo, setClickLogo] = useState();

  useEffect(() => {
    fetch('http://localhost:4000/matieres')
    .then(response => response.json())
    .then(response => setMatieres(response.data))
    .catch(err => console.error(err));

    fetch('http://localhost:4000/projets')
    .then(response => response.json())
    .then(response => setProjets(response.data))
    .catch(err => console.error(err));

    fetch('http://localhost:4000/langages')
    .then(response => response.json())
    .then(response => setLangages(response.data))
    .catch(err => console.error(err));

    fetch('http://localhost:4000/jeux')
    .then(response => response.json())
    .then(response => setJeux(response.data))
    .catch(err => console.error(err));

    fetch('http://localhost:4000/matiere_sessions')
    .then(response => response.json())
    .then(response => setMatiere_sessions(response.data))
    .catch(err => console.error(err));

    fetch('http://localhost:4000/projet_sessions')
    .then(response => response.json())
    .then(response => setProjet_sessions(response.data))
    .catch(err => console.error(err));

    fetch('http://localhost:4000/langage_sessions')
    .then(response => response.json())
    .then(response => setLangage_sessions(response.data))
    .catch(err => console.error(err));

    fetch('http://localhost:4000/jeux_sessions')
    .then(response => response.json())
    .then(response => setJeux_sessions(response.data))
    .catch(err => console.error(err));

    fetch('http://localhost:4000/pause')
    .then(response => response.json())
    .then(response => setPause(response.data))
    .catch(err => console.error(err))
    }, []);

    useEffect(()=>{
      setClickLogo(false);
    })

  return (
    <div>
      <div  className={"myContainer"}>
        <img className='Logo' src={Logo} alt='Logo' onClick={() => {setClickLogo(true)}}/>
        <h1 className='titreTracker'>TRACKER</h1>
        <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.11.0/umd/popper.min.js" integrity="sha384-b/U6ypiBEHpOf/4+1nzFpr53nxSS+GLCkfwBdFNTxtclqqenISfwAzpKaMNFNmj4" crossorigin="anonymous"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/js/bootstrap.min.js" integrity="sha384-h0AbiXch4ZDo7tp9hKZ4TsHbi047NrKGLO3SEJAg45jXxnGIfYzk4Si90RDIqNm1" crossorigin="anonymous"></script>
        <Home matieres={matieres} projets={projets} langages={langages} jeux={jeux} matiere_sessions={matiere_sessions} jeux_sessions={jeux_sessions}
        langage_sessions={langage_sessions} projet_sessions={projet_sessions} pause={pause} isCalendar={isCalendar} clickLogo={clickLogo}/>
      </div>
    </div>
  );
}

export default App;

