// Function to store user preferences in localStorage
function saveUserPreference(preference) {
    localStorage.setItem("userPreference", preference);
}

// Function to retrieve user preferences from localStorage
function getUserPreference() {
    return localStorage.getItem("userPreference");
}

// Add an event listener to trigger animation when the button is clicked
document.getElementById('animateButton').addEventListener('click', function() {
    // Get the user preference
    const userPref = getUserPreference();
    
    if (!userPref) {
        alert("No user preference found, saving preference...");
        saveUserPreference("animationTriggered"); // Save default preference
    } else {
        alert("User preference found: " + userPref);
    }

    // Trigger CSS animation for the box element
    const box = document.getElementById('box');
    box.style.animation = "moveBox 2s ease-in-out"; // Start the animation

    // Reset the animation to allow it to be triggered again
    box.addEventListener('animationend', function() {
        box.style.animation = "";
    });
});
