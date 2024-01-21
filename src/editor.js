// making the config for more useability
const ACTIVE = "ACTIVE";

const ACTIVE_CLASS_MAP = {
  [ACTIVE]: "active",
};

const optionsButton = document.querySelectorAll(".option-button");
const editableDiv = document.querySelector("#editable");
editableDiv.focus();
const elementTypeSelect = document.querySelector("#elementType");
const selectFontType = document.querySelector("#selectFontType");
const colorPicker = document.querySelector("#colorPicker");
const highLighter = document.querySelector("#highLighter");

// creating option for elementType
const elementTagOptions = [
  { title: "H1", value: "h1" },
  { title: "H2", value: "h2" },
  { title: "H3", value: "h3" },
  { title: "H4", value: "h4" },
  { title: "H5", value: "h5" },
  { title: "H6", value: "h6" },
  { title: "P", value: "p" },
];

let fontList = [
  "Arial",
  "Verdana",
  "Times New Roman",
  "Garamond",
  "Georgia",
  "Courier New",
  "cursive",
];

// giving the default value to select tag

elementTypeSelect.value = "h1";
elementTypeSelect.textContent = "H1";
selectFontType.value = fontList[0];
selectFontType.textContent = fontList[0];

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

elementTypeSelect.addEventListener("change", () => {
  const tagName = elementTypeSelect.value;
  modifyText("formatBlock", false, tagName);
  focusEditableDiv();
});

selectFontType.addEventListener("change", () => {
  modifyText("fontName", false, selectFontType.value);
  focusEditableDiv();
});

fontList.forEach((item) => {
  const option = document.createElement("option");
  option.textContent = item;
  option.value = item;
  selectFontType.appendChild(option);
});

elementTagOptions.forEach((item) => {
    const option = document.createElement("option");
    option.textContent = item?.value;
    option.value = item?.value;
    elementTypeSelect.appendChild(option);
  });

// for focussing the div when clicking on the editable div
function focusEditableDiv() {
  editableDiv.focus();
}

// adding event listener to all formatting button
optionsButton.forEach((button) => {
  button.addEventListener("click", () => {
    // save the selection before formatting
    modifyText(button.id, false, null);
    removeHighlighter(button);
    focusEditableDiv();
    const selection = window.getSelection().getRangeAt(0);
    console.log({selection})
  });
});

const modifyText = (command, defaultUi, value) => {
  document.execCommand(command, defaultUi, value);
};

function selectHighlighter() {
  const highlightColor = highLighter?.value;
  modifyText("hiliteColor", false, highlightColor);
  focusEditableDiv();
}

function selectFontColor() {
  const fontColor = colorPicker?.value;
  modifyText("foreColor", false, fontColor);
  focusEditableDiv();
}

// function createRange() {
//     // below code is settng the range of the selected 
//   const range = document.createRange();
//   range.selectNode(editableDiv);
//   range.collapse(false);

//   // create an new range 
//   const newRange = document.createRange();
//   newRange.setStartAfter()

// }
