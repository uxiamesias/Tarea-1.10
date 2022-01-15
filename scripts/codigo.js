let myImage = document.getElementById('twitter-logo-3');

myImage.onclick = function () {
  let mySrc = myImage.getAttribute('src');
  if (mySrc === 'https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-3.png'){
    myImage.setAttribute ('src', 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fes.m.wikipedia.org%2Fwiki%2FArchivo%3ATwitter_logo.svg&psig=AOvVaw0Lj7i8-ZFUQnsUtsMOZtRb&ust=1641749630858000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCIjOlo7YovUCFQAAAAAdAAAAABAd');
  } else {
    myImage.setAttribute ('src', 'https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-3.png');
  }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName(){
  let myName = prompt('Introduzca su nombre');
  if(!myName || myName === null) {
    setUserName();
  } else{
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Twitter es tu red social, ' + myName;
  }
}
if(! localStorage.getItem('name')){
  setUserName()
} else{
  let storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'Twitter es tu red social, ' + storedName;
}
myButton.onclick = function(){
  setUserName();
}

