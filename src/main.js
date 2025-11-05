import "./style.css";
import { html, render } from "lit-html";

import { ciaTriadTemplate } from "./cia-triad";
import { authenticationTemplate } from "./types-of-authentication";
import { dataStates } from "./data-states";
import { phishingTemplate } from "./phishing";
import { socialEngineeringTemplate } from "./social-engineering";
import { potentialThreatsTemplate } from "./potential-threats";
import { passwords } from "./passwords";

const sectionLinks = [
  { id: "cia-triad", label: "CIA Triad" },
  { id: "passwords", label: "Passwords" },
  { id: "data-states", label: "Data States" },
  { id: "authentication", label: "Authentication" },
  { id: "phishing", label: "Phishing" },
  { id: "social-engineering", label: "Social Engineering" },
  { id: "potential-threats", label: "Threats" },
];

const scrollToSection = (id) => {
  const target = document.getElementById(id);
  if (!target) return;
  target.scrollIntoView({ behavior: "smooth", block: "start" });
};

const main = html`<div class="page-layout">
  <nav class="top-nav" aria-label="Primary">
    ${sectionLinks.map(
      ({ id, label }) => html`
        <button
          type="button"
          class="top-nav__link"
          @click=${() => scrollToSection(id)}
        >
          ${label}
        </button>
      `
    )}
  </nav>
  <h1>CyberSecurity</h1>
  ${ciaTriadTemplate()} ${passwords()} ${dataStates()}
  ${authenticationTemplate()} ${phishingTemplate()}
  ${socialEngineeringTemplate()} ${potentialThreatsTemplate()}
</div>`;

const mountApp = () => {
  const root = document.getElementById("app");
  if (!root) return;
  render(main, root);
};

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", mountApp, { once: true });
} else {
  mountApp();
}
