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
function StudentInfoMaker(name , parentsName , age) {
    this.stu_Name = name ;
    this.stu_parentsName = parentsName ;
    this.stu_age = age ; 
}



StudentInfoMaker.prototype.talk = function speak() {
    return `Namaste , my name is ${this.stu_Name} and my parents name is ${this.stu_parentsName}` ;
}


let student1 = new StudentInfoMaker("HarshithaMahadev" , "MahadevMahadevi" , 19) ;
console.log(student1) ;
let student2 = new StudentInfoMaker("induma" , "MahadevMahadevi" , 19) ;
