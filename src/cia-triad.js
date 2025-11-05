import { html, render } from "lit-html";
import cia from "/ciatriad.png";
import { ref } from "lit-html/directives/ref.js";

const sections = {
  Confidentiality: {
    title: "Confidentiality",
    focus:
      "Keep sensitive information only in the hands of those who need to know.",
    description:
      "Confidentiality keeps data private and only accessible to authorized users. A key component of the confidentiality pillar is that only those with the right permissions can access certain information, keeping unauthorized users out. For example, a healthcare provider must make sure that patient records are accessible to the correct medical staff, but not to anyone else.",
    threats: [
      "Social engineering attacks that lead to users revealing sensitive information.",
      "Attacks that intercept data in transit",
      "Documents that allow anonymous access",
    ],
    safeguards: [
      "Label and classify sensitive information",
      "Use data encryption both in transit and at rest",
      "Only share sensitive documents with specific authorized users",
    ],
    takeaway:
      "Do not share any information that you are not comfortable with the entire world knowing.",
  },
  Integrity: {
    title: "Integrity",
    focus: "Ensure information remains accurate and unaltered.",
    description:
      "Integrity ensure that all data is the way that it was meant to be. Data integrity means that information has not been altered or tampered with, either by accident or maliciously. For example, if a bank statement is sent to a user, integrity measures would ensure that the statement has not been changed in any way from how the bank generated it originally.",
    threats: [
      "Unauthorized users gaining access to modify data.",
      "Malware that alters files or data without detection.",
      "Human error leading to accidental data modification.",
    ],
    safeguards: [
      "Implement access controls and user permissions",
      "Use checksums and hashes to verify data integrity",
      "Regularly audit and monitor data access and changes",
    ],
    takeaway:
      "Always double check important information to ensure it is accurate and unaltered.",
  },
  Availability: {
    title: "Availability",
    focus: "Ensure information is accessible when needed by those who need it.",
    description:
      "Availability ensures that all data, no matter how sensitive, is accessible to authorized users after necessary security precautions. Protected or not, all data is useless if it cannot be accessed when it is needed. For example, students need to be able to access their grades in the gradebook system when needed, but only after properly logging in.",
    threats: [
      "Denial of Service (DoS) attacks that make systems unavailable.",
      "Natural disasters that disrupt access to data centers.",
      "Hardware failures that lead to data loss or unavailability.",
    ],
    safeguards: [
      "Implement redundancy and failover solutions",
      "Implement disaster recovery systems in the event of natural disasters",
      "Use load balancers and content delivery networks (CDNs)",
    ],
    takeaway:
      "Ensure that data is always accessible, even in the face of disruptions.",
  },
};

let detailContainer;
let listContainer;
let selectedSection = "Confidentiality";

const renderDetails = (key) => {
  selectedSection = key;

  if (listContainer) {
    listContainer.querySelectorAll("[data-section]").forEach((item) => {
      const isActive = item.dataset.section === key;
      item.classList.toggle("is-active", isActive);
      item.setAttribute("aria-pressed", isActive ? "true" : "false");
    });
  }

  if (!detailContainer) return;

  const { title, focus, description, threats, safeguards, takeaway } =
    sections[key];

  const markup = html`
    <article class="cia-detail-card">
      <header class="cia-detail-card__header">
        <h3>${title}</h3>
        <p>${focus}</p>
      </header>
      <p>${description}</p>
      <div class="cia-detail-card__columns">
        <section>
          <h4>Common Threats</h4>
          <ul>
            ${threats.map((threat) => html`<li>${threat}</li>`)}
          </ul>
        </section>
        <section>
          <h4>Safeguards</h4>
          <ul>
            ${safeguards.map((safeguard) => html`<li>${safeguard}</li>`)}
          </ul>
        </section>
      </div>
      <p class="cia-detail-card__takeaway">${takeaway}</p>
    </article>
  `;

  render(markup, detailContainer);
};

const handleKeydown = (event, key) => {
  if (event.key !== "Enter" && event.key !== " ") return;
  event.preventDefault();
  renderDetails(key);
};

const ciaTriadTemplate = () => html`
  <section class="cia-triad" id="cia-triad">
    <header class="cia-triad__hero">
      <div>
        <h2>The CIA Triad</h2>
        <p>
          The CIA Triad is a model that guides organizations in cybersecurity.
          It stands for Confidentiality, Integrity, and Availability.
        </p>
      </div>
      <figure class="cia-triad__figure">
        <img src=${cia} alt="CIA Triad Diagram" />
        <figcaption>The three aspects of the CIA Triad.</figcaption>
      </figure>
    </header>
    <div class="cia-triad__content">
      <ul
        class="cia-triad__list"
        ${ref((element) => {
          if (!element) return;
          listContainer = element;
          renderDetails(selectedSection);
        })}
      >
        ${Object.entries(sections).map(
          ([key, { title, focus }]) => html`
            <li
              class="cia-triad__list-item${selectedSection === key
                ? " is-active"
                : ""}"
              data-section=${key}
              @click=${() => renderDetails(key)}
              @keydown=${(event) => handleKeydown(event, key)}
              tabindex="0"
              role="button"
              aria-pressed=${selectedSection === key}
            >
              <h3>${title}</h3>
              <p>${focus}</p>
            </li>
          `
        )}
      </ul>
      <div
        class="cia-triad__detail"
        ${ref((element) => {
          if (!element) return;
          detailContainer = element;
          if (!detailContainer.hasChildNodes()) {
            renderDetails(selectedSection);
          }
        })}
      ></div>
    </div>
    <p class="section-sources">Source: CYBER.ORG; Fortinet Field Guide</p>
  </section>
`;

export { ciaTriadTemplate };
