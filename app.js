let cvbtn= document.getElementById("cvbtn")
cvbtn.addEventListener("click",function(){
    alert("Download Successfully")

})

let submit = document.getElementById("submit")
submit.addEventListener("click",function(){
    let email= document.getElementById("email")
    let pass= document.getElementById("password")
    if( email.value == "" && pass.value == "" ){
        alert("Fill Details")
    }

else{
    alert("Logged In")
}
})

let ul=document.querySelector("ul")

let barr=document.getElementById("bar");
barr.addEventListener("click" ,function(){
    ul.classList.toggle("showdata");
    if(ul.className == "showdata"){
        barr.className="fa-solid fa-xmark"
    }else{
        barr.className="fa-solid fa-bars"
    }
})