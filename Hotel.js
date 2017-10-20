function checkIn(roomN, rA, lN) {
        var roomList = document.getElementById(roomN);
        var roomName = roomList.getElementsByTagName("li");
        if (roomName.length < 3) {
          var addName = document.createElement('li');
          var cIN = document.getElementById(rA).value;
          var newName = document.createTextNode(cIN);
          addName.appendChild(newName);
          var position = document.getElementsByTagName('ol')[lN];
          var addDate = document.createElement('p');
          var newDate = document.createTextNode("Check in at" + " " + Date());
          addDate.appendChild(newDate);
          addName.appendChild(addDate);
          position.appendChild(addName);
          document.getElementById(rA).value = "";
          if (roomName.length == 3) {
              document.getElementsByClassName('room')[lN].style.border = "2.5px solid red";
              var space = document.getElementsByTagName('h2')[lN];
              space.innerHTML = "Unavailable";
              space.style.color = "red";
            }
          }
        }
function checkOut(rR, roomN, lN) {
        document.getElementsByClassName('room')[lN].style.border = "";
        var space = document.getElementsByTagName('h2')[lN];
        space.innerHTML = "Available";
        space.style.color = "green";
        var  cON = document.getElementById(rR);
        var userOpt = cON.options[cON.selectedIndex].value;
        var checkOut = document.getElementById(roomN);
        checkOut.removeChild(checkOut.childNodes[userOpt]);
      }
function enterIn(roomN, rA, lN) {
        if (window.event.keyCode == 13) {
          checkIn(roomN, rA, lN);
        }
      }
function enterOut(rR, roomN, lN) {
        if (window.event.keyCode == 13) {
          checkOut(rR, roomN, lN);
        }
      }