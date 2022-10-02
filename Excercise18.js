
var countriesList = ['Switzerland','New Zealand','Turkey','Germany','United Kingdom'];
var modifiedList = [];
console.log('----- Array in Original Form ----');
countriesList.forEach(element=>{
    console.log(element);
    modifiedList.push(element);
})
modifiedList.sort();
console.log('----- Array in alphabetical order ----');
modifiedList.forEach(element=>{
    console.log(element);
})
console.log("---- Array is still in original order ----");
countriesList.forEach(element=>{
    console.log(element);
})
modifiedList.reverse();
console.log("---- Array is in reverse order ----");
modifiedList.forEach(element=>{
    console.log(element);
})
console.log("---- Array is still in original order ----");
countriesList.forEach(element=>{
    console.log(element);
})
countriesList.reverse();
console.log("---- Original Array Order changed ----");
countriesList.forEach(element=>{
    console.log(element);
})
countriesList.reverse();
console.log("---- Array back in original order ----");
countriesList.forEach(element=>{
    console.log(element);
})
countriesList.sort();
console.log("---- Array in alphabetical order ----");
countriesList.forEach(element=>{
    console.log(element);
})
countriesList.reverse();
console.log("---- Array in alphabetical order changed reversed ----");
countriesList.forEach(element=>{
    console.log(element);
})