function zoomin(){
    var myImg = document.getElementById("dog");
    var currWidth = myImg.clientWidth;
    if(currWidth == 500){
        alert("Maximum zoom-in level reached.");
    } else{
        myImg.style.width = (currWidth + 5) + "px";
    } 
}
function zoomout(){
    var myImg = document.getElementById("dog");
    var currWidth = myImg.clientWidth;
    if(currWidth == 50){
        alert("Maximum zoom-out level reached.");
    } else{
        myImg.style.width = (currWidth - 5) + "px";
    }
}