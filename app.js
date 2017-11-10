// var myImage = document.querySelector("img");
// myImage.onclick = function(){
//     var mysrc = myImage.getAttribute('src');
//     if(mysrc === 'image/9KH43Zz.png'){
//         myImage.setAttribute('src','image/Chrysanthemum.jpg');
//     } else {
//         myImage.setAttribute('src','image/9KH43Zz.png');
//     }
// }
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');
function setUserName(){
    var name = prompt('please enter your name');
    // localStorage.setItem('name',name);
    myHeading.textContent = 'hello ' + name;
}

myButton.onclick = function () {
    setUserName();
}