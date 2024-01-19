let allUserData = JSON.parse(localStorage.getItem("db")) || {}                 // create to local storage in object ;

let Register = document.getElementById("submit")


Register?.addEventListener("click", (e) => {                                      //?=> Optional chaining register only use to registration form //
    e.preventDefault();                                                           // preventDefault()=> form tag in refresh to console page so used to preventDefault so console page in view//
    let ides = ["firstName", "lastName", "dob", "email", "newpass", "conform"]     // it's document getElement id name //
    let Results = {}
    ides.forEach((input) => {                                                      // loop for document get in id for loop in addEventListener in registration form//
        Results[input] = document.getElementById(input).value;

    })
    console.log(Results, "Registion success");
    allUserData[Results.email] = Results;                                      // result in get to mail id ;
    localStorage.setItem("db", JSON.stringify(allUserData))                     // data save in local storage
    setTimeout(() => {
        window.location.replace("login.html")                              // wait for 2sec than next page in login 

    }, 2000)

});

let login = document.getElementById("login");

login?.addEventListener("click", (e) => {
    e.preventDefault();
    let userMail = document.getElementById("Uname").value;
    let password = document.getElementById("password").value;

    if (allUserData[userMail]) {                                          // first user input to local mail to same inn next password //
        if (allUserData[userMail].newpass === password) {                 // input password to local mail and password currect in success//
            console.log("SUCCESS");


        } else {
            console.log("RONG PASSWORD");
        }

    } else {
        console.log("THIS EMAIL IS NOT REGISTER");
    }

})






