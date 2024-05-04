function calculateBMI(){

    var weight = parseFloat(document.getElementById("weight").value);
    var height = parseFloat(document.getElementById("height").value);
    var bmi = weight / (height * height);
    document.getElementById("result").innerHTML = "The BMI with height " + height + " and weight " + weight + " is " + bmi;
    healthStatus = document.getElementById("healthStatus")
    if (bmi>25){
        healthStatus.innerHTML = "You are Over Weight."
        healthStatus.style.color = "red"
    }
    else if (bmi>18.5 && bmi<25){
        healthStatus.innerHTML = "You are Healthy."
        healthStatus.style.color = "green"
    }else{
        healthStatus.innerHTML = "You are UnderWeight."
        healthStatus.style.color = "red"
    }
}