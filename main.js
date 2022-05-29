const burger = document.querySelector('#burger');
const menu = document.querySelector('#menu');

burger.addEventListener('click',()=> {
  if(menu.classList.contains('hidden')){
    menu.classList.remove('hidden');
  }else{
    menu.classList.add('hidden');
  }
})

// const my_arr= ["june","july","August","September"];
// my_arr.prepend(my_arr[my_arr.length-1]);
// console.log(my_arr);


var sliderMain= document.getElementById('slider-main')
var item= sliderMain.getElementsByName('item');
  
 
  function loadImage() {
    for(b=0; b<item.length; b++){
      if(b>2){
        item[b].classList.add('hidden');
      }
    }
  }
  

  // function loadImage(){
  //   var i = 0;
  //   {
  //     if(b>2){
  //       item[b].classList.add('hidden');
  //     }
  //   }
  // }
