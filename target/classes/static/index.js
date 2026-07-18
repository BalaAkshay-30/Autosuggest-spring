// alert("Hello guysss");

console.log("hello from JS!")

var users = [
    {
        "name" : "John Doe",
        "gender" : "Male",
        "img" : "john.png"
    },
    {
        "name" : "Jane Doe",
        "gender" : "Female",
        "img" : "jane.png"
    }
]

var id = 0;

function toggleUser(){
    id = (id + 1)%2
    // get the elements

    // 1: image
    var userImage = document.getElementById("user-image");
    userImage.src = users[id].img;

    // 2: name
    var userName = document.getElementById("user-name");
    userName.innerHTML = users[id].name;

    // 3: gender
    var userGender = document.getElementById("user-gender");
    userGender.innerHTML = users[id].gender;

}

function randomUser(){
    fetch('https://randomuser.me/api/')
        .then(function(response){
            // convert raw text to json
            return response.json();
        })
        .then(function(data){

            var userData = data.results[0];

            var userImage = document.getElementById("user-image");
            userImage.src = userData.picture.large;

            var userName = document.getElementById("user-name");
            userName.innerHTML = userData.name.first + " " +
                                    userData.name.last;

            var userGender = document.getElementById("user-gender");
            userGender.innerHTML = userData.gender;
        })
        .catch(function(err){
            console.log(err);
        })
}