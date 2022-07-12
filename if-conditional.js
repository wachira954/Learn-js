/*create a program for grading high school result
80 - 100 = A 
60 - 79 =   B
40 = 59 = C
25 = 39 = D*/

// console.log("what did you score?") ;
const score = Number(prompt("what did you score"))
document.getElementById("score").innerHTML = score;

if(score >= 80 && score <=100){
    document.getElementById("grade").innerHTML = "A";
}
else if(score >=60 && score <= 79){
    document.getElementById("grade").innerHTML = "B"
}
else if(score>=40 && score<=59){
    document.getElementById("grade").innerHTML = "C"
}
else if(score>= 25 && score<=39){
    document.getElementById("grade").innerHTML = "D+"
}

else if(score>= 0 && score<=24){
    document.getElementById("grade").innerHTML = "fail"
}

else{
    document.getElementById("grade").innerHTML ="invalid input";
}
