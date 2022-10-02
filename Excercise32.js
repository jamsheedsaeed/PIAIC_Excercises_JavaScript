var current_users = ['admin','jamshed','rashid','tayyeb','danish'];
var new_users = ['JAMSHED','rashid','junaid','faisal','naveed'];
new_users.forEach(username=>{
    if(current_users.includes(username.toLowerCase())){
        console.log(`the person will need to enter a new username.`);
    }else{
        console.log(`user name ${username} is avaiable`);
    }
})