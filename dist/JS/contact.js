function deleteMessages() {
  if (window.sessionStorage.getItem("messages")) {
    window.sessionStorage.removeItem("messages");
  }

  renderMessages();
}
function submitMessage(event) {
  //Create function that is called above in onsubmit//
  event.preventDefault(); //Prevent contact form from acting in default manner//
  const email = document.getElementById("email").value;
  const fullName = document.getElementById("fullName").value;
  const comment = document.getElementById("comment").value; //Get value from the input field//

  const messageObject = {
    email,
    fullName,
    comment, //Object for field values/variables. Makes it easier to add all these at once - to the info input by user//
  };

  let currentMessages = []; //If no messages in sessionStorage, this happens.i.e.Empty array//

  if (window.sessionStorage.getItem("messages")) {
    //Check if there are any contact messages inside sessionStorage//
    currentMessages = JSON.parse(
      window.sessionStorage.getItem("messages") //If yes above, parse value and set that to currentMessages//
    ); //This allows you to get data back as an array//
  }

  currentMessages.push(messageObject); //Add messageObject to above list/array//
  window.sessionStorage.setItem(
    "messages",
    JSON.stringify(currentMessages) //In order to store the array in sessionStorage, it needs to be stringified//
  );

  renderMessages();
}

function renderMessages() {
  //Another function - From which to receive messages in sessionStorage//
  let currentMessages = [];

  if (window.sessionStorage.getItem("messages")) {
    currentMessages = JSON.parse(window.sessionStorage.getItem("messages"));
  }

  let listItems = [];
  for (let i = 0; i < currentMessages.length; i++) {
    let listItem = "";
    const currentMessage = currentMessages[i];
    listItem += `<dt>${currentMessage.fullName} - ${currentMessage.email}</dt>`;
    listItem += `<dd>${currentMessage.comment}</dd>`;
    listItem += "<br />";
    listItems.push(listItem);
  }

  let descList = document.getElementById("currentMessages");
  descList.innerHTML = listItems.join(""); //Creates & returns new string by concatenating all of the elements in an array//
}

renderMessages();
