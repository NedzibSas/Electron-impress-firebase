
// window.addEventListener('load',()=>{
//     document.getElementById('mensaje').innerHTML='-'
// });
var config = {
    apiKey: "AIzaSyDMJDx75EvKjprzAhy-CbNWozAEQ-7frHo",
    authDomain: "impress-dc87f.firebaseapp.com",
    databaseURL: "https://impress-dc87f.firebaseio.com",
    storageBucket: "impress-dc87f.appspot.com"
  };
var database = firebase.database();


function enviartexto(texto ,press) {
    firebase.database().ref('texto/').set({
    imp: texto,
    });
    firebase.database().ref('control/').set({
    press: press,
    });
}