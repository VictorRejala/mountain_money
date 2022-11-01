function changeBox() {
    const loginBox = document.querySelector(".login");
    loginBox.classList.toggle("invisible");

    const createAccountBox = document.querySelector(".createAccountBox");
    createAccountBox.classList.toggle("invisible");
};

//Login
var buttonLogin = document.querySelector("#loginSubmit");

buttonLogin.addEventListener("click", function(event){

    event.preventDefault();

    let formLogin = document.querySelector("#formLogin");

    let emailLogin = formLogin.email.value;
    let passwordLogin = formLogin.password.value;
    
    formLogin.reset();
    checkAccount(emailLogin, passwordLogin);
});


//Change box login to create account
var  buttonCreate = document.querySelector("#create");

buttonCreate.addEventListener("click", function(event){

    event.preventDefault();
    changeBox();

    let formLogin = document.querySelector("#formLogin");
    formLogin.reset()
});


//Change box create account to login
var buttonBack = document.querySelector("#back");

buttonBack.addEventListener("click", function(event){

    event.preventDefault();
    changeBox();
    let formCreateAccount = document.querySelector("#formCreateAccount");
    formCreateAccount.reset();
})


//Create account 
var buttonCreateAccount = document.querySelector("#createAccount");

buttonCreateAccount.addEventListener("click", function(event){
    
    event.preventDefault();

    let formCreateAccount = document.querySelector("#formCreateAccount");

    let newUser = formCreateAccount.newUser.value;
    let newEmail = formCreateAccount.newEmail.value;
    let newPassword = formCreateAccount.newPassword.value;

    if (newUser === '' || newEmail === '' || newPassword === '') {

        alert("Prencha todos os campos").preventDefault();
    } else {
        createAccountFunction(newUser, newEmail, newPassword);
    }
    formCreateAccount.reset();
});

