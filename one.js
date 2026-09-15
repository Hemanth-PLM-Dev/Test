console.log(" this is from the server side ");

const form = document.getElementById("userForm");
const name = document.getElementById("username");
const age = document.getElementById("userAge");

form.addEventListener("submit" , function(e) {
    e.preventDefault();
    const Fname=name.value;
    const Fage = age.value;

    console.log("The name is " ,Fname);
    console.log("The age is ", Fage);
})

