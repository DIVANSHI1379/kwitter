
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyDOyXuG9V13-VnhdVvW5L15NQ-xeLoiPuk",
      authDomain: "kwitter-14088.firebaseapp.com",
      databaseURL: "https://kwitter-14088-default-rtdb.firebaseio.com",
      projectId: "kwitter-14088",
      storageBucket: "kwitter-14088.appspot.com",
      messagingSenderId: "535568212320",
      appId: "1:535568212320:web:1ad0875b0c2df93a313e05"
    };
    
    // Initialize Firebase
   firebase.initializeApp(firebaseConfig);

   user_name = localStorage.getItem("user_name");
   document.getElementById("user_name").innerHTML="  WELCOME  "+user_name+"!";

   function addRoom(){
         room_name = document.getElementById(room_name).value;
         firebase.database().ref("/").child(room_name).update({
               purpose : "adding room name"
         });
         localStorage.setItem("room_name", room_name);
         window.location = "kwitter_page.html";
   }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room_Name - " +Room_nameS);
      row = "<div class='room_name' id="+Room_names+" onclick='redirecttoRoomName(this.id)' >#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML +=row;


      //End code
      });});}
getData();
function redirecttoRoomName(name){
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location = "kwitter_page.html";

}
