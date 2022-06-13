function submit(){
    var value = document.getElementById("dep");
    var dep = value.options[value.selectedIndex].value;
    var sems = document.getElementById("sem");
    var sem = sems.options[sems.selectedIndex].value;
    console.log(dep,sem);
    if(sem == 4 && dep == "CSE"){
        console.log("yes");
        window.location.href = "./html/3rdsem.html"
    }
}