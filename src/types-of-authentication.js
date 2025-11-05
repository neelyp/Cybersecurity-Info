import { html, render } from "lit-html";
import { ref } from "lit-html/directives/ref.js";
import typesAuth from "/types-of-auth.png";

const authCategories = {
  knowledge: {
    title: "Something You Know",
    prompt: "Uses information only the user knows.",
    examples: ["Password", "PIN", "Security question"],
    strengths: [
      "Easy to use and set up.",
      "No extra device needed.",
      "Familiar to everyone.",
    ],
    gaps: "Can be guessed, stolen, or reused across sites.",
  },
  possession: {
    title: "Something You Have",
    prompt: "Uses a physical item or device for login.",
    examples: ["Smartcard", "Key fob", "Authenticator app"],
    strengths: [
      "Only works if you have the item.",
      "Hard to steal remotely.",
      "Supports one-time codes.",
    ],
    gaps: "Losing the device can block access or cause risk.",
  },
  inherence: {
    title: "Something You Are",
    prompt: "Uses traits unique to the person.",
    examples: ["Fingerprint", "Face scan", "Voice pattern"],
    strengths: [
      "Fast and convenient.",
      "Hard to fake or share.",
      "Confirms real identity.",
    ],
    gaps: "Privacy issues and errors from injuries or changes.",
  },
};

let listRef;
let detailRef;
let activeCategory = "knowledge";

const renderAuthDetails = (key) => {
  activeCategory = key;

  if (listRef) {
    listRef.querySelectorAll("[data-auth]").forEach((item) => {
      const isActive = item.dataset.auth === key;
      item.classList.toggle("is-active", isActive);
      item.setAttribute("aria-pressed", isActive ? "true" : "false");
    });
  }

  if (!detailRef) return;

  const { title, prompt, examples, strengths, gaps } = authCategories[key];

  const markup = html`
    <article class="auth-card">
      <header class="auth-card__header">
        <h3>${title}</h3>
        <p>${prompt}</p>
      </header>
      <div class="auth-card__columns">
        <section>
          <h4>Common Methods</h4>
          <ul>
            ${examples.map((item) => html`<li>${item}</li>`)}
          </ul>
        </section>
        <section>
          <h4>Strengths</h4>
          <ul>
            ${strengths.map((item) => html`<li>${item}</li>`)}
          </ul>
        </section>
      </div>
      <p class="auth-card__gap">${gaps}</p>
    </article>
  `;

  render(markup, detailRef);
};

const handleKeydown = (event, key) => {
  if (event.key !== "Enter" && event.key !== " ") return;
  event.preventDefault();
  renderAuthDetails(key);
};

const authenticationTemplate = () => html`
  <section class="authentication" id="authentication">
    <header class="authentication__hero">
      <div>
        <h2>Types of Authentication</h2>
        <p>
          Every type of authentication has strengths and weaknesses, but using
          them together can make your system so much more secure
        </p>
      </div>
      <figure class="data-states__figure">
        <img src=${typesAuth} alt="Four types of authentication" />
        <figcaption>
          Track where your information lives to protect it.
        </figcaption>
      </figure>
    </header>
    <div class="authentication__content">
      <ul
        class="authentication__list"
        ${ref((element) => {
          if (!element) return;
          listRef = element;
          renderAuthDetails(activeCategory);
        })}
      >
        ${Object.entries(authCategories).map(
          ([key, { title, prompt }]) => html`
            <li
              class="authentication__list-item${activeCategory === key
                ? " is-active"
                : ""}"
              data-auth=${key}
              @click=${() => renderAuthDetails(key)}
              @keydown=${(event) => handleKeydown(event, key)}
              tabindex="0"
              role="button"
              aria-pressed=${activeCategory === key}
            >
              <h3>${title}</h3>
              <p>${prompt}</p>
            </li>
          `
        )}
      </ul>
      <div
        class="authentication__detail"
        ${ref((element) => {
          if (!element) return;
          detailRef = element;
          if (!detailRef.hasChildNodes()) {
            renderAuthDetails(activeCategory);
          }
        })}
      ></div>
    </div>
    <p class="section-sources">source: cyber.org</p>
  </section>
`;

export { authenticationTemplate };
