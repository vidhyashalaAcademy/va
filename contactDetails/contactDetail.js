// Function to set a cookie with a specific name, value, and expiry date

function setCookie(cookieName, cookieValue, expiryDays) {
    var d = new Date();
    d.setTime(d.getTime() + (expiryDays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cookieName + "=" + cookieValue + ";" + expires + ";path=/";
}

// Function to get the value of a cookie by its name
function getCookie(cookieName) {
    var name = cookieName + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var cookieArray = decodedCookie.split(';');
    for (var i = 0; i < cookieArray.length; i++) {
        var cookie = cookieArray[i];
        while (cookie.charAt(0) == ' ') {
            cookie = cookie.substring(1);
        }
        if (cookie.indexOf(name) == 0) {
            return cookie.substring(name.length, cookie.length);
        }
    }
    return "";
}

// Function to check if the popup should be displayed
function checkPopup() {
    var popupShown = getCookie("popupShown");
    if (popupShown === "") {
        // Popup not shown before, display it
        document.getElementById("popup-form").style.display = "block";
        // Set a cookie to indicate that the popup has been shown
        setCookie("popupShown", "true", 30); // Cookie expires in 30 days
    }
}

// Function to close the popup when the close button is clicked
document.getElementById("close-button").addEventListener("click", function() {
    document.getElementById("popup-form").style.display = "none";
});

// Call the checkPopup function when the page loads
window.onload = checkPopup;