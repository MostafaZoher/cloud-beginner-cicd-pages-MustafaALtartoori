const curseBtn = document.getElementById("curseBtn");
const whisperBtn = document.getElementById("whisperBtn");

const statusText = document.getElementById("statusText");
const whisperText = document.getElementById("whisperText");
const omenText = document.getElementById("omenText");

let cursed = false;

const whispers = [
  "I see a push… the tunnel opens.",
  "The workflow awakens on main…",
  "Checks succeed. The artifact is sealed.",
  "Deploying… the Pages portal breathes.",
  "Refresh… the new version rises.",
  "A green check appears. The curse is satisfied.",
  "One more commit… and the site transforms."
];

function randomWhisper() {
  const i = Math.floor(Math.random() * whispers.length);
  return whispers[i];
}

function setOmen() {
  omenText.innerText = cursed
    ? "Push → Actions Run ✅ → Deploy → Pages Updated"
    : "Push → Run → Deploy";
}

function shakeOnce() {
  document.body.classList.add("shake");
  setTimeout(() => document.body.classList.remove("shake"), 320);
}

curseBtn.addEventListener("click", () => {
  cursed = !cursed;
  document.body.classList.toggle("cursed", cursed);

  statusText.innerText = cursed ? "Awakened ✅" : "Dormant";
  whisperText.innerText = cursed
    ? "The pipeline is alive. Make a push to feed it."
    : "Silence returns… until the next commit.";

  curseBtn.innerText = cursed ? "Seal the Curse" : "Awaken the Curse";

  setOmen();
  shakeOnce();
});

whisperBtn.addEventListener("click", () => {
  whisperText.innerText = randomWhisper();
  shakeOnce();
});