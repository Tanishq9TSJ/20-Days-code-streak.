let result = document.getElementById("result");
let btn = document.getElementById("check");

btn.addEventListener("click", () => {
    let d1 = document.getElementById("d-1").value;
    let d2 = document.getElementById("d-2").value;
    
    if(d1.length == 0 || d2.length == 0) {
        result.innerHTML = "<span>Please enter valid dates</span>"
    }
    else{
        if(d1>d2){
            result.innerHTML = "Date 1 is <b>greater</b>";
        }
        else if(d2>d1){
            result.innerHTML = "Date 2 is <b>greater</b>";
        }
        else if(d1==d2){
            result.innerHTML = "Both the dates are <b>equal</b>";
        }
    }
})