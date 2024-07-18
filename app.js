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