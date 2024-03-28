

function validform(){
    var username = document.contactform.fname.value
    var usermail = document.contactform.email.value
    var usermobile = document.contactform.mobile.number

    if(username[0] == " " || username.includes(1) || username.includes(2) || username.includes(3) || username.includes(4)
    || username.includes(5) || username.includes(6) || username.includes(7) || username.includes(8) || username.includes(9) || username.includes(0)){
        alert("Correct Your Name"); 
        return false;
    }

}