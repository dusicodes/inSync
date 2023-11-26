//Get the select element
var colorSelect = document.querySelectorAll("box");
var fontColorSelect = document.querySelectorAll("circle");
// var fontSizeOurs = document.getElementById("font-size-slider");
var resetButton = document.querySelectorAll("reset");

//NEW STUFF THAT I ADDED
colorSelect.forEach(function (item) {
  // this is new *** EXPLAIN TMR"
  item.onclick = function (e) {
    console.log(this.innerText);
    let overlayColor = this.innerText; // this returns clicked li's value
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.sendMessage(tabs[0].id, { color: overlayColor });
    });
  };
});

fontColorSelect.forEach(function (item) {
  // this is new *** EXPLAIN TMR"
  item.onclick = function (e) {
    console.log(this.innerText);
    let fontColor = this.innerText; // this returns clicked li's value
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.sendMessage(tabs[0].id, { fontColor: fontColor });
    });
  };
});

resetButton.forEach(function (item) {
  // this is new *** EXPLAIN TMR"
  item.onclick = function (e) {
    console.log(this.innerText);
    let reload = this.innerText; // this returns clicked li's value
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.sendMessage(tabs[0].id, { reload: reload });
    });
  };
});
// this is new *** EXPLAIN TMR"

//THIS IS THE OLD STUFF

//Listen for changes to the select element
// colorSelect.addEventListener("click", function () {
//   //Get the selected color
//   var color = colorSelect.value;

//   //Send a message to the content script to change the background color
//   chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
//     chrome.tabs.sendMessage(tabs[0].id, { color: color });
//   });
// });

// changeFontSize.addEventListener("change", function() {
// //Get the selected color
//     console.log("Hello");
//      var font = changeFontSize.value;
//      //Send a message to the content script to change the font size
//      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
//      chrome.tabs.sendMessage(tabs[0].id, {font: font});

//    });
//  });

// changeFontSize.addEventListener("change", function() {
//     var font = document.getElementById("font-size-slider").value;

//     console.log("Change font size Hello ");
//     chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
//     chrome.tabs.sendMessage(tabs[0].id, {font: font});
//     });
// });

// fontColorSelect.addEventListener("change", function () {
//   //Get the selected color
//   var fontColor = fontColorSelect.value;
//   //Send a message to the content script to change the background color
//   chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
//     chrome.tabs.sendMessage(tabs[0].id, { fontColor: fontColor });
//   });
// });
