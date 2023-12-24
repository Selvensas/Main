let username;
document.getElementById("myButton").onclick = function() {
    username = document.getElementById("myText").value;

    console.log(username)
    
    

    document.getElementById("myLabel").innerHTML = "Hello " + username
}



let x = "1";
console.log(typeof x)
x = Number(x);
document.getElementById("p1").innerHTML = "Task: make the button check if its the right answer. (" + x +")"

console.log(typeof x)



const PI = 3.14159
let radius
let circumference;

//radius = window.prompt("enter the radius")
radius =  Number(radius)
circumference = 2 * PI  * radius;
console.log("Final answer: "+circumference)

document.getElementById("myButton2").onclick= function(){
    radius =document.getElementById("circ").value;
    console.log(circumference);
    document.getElementById("p2").innerHTML = "The Circumference of " + radius+ " is: "+ radius*PI*2;
}