
const calculateBMI = () => {
    let weightInput = document.getElementById("weight")
    let heightInput = document.getElementById("height")
    let results = calculateMetricBMI(weightInput.value, heightInput.value)
    let message = getBMIclassification(results)
    let displayResultsElement = document.getElementById('results')
    displayResultsElement.innerHTML = `<h1 id="resultdisplay"> Your BMI value is: ${results} and you are ${message}.</h1>`

}


document.getElementById("height")
    .addEventListener("keyup", function(event) {
        event.preventDefault();
        if (event.keyCode === 13) {
            document.getElementById("calculate").click();
        }
   
}); 