let timeStamp = document.getElementById('timestamp');
let date = Date.now();
timeStamp.innerHTML = date;

let localDate = document.getElementById('localDate');
let aujourdhui = new Date();
localDate.innerHTML = aujourdhui.toLocaleDateString();

let localTime = document.getElementById('localTime');
localTime.innerHTML = aujourdhui.toLocaleTimeString();

let thisDay = new Date();
let oneDay = new Date();
oneDay.setDate(thisDay.getDate() + 2);
oneDay.setHours(thisDay.getHours() + 6);



if(oneDay > thisDay){
    let time = oneDay.getTime() - thisDay.getTime();
    let dayTime = Math.floor(time / 1000 / 60 / 60 /24);
    let hourTime = Math.floor((time - (dayTime * 1000 * 60 *60 *24))/1000 / 60 /60);
    let secTime = Math.floor(time - (dayTime * 1000 * 60 * 60 * 24) - (hourTime * 1000 * 60 * 60));

    let newDate = document.createElement("div");
    newDate.innerHTML = "Le resultat est " + dayTime + " jour(s) " + hourTime + " heure(s) et " + secTime + " seconde(s)";
    document.body.appendChild(newDate);
}