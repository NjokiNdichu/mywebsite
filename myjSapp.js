let x=14;
if (x>10 && x<20){
    if(x>15){
        alert("true")
        console.log("Value when true")
    }else{
        console.log("not true")
    }
    
}
else{
    alert("false")
    console.log("Value when false")
}

let marks=prompt("Enter marks")
alert(marks);
let grade=""
if (marks>=70 && marks<=100){
    grade="A"
} else if(marks>=60 && marks<70){
    grade="B"
}else if(marks<60 && marks>=50){
    grade="C"
}else if(marks<50 && marks>=40){
    grade="D"
}else if(marks<40 && marks>=0){
    grade="E"
}else{
    alert("error-enter marks from 0 to 100")
}
alert(grade)

