var sandwitchesOrder = [
    {
        name : 'test',
        type : 'Grilled Chicken Sandwich'
    },
    {
        name : 'mine',
        type : 'Ham Sandwich'
    }
]
var sandwitchesOrderOne = [
    {
        name : 'test',
        type : 'Chicken Sandwich'
    },
    {
        name : 'mine',
        type : 'Seafood Sandwich'
    }
]
var sandwitchesOrderTwo = [
    {
        name : 'test',
        type : 'Ham Sandwich'
    },
    {
        name : 'mine',
        type : 'Grilled Cheese'
    }
]

function sandwhicesOrdered(items){
    items.forEach(element => {
        console.log(`The Sandwhich name is ${element.name} and type is ${element.type}`);
    });
}

sandwhicesOrdered(sandwitchesOrder);
sandwhicesOrdered(sandwitchesOrderOne);
sandwhicesOrdered(sandwitchesOrderTwo);