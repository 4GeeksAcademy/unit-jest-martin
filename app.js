const fromDollarToYen = function (valueInDollar)  {
    let valueInYen= valueInDollar * 167.455
    return valueInYen


}

const fromEuroToDollar = function(valueInEuro) {
    let valueInDollar = valueInEuro * 1.07;
    return valueInDollar;
}

const fromYenToPound = function (valueInYen) {
    let valueInPound = valueInYen * 0.0052
    return valueInPound
}

module.exports = { fromEuroToDollar, fromDollarToYen, fromYenToPound }