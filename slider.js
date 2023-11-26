// const fontSizeSlider = document.getElementById("font-size-slider");
// //const bodyText = document.querySelectorAll("section > div:nth-child");
// // const displayTextSpan = document.querySelector("span");

// fontSizeSlider.addEventListener("change", () => {
//   const fontSize = fontSizeSlider.value;
//   span.style.fontSize = `${fontSize}px`;
//   chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
// chrome.tabs.sendMessage(tabs[0].id, {font: font});
// //   displayTextSpan.style.fontSize = `${fontSize}px`;
// });
// });

// BACKUP::

// document.addEventListener('DOMContentLoaded', function () {
//     // Get the slider and content elements
//     var slider = document.getElementById('fontSlider');
//     // var content = document.getElementById('body');
//     var content = document.querySelector("body");

//     // Update font size when slider value changes
//     slider.addEventListener('input', function () {
//         var fontSize = this.value + 'px';
//         content.style.fontSize = fontSize;
//     });
// });


document.addEventListener('DOMContentLoaded', function () {
    // Get the slider and content elements
    var slider = document.getElementById('fontSlider');
    // var content = document.getElementById('body');
    var content = document.body.innerText;
    
    // Update font size when slider value changes
    slider.addEventListener('input', function () {
        var fontSize = this.value + 'px';
        content.style.fontSize = fontSize;
    });
});