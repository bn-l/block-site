const getParam = (name: string) => (new URLSearchParams(window.location.search)).get(name);

const setSpan = (id: string, content: string) => {
  const span = document.getElementById(id) as HTMLSpanElement;
  span.textContent = content;
};

var motivationalQuotes = [
  "My current motivational state does not need to match my intention in order to act",
  "_____ succeeded because they struggled successfully inspite of fears and doubts",
  "The emotions are the same but the responses are different",
  "People don't do projects, they do actions. What's the next action?",
  "Emotions do not need to match the task--Just get started.",
  "Challenge negative thoughts as they arise.",
  "Doing x,y,z has never helped in the past. Why will it now?",
  "Mood repair"
];

var chosenQuote = motivationalQuotes[Math.floor(Math.random() * motivationalQuotes.length)];

window.addEventListener("DOMContentLoaded", () => {
  const url = getParam("url");
  if (url) {
    setSpan("url", url);
  }

  const count = getParam("count");
  if (count) {
    setSpan("count", ` ${count}x`);
  }

  setSpan("m-quote", chosenQuote);
});
