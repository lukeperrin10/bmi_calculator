
const button = document.getElementById('calculate')
const results = document.getElementById('results')


button.addEventListener('click', ()=> {
    const weight =document.body.children.weight.value
    const height =document.body.children.height.value
    const bmiValue = bmiCalculator.calculate(weight,height)
    const bmiResult = getBMIclassification('results')
    displayResultsElement.innerHTML = `Your BMI value is ${bmiValue}, you are ${bmiResult}`

})
    



