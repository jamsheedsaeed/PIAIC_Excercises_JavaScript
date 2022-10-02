// Your Own Array: Think of your favorite mode of transportation,
// such as a motorcycle or a car, and make a list that stores several examples. \
// Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”

var favTransportModes = ['Car','Bus','Motorcycle'];
favTransportModes.forEach((element,index)=>{
    if (index === 0) {
        console.log("I would like to drive a "+ element);
    } else if (index === 1) {
        console.log("I would like to travel in a "+ element);
    } else {
        console.log("I would like to own a "+ element);
    }
})

