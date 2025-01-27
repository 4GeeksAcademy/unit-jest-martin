test("One euro should be 1.07 dollars", function() {
    const {fromEuroToDollar} =require('./app.js');
    const dollars =fromEuroToDollar(3.5)
    const expected = 3.5 * 1.07;
    expect(fromEuroToDollar(3.5)).toBe(3.745)

})
test("One dollar should be 146.262 yens", function() {
    const {fromDollarToYen} =require('./app.js');
    const yens =fromDollarToYen(3.5)
    const expected = 3.5 * 167.455;
    expect(fromDollarToYen(3.5)).toBe(586.0925000000001)

})

test("One yen should be 0.0052 pounds", function() {
    const {fromYenToPound} =require('./app.js');
    const pounds =fromYenToPound(3.5)
    const expected = 3.5 * 0.0052;
    expect(fromYenToPound(3.5)).toBe(0.0182)

})



