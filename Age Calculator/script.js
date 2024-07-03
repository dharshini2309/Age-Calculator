document.getElementById("submit").addEventListener("click",function(){

    var dob =document.getElementById("dob").value;

    const update=function(){
   let  day=new Date(dob);
   let time=day.getTime();
  let today=new Date();
   let  timenow=today.getTime();
   let value=timenow-time;
   let sec=Math.floor(value/1000);
   let min=Math.floor(value/(1000*60));
   let hour=Math.floor(value/(1000*60*60));
   let days=Math.floor(value/(1000*60*60*24));
 let week=Math.floor(value/(1000*60*60*24*7));
 let month=Math.floor(value/(1000*60*60*24*30.4375));
 let year=Math.floor(value/(1000*60*60*24*365.25));
    

insert("#year",year+"-years");
insert("#month",month+"-months");
insert("#week",week+"-weeks");
insert("#day",days+"-days");
insert("#hour",hour+"-hours");
insert("#min",min+"-mins");
insert("#sec",sec+"-secs");

};

function insert(x,y){
    document.querySelector(x).innerHTML=y;
}
update();
});
setInterval(update,1000);