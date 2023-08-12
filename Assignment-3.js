const students=[
    {
        name: "Rishabh",
        marks: 95,
    },
    {
        name: "Prashant",
        marks: 85,
    },
    {
        name: "Abhay",
        marks: 99,
    },
    {
        name: "Rishu",
        marks: 97,
    },
    {
        name: "Ashu",
        marks: 65,
    },
    
];
function check({name,marks}){
    for(let i=0;i<students.length;i++)
    if(students[i].marks>90){
        console.log("Congratulation "+students[i].name+"! You have passed exam");
    }
    else{
        console.log("Sorry "+students[i].name+"! You have not passed exam");
    }
}
check(students);

