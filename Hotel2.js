function checkIn(roomN, rA, lN) {
        var roomList = document.getElementById(roomN);
        var roomName = roomList.getElementsByTagName("li");
        if (roomName.length < 3) {
          var addName = document.createElement('li');
          var cIN = document.getElementById(rA).value;
          var newName = document.createTextNode(cIN);
          addName.appendChild(newName);
          addName.onclick = function () {
            this.parentElement.removeChild(this);
            document.getElementsByClassName('userInput')[lN].style.visibility = "visible";
            document.getElementsByClassName('userClick')[lN].style.visibility = "visible";
            document.getElementsByTagName('span')[lN].style.visibility = "hidden";
            document.getElementsByClassName('room')[lN].style.border = "";
            var space = document.getElementsByTagName('h2')[lN];
            space.innerHTML = "Available";
            space.style.color = "green";
          };
          var position = document.getElementsByTagName('ol')[lN];
          var addDate = document.createElement('p');
          var newDate = document.createTextNode("Check in at" + " " + Date());
          addDate.appendChild(newDate);
          addName.appendChild(addDate);
          position.appendChild(addName);
          document.getElementsByTagName('span')[lN].style.visibility = "visible";
          document.getElementById(rA).value = "";
          if (roomName.length == 3) {
              document.getElementsByClassName('room')[lN].style.border = "2.5px solid red";
              var space = document.getElementsByTagName('h2')[lN];
              space.innerHTML = "Unavailable";
              space.style.color = "red";
              document.getElementsByClassName('userInput')[lN].style.visibility = "hidden";
              document.getElementsByClassName('userClick')[lN].style.visibility = "hidden";
            }
          }
        }
function enterIn(roomN, rA, lN) {
        if (window.event.keyCode == 13) {
          checkIn(roomN, rA, lN);
        }
      }
var myBG = setInterval(rBackground, 10000);
function rBackground() {
  var rN = Math.floor(Math.random() * 4);
  var bG = ["url('Room.jpg')",
            "url('Pool.jpg')",
            "url('Dining.jpg')",
            "url('Hotel.jpg')"
            ];
  document.body.style.backgroundImage=bG[rN];
}
