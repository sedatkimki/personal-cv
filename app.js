const form = document.querySelector("#contact-form");
const userName = document.querySelector("#name");
const email = document.querySelector("#email");
const message = document.querySelector("#message");

form.addEventListener("submit",function (e) {
    alert("Your name: " + userName.value + "\n" + 
        "Your email: "+ email.value + "\n" +  
        "Your message: " + message.value);
    userName.value = "";
    email.value = "";
    message.value = "";
    e.preventDefault();
})

