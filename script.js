// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Live status clock in the header — a small, single deliberate motion
// moment tying into the "watch / monitoring" theme. Purely cosmetic,
// safe to remove if you don't want it.
const clockEl = document.getElementById("statusClock");
const contactBtn = document.getElementById('contact-btn');
const projectBtn = document.getElementById('project-btn')

contactBtn.addEventListener('click', () => {
  document.getElementById('contact').scrollIntoView({
    behavior: 'smooth'
  });
})

projectBtn.addEventListener('click', () => {
  document.getElementById('projects').scrollIntoView({
    behavior: 'auto'
  })
})

function tick() {
  const now = new Date();
  const hh = String(now.getHours()).padStart(2, "0");
  const mm = String(now.getMinutes()).padStart(2, "0");
  const ss = String(now.getSeconds()).padStart(2, "0");
  clockEl.textContent = `${hh}:${mm}:${ss}`;
}

tick();
setInterval(tick, 1000);

// Optional: swap the status text for something else at will —
// e.g. wire this up later to a real "last commit" or "last scan" value.
// document.getElementById("statusText").textContent = "last scan: 2m ago";
