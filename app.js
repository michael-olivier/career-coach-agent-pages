const plusButton = document.querySelector("#plus-button");
const coachMenu = document.querySelector("#coach-menu");
const filePicker = document.querySelector("#file-picker");
const promptInput = document.querySelector("#coach-prompt");
const micButton = document.querySelector("#mic-button");
const sendButton = document.querySelector("#send-button");
const attachmentStatus = document.querySelector("#attachment-status");
const learningSlides = document.querySelectorAll(".learning-slide");
const learningPrev = document.querySelector("#learning-prev");
const learningNext = document.querySelector("#learning-next");
const feedbackSlides = document.querySelectorAll(".feedback-slide");
const feedbackPrev = document.querySelector("#feedback-prev");
const feedbackNext = document.querySelector("#feedback-next");
const learningPeek = document.querySelector("#learning-peek");
const peekClose = document.querySelector("#peek-close");
const peekEnroll = document.querySelector("#peek-enroll");
const peekTitle = document.querySelector("#peek-title");
const peekAudience = document.querySelector("#peek-audience");
const peekDates = document.querySelector("#peek-dates");
const peekDuration = document.querySelector("#peek-duration");
const peekHero = document.querySelector("#peek-hero");
const peekPrompt = document.querySelector("#peek-prompt");
const peekSend = document.querySelector("#peek-send");
const peekAskStatus = document.querySelector("#peek-ask-status");
const peekEnrollOptions = document.querySelector("#peek-enroll-options");
const peekEnrollFieldset = document.querySelector("#peek-enroll-fieldset");
const travelPeek = document.querySelector("#travel-peek");
const travelPeekClose = document.querySelector("#travel-peek-close");
const travelPeekHero = document.querySelector("#travel-peek-hero");
const travelPeekTitle = document.querySelector("#travel-peek-title");
const travelPeekMeta = document.querySelector("#travel-peek-meta");
const travelPeekSummary = document.querySelector("#travel-peek-summary");
const travelPeekDetails = document.querySelector("#travel-peek-details");
const travelPeekPrompt = document.querySelector("#travel-peek-prompt");
const travelPeekSend = document.querySelector("#travel-peek-send");
const travelPeekAskStatus = document.querySelector("#travel-peek-ask-status");
const travelAgentChat = document.querySelector("#travel-agent-chat");
const travelLanding = document.querySelector("#travel-landing");
const travelChatSession = document.querySelector("#travel-chat-session");
const travelChatBack = document.querySelector("#travel-chat-back");
const travelChatTitle = document.querySelector("#travel-chat-title");
const travelChatSubtitle = document.querySelector("#travel-chat-subtitle");
const travelChatStatus = document.querySelector("#travel-chat-status");
const travelChatBody = document.querySelector(".travel-chat-body");
const travelChatThread = document.querySelector("#travel-chat-thread");
const travelChatSuggestions = document.querySelector("#travel-chat-suggestions");
const travelSessionPrompt = document.querySelector("#travel-session-prompt");
const travelSessionSend = document.querySelector("#travel-session-send");
const nextTripPanel = document.querySelector("#next-trip-panel");
const nextTripCollapse = document.querySelector("#next-trip-collapse");
const homePrompt = document.querySelector("#home-prompt");
const homeSendButton = document.querySelector("#home-send-button");
const homeMicButton = document.querySelector("#home-mic-button");
const happeningsSlides = document.querySelectorAll(".happenings-slide");
const happeningsPrev = document.querySelector("#happenings-prev");
const happeningsNext = document.querySelector("#happenings-next");

const MANAGER_PROFILE = {
  id: "self",
  name: "Michael Olivier",
  subtitle: "Myself",
};

const DIRECT_REPORTS = [
  {
    id: "ari-reed",
    name: "Ari Reed",
    level: "Associate Designer",
  },
  {
    id: "lena-ortiz",
    name: "Lena Ortiz",
    level: "Senior Designer",
  },
  {
    id: "maya-chen",
    name: "Maya Chen",
    level: "Senior Designer",
  },
  {
    id: "jordan-lee",
    name: "Jordan Lee",
    level: "Principal Designer",
  },
  {
    id: "noah-patel",
    name: "Noah Patel",
    level: "Principal Designer",
  },
];

let attachedFileCount = 0;
let recognition;
let speechInputTarget;
let activeLearningSlide = 0;
let learningCarouselTimer;
let selectedLearningSlide;

const appShell = document.querySelector("#app-shell");
const sidebar = document.querySelector("#sidebar");
const sidebarToggle = document.querySelector("#sidebar-toggle");
const railButtons = document.querySelectorAll(".rail-button[data-flyout]");
const agentViews = document.querySelectorAll(".agent-view");
const agentNavItems = document.querySelectorAll("[data-agent-view]");
const travelPrompt = document.querySelector("#travel-prompt");
const travelSendButton = document.querySelector("#travel-send-button");
const travelMicButton = document.querySelector("#travel-mic-button");
const pageNavItems = document.querySelectorAll(".page-nav-item");

const DEFAULT_ROUTE = "/pages/home";
const homeTopbar = document.querySelector("#home-topbar");

const AGENT_LABELS = {
  "career-coach": "Career Coach",
  "feedback-agent": "Feedback Agent",
  "learning-agent": "Learning Agent",
  "travel-agent": "Travel Agent",
  "meeting-agent": "Meeting Agent",
};

const PAGE_SECTION_IDS = {
  home: "page-home",
  tasks: "page-tasks",
  team: "page-team",
  "growth-plans": "page-growth-plans",
  feedback: "page-feedback",
  "learning-library": "page-learning-library",
  "workspace-settings": "page-home",
};

const CHAT_PROMPTS = {
  "principal-ic-growth-path": "Continue our conversation about principal IC growth paths for my team.",
  "q4-development-goals": "Help me refine Q4 development goals for my direct reports.",
  "associate-designer-onboarding": "Pick up the associate designer onboarding plan we started.",
};

const TRIP_CATALOG = {
  "denver-leadership-interview": {
    action: "chat",
    title: "Denver leadership interview",
    subtitle: "Nov 4 – Nov 5 · Denver, CO · 2 travelers",
    statusLabel: "Needs confirmation",
    statusClass: "status-pill-pending",
    statusIcon: "clock",
    agentIntro: "Here are the flights currently on hold for your Denver leadership interview:",
    holdFlights: [
      {
        airline: "United",
        flightNumber: "UA 552",
        date: "Nov 4",
        originCity: "San Francisco",
        originCode: "SFO",
        departTime: "7:40 AM",
        destCity: "Denver",
        destCode: "DEN",
        arriveTime: "11:05 AM",
        passenger: "Michael Olivier",
        terminal: "T3",
        flightTime: "2h 25m",
        travelClass: "Economy",
        seat: "On hold",
      },
      {
        airline: "United",
        flightNumber: "UA 881",
        date: "Nov 5",
        originCity: "Denver",
        originCode: "DEN",
        departTime: "6:10 PM",
        destCity: "San Francisco",
        destCode: "SFO",
        arriveTime: "7:35 PM",
        passenger: "Michael Olivier",
        terminal: "B",
        flightTime: "2h 25m",
        travelClass: "Economy",
        seat: "On hold",
      },
    ],
    agentQuestion: "Would you like to confirm and book the flights?",
    suggestedStep: "Yes, let's confirm and book the flights",
    sources: [
      { name: "United Airlines", logo: "https://logo.clearbit.com/united.com" },
      { name: "Concur Travel", logo: "https://logo.clearbit.com/concur.com" },
      { name: "Nexus People OS", logo: "./assets/nexus-mark.svg" },
    ],
  },
  "nyc-client-discovery": {
    action: "peek",
    title: "NYC client discovery",
    meta: "Nov 12 – Nov 14 · New York, NY · 3 travelers",
    summary: "Fully booked · Flights, lodging, and car service confirmed",
    heroClass: "trip-hero-nyc",
    chatPlaceholder: "Ask about your NYC client discovery trip…",
    details: [
      {
        icon: "airplane",
        label: "Flights",
        lines: [
          "Delta DL 424 · Denver → LaGuardia · Nov 12, 7:05 AM",
          "Delta DL 861 · LaGuardia → Denver · Nov 14, 6:20 PM",
        ],
      },
      {
        icon: "bed",
        label: "Lodging",
        lines: ["Marriott Marquis Times Square · 2 nights · 2 king rooms"],
      },
      {
        icon: "car",
        label: "Ground transport",
        lines: ["Blacklane · Sedan · JFK pickup · Nov 12 – Nov 14"],
      },
      {
        icon: "pin",
        label: "Workshop",
        lines: ["Client HQ · 11th floor briefing room · Day 2, 9:00 AM start"],
      },
    ],
  },
  "seattle-research-sprint": {
    action: "chat",
    title: "Seattle research sprint",
    subtitle: "Nov 18 – Nov 20 · Seattle, WA · 1 traveler",
    statusLabel: "Lodging booked",
    statusClass: "status-pill-lodging",
    statusIcon: "bed",
    agentIntro:
      "Lodging is set for your Seattle research sprint. I can book flights next and align interview slots with the local research team — where should we start?",
    suggestedStep: "Book outbound and return flights",
  },
  "chicago-design-systems-training": {
    action: "chat",
    title: "Chicago design systems training",
    subtitle: "Dec 2 – Dec 4 · Chicago, IL · 5 travelers",
    statusLabel: "Flights booked",
    statusClass: "status-pill-progress",
    statusIcon: "airplane",
    agentIntro:
      "Flights are confirmed for the Chicago training. I can reserve lodging near the venue and share a draft itinerary with your team when you're ready.",
    suggestedStep: "Reserve lodging near the training venue",
  },
  "san-francisco-hiring-panel": {
    action: "chat",
    title: "San Francisco hiring panel",
    subtitle: "Dec 9 – Dec 10 · San Francisco, CA · 2 travelers",
    statusLabel: "Missing rental car",
    statusClass: "status-pill-overdue",
    statusIcon: "warning-circle",
    agentIntro:
      "This SF hiring panel trip still needs ground transport. Tell me your interview schedule and I'll find an SFO rental that fits.",
    suggestedStep: "Find an SFO rental that fits my interview schedule",
  },
};

let routeSync = false;
let peekReturnPath = DEFAULT_ROUTE;
let travelTripReturnPath = "/agents/travel-agent";
let activeTravelTripId;
let travelChatAnimationToken = 0;
let travelChatAgentScrollDepth = 0;

const beginTravelChatAgentScroll = () => {
  travelChatAgentScrollDepth += 1;
  travelChatBody?.classList.add("is-agent-scrolling");
};

const endTravelChatAgentScroll = () => {
  travelChatAgentScrollDepth = Math.max(0, travelChatAgentScrollDepth - 1);
  if (travelChatAgentScrollDepth === 0) {
    travelChatBody?.classList.remove("is-agent-scrolling");
  }
};

const resetTravelChatAgentScroll = () => {
  travelChatAgentScrollDepth = 0;
  travelChatBody?.classList.remove("is-agent-scrolling");
};

const DEFAULT_TRIP_CHAT_SOURCES = [
  { name: "Concur Travel", logo: "https://logo.clearbit.com/concur.com" },
  { name: "Nexus People OS", logo: "./assets/nexus-mark.svg" },
];

const TRAVEL_CHAT_SCRIPTED_REPLIES = {
  "denver-leadership-interview": {
    "Yes, let's confirm and book the flights": {
      agentMessage: "Should we confirm seats for both travelers on this reservation?",
      suggestions: ["Yes, confirm both and book", "No, just confirm my seat and book"],
    },
  },
};

const travelChatDelay = (milliseconds) =>
  new Promise((resolve) => {
    window.setTimeout(resolve, milliseconds);
  });

const parseRoutePath = () => {
  const raw = window.location.hash.replace(/^#/, "").trim();
  if (!raw || raw === "/") {
    return DEFAULT_ROUTE;
  }
  return raw.startsWith("/") ? raw : `/${raw}`;
};

const setRouteHash = (path, { replace = false } = {}) => {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  const hash = `#${normalized}`;
  if (window.location.hash === hash) {
    return;
  }

  if (replace) {
    history.replaceState(null, "", hash);
  } else {
    window.location.hash = hash;
  }
};

const updateDocumentTitle = (path) => {
  const [root, slug] = path.split("/").filter(Boolean);
  let label = "Nexus People OS";

  if (root === "agents" && AGENT_LABELS[slug]) {
    label = `${AGENT_LABELS[slug]} · Nexus People OS`;
  } else if (root === "pages") {
    const pageLabel = (slug ?? "home").split("-").join(" ");
    label = `${pageLabel.replace(/\b\w/g, (character) => character.toUpperCase())} · Nexus People OS`;
  } else if (root === "learning") {
    label = "Learning details · Nexus People OS";
  } else if (root === "chats") {
    label = "Chat · Nexus People OS";
  } else if (root === "travel") {
    label = "Travel trip · Nexus People OS";
  }

  document.title = label;
};

const setPageNavActive = (page) => {
  pageNavItems.forEach((item) => {
    item.classList.toggle("active", Boolean(page) && item.dataset.page === page);
  });
};

const updateHomeTopbar = (path) => {
  if (!homeTopbar) {
    return;
  }

  homeTopbar.hidden = path !== "/pages/home";
};

const scrollToPageSection = (page, behavior = "smooth") => {
  const sectionId = PAGE_SECTION_IDS[page];
  if (!sectionId) {
    return;
  }

  const target = document.getElementById(sectionId);
  if (target) {
    requestAnimationFrame(() => {
      target.scrollIntoView({ behavior, block: "start" });
    });
  }
};

const updateTravelSessionSendState = () => {
  if (!travelSessionSend || !travelSessionPrompt) {
    return;
  }

  travelSessionSend.disabled = travelSessionPrompt.value.trim().length === 0;
};

const scrollTravelChatThread = () => {
  const scrollContainer = travelChatBody ?? travelChatThread;
  if (scrollContainer) {
    scrollContainer.scrollTop = scrollContainer.scrollHeight;
  }
};

const createTravelAgentActions = (trip) => {
  const bar = document.createElement("div");
  bar.className = "chat-agent-actions";
  bar.setAttribute("role", "toolbar");
  bar.setAttribute("aria-label", "Agent message actions");

  [
    { icon: "thumbs-up", label: "Helpful" },
    { icon: "thumbs-down", label: "Not helpful" },
    { icon: "share-ios", label: "Share" },
  ].forEach(({ icon, label }) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "chat-agent-action";
    button.setAttribute("aria-label", label);
    button.innerHTML = `<i class="iconoir-${icon}" aria-hidden="true"></i>`;
    bar.appendChild(button);
  });

  const sources = trip?.sources ?? DEFAULT_TRIP_CHAT_SOURCES;
  const sourcesGroup = document.createElement("div");
  sourcesGroup.className = "chat-agent-sources";
  sourcesGroup.setAttribute("aria-label", "Sources");

  const sourcesLabel = document.createElement("span");
  sourcesLabel.className = "chat-agent-sources-label";
  sourcesLabel.textContent = "Sources";
  sourcesGroup.appendChild(sourcesLabel);

  sources.forEach((source) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "chat-source-avatar";
    button.title = source.name;
    button.setAttribute("aria-label", source.name);
    button.innerHTML = `<img src="${source.logo}" alt="" />`;
    sourcesGroup.appendChild(button);
  });

  bar.appendChild(sourcesGroup);
  return bar;
};

const createFlightTicketCard = (flight) => {
  const card = document.createElement("article");
  card.className = "flight-ticket-card";
  card.innerHTML = `
    <header class="flight-ticket-header">
      <span class="flight-ticket-airline">${flight.airline}</span>
      <span class="flight-ticket-meta">
        <strong>${flight.flightNumber}</strong>
        <span>${flight.date}</span>
      </span>
    </header>
    <div class="flight-ticket-route">
      <div class="flight-ticket-endpoint">
        <span class="flight-ticket-city">${flight.originCity}</span>
        <span class="flight-ticket-code">${flight.originCode}</span>
        <span class="flight-ticket-time">${flight.departTime}</span>
      </div>
      <div class="flight-ticket-path" aria-hidden="true">
        <span class="flight-ticket-line"></span>
        <i class="iconoir-airplane"></i>
      </div>
      <div class="flight-ticket-endpoint flight-ticket-endpoint-dest">
        <span class="flight-ticket-city">${flight.destCity}</span>
        <span class="flight-ticket-code">${flight.destCode}</span>
        <span class="flight-ticket-time">${flight.arriveTime}</span>
      </div>
    </div>
    <p class="flight-ticket-passenger">${flight.passenger}</p>
    <dl class="flight-ticket-details">
      <div>
        <dt>Terminal</dt>
        <dd>${flight.terminal}</dd>
      </div>
      <div>
        <dt>Flight time</dt>
        <dd>${flight.flightTime}</dd>
      </div>
      <div>
        <dt>Class</dt>
        <dd>${flight.travelClass}</dd>
      </div>
      <div>
        <dt>Seat</dt>
        <dd>${flight.seat}</dd>
      </div>
    </dl>
  `;

  return card;
};

const revealTravelAgentActions = (actions) => {
  actions.classList.remove("chat-agent-actions--hidden");
  actions.classList.add("chat-agent-actions--visible");
  scrollTravelChatThread();
};

const presentTravelAgentMessage = async (content, trip, options = {}) => {
  if (!travelChatThread || !trip) {
    return;
  }

  beginTravelChatAgentScroll();
  try {
    const token = options.token ?? travelChatAnimationToken;
    const typeSpeed = options.typeSpeed ?? 14;

    if (options.thinking) {
      showTravelChatThinking();
      await travelChatDelay(options.thinkingDelay ?? 920);

      if (token !== travelChatAnimationToken) {
        removeTravelChatThinking();
        return;
      }

      removeTravelChatThinking();
    }

    const block = document.createElement("div");
    block.className = "chat-agent-block chat-agent-block--enter";

    const bubble = document.createElement("div");
    bubble.className = "chat-bubble-agent";

    const actions = createTravelAgentActions(trip);
    actions.classList.add("chat-agent-actions--hidden");

    block.appendChild(bubble);
    block.appendChild(actions);
    travelChatThread.appendChild(block);
    scrollTravelChatThread();

    if (typeof content === "string") {
      const paragraph = document.createElement("p");
      bubble.appendChild(paragraph);
      await typewriterInto(paragraph, content, token, typeSpeed);
    } else {
      bubble.appendChild(content);
      await travelChatDelay(160);
    }

    if (token !== travelChatAnimationToken) {
      return;
    }

    revealTravelAgentActions(actions);
  } finally {
    endTravelChatAgentScroll();
  }
};

const showTravelChatThinking = () => {
  if (!travelChatThread) {
    return;
  }

  const thinking = document.createElement("div");
  thinking.className = "chat-thinking chat-thinking--enter";
  thinking.id = "travel-chat-thinking";
  thinking.innerHTML =
    '<span class="chat-thinking-pulse" aria-hidden="true"></span><span class="sr-only">Travel Agent is thinking</span>';
  travelChatThread.appendChild(thinking);
  scrollTravelChatThread();
};

const removeTravelChatThinking = () => {
  document.querySelector("#travel-chat-thinking")?.remove();
};

const typewriterInto = async (element, text, token, speed = 14) => {
  element.textContent = "";

  for (const character of text) {
    if (token !== travelChatAnimationToken) {
      return;
    }

    element.textContent += character;
    scrollTravelChatThread();
    await travelChatDelay(speed);
  }
};

const revealFlightCards = async (container, flights, token) => {
  container.className = "flight-ticket-stack";

  for (const flight of flights) {
    if (token !== travelChatAnimationToken) {
      return;
    }

    const card = createFlightTicketCard(flight);
    card.classList.add("flight-ticket-card--enter");
    container.appendChild(card);
    scrollTravelChatThread();
    await travelChatDelay(220);
  }
};

const animateTravelChatOpening = async (trip, token) => {
  if (!travelChatThread) {
    return;
  }

  beginTravelChatAgentScroll();
  try {
    travelChatThread.innerHTML = "";
    hideTravelChatSuggestions();

    await travelChatDelay(320);

    if (token !== travelChatAnimationToken) {
      return;
    }

    showTravelChatThinking();
    await travelChatDelay(980);

    if (token !== travelChatAnimationToken) {
      return;
    }

    removeTravelChatThinking();

    const block = document.createElement("div");
    block.className = "chat-agent-block chat-agent-block--enter";

    const bubble = document.createElement("div");
    bubble.className = "chat-bubble-agent";
    const content = document.createElement("div");
    content.className = "chat-bubble-rich";
    bubble.appendChild(content);
    block.appendChild(bubble);

    const actions = createTravelAgentActions(trip);
    actions.classList.add("chat-agent-actions--hidden");
    block.appendChild(actions);
    travelChatThread.appendChild(block);

    if (trip.holdFlights?.length) {
      const intro = document.createElement("p");
      content.appendChild(intro);
      await typewriterInto(intro, trip.agentIntro, token);

      const cards = document.createElement("div");
      content.appendChild(cards);
      await revealFlightCards(cards, trip.holdFlights, token);

      if (trip.agentQuestion) {
        const question = document.createElement("p");
        question.className = "chat-bubble-question";
        content.appendChild(question);
        await typewriterInto(question, trip.agentQuestion, token, 16);
      }
    } else {
      const intro = document.createElement("p");
      content.appendChild(intro);
      await typewriterInto(intro, trip.agentIntro, token);
    }

    if (token !== travelChatAnimationToken) {
      return;
    }

    revealTravelAgentActions(actions);
    if (trip.suggestedStep) {
      renderTravelChatSuggestions([trip.suggestedStep]);
    }
  } finally {
    endTravelChatAgentScroll();
  }
};

const respondTravelChatScripted = async (script) => {
  const trip = TRIP_CATALOG[activeTravelTripId];
  await presentTravelAgentMessage(script.agentMessage, trip, { thinking: true, typeSpeed: 16 });
  renderTravelChatSuggestions(script.suggestions);
};

const appendTravelChatBubble = (role, text) => {
  if (!travelChatThread) {
    return;
  }

  if (role === "agent") {
    void presentTravelAgentMessage(text, TRIP_CATALOG[activeTravelTripId], { thinking: true });
    return;
  }

  const bubble = document.createElement("p");
  bubble.className = "chat-bubble chat-bubble-user";
  bubble.textContent = text;
  travelChatThread.appendChild(bubble);
  scrollTravelChatThread();
};

const hideTravelChatSuggestions = () => {
  if (!travelChatSuggestions) {
    return;
  }

  travelChatSuggestions.hidden = true;
  travelChatSuggestions.innerHTML = "";
};

const renderTravelChatSuggestions = (labels) => {
  if (!travelChatSuggestions) {
    return;
  }

  travelChatSuggestions.innerHTML = "";

  const suggestions = Array.isArray(labels) ? labels.filter(Boolean) : [];
  if (!suggestions.length) {
    travelChatSuggestions.hidden = true;
    return;
  }

  suggestions.forEach((label) => {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = label;
    button.addEventListener("click", () => {
      submitTravelSessionMessage(label);
    });
    travelChatSuggestions.appendChild(button);
  });

  travelChatSuggestions.hidden = false;
};

const setTravelChatStatusPill = (trip) => {
  if (!travelChatStatus || !trip) {
    return;
  }

  travelChatStatus.className = `status-pill ${trip.statusClass ?? "status-pill-pending"}`;
  travelChatStatus.innerHTML = `
    <span class="status-pill-icon" aria-hidden="true">
      <i class="iconoir-${trip.statusIcon ?? "clock"}"></i>
    </span>
    ${trip.statusLabel ?? "In progress"}
  `;
};

const closeTravelChatSession = (options = {}) => {
  const { updateHash = true } = options;

  if (!travelChatSession) {
    return;
  }

  travelChatSession.hidden = true;

  if (travelLanding) {
    travelLanding.hidden = false;
  }

  if (travelSessionPrompt) {
    travelSessionPrompt.value = "";
    updateTravelSessionSendState();
  }

  hideTravelChatSuggestions();
  travelChatAnimationToken += 1;
  removeTravelChatThinking();
  resetTravelChatAgentScroll();
  activeTravelTripId = undefined;

  if (updateHash && !routeSync) {
    setRouteHash(travelTripReturnPath, { replace: true });
  }
};

const openTravelChatSession = (tripId, options = {}) => {
  const { updateHash = true } = options;
  const trip = TRIP_CATALOG[tripId];

  if (!trip || trip.action !== "chat" || !travelChatSession) {
    return;
  }

  if (learningPeek && !learningPeek.hidden) {
    closeLearningPeek({ updateHash: false });
  }

  closeTravelPeek({ updateHash: false });
  activeTravelTripId = tripId;

  if (travelChatTitle) {
    travelChatTitle.textContent = trip.title;
  }

  if (travelChatSubtitle) {
    travelChatSubtitle.textContent = trip.subtitle;
  }

  setTravelChatStatusPill(trip);

  if (travelSessionPrompt) {
    travelSessionPrompt.value = "";
    updateTravelSessionSendState();
  }

  if (travelLanding) {
    travelLanding.hidden = true;
  }

  travelChatSession.hidden = false;
  travelChatSession.classList.remove("is-ready");
  requestAnimationFrame(() => {
    travelChatSession.classList.add("is-ready");
  });

  if (updateHash) {
    travelTripReturnPath = parseRoutePath();
    setRouteHash(`/travel/chat/${tripId}`);
  }

  const animationToken = (travelChatAnimationToken += 1);
  travelChatThread.innerHTML = "";
  hideTravelChatSuggestions();
  void animateTravelChatOpening(trip, animationToken);

  requestAnimationFrame(() => travelSessionPrompt?.focus());
};

const resolveAgentView = (viewName) =>
  document.querySelector(`#view-${viewName}`) ? viewName : "career-coach";

const switchAgentView = (viewName, options = {}) => {
  const { updateHash = false, replaceHash = false, clearPageNav = true } = options;
  const resolvedView = resolveAgentView(viewName);

  if (learningPeek && !learningPeek.hidden && resolvedView !== "career-coach") {
    learningPeek.hidden = true;
  }

  if (resolvedView === "career-coach") {
    startLearningCarousel();
  } else {
    clearInterval(learningCarouselTimer);
  }

  if (travelPeek && !travelPeek.hidden && resolvedView !== "travel-agent") {
    travelPeek.hidden = true;
    activeTravelTripId = undefined;

    if (travelPeekAskStatus) {
      travelPeekAskStatus.textContent = "";
    }
  }

  if (travelChatSession && !travelChatSession.hidden && resolvedView !== "travel-agent") {
    closeTravelChatSession({ updateHash: false });
  }

  agentViews.forEach((view) => {
    const isActive = view.id === `view-${resolvedView}`;
    view.hidden = !isActive;
  });

  agentNavItems.forEach((item) => {
    const isActive = resolvedView !== "home" && item.dataset.agentView === resolvedView;
    item.classList.toggle("active", isActive);
  });

  if (clearPageNav) {
    setPageNavActive(null);
  }

  closeNavFlyouts();

  if (updateHash) {
    setRouteHash(`/agents/${resolvedView}`, { replace: replaceHash });
  }
};

const closeNavFlyouts = () => {
  document.querySelectorAll(".nav-flyout").forEach((flyout) => {
    flyout.hidden = true;
  });

  railButtons.forEach((button) => {
    button.setAttribute("aria-expanded", "false");
  });
};

const positionFlyout = (button, flyout) => {
  const buttonRect = button.getBoundingClientRect();
  const flyoutWidth = flyout.offsetWidth || 280;
  const left = buttonRect.right + 10;
  const maxLeft = window.innerWidth - flyoutWidth - 12;
  flyout.style.left = `${Math.min(left, maxLeft)}px`;
  flyout.style.top = `${Math.max(12, buttonRect.top - 8)}px`;
};

const toggleNavFlyout = (button) => {
  const flyoutId = button.dataset.flyout;
  const flyout = document.querySelector(`#${flyoutId}`);
  const isOpen = button.getAttribute("aria-expanded") === "true";

  closeNavFlyouts();

  if (!isOpen && flyout) {
    flyout.hidden = false;
    requestAnimationFrame(() => positionFlyout(button, flyout));
    button.setAttribute("aria-expanded", "true");
  }
};

sidebarToggle?.addEventListener("click", () => {
  const collapsed = appShell.classList.toggle("sidebar-collapsed");
  sidebarToggle.setAttribute("aria-label", collapsed ? "Expand navigation" : "Collapse navigation");
  sidebarToggle.setAttribute("aria-expanded", String(!collapsed));
  closeNavFlyouts();
});

railButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    event.stopPropagation();
    toggleNavFlyout(button);
  });
});

document.addEventListener("click", (event) => {
  if (!event.target.closest(".nav-rail-item")) {
    closeNavFlyouts();
  }
});

window.addEventListener("resize", closeNavFlyouts);

const updateSendState = () => {
  const hasText = promptInput.value.trim().length > 0;
  sendButton.disabled = !hasText && attachedFileCount === 0;
};

const closeMenu = () => {
  coachMenu.classList.remove("open");
  plusButton.setAttribute("aria-expanded", "false");
};

const setPrompt = (value) => {
  promptInput.value = value;
  promptInput.focus();
  updateSendState();
};

plusButton.addEventListener("click", (event) => {
  event.stopPropagation();
  const isOpen = coachMenu.classList.toggle("open");
  plusButton.setAttribute("aria-expanded", String(isOpen));
});

coachMenu.addEventListener("click", (event) => {
  const item = event.target.closest("button");

  if (!item) {
    return;
  }

  if (item.hasAttribute("data-file-action")) {
    filePicker.click();
  }

  if (item.dataset.prompt) {
    setPrompt(item.dataset.prompt);
  }

  closeMenu();
});

filePicker.addEventListener("change", () => {
  attachedFileCount = filePicker.files.length;
  attachmentStatus.textContent =
    attachedFileCount === 0
      ? ""
      : `${attachedFileCount} career coaching file${attachedFileCount === 1 ? "" : "s"} attached`;
  updateSendState();
});

promptInput.addEventListener("input", updateSendState);

document.addEventListener("click", (event) => {
  if (!event.target.closest(".plus-menu")) {
    closeMenu();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeMenu();
    closeNavFlyouts();

    if (travelPeek && !travelPeek.hidden) {
      closeTravelPeek();
    }

    if (travelChatSession && !travelChatSession.hidden) {
      closeTravelChatSession();
    }
  }
});

const updateTravelSendState = () => {
  if (!travelSendButton || !travelPrompt) {
    return;
  }

  travelSendButton.disabled = travelPrompt.value.trim().length === 0;
};

const ensureSpeechRecognition = () => {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

  if (!SpeechRecognition) {
    return null;
  }

  if (!recognition) {
    recognition = new SpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = "en-US";

    recognition.addEventListener("result", (event) => {
      const transcript = event.results[0][0].transcript;

      if (speechInputTarget === travelPrompt) {
        travelPrompt.value = transcript;
        updateTravelSendState();
      } else if (speechInputTarget === homePrompt) {
        homePrompt.value = transcript;
        updateHomeSendState();
      } else {
        setPrompt(transcript);
      }
    });

    recognition.addEventListener("end", () => {
      micButton.classList.remove("listening");
      travelMicButton?.classList.remove("listening");
      homeMicButton?.classList.remove("listening");
    });
  }

  return recognition;
};

const startSpeechInput = (input, activeMicButton) => {
  const instance = ensureSpeechRecognition();

  if (!instance || !input) {
    if (input === promptInput) {
      setPrompt("Voice input is not supported in this browser.");
    }

    return;
  }

  speechInputTarget = input;
  micButton.classList.remove("listening");
  travelMicButton?.classList.remove("listening");
  homeMicButton?.classList.remove("listening");
  activeMicButton?.classList.add("listening");
  instance.start();
};

micButton.addEventListener("click", () => {
  startSpeechInput(promptInput, micButton);
});

travelPrompt?.addEventListener("input", updateTravelSendState);

document.querySelectorAll("[data-travel-prompt]").forEach((button) => {
  button.addEventListener("click", () => {
    if (!travelPrompt) {
      return;
    }

    travelPrompt.value = button.dataset.travelPrompt;
    travelPrompt.focus();
    updateTravelSendState();
  });
});

travelMicButton?.addEventListener("click", () => {
  startSpeechInput(travelPrompt, travelMicButton);
});

const updateHomeSendState = () => {
  if (!homeSendButton || !homePrompt) {
    return;
  }

  homeSendButton.disabled = homePrompt.value.trim().length === 0;
};

const setHomePrompt = (value) => {
  if (!homePrompt) {
    return;
  }

  homePrompt.value = value;
  homePrompt.focus();
  updateHomeSendState();
};

homePrompt?.addEventListener("input", updateHomeSendState);

document.querySelectorAll("[data-home-prompt]").forEach((button) => {
  button.addEventListener("click", () => {
    setHomePrompt(button.dataset.homePrompt);
  });
});

homeMicButton?.addEventListener("click", () => {
  startSpeechInput(homePrompt, homeMicButton);
});

updateSendState();
updateTravelSendState();
updateHomeSendState();

let activeHappeningSlide = 0;

const showHappeningSlide = (index) => {
  if (!happeningsSlides.length) {
    return;
  }

  happeningsSlides[activeHappeningSlide].classList.remove("active");
  happeningsSlides[activeHappeningSlide].setAttribute("aria-hidden", "true");
  activeHappeningSlide = (index + happeningsSlides.length) % happeningsSlides.length;
  happeningsSlides[activeHappeningSlide].classList.add("active");
  happeningsSlides[activeHappeningSlide].setAttribute("aria-hidden", "false");
};

happeningsPrev?.addEventListener("click", () => {
  showHappeningSlide(activeHappeningSlide - 1);
});

happeningsNext?.addEventListener("click", () => {
  showHappeningSlide(activeHappeningSlide + 1);
});

const showLearningSlide = (index) => {
  learningSlides[activeLearningSlide].classList.remove("active");
  learningSlides[activeLearningSlide].setAttribute("aria-hidden", "true");
  activeLearningSlide = (index + learningSlides.length) % learningSlides.length;
  learningSlides[activeLearningSlide].classList.add("active");
  learningSlides[activeLearningSlide].setAttribute("aria-hidden", "false");
};

const startLearningCarousel = () => {
  if (learningSlides.length <= 1) {
    return;
  }

  clearInterval(learningCarouselTimer);
  learningCarouselTimer = setInterval(() => {
    showLearningSlide(activeLearningSlide + 1);
  }, 8000);
};

let activeFeedbackSlide = 0;

const fitFeedbackQuoteSizes = () => {
  if (!feedbackSlides.length) {
    return;
  }

  const minPx = 14;
  const maxPx = 28;

  feedbackSlides.forEach((slide) => {
    const quote = slide.querySelector(".feedback-quote");
    const content = slide.querySelector(".feedback-slide-content");
    const label = slide.querySelector(".feedback-label");

    if (!quote || !content) {
      return;
    }

    slide.classList.add("is-measuring");

    const slideHeight = slide.clientHeight;
    const labelBottom = label ? label.offsetTop + label.offsetHeight : 24;
    const maxContentHeight = slideHeight - labelBottom - 24;

    let low = minPx;
    let high = maxPx;
    let best = minPx;

    while (low <= high) {
      const mid = Math.floor((low + high) / 2);
      quote.style.setProperty("--feedback-quote-size", `${mid}px`);

      if (content.scrollHeight <= maxContentHeight) {
        best = mid;
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }

    quote.style.setProperty("--feedback-quote-size", `${best}px`);
    slide.classList.remove("is-measuring");
  });
};

let feedbackFitFrame;

const scheduleFeedbackQuoteFit = () => {
  cancelAnimationFrame(feedbackFitFrame);
  feedbackFitFrame = requestAnimationFrame(fitFeedbackQuoteSizes);
};

const showFeedbackSlide = (index) => {
  feedbackSlides[activeFeedbackSlide].classList.remove("active");
  feedbackSlides[activeFeedbackSlide].setAttribute("aria-hidden", "true");
  activeFeedbackSlide = (index + feedbackSlides.length) % feedbackSlides.length;
  feedbackSlides[activeFeedbackSlide].classList.add("active");
  feedbackSlides[activeFeedbackSlide].setAttribute("aria-hidden", "false");
  scheduleFeedbackQuoteFit();
};

const syncSlideEnrollmentUI = (slide) => {
  const enrollButton = slide.querySelector(".enroll-button");
  const enrollStatus = slide.querySelector(".learning-enroll-status");
  const isEnrolled = slide.classList.contains("enrolled");

  enrollButton.textContent = isEnrolled ? "View Details" : "Enroll";

  if (enrollStatus) {
    enrollStatus.hidden = !isEnrolled;
  }
};

const getEligibleEnrollees = (audienceLevel) =>
  DIRECT_REPORTS.filter((report) => report.level === audienceLevel);

const renderPeekEnrollOptions = (slide) => {
  if (!peekEnrollOptions || !peekEnrollFieldset || !peekEnroll) {
    return;
  }

  const audienceLevel = slide.dataset.audience;
  const eligibleReports = getEligibleEnrollees(audienceLevel);
  const enrollees = [
    {
      ...MANAGER_PROFILE,
      subtitle: "Myself",
    },
    ...eligibleReports.map((report) => ({
      id: report.id,
      name: report.name,
      subtitle: report.level,
    })),
  ];

  peekEnrollOptions.innerHTML = enrollees
    .map(
      (person) => `
        <label class="peek-enroll-option">
          <input
            type="checkbox"
            name="peek-enroll-target"
            value="${person.id}"
            data-enrollee-name="${person.name}"
          />
          <span class="peek-enroll-option-copy">
            <strong>${person.name}</strong>
            <small>${person.subtitle}</small>
          </span>
        </label>
      `
    )
    .join("");

  peekEnrollFieldset.hidden = enrollees.length === 0;
  peekEnrollOptions.querySelectorAll('input[name="peek-enroll-target"]').forEach((input) => {
    input.addEventListener("change", updatePeekEnrollConfirmState);
  });
  updatePeekEnrollConfirmState();
};

const updatePeekEnrollConfirmState = () => {
  if (!peekEnroll || peekEnrollFieldset?.hidden) {
    return;
  }

  const selectedCount = document.querySelectorAll('input[name="peek-enroll-target"]:checked').length;
  peekEnroll.disabled = selectedCount === 0;
};

const getSelectedPeekEnrollees = () =>
  [...document.querySelectorAll('input[name="peek-enroll-target"]:checked')].map((input) => ({
    id: input.value,
    name: input.dataset.enrolleeName,
  }));

const updatePeekSendState = () => {
  if (!peekSend || !peekPrompt) {
    return;
  }

  peekSend.disabled = peekPrompt.value.trim().length === 0;
};

const buildPeekQuestionContext = (slide) => {
  const title = slide.dataset.title;
  const audience = slide.dataset.audience;
  const dates = slide.dataset.dates;
  const duration = slide.dataset.duration;

  return `About the learning "${title}" (${audience}, ${dates}, ${duration}): `;
};

const openLearningPeek = (slide = learningSlides[activeLearningSlide], options = {}) => {
  const { updateHash = true } = options;
  clearInterval(learningCarouselTimer);
  selectedLearningSlide = slide;
  activeLearningSlide = Array.from(learningSlides).indexOf(slide);
  const gradientClass = Array.from(slide.classList).find((className) =>
    className.startsWith("gradient-")
  );
  if (peekHero) {
    peekHero.className = `peek-hero ${gradientClass ?? ""}`.trim();
  }
  peekTitle.textContent = slide.dataset.title;
  peekAudience.textContent = slide.dataset.audience;
  peekDates.textContent = slide.dataset.dates;
  peekDuration.textContent = slide.dataset.duration;
  const isEnrolled = slide.classList.contains("enrolled");

  if (isEnrolled) {
    peekEnroll.textContent = "Unenroll from learning";
    peekEnrollFieldset.hidden = true;
    peekEnroll.disabled = false;
  } else {
    peekEnroll.textContent = "Confirm enrollment";
    renderPeekEnrollOptions(slide);
  }

  if (peekPrompt) {
    peekPrompt.value = "";
    peekPrompt.placeholder = `Ask about “${slide.dataset.title}”…`;
    updatePeekSendState();
  }

  if (peekAskStatus) {
    peekAskStatus.textContent = "";
  }

  learningPeek.hidden = false;

  if (updateHash && slide.dataset.learningId) {
    peekReturnPath = parseRoutePath();
    setRouteHash(`/learning/${slide.dataset.learningId}`);
  }

  if (isEnrolled) {
    requestAnimationFrame(() => peekPrompt?.focus());
  } else {
    requestAnimationFrame(() => {
      peekEnrollOptions?.querySelector('input[name="peek-enroll-target"]')?.focus();
    });
  }
};

const closeLearningPeek = (options = {}) => {
  const { updateHash = true } = options;

  learningPeek.hidden = true;

  if (peekAskStatus) {
    peekAskStatus.textContent = "";
  }

  startLearningCarousel();

  if (updateHash && !routeSync) {
    setRouteHash(peekReturnPath, { replace: true });
  }
};

const submitPeekQuestion = () => {
  if (!peekPrompt || !selectedLearningSlide) {
    return;
  }

  const question = peekPrompt.value.trim();
  if (!question) {
    return;
  }

  const contextualPrompt = `${buildPeekQuestionContext(selectedLearningSlide)}${question}`;

  if (promptInput) {
    promptInput.value = contextualPrompt;
    updateSendState();
  }

  if (peekAskStatus) {
    peekAskStatus.textContent = "Question sent to the Learning Agent about this course.";
  }

  peekPrompt.value = "";
  updatePeekSendState();
};

learningPrev.addEventListener("click", () => {
  showLearningSlide(activeLearningSlide - 1);
  startLearningCarousel();
});

learningNext.addEventListener("click", () => {
  showLearningSlide(activeLearningSlide + 1);
  startLearningCarousel();
});

feedbackPrev?.addEventListener("click", () => {
  showFeedbackSlide(activeFeedbackSlide - 1);
});

feedbackNext?.addEventListener("click", () => {
  showFeedbackSlide(activeFeedbackSlide + 1);
});

document.querySelectorAll(".enroll-button").forEach((button) => {
  button.addEventListener("click", () => {
    const slide = button.closest(".learning-slide");
    openLearningPeek(slide);
  });
});

peekClose.addEventListener("click", closeLearningPeek);

peekPrompt?.addEventListener("input", updatePeekSendState);

peekPrompt?.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    submitPeekQuestion();
  }
});

peekSend?.addEventListener("click", submitPeekQuestion);

learningPeek.addEventListener("click", (event) => {
  if (event.target === learningPeek) {
    closeLearningPeek();
  }
});

peekEnroll.addEventListener("click", () => {
  if (selectedLearningSlide.classList.contains("enrolled")) {
    selectedLearningSlide.classList.remove("enrolled");
    delete selectedLearningSlide.dataset.enrolledFor;
    delete selectedLearningSlide.dataset.enrolledForIds;
  } else {
    const enrollees = getSelectedPeekEnrollees();
    if (!enrollees.length) {
      return;
    }

    selectedLearningSlide.classList.add("enrolled");
    selectedLearningSlide.dataset.enrolledFor = enrollees.map((person) => person.name).join(", ");
    selectedLearningSlide.dataset.enrolledForIds = enrollees.map((person) => person.id).join(",");
  }

  syncSlideEnrollmentUI(selectedLearningSlide);
  showLearningSlide(Array.from(learningSlides).indexOf(selectedLearningSlide));
  closeLearningPeek();
});

const capAvatarStacks = () => {
  const maxVisible = 3;

  document.querySelectorAll(".avatar-stack").forEach((stack) => {
    if (stack.querySelector(".avatar-more")) {
      return;
    }

    const images = [...stack.querySelectorAll("img")];
    if (images.length <= maxVisible) {
      return;
    }

    const remaining = images.length - maxVisible;
    images.slice(maxVisible).forEach((image) => image.remove());

    const more = document.createElement("span");
    more.className = "avatar-more";
    more.textContent = `+${remaining}`;
    more.setAttribute("aria-label", `${remaining} more participants`);
    stack.appendChild(more);
  });
};

capAvatarStacks();
scheduleFeedbackQuoteFit();

window.addEventListener("resize", scheduleFeedbackQuoteFit);

if (document.fonts?.ready) {
  document.fonts.ready.then(scheduleFeedbackQuoteFit);
}

const feedbackCarousel = document.querySelector(".feedback-carousel");
if (feedbackCarousel && "ResizeObserver" in window) {
  const feedbackResizeObserver = new ResizeObserver(scheduleFeedbackQuoteFit);
  feedbackResizeObserver.observe(feedbackCarousel);
}

const renderTravelPeekDetails = (details = []) => {
  if (!travelPeekDetails) {
    return;
  }

  travelPeekDetails.innerHTML = details
    .map(
      (detail) => `
        <div class="trip-detail-row">
          <span class="trip-detail-icon" aria-hidden="true">
            <i class="iconoir-${detail.icon}"></i>
          </span>
          <div>
            <strong>${detail.label}</strong>
            ${detail.lines.map((line) => `<p>${line}</p>`).join("")}
          </div>
        </div>
      `
    )
    .join("");
};

const updateTravelPeekSendState = () => {
  if (!travelPeekSend || !travelPeekPrompt) {
    return;
  }

  travelPeekSend.disabled = travelPeekPrompt.value.trim().length === 0;
};

const closeTravelPeek = (options = {}) => {
  const { updateHash = true } = options;

  if (!travelPeek) {
    return;
  }

  travelPeek.hidden = true;
  activeTravelTripId = undefined;

  if (travelPeekAskStatus) {
    travelPeekAskStatus.textContent = "";
  }

  if (updateHash && !routeSync) {
    setRouteHash(travelTripReturnPath, { replace: true });
  }
};

const openTravelPeek = (tripId, options = {}) => {
  const { updateHash = true } = options;
  const trip = TRIP_CATALOG[tripId];

  if (!trip || trip.action !== "peek" || !travelPeek) {
    return;
  }

  if (learningPeek && !learningPeek.hidden) {
    closeLearningPeek({ updateHash: false });
  }

  closeTravelChatSession({ updateHash: false });
  activeTravelTripId = tripId;

  if (travelPeekHero) {
    travelPeekHero.className = `trip-hero peek-trip-hero ${trip.heroClass ?? ""}`.trim();
  }

  if (travelPeekTitle) {
    travelPeekTitle.textContent = trip.title;
  }

  if (travelPeekMeta) {
    travelPeekMeta.textContent = trip.meta;
  }

  if (travelPeekSummary) {
    travelPeekSummary.textContent = trip.summary;
  }

  renderTravelPeekDetails(trip.details);

  if (travelPeekPrompt) {
    travelPeekPrompt.value = "";
    travelPeekPrompt.placeholder = trip.chatPlaceholder ?? "Ask the Travel Agent about this trip…";
    updateTravelPeekSendState();
  }

  travelPeek.hidden = false;

  if (updateHash) {
    travelTripReturnPath = parseRoutePath();
    setRouteHash(`/travel/trip/${tripId}`);
  }

  requestAnimationFrame(() => travelPeekPrompt?.focus());
};

const openTripFromId = (tripId, options = {}) => {
  const trip = TRIP_CATALOG[tripId];

  if (!trip) {
    setRouteHash("/agents/travel-agent", { replace: true });
    return;
  }

  if (trip.action === "peek") {
    closeTravelChatSession({ updateHash: false });
    openTravelPeek(tripId, options);
  } else {
    openTravelChatSession(tripId, options);
  }
};

const submitTravelPeekQuestion = () => {
  if (!travelPeekPrompt || !activeTravelTripId) {
    return;
  }

  const question = travelPeekPrompt.value.trim();
  if (!question) {
    return;
  }

  if (travelPeekAskStatus) {
    travelPeekAskStatus.textContent = "Message sent to the Travel Agent about this trip.";
  }

  travelPeekPrompt.value = "";
  updateTravelPeekSendState();
};

const submitTravelSessionMessage = (messageOverride) => {
  if (!travelSessionPrompt || !activeTravelTripId) {
    return;
  }

  const message = (typeof messageOverride === "string" ? messageOverride : travelSessionPrompt.value).trim();
  if (!message) {
    return;
  }

  hideTravelChatSuggestions();
  appendTravelChatBubble("user", message);

  const scriptedReply = TRAVEL_CHAT_SCRIPTED_REPLIES[activeTravelTripId]?.[message];
  if (scriptedReply) {
    void respondTravelChatScripted(scriptedReply);
  } else {
    appendTravelChatBubble(
      "agent",
      "Got it — I’ll update this trip and follow up with options in this thread."
    );
  }

  travelSessionPrompt.value = "";
  updateTravelSessionSendState();
  travelSessionPrompt.focus();
};

const initTravelTrips = () => {
  document.querySelectorAll(".trip-table-row[data-trip-id]").forEach((row) => {
    const openRow = () => {
      const trip = TRIP_CATALOG[row.dataset.tripId];
      if (!trip) {
        return;
      }

      const path =
        trip.action === "peek"
          ? `/travel/trip/${row.dataset.tripId}`
          : `/travel/chat/${row.dataset.tripId}`;
      setRouteHash(path);
    };

    row.addEventListener("click", openRow);
    row.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openRow();
      }
    });
  });

  travelPeekClose?.addEventListener("click", () => closeTravelPeek());
  travelPeek?.addEventListener("click", (event) => {
    if (event.target === travelPeek) {
      closeTravelPeek();
    }
  });

  travelPeekPrompt?.addEventListener("input", updateTravelPeekSendState);
  travelPeekPrompt?.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      submitTravelPeekQuestion();
    }
  });
  travelPeekSend?.addEventListener("click", submitTravelPeekQuestion);

  travelChatBack?.addEventListener("click", () => closeTravelChatSession());
  travelSessionPrompt?.addEventListener("input", updateTravelSessionSendState);
  travelSessionPrompt?.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      submitTravelSessionMessage();
    }
  });
  travelSessionSend?.addEventListener("click", submitTravelSessionMessage);

  nextTripCollapse?.addEventListener("click", () => {
    if (!nextTripPanel || !nextTripCollapse) {
      return;
    }

    const collapsed = nextTripPanel.classList.toggle("is-collapsed");
    nextTripCollapse.setAttribute("aria-expanded", String(!collapsed));
    nextTripCollapse.setAttribute("aria-label", collapsed ? "Expand trip details" : "Collapse trip details");
    const icon = nextTripCollapse.querySelector("[class^='iconoir-']");
    if (icon) {
      icon.className = collapsed ? "iconoir-expand" : "iconoir-collapse";
    }
  });
};

const applyRoute = (path) => {
  routeSync = true;
  const segments = path.split("/").filter(Boolean);
  const [root, second, third] = segments;
  const slug = second;
  updateDocumentTitle(path);
  updateHomeTopbar(path);

  if (root === "agents") {
    if (learningPeek && !learningPeek.hidden) {
      closeLearningPeek({ updateHash: false });
    }

    closeTravelPeek({ updateHash: false });
    closeTravelChatSession({ updateHash: false });
    switchAgentView(slug || "career-coach", { updateHash: false, clearPageNav: true });
  } else if (root === "travel") {
    if (learningPeek && !learningPeek.hidden) {
      closeLearningPeek({ updateHash: false });
    }

    switchAgentView("travel-agent", { updateHash: false, clearPageNav: true });

    if (second === "chat" && third) {
      closeTravelPeek({ updateHash: false });
      openTravelChatSession(third, { updateHash: false });
    } else if (second === "trip" && third) {
      openTripFromId(third, { updateHash: false });
    } else {
      closeTravelPeek({ updateHash: false });
      closeTravelChatSession({ updateHash: false });
    }
  } else if (root === "pages") {
    if (learningPeek && !learningPeek.hidden) {
      closeLearningPeek({ updateHash: false });
    }

    closeTravelPeek({ updateHash: false });
    closeTravelChatSession({ updateHash: false });
    const page = slug || "home";

    if (page === "home") {
      switchAgentView("home", { updateHash: false, clearPageNav: false });
      setPageNavActive("home");
    } else {
      switchAgentView("career-coach", { updateHash: false, clearPageNav: false });
      setPageNavActive(page);
      scrollToPageSection(page);
    }
  } else if (root === "learning") {
    if (learningPeek && !learningPeek.hidden) {
      closeLearningPeek({ updateHash: false });
    }

    closeTravelPeek({ updateHash: false });
    switchAgentView("career-coach", { updateHash: false, clearPageNav: false });
    setPageNavActive("learning-library");

    const slide = document.querySelector(`[data-learning-id="${slug}"]`);
    if (slide) {
      showLearningSlide(Array.from(learningSlides).indexOf(slide));
      peekReturnPath = "/pages/learning-library";
      openLearningPeek(slide, { updateHash: false });
    } else {
      setRouteHash(DEFAULT_ROUTE, { replace: true });
    }
  } else if (root === "chats") {
    if (learningPeek && !learningPeek.hidden) {
      closeLearningPeek({ updateHash: false });
    }

    closeTravelPeek({ updateHash: false });
    switchAgentView("career-coach", { updateHash: false, clearPageNav: true });
    const prompt = CHAT_PROMPTS[slug];
    if (prompt) {
      setPrompt(prompt);
    }
  } else {
    setRouteHash(DEFAULT_ROUTE, { replace: true });
  }

  routeSync = false;
};

const initRouter = () => {
  window.addEventListener("hashchange", () => {
    if (routeSync) {
      return;
    }

    applyRoute(parseRoutePath());
  });

  agentNavItems.forEach((item) => {
    item.addEventListener("click", () => {
      closeNavFlyouts();
    });
  });

  pageNavItems.forEach((item) => {
    item.addEventListener("click", () => {
      closeNavFlyouts();
    });
  });

  document.querySelectorAll(".chat-link[data-chat]").forEach((item) => {
    item.addEventListener("click", () => {
      closeNavFlyouts();
    });
  });

  if (!window.location.hash) {
    setRouteHash(DEFAULT_ROUTE, { replace: true });
  }

  applyRoute(parseRoutePath());
};

initTravelTrips();
initRouter();
