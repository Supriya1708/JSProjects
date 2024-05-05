const number = Math.round(Math.random() * 100) + 1
console.log(number);

const body = document.querySelector("body")
const form = document.querySelector("form")
const button = document.querySelector("#submit")

form.addEventListener("submit", function(e){
    e.preventDefault()
    const guessedNumber = document.querySelector("#number")
    let guessesRemaining = parseInt(document.querySelector("#guess-remaining").textContent)
    let prevGuesses = document.querySelector("#prev-guesses")

    let ele = document.querySelector(".message")
    if (!ele){
        ele = document.createElement("h2")
        ele.className = "message"
    }else{
        ele.innerHTML = ""
    }

    if (parseInt(guessedNumber.value) === number){
        ele.appendChild(document.createTextNode("You have guessed the right number!!!"))
        ele.style.color = "green"
        button.disabled = true
    }else{
        ele.appendChild(document.createTextNode("OOPS! You Have guessed the wrong number. Try Again!!!"))
        ele.style.color = "red"
        guessesRemaining = guessesRemaining - 1;
        document.querySelector("#guess-remaining").textContent = guessesRemaining
        prevGuesses.textContent = prevGuesses.textContent + "  " + parseInt(guessedNumber.value)
        guessedNumber.value = "";
    }
    
    if (guessesRemaining === 0){
        button.disabled = true
        ele.appendChild(document.createTextNode("You have Lost The Game!!!"))
        ele.style.color = "red"
    }

    body.appendChild(ele)
})