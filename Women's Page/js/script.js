var buttons= document.getElementsByClassName('carousel-button');
var images1 = document.getElementsByClassName('slidesone');
var images2 = document.getElementsByClassName('slidestwo');
console.log(buttons);
console.log(images1);
var counter1=0;
var counter2=0;
buttons[1].addEventListener("click",function(){
    if(counter1>=0 && counter1<=3){
        images1[counter1].setAttribute("style","opacity:0;");
        images1[counter1 + 1].setAttribute("style","opacity:1;");
        counter1++;
    }
})
buttons[0].addEventListener("click",function(){
    if(counter1>=1 && counter1<=4){
        images1[counter1].setAttribute("style","opacity:0;");
        images1[counter1-1].setAttribute("style","opacity:1;");
        counter1--;
    }
})
buttons[3].addEventListener("click",function(){
    if(counter2>=0 && counter2<=1){
        images2[counter2].setAttribute("style","opacity:0;");
        images2[counter2 + 1].setAttribute("style","opacity:1;");
        counter2++;
    }
})
buttons[2].addEventListener("click",function(){
    if(counter2>=1 && counter1<=2){
        images2[counter2].setAttribute("style","opacity:0;");
        images2[counter2-1].setAttribute("style","opacity:1;");
        counter2--;
    }
})