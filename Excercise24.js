var arrayItems = ['1','2','3'];
function testStringsEquality(input1,expected){
    return (input1 === expected ? 'I predict True' : 'I predict false');
}

function testStringsEqualityWithLowerCase(input1,expected){
    return (input1.toLowerCase() === expected.toLowerCase() ? 'I predict True' : 'I predict false');
}

console.log(testStringsEquality('Germany','Germany'));
console.log(testStringsEquality('Germany','Pakistan'));

console.log(testStringsEqualityWithLowerCase('Germany','Germany'));
console.log(testStringsEqualityWithLowerCase('Germany','Pakistan'));

function NumericalTestwithEquality(input1,expected){
    return (input1 === expected ? 'I predict True' : 'I predict false');
}
console.log(NumericalTestwithEquality(1,1));
console.log(NumericalTestwithEquality(1,2));

function NumericalTestwithGreatorThanAndLessThan(input1,expected){
    return ((input1 > expected) || (input1 < expected) ? 'I predict True' : 'I predict false');
}
console.log(NumericalTestwithGreatorThanAndLessThan(3,1));
console.log(NumericalTestwithGreatorThanAndLessThan(2,2));

function NumericalTestwithGreatororEqualTo(input1,expected){
    return ((input1 > expected) || (input1 === expected) ? 'I predict True' : 'I predict false');
}
console.log(NumericalTestwithGreatororEqualTo(3,1));
console.log(NumericalTestwithGreatororEqualTo(1,2));

function testItemContainsInArray(input){
    return arrayItems.includes(input) === true ? 'I predict True' : 'I predict false';
}
console.log(testItemContainsInArray('3'));
console.log(testItemContainsInArray('7'));

function testItemNotInArray(input){
    return arrayItems.includes(input) === false ? 'I predict True' : 'I predict false';
}
console.log(testItemNotInArray('7'));
console.log(testItemNotInArray('3'));