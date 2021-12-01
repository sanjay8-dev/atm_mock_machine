const prompt = require('prompt-sync')();
let pin;
let balance = 10000//predefined val

//Cash withdrawal function
const cashWithdrawal = ()=>{
    let checkPin = prompt("Please Enter your PIN: ", {echo: '*'} )
    if(pin === checkPin){
    let amount = prompt("Enter the amount!");
   
    if(balance>amount){
    balance-=amount;
    return "Successfully withdrawn Rs. "+ amount + "\n";
    }
    else{
        return "Sorry! Your account doesn't have Sufficient Balance\n"
    }    
  }
  else{
      return "Sorry You've entered a wrong PIN .. Please try again\n"
  }
}
//PIN change function
const changePin = () =>{
    let test = prompt("Please enter your Old PIN: ",{echo: '*'} )

    if(pin == test){
        pin = prompt("Enter your new PIN: ",{echo:"*"})
       
        return "PIN changed successfully! \n"
    }
    else{
        return "You've Entered incorrect PIN. Please try again later \n"
    }
    
   
}

let isRunning = true;
//driver code
    console.log("Welcome to ATM ! \n")
    pin = prompt("Please Set your 4 digit pin : ","null", {echo: '*'});
    console.log("*\n*\n*\n*")
    
    
    while(isRunning){

    console.log('Please choose an option:\n1.Cash Withdrawal\n2.Change Pin\n3.Exit\n');
    let n = prompt('>')
    
    switch(Number(n)){
    case 1 :
    console.log(cashWithdrawal());
    break;
    
    case 2 :
    console.log(changePin());
    break;

    default:
    isRunning = false;

    
   
}
   
}
