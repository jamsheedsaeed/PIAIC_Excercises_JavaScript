var users = ['admin','jamshed','rashid','tayyeb','danish'];
users.forEach(element=>{
    if(element === 'admin'){
        console.log(`Hello ${element}, would you like to see a status report?`);
    }else {
        console.log(`Hello ${element}, thank you for logging in again.`);
    }
})