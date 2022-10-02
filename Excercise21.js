const person = {
    name: 'Jamsheed Saeed',
    age: 26,
    city: 'Islamabad',
    occupation: 'Software Developer',
    skills: ['React','JavaScript','HTML','CSS']
  }
  
  //Use Template Literal to also log a message to the console
  const message = `Hi, I'm ${person.name}. I am ${person.age} years old. I live in ${person.city}. I am a ${person.occupation}.`;
  console.log(message);