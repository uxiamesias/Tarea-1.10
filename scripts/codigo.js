let myImage = document.querySelector('img');

myImage.onclick = function() {
  let mySrc = myImage.getAttribute('src');
  if (mySrc === 'http://assets.stickpng.com/images/580b57fcd9996e24bc43c53e.png'){
    myImage.setAttribute ('src', 'https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-3.png');
  } else {
    myImage.setAttribute ('src', 'http://assets.stickpng.com/images/580b57fcd9996e24bc43c53e.png');
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
