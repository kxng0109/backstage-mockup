let container = document.querySelector('.container');
let issue4 = document.querySelector('.issue4');
let issue5 = document.querySelector('.issue5');
let issue3 = document.querySelector('.issue3');
let issue2 = document.querySelector('.issue2');
let issue1 = document.querySelector('.issue1');
let trying5 = document.querySelector('#issue5');
let trying4 = document.querySelector('#issue4');
let trying3 = document.querySelector('#issue3');
let trying2 = document.querySelector('#issue2');
let trying1 = document.querySelector('#issue1');

var deviceHeight;
var totalScreenHeight;

window.onload = ()=>{
  deviceHeight = screen.height;
  totalScreenHeight = deviceHeight * 4;
}

window.onresize = ()=>{
  deviceHeight = screen.height;
  totalScreenHeight = deviceHeight * 4;
}

let calc = (percent)=>{
  let pixels = (percent / 100) * totalScreenHeight;
  return pixels;
}

//To detect fullscreeen or not
// window.addEventListener('load', function(){
//   if(screen.width === window.innerWidth){
//   	console.log('fullscreen')
//   }
// });

window.addEventListener('load', () =>{
  if (screen.width <= 990 || screen.height <= 650) {
    smallerScreen();
  } else{
    bigScreen();
  }
})

window.addEventListener('resize', () =>{
  if (screen.width <= 990 || screen.height <= 650) {
    smallerScreen();
  } else{
    bigScreen();
  }
})

let fontweightadjust = () =>{  
    issue4.style.fontWeight = '400';
    issue3.style.fontWeight = '400';
    issue2.style.fontWeight = '400';
    issue1.style.fontWeight = '400';
}

let smallerScreen = () =>{
  container.onscroll = () =>{
    if (container.scrollTop >= calc(87.5)) {//2667
      container.style.background = "#e30512";
    } else if (container.scrollTop >= calc(62.5)) {//1950
      container.style.background = "#1d3fbb";
    } else if (container.scrollTop >= calc(37.5)) {    
      container.style.background = "#ffbe00";
    } else if(container.scrollTop >= calc(12.5)) {//400
      container.style.background = "#ff651a";
    } else {
      container.style.background = "#00c1b5";
    }
  }
}

let bigScreen = () => {
  container.onscroll = () =>{

    if (container.scrollTop >= calc(87.5)) {//3239
      container.style.background = "#e30512";
      fontweightadjust();
      issue1.style.fontWeight = '600';
    } else if (container.scrollTop >= calc(62.5)) {// 2326
      container.style.background = "#1d3fbb";
      fontweightadjust();
      issue2.style.fontWeight = '600';    
    } else if (container.scrollTop >= calc(37.5)) {//1413
      container.style.background = "#ffbe00";
      fontweightadjust();
      issue3.style.fontWeight = '600';
    } else if(container.scrollTop >= calc(12.5)) {//500 456.5
      container.style.background = "#ff651a";
      fontweightadjust();
      issue4.style.fontWeight = '600';
    } else {
      container.style.background = "#00c1b5";
      fontweightadjust();
    }
  }
}