import { html, render } from "lit-html";
import { ref } from "lit-html/directives/ref.js";

const threatBuckets = {
  external: {
    title: "External Attackers",
    overview:
      "Criminals, hackers, and nation states try to steal data, disrupt systems, or demand ransom.",
    vectors: [
      "Phishing emails or fake websites to steal logins.",
      "Malware or ransomware delivered through downloads.",
      "Network scans or exploits of unpatched systems.",
    ],
    impacts: [
      "Loss of data or customer trust.",
      "Downtime and recovery costs.",
      "Damage to brand or public image.",
    ],
    preparation: "Use firewalls, train users, and test & fix vulnerabilities.",
  },
  internal: {
    title: "Insiders",
    overview: "Employees or partners who cause harm on purpose or by mistake.",
    vectors: [
      "Leaking data through email or cloud shares.",
      "Using stolen or weak credentials.",
      "Accidentally deleting or exposing files.",
    ],
    impacts: [
      "Data loss or compliance fines.",
      "Workflow delays and investigation time.",
      "Reduced trust between teams.",
    ],
    preparation:
      "Limit access, monitor accounts, and teach safe data handling habits.",
  },
  environmental: {
    title: "Environmental & Physical",
    overview:
      "Natural disasters, power loss, or physical damage that interrupts operations.",
    vectors: [
      "Storms, floods, or fires damaging data centers.",
      "Power or network outages affecting access.",
      "Hardware theft or facility breaches.",
    ],
    impacts: [
      "System downtime and data loss.",
      "Reduced customer or employee access.",
      "Long recovery and repair costs.",
    ],
    preparation:
      "Build backups, use redundant systems, and test disaster recovery plans.",
  },
};

let listRef;
let detailRef;
let activeBucket = "external";

const renderThreatDetails = (key) => {
  activeBucket = key;

  if (listRef) {
    listRef.querySelectorAll("[data-threat]").forEach((item) => {
      const isActive = item.dataset.threat === key;
      item.classList.toggle("is-active", isActive);
      item.setAttribute("aria-pressed", isActive ? "true" : "false");
    });
  }

  if (!detailRef) return;

  const { title, overview, vectors, impacts, preparation } = threatBuckets[key];

  const markup = html`
    <article class="threats-card">
      <header class="threats-card__header">
        <h3>${title}</h3>
        <p>${overview}</p>
      </header>
      <div class="threats-card__columns">
        <section>
          <h4>Common Examples</h4>
          <ul>
            ${vectors.map((item) => html`<li>${item}</li>`)}
          </ul>
        </section>
        <section>
          <h4>Potential Impacts</h4>
          <ul>
            ${impacts.map((item) => html`<li>${item}</li>`)}
          </ul>
        </section>
      </div>
      <p class="threats-card__prep">${preparation}</p>
    </article>
  `;

  render(markup, detailRef);
};

const handleKeydown = (event, key) => {
  if (event.key !== "Enter" && event.key !== " ") return;
  event.preventDefault();
  renderThreatDetails(key);
};

const potentialThreatsTemplate = () => html`
  <section class="potential-threats" id="potential-threats">
    <header class="potential-threats__hero">
      <div>
        <h2>Potential Threats</h2>
        <p>All systems face many different threats to their cybersecurity.</p>
      </div>
      <div class="potential-threats__hero-card">
        <p>
          Template: add a headline, statistic, or recent event to drive home why
          threat modeling matters.
        </p>
      </div>
    </header>
    <div class="potential-threats__content">
      <ul
        class="potential-threats__list"
        ${ref((element) => {
          if (!element) return;
          listRef = element;
          renderThreatDetails(activeBucket);
        })}
      >
        ${Object.entries(threatBuckets).map(
          ([key, { title, overview }]) => html`
            <li
              class="potential-threats__list-item${activeBucket === key
                ? " is-active"
                : ""}"
              data-threat=${key}
              @click=${() => renderThreatDetails(key)}
              @keydown=${(event) => handleKeydown(event, key)}
              tabindex="0"
              role="button"
              aria-pressed=${activeBucket === key}
            >
              <h3>${title}</h3>
              <p>${overview}</p>
            </li>
          `
        )}
      </ul>
      <div
        class="potential-threats__detail"
        ${ref((element) => {
          if (!element) return;
          detailRef = element;
          if (!detailRef.hasChildNodes()) {
            renderThreatDetails(activeBucket);
          }
        })}
      ></div>
    </div>
    <p class="section-sources">source: cyber.org</p>
  </section>
`;

export { potentialThreatsTemplate };
