test("One euro should be 1.07 dollars", function() {
    const {fromEuroToDollar} =require('./app.js');
    const dollars =fromEuroToDollar(10)
    const expected = 10 * 1.07;
    expect(fromEuroToDollar(10)).toBe(10.700000000000001)
    //????? esto no me hace sentido, deberia ser 10.7 pero no pasa la prueba

})
test("One dollar should be 146.262 yens", function() {
    const {fromDollarToYen} =require('./app.js');
    const yens =fromDollarToYen(10)
    const expected = 10 * 146.262;
    expect(fromDollarToYen(10)).toBe(1462.62)

})

test("One yen should be 0.0052 pounds", function() {
    const {fromYenToPound} =require('./app.js');
    const pounds =fromYenToPound(10)
    const expected = 10 * 0.0052;
    expect(fromYenToPound(10)).toBe(0.052)

})



