var magicians_names = ['Lance Burton', 'Ricky Jay', 'Mark Wilson', 'john'];
var magicians_great = [];
function show_magicians(magicians_names) {
    magicians_names.forEach(element => {
        console.log(element);
    });
    magicians_great.forEach(element => {
        console.log(element);
    });
}


function make_great(magicians_names) {
    for (var i = 0; i < magicians_names.length; i++) {
        magicians_great.push(`The Great ${magicians_names[i]}`);
    }
}

make_great(magicians_names);
show_magicians(magicians_names);