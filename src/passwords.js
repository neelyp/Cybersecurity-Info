import { html } from "lit-html";
import { ref } from "lit-html/directives/ref.js";

const numberWords = {
  zero: "0",
  one: "1",
  two: "2",
  three: "3",
  four: "4",
  five: "5",
  six: "6",
  seven: "7",
  eight: "8",
  nine: "9",
  ten: "10",
};

const steps = [
  {
    title: "Start with a phrase",
    detail:
      "Choose at least six words that you can remember easily. Try to have make one of your words a number.",
  },
  {
    title: "Swap in a number word",
    detail:
      'Spell out a number (like "seven" or "nine") so you can later convert it to digits.',
  },
  {
    title: "Add a symbol",
    detail:
      "End with punctuation or a symbol to finish off your secure password.",
  },
];

const requirements = [
  {
    key: "length",
    label: "Use six or more words",
  },
  {
    key: "numberWord",
    label: "Include a number word (zero–ten)",
  },
  {
    key: "unique",
    label: "Avoid repeating words",
  },
];

let requirementRefs = {};
let resultRef;
let messageRef;

const analyzePhrase = (phrase) => {
  const words = phrase
    .split(/\s+/)
    .map((word) => word.trim().toLowerCase())
    .filter(Boolean);

  const hasNumberWord = words.some((word) => word in numberWords);
  const uniqueWords = new Set(words);

  return {
    length: words.length >= 6,
    numberWord: hasNumberWord,
    unique: words.length > 0 && uniqueWords.size === words.length,
  };
};

const updateRequirements = (phrase) => {
  const results = analyzePhrase(phrase);

  Object.entries(results).forEach(([key, met]) => {
    const chip = requirementRefs[key];
    if (!chip) return;
    chip.classList.toggle("is-met", met);
    chip.setAttribute("aria-checked", met ? "true" : "false");
  });

  return results;
};

const createPassword = (phrase) => {
  const words = phrase
    .split(/\s+/)
    .map((word) => word.trim())
    .filter(Boolean);

  if (!words.length) return "";

  const initials = words.map((word) => word[0] ?? "").join("");
  let chars = initials.split("");

  words.some((word, index) => {
    const digit = numberWords[word.toLowerCase()];
    if (!digit) return false;
    chars[index] = digit;
    return true;
  });

  const randomized = chars
    .map((char, index) =>
      index % 2 === 0 ? char.toUpperCase() : char.toLowerCase()
    )
    .join("");

  const specialChars = "!@#$%^&*";
  const special = specialChars[Math.floor(Math.random() * specialChars.length)];
  const trailingDigit = Math.floor(Math.random() * 10);

  return `${randomized}${special}${trailingDigit}`;
};

const handleInput = (event) => {
  updateRequirements(event.target.value);
  if (messageRef) {
    messageRef.textContent = "";
  }
};

const handleSubmit = (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  const phrase = form.passphrase.value.trim();

  const results = updateRequirements(phrase);
  const allMet = Object.values(results).every(Boolean);

  if (!allMet) {
    if (messageRef) {
      messageRef.textContent = "Tweak the phrase so all three checks light up.";
    }
    if (resultRef) {
      resultRef.textContent = "";
    }
    return;
  }

  const suggestion = createPassword(phrase);
  if (resultRef) {
    resultRef.textContent = suggestion;
  }
  if (messageRef) {
    messageRef.textContent =
      "Generated suggestion — customize it before you use it anywhere.";
  }
};

const passwords = () => {
  requirementRefs = {};

  return html`
    <section class="passwords" id="passwords">
      <header class="passwords__hero">
        <div>
          <h2>Build Strong Passwords</h2>
          <p>
            Passphrases balance memorability and strength. Craft a sentence you
            can remember, then remix it with symbols to slow attackers down.
          </p>
        </div>
        <div class="passwords__hero-card">
          <p>
            Using a passphrase like
            <em>"five robots juggle citrus on Saturday"</em>. is a good way to
            make a strong password since it is easy to remember but hard to
            guess.
          </p>
        </div>
      </header>
      <div class="passwords__content">
        <article class="passwords__guide">
          <h3>Passphrase Playbook</h3>
          <ul class="passwords__steps">
            ${steps.map(
              ({ title, detail }) => html`
                <li class="passwords__step">
                  <h4>${title}</h4>
                  <p>${detail}</p>
                </li>
              `
            )}
          </ul>
        </article>
        <article class="passwords__generator">
          <h3>Phrase to Password</h3>
          <p>
            Write a six-word phrase below (spell out a number) and we will
            generate a password following the steps.
          </p>
          <form class="passwords__form" @submit=${handleSubmit}>
            <label class="passwords__label" for="passphrase">Your phrase</label>
            <textarea
              class="passwords__input"
              id="passphrase"
              name="passphrase"
              rows="3"
              placeholder="Example: five robots juggle citrus on saturday"
              @input=${handleInput}
            ></textarea>
            <ul class="passwords__requirements" role="list">
              ${requirements.map(
                ({ key, label }) => html`
                  <li
                    class="passwords__requirement"
                    data-requirement=${key}
                    role="switch"
                    aria-checked="false"
                    ${ref((element) => {
                      if (!element) return;
                      requirementRefs[key] = element;
                    })}
                  >
                    <span class="passwords__requirement-indicator"></span>
                    <span>${label}</span>
                  </li>
                `
              )}
            </ul>
            <button type="submit" class="passwords__button">Generate</button>
            <p
              class="passwords__message"
              ${ref((element) => (messageRef = element))}
            ></p>
          </form>
          <div class="passwords__result">
            <span>Suggestion:</span>
            <code ${ref((element) => (resultRef = element))}></code>
          </div>
        </article>
      </div>
      <p class="section-sources">source: cyber.org | codex to help with password generator</p>
    </section>
  `;
};

export { passwords };
