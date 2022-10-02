function testCheck(input1,expected){
    return (input1 === expected ? 'I predict True' : 'I predict false');
}
// Test evaluates to true
console.log(testCheck('21','21'));
console.log(testCheck('Germany','Germany'));
console.log(testCheck('Sweden','Sweden'));
console.log(testCheck('Bugati','Bugati'));
console.log(testCheck('Orange','Orange'));

// Tests evaluate to false
console.log(testCheck('21','22'));
console.log(testCheck('Germany','UK'));
console.log(testCheck('Sweden','Maldeep'));
console.log(testCheck('Bugati','US'));
console.log(testCheck('Orange','Banana'));