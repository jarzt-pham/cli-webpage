import { help, cliName } from "./commands.js";

var terminalContent = document.getElementById("content");
var textarea = document.getElementById("input");
var typer = document.getElementById("typer");
var cursor = document.getElementById("cursor");

const ENTER_KEY_NUMBER = 13;

function addContentToTerminalContent(content) {
  var paragraph = document.createElement("p");
  paragraph.textContent = `${cliName} ${content}`;
  terminalContent.appendChild(paragraph);
}
function handleEnterKeyPress(content) {
  console.log("Enter key pressed in textarea");
  command(content);
}
function removeContent(tag) {
  console.log("Clear");
  tag.value = '';
}

function triggerKey() {
  textarea.addEventListener("keydown", function (event) {
    typer.innerHTML = textarea.value;

    if (event.keyCode === ENTER_KEY_NUMBER) {
      const value = textarea.value;
      removeContent(textarea);
      event.preventDefault();
      handleEnterKeyPress(textarea.value);
    }
  });
  textarea.addEventListener("keyup", function (event) {
    typer.innerHTML = textarea.value;

    if (event.keyCode === ENTER_KEY_NUMBER) {
      removeContent(textarea);
    }
  });
}
function focusTextarea() {
  typer.addEventListener("click", function () {
    textarea.focus();
  });
  cursor.addEventListener("click", function () {
    textarea.focus();
  });
}

function command(cmd) {
  switch (cmd) {
    case "help":
      var name = document.createElement("p");
      name.textContent = cliName;
      terminalContent.appendChild(name); 
      help.forEach((command) => {
        const paragraph = document.createElement("p");
        paragraph.textContent = ` ${command}`;
        terminalContent.appendChild(paragraph);
      });
      break;
    default:
      var name = document.createElement("p");
      name.textContent = `Command not found. For a list of commands, type 'help'.`;
      terminalContent.appendChild(name); 
      break;
  }
}

triggerKey();
focusTextarea();
