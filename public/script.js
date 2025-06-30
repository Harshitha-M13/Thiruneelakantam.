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