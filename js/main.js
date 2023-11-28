
var userName = document.getElementById('userName');
var userEmail = document.getElementById('userEmail')
var userPassword = document.getElementById('userPassword');
var signUpBtn = document.getElementById('signUpBtn');


var usersContainer = [];

//registeration

//add localstorage to array

if (localStorage.getItem('users') != null) {
    usersContainer = JSON.parse(localStorage.getItem('users'));
}


function addUser() {

    user = {
        Name: userName.value,
        Email: userEmail.value,
        Password: userPassword.value
    }
    var save = ``;
    if ((checkUserInputs() != true) && (checkEmailInput() != true)) {
        usersContainer.push(user);
        localStorage.setItem('users', JSON.stringify(usersContainer));
        save = `<p class="text-success mt-2">Success </p>`;
        document.getElementById('message').innerHTML = save;

    }
}

if (signUpBtn != null) {
    signUpBtn.addEventListener('click', addUser);
}

function checkUserInputs() {
    var save2 = ``;

    if ((userName.value == "") || (userEmail.value == "") || (userPassword.value == "")) {
        save2 = `<p class="text-danger mt-2">All inputs is required </p>`;
        document.getElementById('message').innerHTML = save2;
        return true;
    }
}


function checkEmailInput() {
    var f = 0;
    var save3 = ``;

    for (var j = 0; j < usersContainer.length; j++) {
        if (((userEmail.value) == (usersContainer[j].Email))) {
            save3 = `<p class="text-danger mt-2">email already exists </p>`;
            document.getElementById('message').innerHTML = save3;
            f = true;
        }
    }

    return f;
}



//=============================================================================

//login

var loginEmail = document.getElementById('loginEmail');
var loginPassword = document.getElementById('loginPassword');
var logBtn = document.getElementById('logBtn');

function addToLogin() {


    if (seachForUser() == true) {
        //go to home
        logBtn.href = 'home.html';

    }
    else
        alert('incorrect email or password');
}

function seachForUser() {
    for (var i = 0; i < usersContainer.length; i++) {
        if (((loginEmail.value) == (usersContainer[i].Email)) && ((loginPassword.value) == (usersContainer[i].Password))) {

            return true;

        }
    }
    return false;
}

if (logBtn != null) {
    logBtn.addEventListener('click', addToLogin);
    logBtn.addEventListener('click',welcomeToUser);
}

//=======================================================================================================

//home
var home = document.getElementById('m');

function welcomeToUser() {

    for (var i = 0; i < usersContainer.length; i++) {
        if (((loginEmail.value) == (usersContainer[i].Email)) && ((loginPassword.value) == (usersContainer[i].Password))) {

           localStorage.setItem('welcome',JSON.stringify(usersContainer[i].Name))
            break;
        }
    }
}

if (home != null) {
    var box=`welcome ${JSON.parse(localStorage.getItem('welcome'))}`
    document.getElementById('m').innerHTML = box;
}