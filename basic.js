/*
Form Number --> Must start at 100
Date --> By default should be today's date
Mobile Number --> Must be unique
Email --> Can be duplicate
All Fields are required
None must be empty
*/
let arr=100
let info=document.getElementById("main-info");
let mainContainer=document.getElementById("MainContainer");
let submitBtn=document.getElementById("submit");
let resetBtn=document.getElementById("reset");
function addInfo(){
    arr+=1;
    let formNo=document.createElement("p");
    let paraInfo=document.createElement("p");
    let personInfo=document.createElement("p");
    formNo.textContent="form No.:"+arr;
    paraInfo.textContent="Your Form Has Been Submitted";
    personInfo.textContent=
    info.appendChild(paraInfo);
    info.appendChild(formNo);

}
submitBtn.onclick=function(){
    addInfo();
    
}
