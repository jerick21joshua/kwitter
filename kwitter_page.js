//YOUR FIREBASE LINKS
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
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
    user_name=localStorage.getItem("user_name");
    room_name = localStorage.getItem("room_name");
    function send()
    {
          msg = document.getElementById("msg").ariaValueMax;
          firebase.database().ref(room_name).push({
                name:user_name,
                message:msg,
                like:0
          })
               document.getElementById("msg").value = "";
                  
      }
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name = message_data['name'];
message = mesage_data['message'];
like = message_data['like'];
name_with_tag = "<h4> "+ name + "<img class='user_trick' src='tick.png'></h4>";
message_with_tag = "<h4 class= 'message_h4'>" + message  + "</h4>";
like_button = "<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick=' updateLike(this.id)'>";
span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+ like + "</span></button><hr>";
row = name_with_tag + message_with_tag + like_button + span_with_tag;
document.getElementById("output").innerHTML +=row;


//End code
      } });  }); }
getData();

function updateLike(message_id)
{
      console.log("clicked on like button - " + message_id);
      button_id = message_id;
      updated_likes = Number(likes) +1;
      console.log(updated_likes);
       
      firebase.database().ref(room_name).child(message_id).update({
            like : updated_likes
      });

}
function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location.replace("kwitter.html");
}