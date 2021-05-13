import React from 'react';
import './styles/styles.css'

function Dashboard() {
    

    const url = "https://icanhazdadjoke.com/slack";
    
    function acudit (){
    fetch(url)
    .then(response => response.json())
    .then(data => document.getElementsByClassName("acudits")[0].textContent = data.attachments[0].fallback);
        
        }
    const weatherUrl = "https://api.tutiempo.net/json/?lan=es&apid=XCT4q4zaqq4dWgP&lid=7183";
    function weather(){
        console.log("entro");
        fetch(weatherUrl)
        .then(response => response.json())
        .then(function(data) {
        //Preparem per a canviar el format de data
            let dia = data.day1.date;
            let novaData = dia;
            console.log("Nova data " +
             novaData)
            //Escrivim el resultat a la pàgina
            document.getElementById("meteo").textContent = "Hoy " + novaData + " en " + data.locality.name + ": " + data.day1.text;
        }).catch(function(error) {
            console.log('Request failed', error);
    })
    }
    weather();
    
    
    return (
        <>
        <h1>Acudits</h1>
        <div className="acudits"></div>
        <div class="wrapper">
            <button type="button" onClick={acudit}>Següent</button>
        </div>
        
        <div id="meteo"></div>
        </>
    )
}

export default Dashboard;