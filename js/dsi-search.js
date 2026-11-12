/* =========================================================
   DSI SITE SEARCH
   Searches the 10 site pages (titles, sections, card titles and
   keywords) and shows results under the header search boxes.
   Rebuild the INDEX below when page content changes.
   ========================================================= */
(() => {
  const INDEX = [{"url": "index.html", "t": "Home", "d": "Dimension Systems provides managed IT, system integration, security, communications, digital signage, and interactive technology across Guam and the region.", "s": [{"id": "solutions", "h": "Six solutions. One connected technology partner.", "k": "What we do", "kw": "Managed Services System Integration Integrated Security VoIP Business Telephony Digital Signage Interactive Whiteboards"}, {"id": "strategic-positioning", "h": "Local expertise behind complex technology projects.", "k": "Strategic positioning", "kw": "For clients and organizations For contractors and consultants For off-island technology partners DSI Guam Technology Partners Clients & Owners Contractors & Consultants Local Integration & Support"}, {"id": "featured", "h": "Explore the experiences behind better-connected teams.", "k": "See it in action", "kw": "Keep every team member connected from anywhere."}, {"id": "industries", "h": "Technology designed for the way your industry works.", "k": "Industries we support", "kw": "Public & Government Education Healthcare Construction & Real Estate Hospitality & Tourism Retail & Food Service"}, {"id": "contact", "h": "Let’s build the right technology for your organization.", "k": "Contact Dimension Systems", "kw": "Start a conversation"}], "x": "Dimension Systems DSI Guam technology"}, {"url": "about.html", "t": "About", "d": "Learn about Dimension Systems Inc., a Guam-based technology partner providing integration, security, communications, digital experiences, and managed support across the region.", "s": [{"id": "who-we-are", "h": "Technology solutions built around the people we serve.", "k": "Who we are", "kw": "Local insight. Connected capability."}, {"id": "our-story", "h": "We focus on you.", "k": "Our focus", "kw": ""}, {"id": "offices", "h": "Local presence. Regional reach.", "k": "Where we work", "kw": ""}], "x": "company history team offices Guam Saipan Philippines"}, {"url": "industries.html", "t": "Industries", "d": "Explore connected IT, security, communications, and digital experience solutions for organizations across Guam and the region.", "s": [{"id": "industries", "h": "Built for the environments that power our region.", "k": "Industries we support", "kw": "Public & Government Education Healthcare Construction & Real Estate Hospitality & Tourism Retail & Food Service 24/7"}], "x": ""}, {"url": "managed-services.html", "t": "Managed Services", "d": "DSI Managed Services provides proactive IT monitoring, security, backup, server, network, database, storage, help desk, remote support, and on-site response across Guam.", "s": [{"id": "overview", "h": "Keep technology running at peak performance.", "k": "IT without the daily drag", "kw": "Managed around your operation. Proactive care Support beyond the workday Local on-site response"}, {"id": "approach", "h": "A better solution starts with a clear path.", "k": "Our approach", "kw": "Assess Design Implement Support"}, {"id": "services", "h": "One managed layer across your essential technology.", "k": "End-to-end IT solutions", "kw": "Security Assessments Disaster Recovery Data Backup & Restoration Server Care Help Desk Managed Network Managed Database Managed Storage Managed IT Systems"}, {"id": "response", "h": "From first call to local resolution.", "k": "One support path", "kw": "Request support Resolve remotely Dispatch on site"}], "x": "IT support helpdesk monitoring managed IT network"}, {"url": "system-integration.html", "t": "System Integration", "d": "System integration services from Dimension Systems connect communications, workforce technology, security, devices, and infrastructure into one coordinated environment.", "s": [{"id": "architecture", "h": "Integration built around how your organization actually works.", "k": "One operating environment", "kw": "One experience across every communication channel."}, {"id": "communication", "h": "Bring every conversation into a consistent experience.", "k": "Unified Communication", "kw": "VoIP Business Telephony Communication & Collaboration Customer Interaction Management"}, {"id": "workforce", "h": "Tools that help people work, respond, and collaborate.", "k": "Workforce Solutions", "kw": "Proactive AV Management Digital Workspace Business Process Management Managed Services Interactive Displays Device as a Service Workflow Management Mobility Solutions"}, {"id": "security", "h": "Protect access, information, communication, and facilities together.", "k": "Security Deployment", "kw": "Safe Data Exchange Secure Remote Access Email & Data Security Secure Collaboration VoIP System Security Physical Security"}, {"id": "devices", "h": "Manage devices, apps, and content from one place.", "k": "Mobile Device Management", "kw": "Unified device workspace Healthy"}], "x": "MDM mobile device management integration network infrastructure"}, {"url": "integrated-security-systems.html", "t": "Integrated Security Systems", "d": "DSI Integrated Security Systems connect video security, access control, sensors, intercoms, alarms, and workplace security into one managed environment across Guam.", "s": [{"id": "visibility", "h": "Elevated peace of mind without operational complexity.", "k": "Effortless visibility", "kw": "Unified device control Intelligent awareness Access from anywhere Security Command Video Security Access Control Sensors & Alarms Intercom Response"}, {"id": "core-solutions", "h": "A connected system built around real environments.", "k": "Core security solutions", "kw": "Video Security Access Control Air Quality Sensors Intercom Alarms Workplace"}, {"id": "benefits", "h": "Clear control from deployment to daily response.", "k": "Built for modern security needs", "kw": "Simplified, scalable security. AI-powered surveillance Enterprise privacy Operational insights Remote management"}, {"id": "management", "h": "Control designed around the people using it.", "k": "Unified management", "kw": "Security administration from any authorized computer. Security awareness that moves with your team. One coordinated view across locations and systems."}, {"id": "threats", "h": "Protect the connected environment around physical security.", "k": "Advanced threat coverage", "kw": "Ransomware Encrypted Threats Email Threats Wireless & Mobile"}, {"id": "sectors", "h": "Different environments. One adaptable security foundation.", "k": "Security shaped around the operation", "kw": "Retail Corporate & Finance Education Government Hospitality Healthcare Food & Beverage Real Estate"}], "x": "Verkada cameras CCTV access control alarms sensors intercom"}, {"url": "voip-business-telephony.html", "t": "VoIP Business Telephony & 3CX Phone Systems", "d": "DSI VoIP business telephony and 3CX phone systems bring calls, video meetings, live chat and team messaging into one connected business phone system for Guam and the region.", "s": [{"id": "overview", "h": "Stay in touch, even when work takes you elsewhere.", "k": "Built for today's business", "kw": "Your office phone, wherever you work. Desktop & web Business calling Mobile app"}, {"id": "features", "h": "Everything your team needs to connect.", "k": "One unified communication system", "kw": "Unified communications Video conferencing Flexible deployment Customer contact center Mobility Multi-site connectivity"}, {"id": "customer-experience", "h": "One conversation, across more channels.", "k": "Beyond the phone call", "kw": ""}, {"id": "plans", "h": "A phone system that fits the size of your business.", "k": "3CX editions at a glance", "kw": "3CX FREE 3CX SMB 3CX PRO 3CX ENT"}, {"id": "local-support", "h": "Technology is only part of the solution.", "k": "Local expertise, connected teams", "kw": "A local partner for a connected business."}, {"id": "resources", "h": "Make the most of your 3CX phone system.", "k": "Guides & resources", "kw": "Getting started Administration & mobile"}], "x": "3CX VoIP phone system PBX calling extension SIP trunk"}, {"url": "digital-signage.html", "t": "Digital Signage", "d": "DSI digital signage: design, schedule, and publish content across one display or an entire network, with cloud management, display hardware, installation, and local support in Guam.", "s": [{"id": "platform", "h": "Create once. Control every screen.", "k": "One cloud platform", "kw": ""}, {"id": "workflow", "h": "From idea to every screen—without the manual updates.", "k": "A simpler content workflow", "kw": "Create Schedule Publish Monitor"}, {"id": "displays", "h": "The right screen for the space, audience, and message.", "k": "Display portfolio", "kw": "Wall-Mounted Displays Floor-Standing Signage Interactive Kiosks Indoor LED Walls Outdoor LED Displays Specialty Formats"}, {"id": "uses", "h": "Useful communication for real operating environments.", "k": "Content with a purpose", "kw": "Hospitality Retail Government Education Healthcare Transportation"}, {"id": "local-team", "h": "Cloud control backed by a local technology team.", "k": "Designed around Guam operations", "kw": "Coordinated installation Controlled user access Fast message updates Room to scale"}], "x": "Yodeck VirtuBox signage screens displays LED wall kiosk"}, {"url": "whiteboard-solutions.html", "t": "Interactive Whiteboards", "d": "DSI interactive whiteboard solutions: Promethean ActivPanel displays, learning software, free training, and local support for classrooms and meeting rooms in Guam.", "s": [{"id": "capabilities", "h": "A smarter way to share what matters.", "k": "Features & capabilities", "kw": "Promethean Menu Natural handwriting Infinite canvas Wireless screen share Ready-to-use apps Cloud access 4K display options On-screen annotation Plug and play"}, {"id": "how-it-works", "h": "Ideas move freely, from first sketch to final share.", "k": "An intuitive workflow", "kw": "Create naturally Connect your content Collaborate together"}, {"id": "education", "h": "Make every lesson more engaging.", "k": "Promethean for education", "kw": ""}, {"id": "corporate", "h": "Meet, think, and create as one team.", "k": "Promethean for corporate", "kw": ""}, {"id": "training", "h": "Great technology works better with the right training.", "k": "Free Promethean training", "kw": "Promethean training sessions"}, {"id": "specifications", "h": "The right panel for the way you work.", "k": "Product specifications", "kw": "ActivPanel 10 Standard ActivPanel 10 Premium ActivPanel LX 65–86″ 3 ms 55–86″ 4K QLED 10 ms"}, {"id": "software", "h": "Tools that keep the learning going.", "k": "Learning software", "kw": "ActivInspire ClassFlow"}, {"id": "downloads", "h": "Everything you need to explore further.", "k": "Resource library", "kw": "Product brochures Specification sheets Need setup help or a product walkthrough?"}], "x": "Promethean ActivPanel ActivInspire ClassFlow whiteboard smart board"}, {"url": "support.html", "t": "Support", "d": "DSI Support: find help resources, browse guides and FAQs, request a callback, or contact the Dimension Systems team in Guam, Saipan, and the Philippines.", "s": [{"id": "support-paths", "h": "Choose the support path that fits your need.", "k": "Start here", "kw": "Browse product help Request assistance Talk with DSI"}, {"id": "resources", "h": "Go straight to the technology you use.", "k": "Support by solution", "kw": "Digital Signage Integrated Security Managed Services System Integration VoIP Business Telephony Interactive Whiteboards No matching resource yet."}, {"id": "guides", "h": "Popular guides, brochures, and how-to content.", "k": "Suggested resources", "kw": ""}, {"id": "callback", "h": "Reach the office that supports your location.", "k": "Contact DSI", "kw": "Guam and Saipan Philippines"}], "x": "help support FAQ callback ticket troubleshooting contact"}];

  const norm = (s) =>
    (s || "")
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9+#.\s-]/g, " ");

  // Flatten pages + sections into searchable entries.
  const entries = [];
  INDEX.forEach((page) => {
    entries.push({
      url: page.url,
      title: page.t,
      sub: page.d,
      page: page.t,
      isPage: true,
      hay: norm([page.t, page.d, page.x].join(" ")),
      head: norm(page.t + " " + page.x),
    });
    page.s.forEach((sec) => {
      entries.push({
        url: `${page.url}#${sec.id}`,
        title: sec.h,
        sub: sec.k || page.t,
        page: page.t,
        isPage: false,
        hay: norm([sec.h, sec.k, sec.kw, page.t].join(" ")),
        head: norm(sec.h + " " + sec.k),
      });
    });
  });

  const search = (query) => {
    const terms = norm(query).split(/\s+/).filter((t) => t.length > 1);
    if (!terms.length) return [];
    const results = [];
    entries.forEach((entry) => {
      let score = 0;
      for (const term of terms) {
        if (!entry.hay.includes(term)) return; // every word must match
        score += entry.head.includes(term) ? 6 : 2;
        if (new RegExp(`\\b${term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}`).test(entry.head)) score += 3;
      }
      if (entry.isPage) score += 4;
      const q = norm(query).trim();
      if (entry.isPage && norm(entry.title).trim() === q) score += 20;
      else if (entry.isPage && norm(entry.title).includes(q)) score += 8;
      results.push({ entry, score });
    });
    results.sort((a, b) => b.score - a.score);
    // At most 3 results per page so results stay varied.
    const perPage = {};
    return results
      .filter(({ entry }) => {
        perPage[entry.page] = (perPage[entry.page] || 0) + 1;
        return perPage[entry.page] <= 3;
      })
      .slice(0, 6)
      .map(({ entry }) => entry);
  };

  const escapeHtml = (s) =>
    s.replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]);

  const goTo = (url) => {
    const [path, hash] = url.split("#");
    const here = location.pathname.split("/").pop() || "index.html";
    if (path === here && hash) {
      const target = document.getElementById(hash);
      if (target) {
        document.querySelector(".nav-search")?.classList.remove("is-open");
        document.querySelector(".mobile-nav")?.classList.remove("is-open");
        target.scrollIntoView({ behavior: "smooth", block: "start" });
        history.replaceState(null, "", `#${hash}`);
        return;
      }
    }
    location.href = url;
  };

  document
    .querySelectorAll(".nav-search-form, .mobile-search-form")
    .forEach((form, formIndex) => {
      const input = form.querySelector("input");
      if (!input) return;
      const list = document.createElement("div");
      list.className = "dsi-search-results";
      list.id = `dsi-search-results-${formIndex}`;
      list.setAttribute("role", "listbox");
      list.hidden = true;
      form.appendChild(list);
      input.setAttribute("aria-controls", list.id);
      input.setAttribute("aria-autocomplete", "list");
      input.setAttribute("placeholder", "Search DSI solutions and pages");
      let current = [];
      let active = -1;

      const render = () => {
        const q = input.value.trim();
        if (q.length < 2) {
          list.hidden = true;
          list.innerHTML = "";
          return;
        }
        current = search(q);
        active = -1;
        if (!current.length) {
          list.innerHTML = `<div class="dsi-search-empty"><strong>No results for "${escapeHtml(q)}"</strong><span>Try another word, or <a href="support.html">visit Support</a>.</span></div>`;
        } else {
          list.innerHTML = current
            .map(
              (r, i) => `<a class="dsi-search-result" role="option" id="${list.id}-${i}" href="${r.url}">
                <span class="dsi-search-result__icon" aria-hidden="true"><i class="fa-solid ${r.isPage ? "fa-file-lines" : "fa-hashtag"}"></i></span>
                <span><strong>${escapeHtml(r.title)}</strong><small>${escapeHtml(r.isPage ? "Page" : r.page)}${r.isPage || r.sub === r.page ? "" : " · " + escapeHtml(r.sub)}</small></span>
              </a>`,
            )
            .join("");
          list.querySelectorAll("a").forEach((a, i) =>
            a.addEventListener("click", (event) => {
              event.preventDefault();
              goTo(current[i].url);
            }),
          );
        }
        list.hidden = false;
      };

      const highlight = () => {
        list.querySelectorAll(".dsi-search-result").forEach((a, i) => {
          a.classList.toggle("is-active", i === active);
          if (i === active) {
            input.setAttribute("aria-activedescendant", a.id);
            a.scrollIntoView({ block: "nearest" });
          }
        });
      };

      input.addEventListener("input", render);
      input.addEventListener("focus", render);
      input.addEventListener("keydown", (event) => {
        if (list.hidden || !current.length) return;
        if (event.key === "ArrowDown") {
          event.preventDefault();
          active = (active + 1) % current.length;
          highlight();
        } else if (event.key === "ArrowUp") {
          event.preventDefault();
          active = (active - 1 + current.length) % current.length;
          highlight();
        }
      });
      form.addEventListener("submit", (event) => {
        event.preventDefault();
        if (!input.value.trim()) return;
        const results = search(input.value);
        if (results.length) goTo(results[Math.max(active, 0)].url);
        else render();
      });
      document.addEventListener("click", (event) => {
        if (!form.contains(event.target)) list.hidden = true;
      });
    });
})();