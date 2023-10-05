// function checkData(){
//     var enterEmail = document.getElementById('Email').value;
//     var enterpwd = document.getElementById('Password').value;

//     var getEmail = localStorage.getItem('userEmail');
//     var getpwd = localStorage.getItem('userpwd');
//     {

//     if(enterEmail === getEmail)
//     {
//         if(enterpwd === getpwd)
//         {
//             alert("Login successful");
//             window.location.href = 'http://127.0.0.1:5500/split%20datas/AGE.HTML'; 
//         }
//     } else {
//         alert("Wrong Password");
//     } 
// }


function checkData() {
    var enterEmail = document.getElementById('Email').value;
    var enterPwd = document.getElementById('Password').value;

    var getEmail = localStorage.getItem('userEmail');
    var getPwd = localStorage.getItem('userpwd');

    if (enterEmail === getEmail) {
        if (enterPwd === getPwd) {
            alert("Login successful");
            
             window.location.href = 'http://127.0.0.1:5500/split%20datas/AGE.HTML'; 
        } else {
            alert("Wrong Password");
            window.location.href ='http://127.0.0.1:5500/newone/newlog.html';
        }
    } else {
        alert("Invalid Email");
    }
}