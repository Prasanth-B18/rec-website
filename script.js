// Script for navigation bar
const bar=document.getElementById("bar");
const close=document.getElementById("close");
const nav=document.getElementById("navbar");
 
if(bar){
    bar.addEventListener('click',()=>{
        nav.classList.add('active');
    })
}
if(close){
    close.addEventListener('click',()=>{
        nav.classList.remove('active');
    })
}
/* sproducts*/
var MainImg=document.getElementById("mainimg");
var smallImg=document.getElementsByClassName("small-img");
 smallImg[0].onclick=()=>{
    MainImg.src=smallImg[0].src;
 }
 smallImg[1].onclick=()=>{
    MainImg.src=smallImg[1].src;
 }
 smallImg[2].onclick=()=>{
    MainImg.src=smallImg[2].src;
 }
 smallImg[3].onclick=()=>{
    MainImg.src=smallImg[3].src;
 }
 