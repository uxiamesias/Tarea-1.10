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

let myImage = document.querySelector('img');

myImage.onclick = function() {
  let mySrc = myImage.getAttribute('src');
  if (mySrc === 'images/twitter-logo-3'){
    myImage.setAttribute ('src','images/twitter-logo-3');
  } else {
    myImage.setAttribute ('src', 'images/twitter');
  }
}
