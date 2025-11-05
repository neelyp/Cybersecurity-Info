import { html } from "lit-html";

const techniques = [
  {
    title: "Techniques",
    description:
      "Social engineering techniques include: Baiting, Shoulder Surfing, Piggybacking / Tailgating, Info written in workspace, Dumpster Diving, Pretexting (impersonation), and Scareware.",
    signals: [
      "People asking for access or information they don’t need.",
      "Visitors following employees through secure doors.",
      "Notes or passwords left visible on desks or monitors.",
      "Unverified calls pretending to be IT or management.",
      "Emails or pop-ups warning your system is infected.",
    ],
  },
];

const protections = [
  "Shield your screen from onlookers",
  "Be aware of your surroundings",
  "Use malware scanners",
  "Use Physical Security measures",
];

const socialEngineeringTemplate = () => html`
  <section class="social-engineering" id="social-engineering">
    <header class="social-engineering__hero">
      <div>
        <h2>Social Engineering Tactics</h2>
        <p>
          Social engineers target people and their emotions to get information
        </p>
      </div>
      <div class="social-engineering__hero-card">
        <p>
          According to Verizon's 2023 Data Breach Investigations Report, 74% of
          breaches include a human element (error, privilege misuse, use of
          stolen credentials, or <strong><em>Social Engineering</em></strong
          >)
        </p>
      </div>
    </header>
    <div
      class="social-engineering__content social-engineering__content--static"
    >
      <article>
        <h3 class="social-engineering__subheading">Common Techniques</h3>
        <ul class="social-engineering__list social-engineering__list--static">
          ${techniques.map(
            ({ title, description, signals: signs }) => html`
              <li class="social-engineering__list-item">
                <h3>${title}</h3>
                <p>${description}</p>
                <ul class="social-engineering__list-highlights">
                  ${signs.map((signal) => html`<li>${signal}</li>`)}
                </ul>
              </li>
            `
          )}
        </ul>
      </article>
      <aside class="social-engineering__detail">
        <article class="social-card">
          <header class="social-card__header">
            <h3>Protection Checklist</h3>
            <p>
              Stay vigilant and always double check any emails you recieve that
              contain links so you do not fall victim to phishing attacks.
            </p>
          </header>
          <div class="social-card__columns">
            <section>
              <h4>Respond with Intention</h4>
              <ul>
                ${protections.map((tip) => html`<li>${tip}</li>`)}
              </ul>
            </section>
          </div>
          <p class="social-card__reminder">
            Document incidents and share lessons learned. Transparency helps the
            entire organization spot the next attempt faster.
          </p>
        </article>
      </aside>
    </div>
    <p class="section-sources">
      Sources: Verizon DBIR 2023; CISA Social Engineering Guidance.
    </p>
  </section>
`;

export { socialEngineeringTemplate };
