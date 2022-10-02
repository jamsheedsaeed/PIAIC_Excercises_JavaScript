var guestList = ['Irfan','Rashid','Jawad', 'Tayyeb', 'Kamran'];
try{ 
    for(var i = 0 ; i <= guestList.length; i++){
        console.log(guestList[i]);
    }
}catch(err){
    console.log(err);
}
// Error corrected
try{ 
    for(var i = 0 ; i < guestList.length; i++){
        console.log(guestList[i]);
    }
}catch(err){
    console.log(err);
}