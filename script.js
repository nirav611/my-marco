let btn = document.querySelector("#btn");
let content = document.querySelector("#content");
let voice = document.querySelector("#voice"); // Fixed variable name

function speak(text) {
    let text_speak = new SpeechSynthesisUtterance(text);
    text_speak.rate = 1;
    text_speak.pitch = 1;
    text_speak.volume = 1;
    text_speak.lang ="en-by"
    window.speechSynthesis.speak(text_speak);
}

function wishMe() {
    let day = new Date();
    let hours = day.getHours();
    if (hours >= 0 && hours < 12) {
        speak("Good Morning Sir");
    } else if (hours >= 12 && hours < 16) {
        speak("Good Afternoon Sir");
    } else {
        speak("Good Evening Sir");
    }
}
window.addEventListener("load", () => {
    wishMe();
});

let speechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
let recognition = new speechRecognition();
recognition.onresult = (event) => {
    let currentIndex = event.resultIndex;
    let transcript = event.results[currentIndex][0].transcript;
    content.innerText = transcript;
    takeCommand(transcript.toLowerCase()); // Fixed function call
};
btn.addEventListener("click", () => {
    recognition.start();
    btn.style.display = "none";
    voice.style.display = "block";
});

function takeCommand(message) {
    btn.style.display = "flex";
    voice.style.display = "none";

    if (message.includes("hello") || message.includes("hey") || message.includes("hi")){
        speak("Hello sir, what can I help you with?");

    } else if (message.includes("who are you")) {
        speak("I am marco for virtual assistant, created by nirav Sir.");

    } else if (message.includes("what is your name")) {
        speak("my name is marco");

    } else if (message.includes("how are you")) {
        speak("i am fine,what can I help you with sir?");

    } else if (message.includes("give me a answer")) {
        speak("yes, please speak you.");

    } else if (message.includes("what si my name")) {
        speak("i don't know your name, please tell me your name.");

    } else if (message.includes("open google")) {
        speak("Opening google...");
        window.open("https://www.google.co.in", "_blank");   

    } else if (message.includes("open youtube")) {
        speak("Opening YouTube...");
        window.open("https://www.youtube.com", "_blank");

    } else if (message.includes("open chatgpt")) {
        speak("Opening ChatGPT...");
        window.open("https://chatgpt.com", "_blank");

    } else if (message.includes("open instagram")) {
        speak("Opening Instagram...");
        window.open("https://www.instagram.com", "_blank");

    } else if (message.includes("open whatsapp")) {
        speak("Opening WhatsApp...");
        window.open("https://web.whatsapp.com", "_blank");
 
    } else if (message.includes("open facebook")) {
        speak("Opening Facebook...");
        window.open("https://www.facebook.com", "_blank");
       
    } else if (message.includes("open settings")) {
        speak("Opening settings...");
        window.open("settings://", "_blank");

    } else if (message.includes("open calculator")) {
        speak("Opening calculator...");
        window.open("calculator://", "_blank");  

    } else if (message.includes("open music")) {
        speak("Opening music...");
        window.open("music://", "_blank");  

    } else if (message.includes("open my files")) {
        speak("Opening files...");
        window.open("files://", "_blank");  

    } else if (message.includes("open my Gallery")) {
        speak("Opening Gallery...");
        window.open("Gallery://", "_blank"); 

    } else if (message.includes("open my contacts")) {
        speak("Opening contacts...");
        window.open("contacts://", "_blank"); 

    } else if (message.includes("open my spotify")) {
        speak("Opening spotify...");
        window.open("spotify://", "_blank"); 

    } else if (message.includes("open my clock")) {
        speak("Opening clock...");
        window.open("clock://", "_blank"); 

    } else if (message.includes("open my calendar")) {
        speak("Opening calendar...");
        window.open("calendar://", "_blank"); 

    } else if (message.includes("open my messages")) {
        speak("Opening messages...");
        window.open("messages://", "_blank"); 

    } else if (message.includes("time")) {
        let time = new Date().toLocaleTimeString();
        speak("The current time is " + time);

    } else if (message.includes("date")) {
        let date = new Date().toLocaleDateString(undefined, { day: "numeric", month: "short" });
        speak("Today's date is " + date);

    } else {
        let searchQuery = message.replace("makro", "").replace("marco", "").trim();
        let finalText = "This is what I found on the internet regarding " + searchQuery;
        speak(finalText);
        window.open(`https://www.google.com/search?q=${searchQuery}`, "_blank");
    }
}