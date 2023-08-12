let username = ["Mithun","Rishabh","Prabhat","Vaibhav","Ashu"]
function check(){
for(let i=0;i<username.length;i++){
    if("Ashu"==username[i]){
        console.log("Yes, "+username[i]+" is a valid user.");
    }
  else  if("Rishabh"==username[i]){
        console.log("Yes, "+username[i]+" is a valid user.");
    }
  else  if("Prabhat"==username[i]){
        console.log("Yes, "+username[i]+" is a valid user.");
    }
    else {
    console.log("No, "+username[i]+" is not a valid user.");
    }
}
}
check()