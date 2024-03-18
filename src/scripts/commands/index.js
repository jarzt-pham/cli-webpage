const cliName = `Jarzt@cli:~$`;
var divContent = document.getElementById("content");

function addContentToTerminalContent(content) {
  // Create a new paragraph element
  var paragraph = document.createElement("p");
  paragraph.textContent = `${cliName} ${content}`;
  // Append the paragraph to the div
  divContent.appendChild(paragraph);
}

// Get the textarea element
var textarea = document.getElementById("input");
// Add keydown event listener
textarea.addEventListener("keydown", function (event) {
  typer.innerHTML = textarea.value;

  if (event.keyCode === 13) {
    // Prevent the default action of the Enter key (new line)
    event.preventDefault();

    // Call your custom function to handle Enter key press
    handleEnterKeyPress(textarea.value);
    removeContent(textarea);
  }
});
textarea.addEventListener("keyup", function (event) {
  typer.innerHTML = textarea.value;

  if (event.keyCode === 13) {
    removeContent(textarea);
  }
});

var typer = document.getElementById("typer");
var cursor = document.getElementById("cursor");
typer.addEventListener("click", function () {
  textarea.focus();
});
cursor.addEventListener("click", function () {
  textarea.focus();
});

const triggerEvent = (event) => {
  // Check if the pressed key is "Enter" (key code 13)
  if (event.keyCode === 13) {
    // Prevent the default action of the Enter key (new line)
    event.preventDefault();

    // Call your custom function to handle Enter key press
    handleEnterKeyPress(textarea.value);
    removeContent(textarea);
  }
};

// Custom function to handle Enter key press
function handleEnterKeyPress(content) {
  console.log("Enter key pressed in textarea");
  addContentToTerminalContent(content);
}
// Custom function to handle Enter key press
function removeContent(tag) {
  console.log("Clear");
  tag.value = null;
}
