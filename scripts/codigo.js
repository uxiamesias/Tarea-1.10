let myImage = document.querySelector('img');

myImage.onclick = function() {
  let mySrc = myImage.getAttribute('src');
  if (mySrc === 'images/twitter-logo-3'){
    myImage.setAttribute ('src','https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-3.png');
  } else {
    myImage.setAttribute ('src', 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fes.logodownload.org%2Ftwitter-logo%2F&psig=AOvVaw0Lj7i8-ZFUQnsUtsMOZtRb&ust=1641749630858000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCIjOlo7YovUCFQAAAAAdAAAAABAD');
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
