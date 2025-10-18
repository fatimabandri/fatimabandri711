// switch case

let day;
let date = new Date().getDay();

switch (date){
    case 0:
        day ="sunday";
        break;

    case 1:
        day ="monday";
        break;

    case 2:
        day ="tuesday";
        break;
        
    case 3:
        day ="wednsesday";
        break;
        
    case 4:
        day ="tusrday";
        break;
        
    case 5:
        day ="friday";
        break;
        
    case 6:
        day ="saturday";  
    
    }
    console.log(day)