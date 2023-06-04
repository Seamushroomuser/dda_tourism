var firebaseConfig = {
    apiKey: "AIzaSyC2wqKsNHBYgkXpN6-YtTOmYdC4Js6je2E",
    authDomain: "dda-tourism.firebaseapp.com",
    databaseURL: "https://dda-tourism-default-rtdb.firebaseio.com",
    projectId: "dda-tourism",
    storageBucket: "dda-tourism.appspot.com",
    messagingSenderId: "565924033080",
    appId: "1:565924033080:web:b4d0ff55700ad54eb2eccd"
};
user_name = localStorage.getItem("user_name");
firebase.initializeApp(firebaseConfig);
function addUser(){
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose: "adding user"
    });
    user_name = localStorage.getItem("user_name");
}
function next(){
        window.location = "index2.html";
    }
    function load(){
        window.alert("please join dda tourism");
    }
document.getElementById("welcome").innerHTML = "Welcome Tourist " + user_name + "!" ;