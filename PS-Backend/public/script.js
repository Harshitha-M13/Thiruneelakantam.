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



// // let student1 = studentInfoMaker("HarshithaMahadev" , "MahadevMahadevi" , 19) ;
// // console.log(student1) ;
// // let student2 = studentInfoMaker("adam" , "eve" , 99) ;
// // console.log(student2) ;
// // let student3 = studentInfoMaker("eve" , "adam" , 99) ;
// // console.log(student3) ;
class Mammals {
    constructor(name , parenstName) {
        this.name = name ;
        this.type = "warm-blooded" ;
    }
    eat() {
        return `i'm eating` ;
    }
}
class Dogs extends Mammals {
    constructor(name) {
        super(name) ;
    }
    bark() {
        return `woff...` ;
    }
    eat() {
        return `i'm eating , and i'm dog` ;
    }
}


class Cats extends Mammals {
    constructor(name) {
        super(name) ;
    }
    meow() {
        return `meow...` ;
    }
    eat() {
        return `i'm eating , and i'm cat` ;
    }
}


let dog1 = new Dogs("Simba") ;
console.log(dog1) ;


let dog2 = new Dogs("mumba") ;
console.log(dog2) ;

let cat1 = new Cats("sweety") ;
console.log(cat1) ;