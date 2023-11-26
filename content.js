//Listen for messages from the popup
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  //Check if the message is to change the background color
  if (request.color) {
    // Change the background color of the page
    // console.log("working");
    // document.body.style.color = request.color;

    var existingOverlay = document.getElementById("colorOverlay");
    if (existingOverlay) {
      existingOverlay.parentNode.removeChild(existingOverlay);
    }

    // var overlay = document.createElement("div-test-2023");
    // element.remove();
    // overlay.style.display = none;
    var overlayColor = request.color;
    var overlay = document.createElement("div");
    overlay.id = "colorOverlay";
    overlay.style.position = "fixed";
    overlay.style.top = "0";
    overlay.style.left = "0";
    overlay.style.width = "100%";
    overlay.style.height = "100%";
    overlay.style.background = overlayColor;
    overlay.style.zIndex = "9999999999";
    document.body.appendChild(overlay);
    overlay.style.pointerEvents = "none";
    // document.body.style.fontSize = 1.5;
  }

  // if (request.font) {
  //     console.log("Hello");
  //     var html = document.querySelectorAll("html");
  //     // var span = document.querySelector("span");
  //     var changeFont = request.font;
  //     html.style.fontSize = `${changeFont}px`;
  //     // span.style.fontSize = `${changeFont}px`;
  //     // font.style.size = changeFont;

  // }

  if (request.fontColor) {
    console.log("Is working");
    // document.body.style.backgroundColor = request.fontColor;
    document.querySelector("body").style.color = request.fontColor;
    // document.querySelector("a").innerHTML.style.color = request.fontColor;
  }
});
