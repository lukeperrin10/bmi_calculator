
const calculateMetricBMI = (weight, height) => {
    let result
    result  = weight / ((height / 100) * (height / 100))
    return result.toFixed(2)

}
    


const getBMIclassification = (bmiResult) => {

    if (bmiResult > 1 && bmiResult < 18.5){
        return "underweight"
    }
    else if (bmiResult >= 18.5 && bmiResult <= 24.9) {
        return "within normal parameters"
    }
    else if (bmiResult >= 25 && bmiResult <= 29.9) {
        return "overweight"
    }
    else if (bmiResult >= 30 && bmiResult <= 34.9) {
        return "Obesity Class 1"
    }
    else if (bmiResult >= 35 && bmiResult <= 39.9) {
        return "Obesity Class 2"
    }
    else if  (bmiResult > 40) {
        return "Extreme Obesity Class 3"
    }

}


