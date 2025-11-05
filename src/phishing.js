import { html, render } from "lit-html";
import { ref } from "lit-html/directives/ref.js";

const phishingVectors = {
  email: {
    title: "Spear Phishing",
    overview:
      "Attackers send targeted emails that look real to steal data or get clicks on malicious links.",
    redFlags: [
      "Sender address looks slightly off or misspelled.",
      "Urgent or emotional tone pushing quick action.",
      "Unexpected links, attachments, or invoices.",
    ],
    defenses: [
      "Check sender and hover over links before clicking.",
      "Don’t share info or passwords by email.",
      "Report suspicious messages to IT or security.",
    ],
  },
  smishing: {
    title: "Smishing",
    overview:
      "Fake text or chat messages trick users into clicking links or giving personal info.",
    redFlags: [
      "Unknown numbers or short code senders.",
      "Shortened or odd-looking links.",
      "Claims about locked accounts or missed deliveries.",
    ],
    defenses: [
      "Don’t tap links in random texts.",
      "Block and delete suspicious messages.",
      "Use official apps or websites to verify alerts.",
    ],
  },
  vishing: {
    title: "Vishing",
    overview:
      "Scammers call pretending to be banks, tech support, or company staff to get private info.",
    redFlags: [
      "Asks for passwords, PINs, or one-time codes.",
      "High-pressure tone or threats of penalties.",
      "Spoofed or unfamiliar caller numbers.",
    ],
    defenses: [
      "Hang up and call the real company directly.",
      "Never share codes or credentials by phone.",
      "Use call-blocking or verified caller ID tools.",
    ],
  },
  spear: {
    title: "Whaling",
    overview:
      "Highly targeted phishing aimed at executives or finance teams using detailed personal info.",
    redFlags: [
      "Emails that look personal but feel slightly off.",
      "Unusual requests for money or sensitive data.",
      "Fake messages posing as leaders or partners.",
    ],
    defenses: [
      "Verify large or unusual requests by phone or chat.",
      "Train staff to spot targeted phishing.",
      "Use strong email filters and sender verification.",
    ],
  },
};

let listRef;
let detailRef;
let activeVector = "email";

const renderPhishingDetails = (key) => {
  activeVector = key;

  if (listRef) {
    listRef.querySelectorAll("[data-vector]").forEach((item) => {
      const isActive = item.dataset.vector === key;
      item.classList.toggle("is-active", isActive);
      item.setAttribute("aria-pressed", isActive ? "true" : "false");
    });
  }

  if (!detailRef) return;

  const { title, overview, redFlags, defenses, caseStudy } =
    phishingVectors[key];

  const markup = html`
    <article class="phishing-card">
      <header class="phishing-card__header">
        <h3>${title}</h3>
        <p>${overview}</p>
      </header>
      <div class="phishing-card__columns">
        <section>
          <h4>Watch for these signs</h4>
          <ul>
            ${redFlags.map((item) => html`<li>${item}</li>`)}
          </ul>
        </section>
        <section>
          <h4>Defenses & Training</h4>
          <ul>
            ${defenses.map((item) => html`<li>${item}</li>`)}
          </ul>
        </section>
      </div>
      <p class="phishing-card__note">${caseStudy}</p>
    </article>
  `;

  render(markup, detailRef);
};

const handleKeydown = (event, key) => {
  if (event.key !== "Enter" && event.key !== " ") return;
  event.preventDefault();
  renderPhishingDetails(key);
};

const phishingTemplate = () => html`
  <section class="phishing" id="phishing">
    <header class="phishing__hero">
      <div>
        <h2>Phishing Playbook</h2>
        <p>Phishing works by abusing human's natural trust and helpfulness.</p>
      </div>
      <div class="phishing__hero-card">
        <p>3.4 billion phishing emails are sent every day.</p>
      </div>
    </header>
    <div class="phishing__content">
      <ul
        class="phishing__list"
        ${ref((element) => {
          if (!element) return;
          listRef = element;
          renderPhishingDetails(activeVector);
        })}
      >
        ${Object.entries(phishingVectors).map(
          ([key, { title, overview }]) => html`
            <li
              class="phishing__list-item${activeVector === key
                ? " is-active"
                : ""}"
              data-vector=${key}
              @click=${() => renderPhishingDetails(key)}
              @keydown=${(event) => handleKeydown(event, key)}
              tabindex="0"
              role="button"
              aria-pressed=${activeVector === key}
            >
              <h3>${title}</h3>
              <p>${overview}</p>
            </li>
          `
        )}
      </ul>
      <div
        class="phishing__detail"
        ${ref((element) => {
          if (!element) return;
          detailRef = element;
          if (!detailRef.hasChildNodes()) {
            renderPhishingDetails(activeVector);
          }
        })}
      ></div>
    </div>
    <p class="section-sources">source: cyber.org, AAG IT Services</p>
  </section>
`;

export { phishingTemplate };
