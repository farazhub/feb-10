/* ---------- LOGIN CHECK ---------- */
function checkName() {
  const input = document.getElementById("nameInput")?.value
    .trim()
    .toLowerCase();
  const error = document.getElementById("error");
  const button = document.querySelector("button");

  if (input === "amna farhan") {
    window.location.href = "birthday.html";
  } else {
    if (error) {
      error.innerText = "Hint: enter the name of Faraz's only love 💕";
    }
    if (button) {
      button.classList.add("wiggle");
      setTimeout(() => button.classList.remove("wiggle"), 400);
    }
  }
}

/* ---------- FLOATING HEARTS ---------- */
if (document.querySelector(".birthday-body")) {
  const container = document.body;

  setInterval(() => {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerText = "💖";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = Math.random() * 20 + 15 + "px";
    heart.style.animationDuration = Math.random() * 3 + 4 + "s";

    container.appendChild(heart);

    setTimeout(() => heart.remove(), 6000);
  }, 400);
}

/* ---------- ROW REVEAL (FIXED) ---------- */
const rows = document.querySelectorAll(".row");

/* show rows immediately on load */
rows.forEach(row => row.classList.add("show"));

/* optional scroll reveal (still works if page grows) */
window.addEventListener("scroll", () => {
  rows.forEach(row => {
    const rect = row.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      row.classList.add("show");
    }
  });
});
