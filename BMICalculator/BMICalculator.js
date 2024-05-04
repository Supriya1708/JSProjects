function calculateBMI(){

    var weight = parseFloat(document.getElementById("weight").value);
    var height = parseFloat(document.getElementById("height").value);
    var result = document.getElementById("result")
    if (weight === '' || weight < 0 || isNaN(weight)){
        result.innerHTML = "Enter Valid Weight";
        result.style.color = "red"
    }
    else if (height === '' || height < 0 || isNaN(height)){
        result.innerHTML = "Enter Valid Height";
        result.style.color = "red"
    }
    else{
        var bmi = (weight / ((height * height)/10000)).toFixed(2);
        result.innerHTML = "The BMI with height " + height + " and weight " + weight + " is " + bmi;
        healthStatus = document.getElementById("healthStatus")
        if (bmi>25){
            healthStatus.innerHTML = "You are Over Weight."
            healthStatus.style.color = "red"
            result.style.color = "red"
        }
        else if (bmi>18.5 && bmi<25){
            healthStatus.innerHTML = "You are Healthy."
            healthStatus.style.color = "green"
            result.style.color = "green"
        }else{
            healthStatus.innerHTML = "You are UnderWeight."
            healthStatus.style.color = "red"
            result.style.color = "red"
        }
    }
}


// By JUST USING DOM

// const form = document.querySelector("form")

// form.addEventListener('submit', function(e){
//     e.preventDefault()
//     const height = parseFloat(document.querySelector('#height').value)
//     const weight = parseFloat(document.querySelector('#weight').value)
//     if (weight === '' || weight < 0 || isNaN(weight)){
//         result.innerHTML = "Enter Valid Weight";
//         result.style.color = "red"
//     }
//     else if (height === '' || height < 0 || isNaN(height)){
//         result.innerHTML = "Enter Valid Height";
//         result.style.color = "red"
//     }
//     else{
//         var bmi = (weight / ((height * height)/10000)).toFixed(2);
//         result.innerHTML = "The BMI with height " + height + " and weight " + weight + " is " + bmi;
//         healthStatus = document.getElementById("healthStatus")
//         if (bmi>25){
//             healthStatus.innerHTML = "You are Over Weight."
//             healthStatus.style.color = "red"
//             result.style.color = "red"
//         }
//         else if (bmi>18.5 && bmi<25){
//             healthStatus.innerHTML = "You are Healthy."
//             healthStatus.style.color = "green"
//             result.style.color = "green"
//         }else{
//             healthStatus.innerHTML = "You are UnderWeight."
//             healthStatus.style.color = "red"
//             result.style.color = "red"
//         }
//     }
// })