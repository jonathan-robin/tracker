//Import lbirairies
const express = require("express");
const cors = require('cors');
const mysql = require('mysql');
const app = express();
app.use(cors());

//Connection DB
const connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'tracker'
});
connection.connect(err=>{
    if(err){
        return err;
    }
});
app.listen(4000, () => {
    console.log('Listening on port 4000')
})

//Déclarations variables
const SELECT_ALL_MATIERES = 'select idMatiere, tagMatiere, nomMatiere FROM matiere';
const SELECT_LANGAGES = "SELECT idlangage, nomLangage FROM Langage";
const SELECT_PROJETS = "SELECT idProjet, nomProjet, langageProjet, descriptionProjet, dateCreationProjet from Projet";
const SELECT_JEUX = "SELECT idJeux, nomJeux from Jeux";
const SELECT_ALL_MATIERE_SESSIONS = "select session, startingDay, startingTime, endingTime, duration, idMatiere from matiere_session";
const SELECT_ALL_LANGAGE_SESSIONS = "select session, startingDay, startingTime, endingTime, duration, source, probleme, description, idLangage from langage_session";
const SELECT_ALL_JEUX_SESSIONS = "select session, startingDay, startingTime, endingTime, duration, idJeux from jeux_session";
const SELECT_ALL_PROJET_SESSIONS = "select session, startingDay, startingTime, endingTime, duration, objectifs, commentaires, idProjet from projet_session";
const SELECT_ALL_PAUSE = "select session, startingTime, endingTime, duration,drapeau, idDrapeau from pause";

//Déclarations des routes
app.get('/matieres', (req, res) => {
    connection.query(SELECT_ALL_MATIERES, (err ,results)=>{
        if(err){
            return res.send
        }
        else{
            return res.json({
                data:results
            })
        }
    });  
});
app.get('/langages', (req, res) => {
    connection.query(SELECT_LANGAGES, (err ,results)=>{
        if(err){
            return res.send
        }
        else{
            return res.json({
                data:results
            })
        }
    });  
});
app.get('/projets', (req, res) => {
    connection.query(SELECT_PROJETS, (err ,results)=>{
        if(err){
            return res.send
        }
        else{
            return res.json({
                data:results
            })
        }
    });  
});

app.get('/jeux', (req, res) => {
    connection.query(SELECT_JEUX, (err ,results)=>{
        if(err){
            return res.send
        }
        else{
            return res.json({
                data:results
            })
        }
    });  
});
app.get('/matiere_sessions', (req, res) => {
    connection.query(SELECT_ALL_MATIERE_SESSIONS, (err ,results)=>{
        if(err){
            return res.send
        }
        else{
            return res.json({
                data:results
            })
        }
    });  
});
app.get('/langage_sessions', (req, res) => {
    connection.query(SELECT_ALL_LANGAGE_SESSIONS, (err ,results)=>{
        if(err){
            return res.send
        }
        else{
            return res.json({
                data:results
            })
        }
    });  
});
app.get('/jeux_sessions', (req, res) => {
    connection.query(SELECT_ALL_JEUX_SESSIONS, (err ,results)=>{
        if(err){
            return res.send
        }
        else{
            return res.json({
                data:results
            })
        }
    });  
});
app.get('/projet_sessions', (req, res) => {
    connection.query(SELECT_ALL_PROJET_SESSIONS
        , (err ,results)=>{
        if(err){
            return res.send
        }
        else{
            return res.json({
                data:results
            })
        }
    });  
});
app.get('/pause', (req, res) => {
    connection.query(SELECT_ALL_PAUSE
        , (err ,results)=>{
        if(err){
            return res.send
        }
        else{
            return res.json({
                data:results
            })
        }
    });  
});