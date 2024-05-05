const generateRandomColor = function() {
    const hex = "0123456789ABCDEF"
    let color = "#"
    for(let i=0; i<6; i++){
        const random = Math.floor(Math.random() * 16)
        color += hex[random]
    }
    console.log(color);
    return color
}

let intervalId;

const startChangingColor = function() {
    if (!intervalId){
        intervalId = setInterval(changeBgColor, 1000);
    }

    function changeBgColor(){
        document.body.style.backgroundColor = generateRandomColor()
    }
}

const stopChangingColor = function() {
    clearInterval(intervalId)
    intervalId = null;
}

document.querySelector("#start").addEventListener("click", startChangingColor)

document.querySelector("#stop").addEventListener("click", stopChangingColor)