
const submit = document.querySelector('#submit');
submit.addEventListener("click", loginFunction)

let signupData = JSON.parse(localStorage.getItem("userData"))

function Obj(email, password) {
    this.email = email
    this.password = password
}

function loginFunction() {
    event.preventDefault()

    const email = form.email.value;
    const password = form.password.value;

    if (email == "") {
        alert("Please Enter your Email")
    }
    else if (password == "") {
        alert("Please Enter your Password")
    }

    else {
        var dataOfObj = new Obj(email, password)

        signupData.forEach(function (elem) {
            if (dataOfObj.email == elem.email && dataOfObj.password == elem.password) {
                window.location.href = "./index.html"
            }
            else if(dataOfObj.email != elem.email || dataOfObj.password != elem.password)
            {
                alert("Invalid Credentials")
            }
            else if(dataOfObj.email == null || dataOfObj.password == null)
            {
                alert("Creat an Account")
            }
        })
    }

}