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
const ftnd = document.getElementById('ftnd');
const bnd = document.getElementById('bnd');
const contex = document.getElementsByClassName('contexp');




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
    ftnd.style.color = "white";
    bnd.style.color = "white";
    contex[0].style.color = "white";
    contex[1].style.color = "white";
    contex[2].style.color = "white";
    contex[3].style.color = "white";
    contex[4].style.color = "white";
    contex[5].style.color = "white";
    contex[6].style.color = "white";
    contex[7].style.color = "white";
    contex[8].style.color = "white";
    contex[9].style.color = "white";
    contex[10].style.color = "white";
    contex[11].style.color = "white";
    
    

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
    ftnd.style.color = "black";
    bnd.style.color = "black";
    contex[0].style.color = "black";
    contex[1].style.color = "black";
    contex[2].style.color = "black";
    contex[3].style.color = "black";
    contex[4].style.color = "black";
    contex[5].style.color = "black";
    contex[6].style.color = "black";
    contex[7].style.color = "black";
    contex[8].style.color = "black";
    contex[9].style.color = "black";
    contex[10].style.color = "black";
    contex[11].style.color = "black";



}