// main.js
// Smooth Scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Select the button and the quote display area using the IDs you provided
const generateQuoteBtn = document.getElementById('generateQuoteBtn');
const quoteDisplay = document.getElementById('quoteDisplay');

// List of purpose insights
const insights = [
  "You were born on purpose, for a purpose.",
  "Ask not what the world needs. Ask what makes you come alive.",
  "Purpose often starts with pain. Follow it.",
  "When you follow peace, you often find purpose.",
  "You're not behind; you're being prepared.",
  "The thing you can't stop thinking about... that’s a clue.",
  "You won’t always feel ready. Start anyway.",
  "Purpose is when your existence starts to answer someone else’s questions.",
  "Purpose is often wrapped in service to others."
];

// Add a click event listener to the button
if (generateQuoteBtn && quoteDisplay) {
  generateQuoteBtn.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * insights.length);
    const randomInsight = insights[randomIndex];
    quoteDisplay.textContent = randomInsight;
  });
}

