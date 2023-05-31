let myVar= ''

let onClick = function() {

    myVar = this.id
}


const colora = document.getElementById("colora").onclick = onClick
const colors = document.getElementById ("colors").onclick = onClick
const colord = document.getElementById ("colord").onclick = onClick
const color = document.getElementById ("color").onclick = onClick
document.addEventListener('keydown', function (event) {

if(myVar != '') {
       if (event.key === 'a') {

        document.getElementById(myVar).style.backgroundColor = "#ff5405";


    } else if (event.key === 's') {

        document.getElementById(myVar).style.backgroundColor = "#190425"
    

    } else if (event.key === 'd') {

        document.getElementById(myVar).style.backgroundColor = "#d9ff02"

    }   
    }
    });

