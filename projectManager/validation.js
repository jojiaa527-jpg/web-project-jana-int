//  1. Dynamic Greeting 
function showGreeting() {
    const greetingElement = document.getElementById("greeting_message");
    const now = new Date();
    const hour = now.getHours();

    let message = "";

    if (hour < 12) {
        message = "Good Morning ☀️";
    } else if (hour < 18) {
        message = "Good Afternoon 🌤";
    } else {
        message = "Good Evening 🌙";
    }

    if (greetingElement) {
        greetingElement.textContent = message;
    }
}


//  2. Current Time Display 
function showTime() {
    const timeElement = document.getElementById("current_time_display");
    const now = new Date();

    if (timeElement) {
        timeElement.textContent = now.toLocaleString();
    }
}


//  3. Real-Time Validation 
function validateProjectName() {
    const input = document.getElementById("project_name");
    const error = document.getElementById("name_error");

    if (!input) return;

    const value = input.value.trim();

    if (value.length < 3) {
        input.classList.add("is-invalid");
        input.classList.remove("is-valid");
        error.textContent = "Project name must be at least 3 characters.";
    } else {
        input.classList.remove("is-invalid");
        input.classList.add("is-valid");
        error.textContent = "";
    }
}


//  Run Functions 
document.addEventListener("DOMContentLoaded", function () {

    // Greeting + Time
    showGreeting();
    showTime();

    // Validation
    const input = document.getElementById("project_name");
    if (input) {
        input.addEventListener("keyup", validateProjectName);
    }
});