let btn = document.querySelectorAll(".boxes");
let div=document.querySelector(".div");
let div2=document.querySelector(".show");
let btn2=document.querySelector("#btn2"); //start again
let btn3=document.querySelector("#reset"); //reset
let para=document.querySelector("#para")
let value=true;
let check=true;
let count=0;




btn.forEach((element) => {

  element.addEventListener("click", () => {
    
  
    console.log("button");
    if(value){
        element.innerText="O";
        element.style.color="#6497b1";
        value=false; 
        element.disabled=true;
    }
   
 
    else{
        element.innerText="X";
        element.style.color=" #b3cde0";
        value=true; 
        element.disabled=true;
    }

    checkpatterns();
  }

  
);

});

const arr=[
   [0,1,2],
   [3,4,5],
   [6,7,8],
   [0,3,6],
   [1,4,7],
   [2,5,8],
   [0,4,8],
   [2,4,6]
];

const  Enable= () => {
    for(let box of btn){
        box.disabled=false;
        box.innerText="";
}
div.classList.add("hide");
count=0;
}

const  Disable= () => {
    for(let box of btn){
        box.disabled=true;
        box.innerText="";
}
count=0;
}

let showWinner=(winner)=>{

    para.innerHTML=`<i>Congratulations! Winner is ${winner}</i>`;
    div.classList.remove("hide");
    Disable();
}
let NoWinner=()=>{

    para.innerText=`OOPS! There is no Winner`;
    div.classList.remove("hide");
    Disable();
}





let checkpatterns= () => {
    for(let p of arr){
        let p1=btn[p[0]].innerText;
        let p2=btn[p[1]].innerText;
        let p3=btn[p[2]].innerText;


        if(p1!="" && p2!="" && p3!=""){
            if(p1===p2 && p2===p3){
               
                console.log("winner");
            showWinner(p1);
            }
        }
       
     }
     
++count;
console.log(count);
if(count==9){
    NoWinner();
}
}
   
btn2.addEventListener("click",Enable);
btn3.addEventListener("click",Enable);


