
document.getElementById('but').addEventListener("click",
function quadratic() {
    let a = document.getElementById("a").value;
    let b = document.getElementById("b").value;
    let c = document.getElementById('c').value;
    let result = document.getElementById('result');


    let D = b * b - 4 * a * c;
    let x1;
    let x2;

    if(D > 0){
        x1  = (-b + Math.sqrt(D)) / (2*a);
        x2  = (-b - Math.sqrt(D)) / (2*a)
        console.log(Math.floor(x1),Math.floor(x2),D);
        result.innerText = Math.floor(x1) + " " + Math.floor(x2) + " " + D; 
    }else if(D == 0){
        x1 = x2 = -b /(2*a);
        console.log(x1, x2);
        result.innerText = x1 + " " + x2;
    }else if(D < 0){ 
        console.log("Null");
        result.innerText = "Null";
    }

});
