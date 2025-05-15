
const input = prompt("Enter a website name (instagram, facebook, google):");

if (input.toLowerCase() === "instagram") {
    window.location.href = "https://www.instagram.com";
} else if (input.toLowerCase() === "facebook") {
    window.location.href = "https://www.facebook.com";
} else if (input.toLowerCase() === "google") {
    window.location.href = "https://www.google.com";
} else {
    alert("Website not recognized.");
}