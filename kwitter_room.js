
//ADD YOUR FIREBASE LINKS HERE

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
      apiKey: "AIzaSyCpjrIHT3MP2wn1HCVu8HiwYQ4OYZ02H0c",
      authDomain: "kwitter-64ab4.firebaseapp.com",
      databaseURL: "https://kwitter-64ab4-default-rtdb.firebaseio.com",
      projectId: "kwitter-64ab4",
      storageBucket: "kwitter-64ab4.appspot.com",
      messagingSenderId: "339394607432",
      appId: "1:339394607432:web:19caae2f9339ae22bedb7d",
      measurementId: "G-DC25KZRJ8L"
    };
    
    // Initialize Firebase
   firebase.initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room name - " +Room_names);
      row = "<div class='room_name' id="+Room-names+" oncliclk='reirecToRoomName(this.id)' >#" + Room_names +"</div><hr>";
      document.getElementById("output").innerHtml += row;


      //End code
      });});}
getData();
user_name=localstorage.getItem("user_name");
document.getElementById("user_name").innerHTML= "welcome " + user_name + "!";

function addRoom()
{
      room_name = document.getElementById("room_name").value;
       firebase.database().ref("/").child(room_name).update({
        purpose : "adding room name"    
});
localStorage.setItem("room_name", room_name);
 
window.location = "kwitter_page.html";
}
function redirectToRoomName(name){
console.log(name);
localStorage.setItem("room_name", name);
window.location = "kwitter_page.html";}

function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
         window.location = "index.html";
         }