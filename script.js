//function add(){
 //   let a=5;
  //  let b=6;
   // let c=a+b;

//}
function add(){
    let a=parseInt(document.getElementById("n1").value);
    let b=parseInt(document.getElementById("n2").value);
    c=a+b;
    document.getElementById("button1").innerHTML="addition is "+c;
}
function sub(){
    let a=parseInt(document.getElementById("n1").value);
    let b=parseInt(document.getElementById("n2").value);
    c=a-b;
    document.getElementById("button2").innerHTML="subtraction is "+c;
}
function mul(){
    let a=parseInt(document.getElementById("n1").value);
    let b=parseInt(document.getElementById("n2").value);
    c=a*b;
    document.getElementById("button3").innerHTML="multiplication is "+c;
}
function div(){
    let a=parseInt(document.getElementById("n1").value);
    let b=parseInt(document.getElementById("n2").value);
    c=a/b;
    document.getElementById("button4").innerHTML="division is "+c;
}
