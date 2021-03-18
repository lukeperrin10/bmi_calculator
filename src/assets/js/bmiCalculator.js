
const calculateMetricBMI = (weight, height) => {
    let result
    result = weight / ((height/100)*(height / 100))
    return (Math.round(result*100) / 100).toFixed(2)
}

const getBMIclassification = (value) => {

    if (value > 1 && value < 18.5){
        return "underweight"
    }
    else if (value >= 18.5 && value <= 24.9) {
        return "within normal paremeters"
    }
    else if (value >= 25 && value <= 29.9) {
        return "overweight"
    }
    else if (value >= 30 && value <= 34.9) {
        return "Obesity Class 1"
    }
    else if (value >= 35 && value <= 39.9) {
        return "Obesity Class 2"
    }
    else if (value > 40) {
        return "Extreme Obesity Class 3"
    }

}



