let btn = document.querySelector("#btn");
let content = document.querySelector("#content");
let voice = document.querySelector("#voice");

function speak(text) {
  let text_speak = new SpeechSynthesisUtterance(text);
  text_speak.rate = 1;
  text_speak.pitch = 1;
  text_speak.volume = 1;
  text_speak.lang = "hi-GB";
  window.speechSynthesis.speak(text_speak);
}

function wishme() {
  let day = new Date();
  hours = day.getHours();
  if (hours >= 0 && hours < 12) {
    speak("Good morning Sir");
  } else if (hours >= 12 && hours < 4) {
    speak("Good Afternoon Sir");
  } else {
    speak("good evening Sir");
  }
}

window.addEventListener("load", () => {
  wishme();
});

let speechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
let recognition = new speechRecognition();
recognition.onresult = (event) => {
  let currentIndex = event.resultIndex;
  let transcript = event.results[currentIndex][0].transcript;
  content.innerText = transcript;
  takeCommand(transcript.toLowerCase());
};
btn.addEventListener("click", () => {
  recognition.start();
  btn.style.display = "none";
  voice.style.display = "block";
});

function takeCommand(message) {
  btn.style.display = "flex";
  voice.style.display = "none";
  if (message.includes("hello")) {
    speak("hello Sir, what can i help you?");
  } else if (message.includes("how are you")) {
    speak("I am good Thankyou");
  } else if (message.includes("who are you")) {
    speak("i am virtual assistent ,created by hammad khan");
  } else if (message.includes("How was the weather")) {
    speak("check from internet give your city name and check easily");
  } else if (message.includes("open youtube")) {
    speak("opening youtube");
    window.open("https://www.youtube.com/", "_blank");
  } else if (message.includes("google")) {
    speak("opening google");
    window.open("https://www.google.com/ ", "_blank");
  } else if (message.includes("open facebook")) {
    speak("opening facebook");
    window.open("https://www.facebook.com/", "_blank");
  } else if (message.includes("open instagram")) {
    speak("opening instagram");
    window.open("https://www.instagram.com/", "_blank");
  } else if (message.includes("time")) {
    let time = new Date().toLocaleString(undefined, {
      hour: "numeric",
      minute: "numeric",
    });
    speak(time);
  } else if (message.includes("day")) {
    let day = new Date().toLocaleString(undefined, {
      day: "numeric",
      month: "short",
    });
    speak(day);
  } else if (message.includes("hamza")) {
    speak("hamza is a good boy ");
  } else if (message.includes("Huzaifa")) {
    speak("Huzaifa is a good boy ");
  } else if (message.includes("shayan")) {
    speak("shayan is a good boy ");
  } else if (message.includes("jawad")) {
    speak("jawad is a mootaa khan");
  } else {
    let finalText =
      "this is what i found on internet regarding" +
        message.replace("shifra", "") || message.replace("shipra", "");
    speak(finalText);
    window.open(
      `https://www.google.com/search?q=${message.replace("shifra", "")}`,
      "_blank"
    );
  }
}
