let a=0;
let array=Array();
function add() {
    array[a] = document.getElementById("number").value;
    alert("Element: " + array[a] + " Added at index " + a);
    a++;
    document.getElementById("number").value = " ";
}
function Display(){
    let e =' ' ;
    for (let i = 0; i < array.length; i++) {
        e += "Element " + i + " = " + array[i] + "<br/>";
    }
    document.getElementById("result").innerHTML = e;
}
