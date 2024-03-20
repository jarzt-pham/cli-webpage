import { help, cliName } from "./commands.js";

var terminalContent = document.getElementById("content");
var textarea = document.getElementById("input");
var typer = document.getElementById("typer");
var cursor = document.getElementById("cursor");

const ENTER_KEY_NUMBER = 13;

function addPreviousCommandsToTerminalContent(content) {
  var previousCommands = document.createElement("p");
  previousCommands.textContent = `${cliName}${content}`;
  terminalContent.appendChild(previousCommands);
}

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
  tag.value = "";
}

function triggerKey() {
  textarea.addEventListener("keydown", function (event) {
    typer.innerHTML = textarea.value;

    if (event.keyCode === ENTER_KEY_NUMBER) {
      const value = textarea.value;
      event.preventDefault();
      handleEnterKeyPress(value);
      removeContent(textarea);
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
      addPreviousCommandsToTerminalContent(cmd);

      help.forEach((command) => {
        const paragraph = document.createElement("p");
        paragraph.textContent = ` ${command}`;
        terminalContent.appendChild(paragraph);
      });
      break;
    default:
      // const msg = `Command not found. For a list of commands, type <span style="color:blue">"help"</span>.`;
      const msg = `type <span style="color:blue">"help"</span>.`;

      var name = document.createElement("p");
      name.style.color = "9C7761";

      addPreviousCommandsToTerminalContent(cmd);
      terminalContent.appendChild(name);

      showSlowText(msg, name);

      break;
  }
}

function showSlowText(content, tag) {
  var i = 0;
  var interval = setInterval(() => {
    if (i < content.length) {
      if (content[i] === "<") {
        const closingBracketIndex = content.indexOf(">", i);
        const tagText = content.substring(i, closingBracketIndex + 1);

        tag.innerHTML += tagText;
        i += tagText.length;
      } else {
        console.log({ i, content: content[i] });
        tag.textContent += content[i];
        i++;
      }
    } else {
      clearInterval(interval);
    }
  }, 90);
}

triggerKey();
focusTextarea();
