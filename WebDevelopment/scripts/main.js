// myHeading.textContent = 'Hello world!';

// let count = 0;
// document.querySelector("html").addEventListener("click", function(){
    //     if (count>= 3){
//         alert("Stop clicking!");
//         alert("Stop clicking!!");
//         alert("Stop clicking!!!");
//     } else {
//     alert("you just click");
//     count += 1
//     }
// })



const myImage = document.querySelector('img');
myImage.onclick = function() {
    const mySrc = myImage.getAttribute('src');
  if (mySrc === 'imgs/logo.png') {
    myImage.setAttribute('src','imgs/logo2.jpg');
  } else {
      myImage.setAttribute('src','imgs/logo.png');
    }
}



let btn = document.querySelector("button");
let myHeading = document.querySelector('h1');

function setUserName() {
    const myName = prompt('Please enter your name.');
    if (!myName) {
        setUserName();
    } else {
      localStorage.setItem('name', myName);
      myHeading.textContent = `Mozilla is cool, ${myName}`;
    }
  }
  
  
if ( !localStorage.getItem("name")) {
    setUserName();
} else {
    const storedName = localStorage.getItem('name');
    myHeading.textContent = `Mozilla is cool, ${storedName}`;
}

btn.onclick = () =>  {
    setUserName();
}