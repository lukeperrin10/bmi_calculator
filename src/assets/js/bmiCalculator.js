


const calculateMetricBMI = (weight, height) => {
    let result
    result = weight / ((height/100)*(height / 100))
    return result
}

const getBMIclassification = (value) => {
    if (value < 18.5){
        return "underweight"
    }else if (value < 25) {
        return "normal"
    }
    else if (value > 25) {
        return "overweight"
    }
}



