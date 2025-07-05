let btns = document.querySelectorAll("button") ;

for(let i = 0 ; i < btns.length ; i++) {
    btns[i].addEventListener("click" , () => {
        console.log("ParvatiammaSHivappa , button was clicked") ;
        if(btns[i].innerText === "Follow") {
            btns[i].innerText = "unfollow" ;
        }
        else if(btns[i].innerText === "unfollow") {
            btns[i].innerText = "Follow" ;
        }
    }) ;
}

// function studentInfoMaker(name , parentsName , age) {
//     const studentInfo = {
//         stu_Name : name , 
//         stu_parentsName : parentsName , 
//         stu_age : age , 
//         talk() {
//             console.log(`Namaste , my name is ${this.stu_Name} and my parents name is ${this.stu_parentsName}`) ;
//         }
//     } ;
//     return studentInfo ;
// }



// let student1 = studentInfoMaker("HarshithaMahadev" , "MahadevMahadevi" , 19) ;
// console.log(student1) ;
// let student2 = studentInfoMaker("adam" , "eve" , 99) ;
// console.log(student2) ;
// let student3 = studentInfoMaker("eve" , "adam" , 99) ;
// console.log(student3) ;
class StudentInfoMaker {
    constructor(name , parentsName , age) {
        this.name = name ; 
        this.parentsName = parentsName ;
        this.age = age ;
    }
    talk() {
        return `Namate , my name is ${this.name} and my parents name is ${this.parentsName}` ;
    }
}
let student1 = new StudentInfoMaker("Akshu" , "ParvatiammaShivappa" , 19) ;
console.log(student1) ;
let student2 = new StudentInfoMaker("induma" , "ParvatiammaShivappa" , 19) ;
console.log(student2) ;
let student3 = new StudentInfoMaker("HarshithaMahadev" , "ParvatiammaShivappa" , 19) ;
console.log(student3) ;