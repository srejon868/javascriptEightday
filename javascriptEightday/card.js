const cards = document.querySelectorAll(".job-card");
 let interviewValue = 0;
 let rejectedValue = 0;
/* for-interview */
cards.forEach(function(card){
    const interviewbtn = card.querySelector(".interview-btn");

    interviewbtn.addEventListener("click",function(){

          card.dataset.status = "interview";
           interviewValue++;
            document.getElementById("interviewValue").innerText=interviewValue;
         const defultbnt = card.querySelector(".Default-btn");
         defultbnt.innerText="interview";
         
    })
});

/* for-rejected */

cards.forEach(function(card){
    const rjectdquay = card.querySelector(".rjectd-quay");

    rjectdquay.addEventListener("click",function(){
         card.dataset.status = "rejectd";
         rejectedValue++;
          document.getElementById("rejectedValue").innerText=rejectedValue;
          const defultbtn = card.querySelector(".Default-btn");
          defultbtn.innerText="rejected";
    })
})

/* three-btn */
const firstbtn = document.getElementById("first-btn");
const secendbtn = document.getElementById("secend-btn");
const thirdbtn = document.getElementById("third-btn");

document.getElementById("first-btn").addEventListener("click",function(){

    firstbtn.classList.add("btn-primary");

    secendbtn.classList.remove("btn-primary");
    thirdbtn.classList.remove("btn-primary");

cards.forEach(function(card){
    card.classList.remove("hidden");

})

 document.getElementById("totalvalue").innerText="8 jobs";

});


document.getElementById("secend-btn").addEventListener("click",function(){

    secendbtn.classList.add("btn-primary");

    firstbtn.classList.remove("btn-primary");
    thirdbtn.classList.remove("btn-primary");

    cards.forEach(function(card){
       
           if( card.dataset.status == "interview"){
               card.classList.remove("hidden");
           }
           else{
            card.classList.add("hidden");
           }
            
         
          document.getElementById("totalvalue").innerText=`${interviewValue} of 8 jobs`;
})


});

document.getElementById("third-btn").addEventListener("click",function(){
   thirdbtn.classList.add("btn-primary");

    firstbtn.classList.remove("btn-primary");
    secendbtn.classList.remove("btn-primary");

    cards.forEach(function(card){
       
           if( card.dataset.status == "rejectd"){
               card.classList.remove("hidden");
           }
           else{
            card.classList.add("hidden");
           }
            document.getElementById("totalvalue").innerText=`${rejectedValue} of 8 jobs`;
})
   
});



