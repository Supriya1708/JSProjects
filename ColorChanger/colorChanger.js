const buttons = document.querySelectorAll(".button")
const body = document.querySelector("body")


buttons.forEach(function (button){
    button.addEventListener('click', function(e){
        const info = document.querySelector(".infoClass")
        switch (e.target.id)
        {
            case "gray":
                console.log(info);
                if (info){
                    body.removeChild(info);
                }
                body.style.backgroundColor = e.target.id;
                break;
            case "white":
                if (info){
                    body.removeChild(info);
                }
                body.style.backgroundColor = e.target.id;
                break;
            case "blue":
                if (info){
                    body.removeChild(info);
                }
                body.style.backgroundColor = e.target.id;
                break;
            case "green":
                if (info){
                    body.removeChild(info);
                }
                body.style.backgroundColor = e.target.id;
                break;
            default:
                if (!info){
                    body.style.backgroundColor = "lightBlue";
                    ele = document.createElement("h3")
                    ele.style.color = "red"
                    ele.style.textAlign = "center"
                    ele.className = "infoClass"
                    ele.appendChild(document.createTextNode("This is default Color."))
                    body.appendChild(ele)
                }
        }
    })
});