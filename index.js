var dayname = ["sunday","monday","tuesday","wednesday","thursday","friday","saturday"]

function display(){
    var refresh=1000; 
    mytime=setTimeout('now()',refresh)
}
function now(){
    var today = new Date();
    var x=String(today.getDay());
    x=dayname[x]
    var date = String(today.getDate());
    var year = String(today.getFullYear());
    var month = String(today.getMonth())
    var hours = String(today.getHours())
    var minutes = String(today.getMinutes())
    var seconds = String(today.getSeconds())
    var time=hours+" : "+minutes+" : "+seconds
    var dateyear=year+" - "+month+" - "+date
    document.getElementById("h").innerHTML =(time);
    document.getElementById("h1").innerHTML =(x+"  "+dateyear);
    display()
}


