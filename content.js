// Find the button element
var button_ssh = document.querySelector(".btn.btn-sm.js-clipboard-copy.tooltipped-no-delay.ClipboardButton.js-clone-url-ssh");
var button_https = document.querySelector(".btn.btn-sm.js-clipboard-copy.tooltipped-no-delay.ClipboardButton.js-clone-url-http");

// Add a click event listener to the SSH button
button_ssh.addEventListener("click", function() {
    // Get the name of repo from url
    var url = window.location.href;
    var re = /github\.com\/([^\/]+)\/([^\/]+)\/?/;
    var match = url.match(re);
    // If the URL matches the expected pattern, modify the clipboard contents
    if (match) {
        var repo = match[1] + "/" + match[2];
        var cloneUrl = "git clone git@github.com:" + repo + ".git";

        // Copy the text to the clipboard
        navigator.clipboard.writeText(cloneUrl)
    }
});


// Add a click event listener to the HTTPS button
button_https.addEventListener("click", function() {
    // Get the name of repo from url
    var url = window.location.href;
    var re = /github\.com\/([^\/]+)\/([^\/]+)\/?/;
    var match = url.match(re);
    // If the URL matches the expected pattern, modify the clipboard contents
    if (match) {
        var repo = match[1] + "/" + match[2];
        var cloneUrl = "git clone https://github.com/" + repo + ".git";

        // Copy the text to the clipboard
        navigator.clipboard.writeText(cloneUrl)
    }
});

