
const submit = document.querySelector('#submit');
submit.addEventListener("click", signupFunction)


function Obj(name, contact, email, password) {
    this.name = name
    this.contact = contact
    this.email = email
    this.password = password
}

let signupData = JSON.parse(localStorage.getItem("userData")) || []

function signupFunction() {
    event.preventDefault()

    const name = form.name.value;
    const contact = form.contact.value;
    const email = form.email.value;
    const password = form.password.value;

    if (name == "") {
        alert("Please Enter your Name")
    }
    else if (contact == "") {
        alert("Please Enter your Contact")
    }
    else if (email == "") {
        alert("Please Enter your Email")
    }
    else if (password == "") {
        alert("Please Enter your Password")
    }

    else {
        let dataOfObj = new Obj(name, contact, email, password)
        signupData.push(dataOfObj)
        localStorage.setItem("userData", JSON.stringify(signupData))
        window.location.href = "./login.html"
    }
}