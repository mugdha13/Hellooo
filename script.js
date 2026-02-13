/* YES button → confetti */

function sayYes() {
  document.getElementById("response").innerHTML =
  "You just made me the happiest ❤️";

  launchConfetti();

  document.getElementById("loveLetter").scrollIntoView({
  behavior: "smooth"})
}

/* Moving NO button */

function moveButton() {
  const btn = document.getElementById("noBtn");

  const x = Math.random() * (window.innerWidth - 150);
  const y = Math.random() * (window.innerHeight - 150);

  btn.style.position = "absolute";
  btn.style.left = x + "px";
  btn.style.top = y + "px";
}

/* Floating hearts */

function createHeart() {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.innerHTML = "❤️";

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = Math.random() * 20 + 20 + "px";

  document.body.appendChild(heart);

  setTimeout(() => heart.remove(), 6000);
}

setInterval(createHeart, 300);

/* CONFETTI */

function launchConfetti() {
  for (let i = 0; i < 150; i++) {
    const confetti = document.createElement("div");

    confetti.style.position = "fixed";
    confetti.style.width = "10px";
    confetti.style.height = "10px";
    confetti.style.background =
      `hsl(${Math.random() * 360}, 70%, 60%)`;

    confetti.style.left = Math.random() * 100 + "vw";
    confetti.style.top = "-20px";
    confetti.style.borderRadius = "50%";

    document.body.appendChild(confetti);

    const fall = confetti.animate(
      [{ transform: "translateY(0)" }, { transform: "translateY(110vh)" }],
      { duration: 2000 + Math.random() * 2000 }
    );

    fall.onfinish = () => confetti.remove();
  }
}

/* OPEN LETTER + TYPEWRITER */

const text =
"I just wanted to say how grateful I am to have you in my life. You make ordinary days feel special and everything feels easier with you around. Thank you for being you.";

let i = 0;

function openLetter() {
  document.getElementById("letterBox").classList.remove("hidden");

  if (i === 0) typeWriter();
}

function typeWriter() {
  if (i < text.length) {
    document.getElementById("typedText").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, 40);
  }
}
