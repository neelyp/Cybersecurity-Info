import { html, render } from "lit-html";
import { ref } from "lit-html/directives/ref.js";
import data from "/data-states.png";

const states = {
  rest: {
    title: "Data at Rest",
    focus: "Stored on drives, backups, or archives waiting to be used.",
    description:
      "Data at rest lives on endpoints, servers, or cloud storage. It may feel safe, but if devices are lost or storage is misconfigured attackers can copy everything silently.",
    risks: [
      "Stolen or lost hardware containing unencrypted disks",
      "Overexposed cloud storage buckets",
      "Weak access controls on shared file systems",
    ],
    safeguards: [
      "Encrypt storage and backups with strong keys",
      "Segment data based on sensitivity",
      "Rotate credentials and audit access logs",
    ],
    takeaway:
      "Treat stored data like cash in a vault—layer controls so thieves never get a clear shot.",
  },
  transit: {
    title: "Data in Transit",
    focus: "Moving across networks, APIs, and messaging systems.",
    description:
      "Data in motion crosses public and private networks where eavesdroppers can intercept, replay, or manipulate packets. Secure transit keeps messages private and intact.",
    risks: [
      "Man-in-the-middle interceptions",
      "Session hijacking on unsecured Wi-Fi",
      "Protocol downgrade attacks that bypass encryption",
    ],
    safeguards: [
      "Use TLS, VPNs, or secure tunnels end-to-end",
      "Pin certificates and validate sender identities",
      "Disable legacy protocols and enforce modern cipher suites",
    ],
    takeaway:
      "Move data through trusted, verified channels so no one can listen in or tamper silently.",
  },
  use: {
    title: "Data in Use",
    focus: "Actively processed by applications, analytics, or users.",
    description:
      "When systems process data, it often appears in memory or on screens. Attackers target these moments with implants, insider misuse, or screen scraping.",
    risks: [
      "Compromised endpoints capturing screenshots or keystrokes",
      "Memory scraping malware",
      "Over-privileged users exporting sensitive reports",
    ],
    safeguards: [
      "Apply least privilege and just-in-time access",
      "Harden endpoints with EDR and application controls",
      "Mask or tokenize sensitive fields during processing",
    ],
    takeaway:
      "Limit who can see live data and monitor usage closely to catch abuse quickly.",
  },
};

let detailContainer;
let listContainer;
let selectedState = "rest";

const renderStateDetails = (key) => {
  selectedState = key;

  if (listContainer) {
    listContainer.querySelectorAll("[data-state]").forEach((item) => {
      const isActive = item.dataset.state === key;
      item.classList.toggle("is-active", isActive);
      item.setAttribute("aria-pressed", isActive ? "true" : "false");
    });
  }

  if (!detailContainer) return;

  const { title, focus, description, risks, safeguards, takeaway } =
    states[key];

  const markup = html`
    <article class="data-state-card">
      <header class="data-state-card__header">
        <h3>${title}</h3>
        <p>${focus}</p>
      </header>
      <p>${description}</p>
      <div class="data-state-card__columns">
        <section>
          <h4>Risks</h4>
          <ul>
            ${risks.map((risk) => html`<li>${risk}</li>`)}
          </ul>
        </section>
        <section>
          <h4>Safeguards</h4>
          <ul>
            ${safeguards.map((safeguard) => html`<li>${safeguard}</li>`)}
          </ul>
        </section>
      </div>
      <p class="data-state-card__takeaway">${takeaway}</p>
    </article>
  `;

  render(markup, detailContainer);
};

const handleKeydown = (event, key) => {
  if (event.key !== "Enter" && event.key !== " ") return;
  event.preventDefault();
  renderStateDetails(key);
};

const dataStates = () => html`
  <section class="data-states" id="data-states">
    <header class="data-states__hero">
      <div>
        <h2>Data States</h2>
        <p>
          Data is catagorized into states based on how it exists: at rest, in
          transit, or in use.
        </p>
      </div>
      <figure class="data-states__figure">
        <img src=${data} alt="Data States Diagram" />
        <figcaption>
          Track where your information lives to protect it.
        </figcaption>
      </figure>
    </header>
    <div class="data-states__content">
      <ul
        class="data-states__list"
        ${ref((element) => {
          if (!element) return;
          listContainer = element;
          renderStateDetails(selectedState);
        })}
      >
        ${Object.entries(states).map(
          ([key, { title, focus }]) => html`
            <li
              class="data-states__list-item${selectedState === key
                ? " is-active"
                : ""}"
              data-state=${key}
              @click=${() => renderStateDetails(key)}
              @keydown=${(event) => handleKeydown(event, key)}
              tabindex="0"
              role="button"
              aria-pressed=${selectedState === key}
            >
              <h3>${title}</h3>
              <p>${focus}</p>
            </li>
          `
        )}
      </ul>
      <div
        class="data-states__detail"
        ${ref((element) => {
          if (!element) return;
          detailContainer = element;
          if (!detailContainer.hasChildNodes()) {
            renderStateDetails(selectedState);
          }
        })}
      ></div>
    </div>
    <p class="section-sources">source: cyber.org</p>
  </section>
`;

export { dataStates };
