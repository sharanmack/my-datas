function addData(){
    var Email = document.getElementById('Email').value;
    var Pass = document.getElementById('pwd').value;

    localStorage.setItem('userEmail',Email);
    localStorage.setItem('userpwd',Pass);
}