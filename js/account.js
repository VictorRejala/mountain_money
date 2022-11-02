var user = ["Rejala", "Caua", "DesWeb"];
var email = ["victorrejala@gmail.com", "cauarogerio@gmail.com", "nifvc@cairu.br"];
var password = ["admin", "admin", "cairu2022"];
var coins = [10000, 10000, 5000];

function createAccountFunction (newUser, newEmail, newPassword) {

    if(!checkNewAccount(newEmail)){
        user.push(newUser);
        email.push(newEmail);
        password.push(newPassword);
        coins.push(1000);

        alert("conta criada com sucesso!");
        changeBox();
    }  
};

function checkAccount (emailLogin, passwordLogin) {

    var logou = false;

    for(i=0; i < email.length; i++) {

        if(emailLogin == email[i] && passwordLogin == password[i]) {
           
            logou = true;
            var userHome = user[i];           
            var coinsHome = coins[i];                 
        }
    }

    if(logou) {
               
        window.location.href = "home.html";       
    } else {
        alert("Usuario ou Senha errada").preventDefault();
    }
};
/*
var userHome;
var coinsHome;
function changeUser () {
    userHtml = document.getElementById("user");    
    userHtml.innerHTML = userHome;  
}     
function changeCoin () {
    coinHtml = document.getElementById("coin");    
    coinHtml.innerHTML = coinsHome;  
}
*/
function checkNewAccount (emailCheck) {

    if(email.includes(emailCheck)){
       alert("E-mail ja cadastrado");
       return true;
    } else {
        return false;
    }
}