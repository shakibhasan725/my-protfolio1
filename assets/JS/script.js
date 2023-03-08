const night = document.getElementById('night');
const day = document.getElementById('day');
const body = document.querySelector('body');
const profiletxt = document.getElementById('profiletxt');
const profiletxt1 = document.getElementById('profiletxt1');

const consvg = document.getElementById('consvg');
const consvg1 = document.getElementById('consvg1');
const consvg2 = document.getElementById('consvg2');
const consvg3 = document.getElementById('consvg3');
const expid = document.getElementById('expid');



night.onclick = () => {
    night.style.display = 'none';
    day.style.display = 'block';
    day.style.fill = 'white';
    body.style.background='linear-gradient(rgba(4, 4, 4, 0.897) ,rgba(12, 4, 29, 0.811), rgba(11, 2, 13, 0.975))';
    profiletxt.style.color = 'white';
    profiletxt1.style.color = 'white';
    consvg.style.fill = "white";
    consvg1.style.fill = "white";
    consvg2.style.fill = "white";
    consvg3.style.fill = "white";
    expid.style.color = "white";
}
day.onclick = () => {
    night.style.display = 'block';
    day.style.display = 'none';
    body.style.background = 'rgba(214, 213, 213, 0.678)';
    profiletxt.style.color = 'black';
    profiletxt1.style.color = 'black';
    consvg.style.fill = "black"
    consvg1.style.fill = "black"
    consvg2.style.fill = "black"
    consvg3.style.fill = "black"
    expid.style.color = "black";



}