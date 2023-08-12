function check(){
    let sum=0;
   for(var i=0; i<arguments.length;i++)
    sum+=arguments[i];
        console.log("The total cart value is "+sum)
}
check(100, 200, 500)