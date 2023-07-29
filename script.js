/*const h2 = document.createElement("h2");
h2.textContent = "This content added by JavaScript";

document.querySelector("body").appendChild(h2);
*/

document.getElementById("air").style.visibility="hidden";

//document.getElementById("air").style.visibility="visible";    x_pos



function fun() {

    document.getElementById("air").style.visibility="visible";

    var step=1;
    var x = document.getElementById('air').offsetLeft;

    if(x < 800){x= x +step;
        document.getElementById('air').style.left= x + "px";//horizontal move
        }


  }

/*

function fun() { 

    document.getElementById("air").style.visibility="visible";
    
    while (x = 0, x < 90, x++){
        var d = document.getElementById('air');
            d.style.position = "absolute";
            d.style.left = x_pos +'px';
       

    }
*/