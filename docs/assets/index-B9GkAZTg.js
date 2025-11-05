(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
var e=globalThis,t=e.trustedTypes,n=t?t.createPolicy(`lit-html`,{createHTML:e=>e}):void 0,r=`$lit$`,i=`lit$${Math.random().toFixed(9).slice(2)}$`,a=`?`+i,o=`<${a}>`,s=document,c=()=>s.createComment(``),l=e=>e===null||typeof e!=`object`&&typeof e!=`function`,u=Array.isArray,d=e=>u(e)||typeof e?.[Symbol.iterator]==`function`,f=`[ 	
\f\r]`,p=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,m=/-->/g,h=/>/g,g=RegExp(`>|${f}(?:([^\\s"'>=/]+)(${f}*=${f}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,`g`),ee=/'/g,te=/"/g,ne=/^(?:script|style|textarea|title)$/i,_=(e=>(t,...n)=>({_$litType$:e,strings:t,values:n}))(1),v=Symbol.for(`lit-noChange`),y=Symbol.for(`lit-nothing`),re=new WeakMap,b=s.createTreeWalker(s,129);function ie(e,t){if(!u(e)||!e.hasOwnProperty(`raw`))throw Error(`invalid template strings array`);return n===void 0?t:n.createHTML(t)}var ae=(e,t)=>{let n=e.length-1,a=[],s,c=t===2?`<svg>`:t===3?`<math>`:``,l=p;for(let t=0;t<n;t++){let n=e[t],u,d,f=-1,_=0;for(;_<n.length&&(l.lastIndex=_,d=l.exec(n),d!==null);)_=l.lastIndex,l===p?d[1]===`!--`?l=m:d[1]===void 0?d[2]===void 0?d[3]!==void 0&&(l=g):(ne.test(d[2])&&(s=RegExp(`</`+d[2],`g`)),l=g):l=h:l===g?d[0]===`>`?(l=s??p,f=-1):d[1]===void 0?f=-2:(f=l.lastIndex-d[2].length,u=d[1],l=d[3]===void 0?g:d[3]===`"`?te:ee):l===te||l===ee?l=g:l===m||l===h?l=p:(l=g,s=void 0);let v=l===g&&e[t+1].startsWith(`/>`)?` `:``;c+=l===p?n+o:f>=0?(a.push(u),n.slice(0,f)+r+n.slice(f)+i+v):n+i+(f===-2?t:v)}return[ie(e,c+(e[n]||`<?>`)+(t===2?`</svg>`:t===3?`</math>`:``)),a]},x=class e{constructor({strings:n,_$litType$:o},s){let l;this.parts=[];let u=0,d=0,f=n.length-1,p=this.parts,[m,h]=ae(n,o);if(this.el=e.createElement(m,s),b.currentNode=this.el.content,o===2||o===3){let e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;(l=b.nextNode())!==null&&p.length<f;){if(l.nodeType===1){if(l.hasAttributes())for(let e of l.getAttributeNames())if(e.endsWith(r)){let t=h[d++],n=l.getAttribute(e).split(i),r=/([.?@])?(.*)/.exec(t);p.push({type:1,index:u,name:r[2],strings:n,ctor:r[1]===`.`?se:r[1]===`?`?ce:r[1]===`@`?le:w}),l.removeAttribute(e)}else e.startsWith(i)&&(p.push({type:6,index:u}),l.removeAttribute(e));if(ne.test(l.tagName)){let e=l.textContent.split(i),n=e.length-1;if(n>0){l.textContent=t?t.emptyScript:``;for(let t=0;t<n;t++)l.append(e[t],c()),b.nextNode(),p.push({type:2,index:++u});l.append(e[n],c())}}}else if(l.nodeType===8)if(l.data===a)p.push({type:2,index:u});else{let e=-1;for(;(e=l.data.indexOf(i,e+1))!==-1;)p.push({type:7,index:u}),e+=i.length-1}u++}}static createElement(e,t){let n=s.createElement(`template`);return n.innerHTML=e,n}};function S(e,t,n=e,r){if(t===v)return t;let i=r===void 0?n._$Cl:n._$Co?.[r],a=l(t)?void 0:t._$litDirective$;return i?.constructor!==a&&(i?._$AO?.(!1),a===void 0?i=void 0:(i=new a(e),i._$AT(e,n,r)),r===void 0?n._$Cl=i:(n._$Co??=[])[r]=i),i!==void 0&&(t=S(e,i._$AS(e,t.values),i,r)),t}var oe=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:n}=this._$AD,r=(e?.creationScope??s).importNode(t,!0);b.currentNode=r;let i=b.nextNode(),a=0,o=0,c=n[0];for(;c!==void 0;){if(a===c.index){let t;c.type===2?t=new C(i,i.nextSibling,this,e):c.type===1?t=new c.ctor(i,c.name,c.strings,this,e):c.type===6&&(t=new ue(i,this,e)),this._$AV.push(t),c=n[++o]}a!==c?.index&&(i=b.nextNode(),a++)}return b.currentNode=s,r}p(e){let t=0;for(let n of this._$AV)n!==void 0&&(n.strings===void 0?n._$AI(e[t]):(n._$AI(e,n,t),t+=n.strings.length-2)),t++}},C=class e{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,n,r){this.type=2,this._$AH=y,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=S(this,e,t),l(e)?e===y||e==null||e===``?(this._$AH!==y&&this._$AR(),this._$AH=y):e!==this._$AH&&e!==v&&this._(e):e._$litType$===void 0?e.nodeType===void 0?d(e)?this.k(e):this._(e):this.T(e):this.$(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==y&&l(this._$AH)?this._$AA.nextSibling.data=e:this.T(s.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:n}=e,r=typeof n==`number`?this._$AC(e):(n.el===void 0&&(n.el=x.createElement(ie(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===r)this._$AH.p(t);else{let e=new oe(r,this),n=e.u(this.options);e.p(t),this.T(n),this._$AH=e}}_$AC(e){let t=re.get(e.strings);return t===void 0&&re.set(e.strings,t=new x(e)),t}k(t){u(this._$AH)||(this._$AH=[],this._$AR());let n=this._$AH,r,i=0;for(let a of t)i===n.length?n.push(r=new e(this.O(c()),this.O(c()),this,this.options)):r=n[i],r._$AI(a),i++;i<n.length&&(this._$AR(r&&r._$AB.nextSibling,i),n.length=i)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let t=e.nextSibling;e.remove(),e=t}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},w=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,r,i){this.type=1,this._$AH=y,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=i,n.length>2||n[0]!==``||n[1]!==``?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=y}_$AI(e,t=this,n,r){let i=this.strings,a=!1;if(i===void 0)e=S(this,e,t,0),a=!l(e)||e!==this._$AH&&e!==v,a&&(this._$AH=e);else{let r=e,o,s;for(e=i[0],o=0;o<i.length-1;o++)s=S(this,r[n+o],t,o),s===v&&(s=this._$AH[o]),a||=!l(s)||s!==this._$AH[o],s===y?e=y:e!==y&&(e+=(s??``)+i[o+1]),this._$AH[o]=s}a&&!r&&this.j(e)}j(e){e===y?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??``)}},se=class extends w{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===y?void 0:e}},ce=class extends w{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==y)}},le=class extends w{constructor(e,t,n,r,i){super(e,t,n,r,i),this.type=5}_$AI(e,t=this){if((e=S(this,e,t,0)??y)===v)return;let n=this._$AH,r=e===y&&n!==y||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,i=e!==y&&(n===y||r);r&&this.element.removeEventListener(this.name,this,n),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH==`function`?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},ue=class{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){S(this,e)}},de={M:r,P:i,A:a,C:1,L:ae,R:oe,D:d,V:S,I:C,H:w,N:ce,U:le,B:se,F:ue},fe=e.litHtmlPolyfillSupport;fe?.(x,C),(e.litHtmlVersions??=[]).push(`3.3.1`);var T=(e,t,n)=>{let r=n?.renderBefore??t,i=r._$litPart$;if(i===void 0){let e=n?.renderBefore??null;r._$litPart$=i=new C(t.insertBefore(c(),e),e,void 0,n??{})}return i._$AI(e),i},pe=``+new URL(`../Cia-triad.png`,import.meta.url).href,{I:me}=de,he=e=>e.strings===void 0,ge={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},_e=e=>(...t)=>({_$litDirective$:e,values:t}),ve=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,n){this._$Ct=e,this._$AM=t,this._$Ci=n}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}},E=(e,t)=>{let n=e._$AN;if(n===void 0)return!1;for(let e of n)e._$AO?.(t,!1),E(e,t);return!0},D=e=>{let t,n;do{if((t=e._$AM)===void 0)break;n=t._$AN,n.delete(e),e=t}while(n?.size===0)},ye=e=>{for(let t;t=e._$AM;e=t){let n=t._$AN;if(n===void 0)t._$AN=n=new Set;else if(n.has(e))break;n.add(e),Se(t)}};function be(e){this._$AN===void 0?this._$AM=e:(D(this),this._$AM=e,ye(this))}function xe(e,t=!1,n=0){let r=this._$AH,i=this._$AN;if(i!==void 0&&i.size!==0)if(t)if(Array.isArray(r))for(let e=n;e<r.length;e++)E(r[e],!1),D(r[e]);else r!=null&&(E(r,!1),D(r));else E(this,e)}var Se=e=>{e.type==ge.CHILD&&(e._$AP??=xe,e._$AQ??=be)},Ce=class extends ve{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,n){super._$AT(e,t,n),ye(this),this.isConnected=e._$AU}_$AO(e,t=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),t&&(E(this,e),D(this))}setValue(e){if(he(this._$Ct))this._$Ct._$AI(e,this);else{let t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}},O=new WeakMap,k=_e(class extends Ce{render(e){return y}update(e,[t]){let n=t!==this.G;return n&&this.G!==void 0&&this.rt(void 0),(n||this.lt!==this.ct)&&(this.G=t,this.ht=e.options?.host,this.rt(this.ct=e.element)),y}rt(e){if(this.isConnected||(e=void 0),typeof this.G==`function`){let t=this.ht??globalThis,n=O.get(t);n===void 0&&(n=new WeakMap,O.set(t,n)),n.get(this.G)!==void 0&&this.G.call(this.ht,void 0),n.set(this.G,e),e!==void 0&&this.G.call(this.ht,e)}else this.G.value=e}get lt(){return typeof this.G==`function`?O.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}}),we={Confidentiality:{title:`Confidentiality`,focus:`Keep sensitive information only in the hands of those who need to know.`,description:`Confidentiality keeps data private and only accessible to authorized users. A key component of the confidentiality pillar is that only those with the right permissions can access certain information, keeping unauthorized users out. For example, a healthcare provider must make sure that patient records are accessible to the correct medical staff, but not to anyone else.`,threats:[`Social engineering attacks that lead to users revealing sensitive information.`,`Attacks that intercept data in transit`,`Documents that allow anonymous access`],safeguards:[`Label and classify sensitive information`,`Use data encryption both in transit and at rest`,`Only share sensitive documents with specific authorized users`],takeaway:`Do not share any information that you are not comfortable with the entire world knowing.`},Integrity:{title:`Integrity`,focus:`Ensure information remains accurate and unaltered.`,description:`Integrity ensure that all data is the way that it was meant to be. Data integrity means that information has not been altered or tampered with, either by accident or maliciously. For example, if a bank statement is sent to a user, integrity measures would ensure that the statement has not been changed in any way from how the bank generated it originally.`,threats:[`Unauthorized users gaining access to modify data.`,`Malware that alters files or data without detection.`,`Human error leading to accidental data modification.`],safeguards:[`Implement access controls and user permissions`,`Use checksums and hashes to verify data integrity`,`Regularly audit and monitor data access and changes`],takeaway:`Always double check important information to ensure it is accurate and unaltered.`},Availability:{title:`Availability`,focus:`Ensure information is accessible when needed by those who need it.`,description:`Availability ensures that all data, no matter how sensitive, is accessible to authorized users after necessary security precautions. Protected or not, all data is useless if it cannot be accessed when it is needed. For example, students need to be able to access their grades in the gradebook system when needed, but only after properly logging in.`,threats:[`Denial of Service (DoS) attacks that make systems unavailable.`,`Natural disasters that disrupt access to data centers.`,`Hardware failures that lead to data loss or unavailability.`],safeguards:[`Implement redundancy and failover solutions`,`Implement disaster recovery systems in the event of natural disasters`,`Use load balancers and content delivery networks (CDNs)`],takeaway:`Ensure that data is always accessible, even in the face of disruptions.`}},A,j,M=`Confidentiality`,N=e=>{if(M=e,j&&j.querySelectorAll(`[data-section]`).forEach(t=>{let n=t.dataset.section===e;t.classList.toggle(`is-active`,n),t.setAttribute(`aria-pressed`,n?`true`:`false`)}),!A)return;let{title:t,focus:n,description:r,threats:i,safeguards:a,takeaway:o}=we[e],s=_`
    <article class="cia-detail-card">
      <header class="cia-detail-card__header">
        <h3>${t}</h3>
        <p>${n}</p>
      </header>
      <p>${r}</p>
      <div class="cia-detail-card__columns">
        <section>
          <h4>Common Threats</h4>
          <ul>
            ${i.map(e=>_`<li>${e}</li>`)}
          </ul>
        </section>
        <section>
          <h4>Safeguards</h4>
          <ul>
            ${a.map(e=>_`<li>${e}</li>`)}
          </ul>
        </section>
      </div>
      <p class="cia-detail-card__takeaway">${o}</p>
    </article>
  `;T(s,A)},Te=(e,t)=>{e.key!==`Enter`&&e.key!==` `||(e.preventDefault(),N(t))},Ee=()=>_`
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
        <img src=${pe} alt="CIA Triad Diagram" />
        <figcaption>The three aspects of the CIA Triad.</figcaption>
      </figure>
    </header>
    <div class="cia-triad__content">
      <ul
        class="cia-triad__list"
        ${k(e=>{e&&(j=e,N(M))})}
      >
        ${Object.entries(we).map(([e,{title:t,focus:n}])=>_`
            <li
              class="cia-triad__list-item${M===e?` is-active`:``}"
              data-section=${e}
              @click=${()=>N(e)}
              @keydown=${t=>Te(t,e)}
              tabindex="0"
              role="button"
              aria-pressed=${M===e}
            >
              <h3>${t}</h3>
              <p>${n}</p>
            </li>
          `)}
      </ul>
      <div
        class="cia-triad__detail"
        ${k(e=>{e&&(A=e,A.hasChildNodes()||N(M))})}
      ></div>
    </div>
    <p class="section-sources">Source: CYBER.ORG; Fortinet Field Guide</p>
  </section>
`,De=``+new URL(`../types-of-auth.png`,import.meta.url).href,Oe={knowledge:{title:`Something You Know`,prompt:`Uses information only the user knows.`,examples:[`Password`,`PIN`,`Security question`],strengths:[`Easy to use and set up.`,`No extra device needed.`,`Familiar to everyone.`],gaps:`Can be guessed, stolen, or reused across sites.`},possession:{title:`Something You Have`,prompt:`Uses a physical item or device for login.`,examples:[`Smartcard`,`Key fob`,`Authenticator app`],strengths:[`Only works if you have the item.`,`Hard to steal remotely.`,`Supports one-time codes.`],gaps:`Losing the device can block access or cause risk.`},inherence:{title:`Something You Are`,prompt:`Uses traits unique to the person.`,examples:[`Fingerprint`,`Face scan`,`Voice pattern`],strengths:[`Fast and convenient.`,`Hard to fake or share.`,`Confirms real identity.`],gaps:`Privacy issues and errors from injuries or changes.`}},P,F,I=`knowledge`,L=e=>{if(I=e,P&&P.querySelectorAll(`[data-auth]`).forEach(t=>{let n=t.dataset.auth===e;t.classList.toggle(`is-active`,n),t.setAttribute(`aria-pressed`,n?`true`:`false`)}),!F)return;let{title:t,prompt:n,examples:r,strengths:i,gaps:a}=Oe[e],o=_`
    <article class="auth-card">
      <header class="auth-card__header">
        <h3>${t}</h3>
        <p>${n}</p>
      </header>
      <div class="auth-card__columns">
        <section>
          <h4>Common Methods</h4>
          <ul>
            ${r.map(e=>_`<li>${e}</li>`)}
          </ul>
        </section>
        <section>
          <h4>Strengths</h4>
          <ul>
            ${i.map(e=>_`<li>${e}</li>`)}
          </ul>
        </section>
      </div>
      <p class="auth-card__gap">${a}</p>
    </article>
  `;T(o,F)},ke=(e,t)=>{e.key!==`Enter`&&e.key!==` `||(e.preventDefault(),L(t))},Ae=()=>_`
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
        <img src=${De} alt="Four types of authentication" />
        <figcaption>
          Track where your information lives to protect it.
        </figcaption>
      </figure>
    </header>
    <div class="authentication__content">
      <ul
        class="authentication__list"
        ${k(e=>{e&&(P=e,L(I))})}
      >
        ${Object.entries(Oe).map(([e,{title:t,prompt:n}])=>_`
            <li
              class="authentication__list-item${I===e?` is-active`:``}"
              data-auth=${e}
              @click=${()=>L(e)}
              @keydown=${t=>ke(t,e)}
              tabindex="0"
              role="button"
              aria-pressed=${I===e}
            >
              <h3>${t}</h3>
              <p>${n}</p>
            </li>
          `)}
      </ul>
      <div
        class="authentication__detail"
        ${k(e=>{e&&(F=e,F.hasChildNodes()||L(I))})}
      ></div>
    </div>
    <p class="section-sources">source: cyber.org</p>
  </section>
`,je=``+new URL(`../data-states.png`,import.meta.url).href,Me={rest:{title:`Data at Rest`,focus:`Stored on drives, backups, or archives waiting to be used.`,description:`Data at rest lives on endpoints, servers, or cloud storage. It may feel safe, but if devices are lost or storage is misconfigured attackers can copy everything silently.`,risks:[`Stolen or lost hardware containing unencrypted disks`,`Overexposed cloud storage buckets`,`Weak access controls on shared file systems`],safeguards:[`Encrypt storage and backups with strong keys`,`Segment data based on sensitivity`,`Rotate credentials and audit access logs`],takeaway:`Treat stored data like cash in a vault—layer controls so thieves never get a clear shot.`},transit:{title:`Data in Transit`,focus:`Moving across networks, APIs, and messaging systems.`,description:`Data in motion crosses public and private networks where eavesdroppers can intercept, replay, or manipulate packets. Secure transit keeps messages private and intact.`,risks:[`Man-in-the-middle interceptions`,`Session hijacking on unsecured Wi-Fi`,`Protocol downgrade attacks that bypass encryption`],safeguards:[`Use TLS, VPNs, or secure tunnels end-to-end`,`Pin certificates and validate sender identities`,`Disable legacy protocols and enforce modern cipher suites`],takeaway:`Move data through trusted, verified channels so no one can listen in or tamper silently.`},use:{title:`Data in Use`,focus:`Actively processed by applications, analytics, or users.`,description:`When systems process data, it often appears in memory or on screens. Attackers target these moments with implants, insider misuse, or screen scraping.`,risks:[`Compromised endpoints capturing screenshots or keystrokes`,`Memory scraping malware`,`Over-privileged users exporting sensitive reports`],safeguards:[`Apply least privilege and just-in-time access`,`Harden endpoints with EDR and application controls`,`Mask or tokenize sensitive fields during processing`],takeaway:`Limit who can see live data and monitor usage closely to catch abuse quickly.`}},R,z,B=`rest`,V=e=>{if(B=e,z&&z.querySelectorAll(`[data-state]`).forEach(t=>{let n=t.dataset.state===e;t.classList.toggle(`is-active`,n),t.setAttribute(`aria-pressed`,n?`true`:`false`)}),!R)return;let{title:t,focus:n,description:r,risks:i,safeguards:a,takeaway:o}=Me[e],s=_`
    <article class="data-state-card">
      <header class="data-state-card__header">
        <h3>${t}</h3>
        <p>${n}</p>
      </header>
      <p>${r}</p>
      <div class="data-state-card__columns">
        <section>
          <h4>Risks</h4>
          <ul>
            ${i.map(e=>_`<li>${e}</li>`)}
          </ul>
        </section>
        <section>
          <h4>Safeguards</h4>
          <ul>
            ${a.map(e=>_`<li>${e}</li>`)}
          </ul>
        </section>
      </div>
      <p class="data-state-card__takeaway">${o}</p>
    </article>
  `;T(s,R)},Ne=(e,t)=>{e.key!==`Enter`&&e.key!==` `||(e.preventDefault(),V(t))},Pe=()=>_`
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
        <img src=${je} alt="Data States Diagram" />
        <figcaption>
          Track where your information lives to protect it.
        </figcaption>
      </figure>
    </header>
    <div class="data-states__content">
      <ul
        class="data-states__list"
        ${k(e=>{e&&(z=e,V(B))})}
      >
        ${Object.entries(Me).map(([e,{title:t,focus:n}])=>_`
            <li
              class="data-states__list-item${B===e?` is-active`:``}"
              data-state=${e}
              @click=${()=>V(e)}
              @keydown=${t=>Ne(t,e)}
              tabindex="0"
              role="button"
              aria-pressed=${B===e}
            >
              <h3>${t}</h3>
              <p>${n}</p>
            </li>
          `)}
      </ul>
      <div
        class="data-states__detail"
        ${k(e=>{e&&(R=e,R.hasChildNodes()||V(B))})}
      ></div>
    </div>
    <p class="section-sources">source: cyber.org</p>
  </section>
`,Fe={email:{title:`Spear Phishing`,overview:`Attackers send targeted emails that look real to steal data or get clicks on malicious links.`,redFlags:[`Sender address looks slightly off or misspelled.`,`Urgent or emotional tone pushing quick action.`,`Unexpected links, attachments, or invoices.`],defenses:[`Check sender and hover over links before clicking.`,`Don’t share info or passwords by email.`,`Report suspicious messages to IT or security.`]},smishing:{title:`Smishing`,overview:`Fake text or chat messages trick users into clicking links or giving personal info.`,redFlags:[`Unknown numbers or short code senders.`,`Shortened or odd-looking links.`,`Claims about locked accounts or missed deliveries.`],defenses:[`Don’t tap links in random texts.`,`Block and delete suspicious messages.`,`Use official apps or websites to verify alerts.`]},vishing:{title:`Vishing`,overview:`Scammers call pretending to be banks, tech support, or company staff to get private info.`,redFlags:[`Asks for passwords, PINs, or one-time codes.`,`High-pressure tone or threats of penalties.`,`Spoofed or unfamiliar caller numbers.`],defenses:[`Hang up and call the real company directly.`,`Never share codes or credentials by phone.`,`Use call-blocking or verified caller ID tools.`]},spear:{title:`Whaling`,overview:`Highly targeted phishing aimed at executives or finance teams using detailed personal info.`,redFlags:[`Emails that look personal but feel slightly off.`,`Unusual requests for money or sensitive data.`,`Fake messages posing as leaders or partners.`],defenses:[`Verify large or unusual requests by phone or chat.`,`Train staff to spot targeted phishing.`,`Use strong email filters and sender verification.`]}},H,U,W=`email`,G=e=>{if(W=e,H&&H.querySelectorAll(`[data-vector]`).forEach(t=>{let n=t.dataset.vector===e;t.classList.toggle(`is-active`,n),t.setAttribute(`aria-pressed`,n?`true`:`false`)}),!U)return;let{title:t,overview:n,redFlags:r,defenses:i,caseStudy:a}=Fe[e],o=_`
    <article class="phishing-card">
      <header class="phishing-card__header">
        <h3>${t}</h3>
        <p>${n}</p>
      </header>
      <div class="phishing-card__columns">
        <section>
          <h4>Watch for these signs</h4>
          <ul>
            ${r.map(e=>_`<li>${e}</li>`)}
          </ul>
        </section>
        <section>
          <h4>Defenses & Training</h4>
          <ul>
            ${i.map(e=>_`<li>${e}</li>`)}
          </ul>
        </section>
      </div>
      <p class="phishing-card__note">${a}</p>
    </article>
  `;T(o,U)},Ie=(e,t)=>{e.key!==`Enter`&&e.key!==` `||(e.preventDefault(),G(t))},Le=()=>_`
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
        ${k(e=>{e&&(H=e,G(W))})}
      >
        ${Object.entries(Fe).map(([e,{title:t,overview:n}])=>_`
            <li
              class="phishing__list-item${W===e?` is-active`:``}"
              data-vector=${e}
              @click=${()=>G(e)}
              @keydown=${t=>Ie(t,e)}
              tabindex="0"
              role="button"
              aria-pressed=${W===e}
            >
              <h3>${t}</h3>
              <p>${n}</p>
            </li>
          `)}
      </ul>
      <div
        class="phishing__detail"
        ${k(e=>{e&&(U=e,U.hasChildNodes()||G(W))})}
      ></div>
    </div>
    <p class="section-sources">source: cyber.org, AAG IT Services</p>
  </section>
`,Re=[{title:`Techniques`,description:`Social engineering techniques include: Baiting, Shoulder Surfing, Piggybacking / Tailgating, Info written in workspace, Dumpster Diving, Pretexting (impersonation), and Scareware.`,signals:[`People asking for access or information they don’t need.`,`Visitors following employees through secure doors.`,`Notes or passwords left visible on desks or monitors.`,`Unverified calls pretending to be IT or management.`,`Emails or pop-ups warning your system is infected.`]}],ze=[`Shield your screen from onlookers`,`Be aware of your surroundings`,`Use malware scanners`,`Use Physical Security measures`],Be=()=>_`
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
          ${Re.map(({title:e,description:t,signals:n})=>_`
              <li class="social-engineering__list-item">
                <h3>${e}</h3>
                <p>${t}</p>
                <ul class="social-engineering__list-highlights">
                  ${n.map(e=>_`<li>${e}</li>`)}
                </ul>
              </li>
            `)}
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
                ${ze.map(e=>_`<li>${e}</li>`)}
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
`,Ve={external:{title:`External Attackers`,overview:`Criminals, hackers, and nation states try to steal data, disrupt systems, or demand ransom.`,vectors:[`Phishing emails or fake websites to steal logins.`,`Malware or ransomware delivered through downloads.`,`Network scans or exploits of unpatched systems.`],impacts:[`Loss of data or customer trust.`,`Downtime and recovery costs.`,`Damage to brand or public image.`],preparation:`Use firewalls, train users, and test & fix vulnerabilities.`},internal:{title:`Insiders`,overview:`Employees or partners who cause harm on purpose or by mistake.`,vectors:[`Leaking data through email or cloud shares.`,`Using stolen or weak credentials.`,`Accidentally deleting or exposing files.`],impacts:[`Data loss or compliance fines.`,`Workflow delays and investigation time.`,`Reduced trust between teams.`],preparation:`Limit access, monitor accounts, and teach safe data handling habits.`},environmental:{title:`Environmental & Physical`,overview:`Natural disasters, power loss, or physical damage that interrupts operations.`,vectors:[`Storms, floods, or fires damaging data centers.`,`Power or network outages affecting access.`,`Hardware theft or facility breaches.`],impacts:[`System downtime and data loss.`,`Reduced customer or employee access.`,`Long recovery and repair costs.`],preparation:`Build backups, use redundant systems, and test disaster recovery plans.`}},K,q,J=`external`,Y=e=>{if(J=e,K&&K.querySelectorAll(`[data-threat]`).forEach(t=>{let n=t.dataset.threat===e;t.classList.toggle(`is-active`,n),t.setAttribute(`aria-pressed`,n?`true`:`false`)}),!q)return;let{title:t,overview:n,vectors:r,impacts:i,preparation:a}=Ve[e],o=_`
    <article class="threats-card">
      <header class="threats-card__header">
        <h3>${t}</h3>
        <p>${n}</p>
      </header>
      <div class="threats-card__columns">
        <section>
          <h4>Common Examples</h4>
          <ul>
            ${r.map(e=>_`<li>${e}</li>`)}
          </ul>
        </section>
        <section>
          <h4>Potential Impacts</h4>
          <ul>
            ${i.map(e=>_`<li>${e}</li>`)}
          </ul>
        </section>
      </div>
      <p class="threats-card__prep">${a}</p>
    </article>
  `;T(o,q)},He=(e,t)=>{e.key!==`Enter`&&e.key!==` `||(e.preventDefault(),Y(t))},Ue=()=>_`
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
        ${k(e=>{e&&(K=e,Y(J))})}
      >
        ${Object.entries(Ve).map(([e,{title:t,overview:n}])=>_`
            <li
              class="potential-threats__list-item${J===e?` is-active`:``}"
              data-threat=${e}
              @click=${()=>Y(e)}
              @keydown=${t=>He(t,e)}
              tabindex="0"
              role="button"
              aria-pressed=${J===e}
            >
              <h3>${t}</h3>
              <p>${n}</p>
            </li>
          `)}
      </ul>
      <div
        class="potential-threats__detail"
        ${k(e=>{e&&(q=e,q.hasChildNodes()||Y(J))})}
      ></div>
    </div>
    <p class="section-sources">source: cyber.org</p>
  </section>
`,X={zero:`0`,one:`1`,two:`2`,three:`3`,four:`4`,five:`5`,six:`6`,seven:`7`,eight:`8`,nine:`9`,ten:`10`},We=[{title:`Start with a phrase`,detail:`Choose at least six words that you can remember easily. Try to have make one of your words a number.`},{title:`Swap in a number word`,detail:`Spell out a number (like "seven" or "nine") so you can later convert it to digits.`},{title:`Add a symbol`,detail:`End with punctuation or a symbol to finish off your secure password.`}],Ge=[{key:`length`,label:`Use six or more words`},{key:`numberWord`,label:`Include a number word (zero–ten)`},{key:`unique`,label:`Avoid repeating words`}],Z={},Q,$,Ke=e=>{let t=e.split(/\s+/).map(e=>e.trim().toLowerCase()).filter(Boolean),n=t.some(e=>e in X),r=new Set(t);return{length:t.length>=6,numberWord:n,unique:t.length>0&&r.size===t.length}},qe=e=>{let t=Ke(e);return Object.entries(t).forEach(([e,t])=>{let n=Z[e];n&&(n.classList.toggle(`is-met`,t),n.setAttribute(`aria-checked`,t?`true`:`false`))}),t},Je=e=>{let t=e.split(/\s+/).map(e=>e.trim()).filter(Boolean);if(!t.length)return``;let n=t.map(e=>e[0]??``).join(``).split(``);t.some((e,t)=>{let r=X[e.toLowerCase()];return r?(n[t]=r,!0):!1});let r=n.map((e,t)=>t%2==0?e.toUpperCase():e.toLowerCase()).join(``),i=`!@#$%^&*`[Math.floor(Math.random()*8)],a=Math.floor(Math.random()*10);return`${r}${i}${a}`},Ye=e=>{qe(e.target.value),$&&($.textContent=``)},Xe=e=>{e.preventDefault();let t=e.currentTarget.passphrase.value.trim(),n=qe(t);if(!Object.values(n).every(Boolean)){$&&($.textContent=`Tweak the phrase so all three checks light up.`),Q&&(Q.textContent=``);return}let r=Je(t);Q&&(Q.textContent=r),$&&($.textContent=`Generated suggestion — customize it before you use it anywhere.`)},Ze=()=>(Z={},_`
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
            ${We.map(({title:e,detail:t})=>_`
                <li class="passwords__step">
                  <h4>${e}</h4>
                  <p>${t}</p>
                </li>
              `)}
          </ul>
        </article>
        <article class="passwords__generator">
          <h3>Phrase to Password</h3>
          <p>
            Write a six-word phrase below (spell out a number) and we will
            generate a password following the steps.
          </p>
          <form class="passwords__form" @submit=${Xe}>
            <label class="passwords__label" for="passphrase">Your phrase</label>
            <textarea
              class="passwords__input"
              id="passphrase"
              name="passphrase"
              rows="3"
              placeholder="Example: five robots juggle citrus on saturday"
              @input=${Ye}
            ></textarea>
            <ul class="passwords__requirements" role="list">
              ${Ge.map(({key:e,label:t})=>_`
                  <li
                    class="passwords__requirement"
                    data-requirement=${e}
                    role="switch"
                    aria-checked="false"
                    ${k(t=>{t&&(Z[e]=t)})}
                  >
                    <span class="passwords__requirement-indicator"></span>
                    <span>${t}</span>
                  </li>
                `)}
            </ul>
            <button type="submit" class="passwords__button">Generate</button>
            <p
              class="passwords__message"
              ${k(e=>$=e)}
            ></p>
          </form>
          <div class="passwords__result">
            <span>Suggestion:</span>
            <code ${k(e=>Q=e)}></code>
          </div>
        </article>
      </div>
      <p class="section-sources">source: cyber.org</p>
    </section>
  `),Qe=[{id:`cia-triad`,label:`CIA Triad`},{id:`passwords`,label:`Passwords`},{id:`data-states`,label:`Data States`},{id:`authentication`,label:`Authentication`},{id:`phishing`,label:`Phishing`},{id:`social-engineering`,label:`Social Engineering`},{id:`potential-threats`,label:`Threats`}],$e=e=>{let t=document.getElementById(e);t&&t.scrollIntoView({behavior:`smooth`,block:`start`})},et=_`<div class="page-layout">
  <nav class="top-nav" aria-label="Primary">
    ${Qe.map(({id:e,label:t})=>_`
        <button
          type="button"
          class="top-nav__link"
          @click=${()=>$e(e)}
        >
          ${t}
        </button>
      `)}
  </nav>
  <h1>CyberSecurity</h1>
  ${Ee()} ${Ze()} ${Pe()}
  ${Ae()} ${Le()}
  ${Be()} ${Ue()}
</div>`,tt=()=>{let e=document.getElementById(`app`);e&&T(et,e)};document.readyState===`loading`?document.addEventListener(`DOMContentLoaded`,tt,{once:!0}):tt();