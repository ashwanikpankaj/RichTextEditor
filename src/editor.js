// making the config for more useability
const ACTIVE = "ACTIVE";

const ACTIVE_CLASS_MAP = {
  [ACTIVE]: "active",
};

const optionsButton = document.querySelectorAll(".option-button");
const editableDiv = document.querySelector("#editable");

function removeHighlighter(el) {
  optionsButton.forEach((item) => {
    // if id of item equals then toggle the class of that el and for every other remove that class
    if (item?.id === el?.id) {
      item.classList.toggle(ACTIVE_CLASS_MAP[ACTIVE]);
    } else {
      item?.classList.remove(ACTIVE_CLASS_MAP[ACTIVE]);
    }
  });
}

// for focussing the div when clicking on the editable div
function focusEditableDiv() {
  editableDiv.focus();
}

let savedSelection = null;

// adding event listener to all formatting button
optionsButton.forEach((button) => {
  button.addEventListener("click", () => {
    // save the selection before formatting
    modifyText(button.id, false, null);
    removeHighlighter(button);
    focusEditableDiv();
  });
});

const modifyText = (command, defaultUi, value) => {
    console.log({command, defaultUi, value})
  document.execCommand(command, defaultUi, value);
};
