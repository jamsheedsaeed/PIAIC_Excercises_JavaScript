// jamsheed Saeed 2/10/2022
// Program is storing a personName in a variable and convert that name into upperCase, LowerCase and titleCase letters.

var personName = 'Jamsheed Saeed';

// Convert a String to titleCase and return
function parseTitleCase(str) {
    return str.toLowerCase().replace(/\b\w/g, s => s.toUpperCase());
}

console.log(personName?.toLowerCase());
console.log(personName?.toUpperCase());
console.log(parseTitleCase(personName));


  