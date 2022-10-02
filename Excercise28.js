function checkAge(age) {
    if (age < 2) {
        console.log('The Person is a baby');
    } else if (age === 2 || age < 4) {
        console.log('The person is a toddler');
    } else if (age === 4 || age < 13) {
        console.log('The person is a kid');
    } else if (age === 13 || age < 20) {
        console.log('The person is a teenager');
    } else if (age === 20 || age < 65) {
        console.log('The person is a adult');
    } else if (age === 65 || age > 65) {
        console.log('The person is a elder');
    }
}

checkAge(2);
checkAge(4);
checkAge(13);
checkAge(20);
checkAge(65);