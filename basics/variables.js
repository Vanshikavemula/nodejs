const accId = 125034
let accountEmail = "vanshika.vemula16@gmail.com"
var accountPwd = "12345"
accountCity = "Jaipur"

// accId = 2

accountEmail="abc@gmail.com"
accountPwd = "549852"
accountCity="Vizag"

/*
   Prefer not to use var
   Because of issue in block scope and functional scope.
*/

console.log(accId);

console.table([accId, accountEmail, accountPwd, accountCity])