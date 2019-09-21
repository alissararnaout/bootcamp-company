  
$(document).foundation()

window.changeImage = function() {
    element=document.getElementById('myimage');
    if (element.src.match("bulbon")) {
        element.src="img/info1.png";
    }
    else { element.src="img/info2.png";
    }
}

window.changeImage2 = function() {
    element=document.getElementById('myimage2');
    if (element.src.match("bulbon2")) {
        element.src="img/info3.png";
    }
    else { element.src="img/info4.png";
    }
}