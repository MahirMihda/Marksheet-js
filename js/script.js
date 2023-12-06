let marks = 83

if (marks>100 || marks<0){
    console.log("Beta paknami koros")
}
else if (marks<=100 && marks>=90){
    console.log("Grade A")
}
else if (marks<90 && marks>=80){
    console.log("Grade B")
}
else if (marks<80 && marks>=70){
    console.log("Grade C")
}
else if (marks<70 && marks>=60){
    console.log("Grade D")
}
else{
    console.log("Fail")
}