

function validform(){
    var username = document.contactform.fname.value

    if(username[0] == " " || username == null || username.includes(1) || username.includes(2) || username.includes(3) || username.includes(4)
    || username.includes(5) || username.includes(6) || username.includes(7) || username.includes(8) || username.includes(9) || username.includes(0)){
        alert("Correct Your Name"); 
        document.getElementById("submitbtn").disabled = true;
        return false;
    }else{
        document.getElementById("submitbtn").disabled = false;
    }

}