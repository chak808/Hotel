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
            }
          }
        }
function enterIn(roomN, rA, lN) {
        if (window.event.keyCode == 13) {
          checkIn(roomN, rA, lN);
        }
      }
function rBackground() {
  var rN = Math.floor(Math.random() * 4);
  var bG = ["url('http://dannykennedyfitness.com/wp-content/uploads/2016/04/KingRoom.jpg')",
            "url('https://s-i.huffpost.com/gen/1221874/images/o-BEST-HOTEL-POOLS-LA-facebook.jpg')",
            "url('https://www.dorchestercollection.com/wp-content/uploads/wolfgang-puck-dining-room-interior-hotel-bel-air.jpg')",
            "url('http://top10hotelbookingsites.webs.com/besthotelsites-1.jpg')"
            ];
  document.body.style.backgroundImage=bG[rN];
}
while (true) {
  setTimeout(rBackground(), 1000);
}