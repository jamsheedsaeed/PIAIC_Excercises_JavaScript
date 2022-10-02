// Jamsheed Saeed 2/10/2022
var guestList = ['Irfan','Rashid','Jawad', 'Tayyeb', 'Kamran'];
guestList.push('Samad');
guestList.pop("Hi Samad you’re sorry you can’t invite them to dinner!");
guestList.pop("Hi Kamran you’re sorry you can’t invite them to dinner!");
guestList.pop("Hi Tayyeb you’re sorry you can’t invite them to dinner!");
guestList.pop("Hi Jawad you’re sorry you can’t invite them to dinner!");
guestList.forEach((element, index)=>{
    console.log(`Hi ${element} you’re invited them to dinner!`);        
});
guestList.pop(); 
guestList.pop(); // To remove name from list to make sure list remains empty at the end
guestList.forEach((element, index)=>{
    console.log(element);        
});