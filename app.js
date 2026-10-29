const plusButton = document.querySelector("#plus-button");
const coachMenu = document.querySelector("#coach-menu");
const filePicker = document.querySelector("#file-picker");
const promptInput = document.querySelector("#coach-prompt");
const micButton = document.querySelector("#mic-button");
const sendButton = document.querySelector("#send-button");
const attachmentStatus = document.querySelector("#attachment-status");
const feedbackVoicePeek = document.querySelector("#feedback-voice-peek");
const feedbackVoicePeekClose = document.querySelector("#feedback-voice-peek-close");
const feedbackVoicePeekTitle = document.querySelector("#feedback-voice-peek-title");
const feedbackVoicePeekReason = document.querySelector("#feedback-voice-peek-reason");
const feedbackVoiceStart = document.querySelector("#feedback-voice-start");
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
const itemPeek = document.querySelector("#item-peek");
const itemPeekClose = document.querySelector("#item-peek-close");
const itemPeekEyebrow = document.querySelector("#item-peek-eyebrow");
const itemPeekTitle = document.querySelector("#item-peek-title");
const itemPeekSummary = document.querySelector("#item-peek-summary");
const itemPeekMeta = document.querySelector("#item-peek-meta");
const itemPeekSections = document.querySelector("#item-peek-sections");
const itemPeekPrompt = document.querySelector("#item-peek-prompt");
const itemPeekSend = document.querySelector("#item-peek-send");
const itemPeekAskStatus = document.querySelector("#item-peek-ask-status");
const documentCanvas = document.querySelector("#document-canvas");
const documentCanvasClose = document.querySelector("#document-canvas-close");
const documentCanvasEyebrow = document.querySelector("#document-canvas-eyebrow");
const documentCanvasTitle = document.querySelector("#document-canvas-title");
const documentCanvasSubtitle = document.querySelector("#document-canvas-subtitle");
const documentCanvasBody = document.querySelector("#document-canvas-body");
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
const homeGreeting = document.querySelector("#home-greeting");
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
let selectedLearningSlide;
let learningCarousels = [];

const appShell = document.querySelector("#app-shell");
const sidebar = document.querySelector("#sidebar");
const sidebarToggle = document.querySelector("#sidebar-toggle");
const railButtons = document.querySelectorAll(".rail-button[data-flyout]");
const agentViews = document.querySelectorAll(".agent-view");
const agentNavItems = document.querySelectorAll("[data-agent-view]");
const travelPrompt = document.querySelector("#travel-prompt");
const travelSendButton = document.querySelector("#travel-send-button");
const travelMicButton = document.querySelector("#travel-mic-button");
const learningAgentPrompt = document.querySelector("#learning-agent-prompt");
const learningAgentSendButton = document.querySelector("#learning-agent-send-button");
const learningAgentMicButton = document.querySelector("#learning-agent-mic-button");
const feedbackAgentPrompt = document.querySelector("#feedback-agent-prompt");
const feedbackAgentSendButton = document.querySelector("#feedback-agent-send-button");
const feedbackAgentMicButton = document.querySelector("#feedback-agent-mic-button");
const meetingAgentPrompt = document.querySelector("#meeting-agent-prompt");
const meetingAgentSendButton = document.querySelector("#meeting-agent-send-button");
const meetingAgentMicButton = document.querySelector("#meeting-agent-mic-button");
const agentChatSession = document.querySelector("#agent-chat-session");
const agentChatTitle = document.querySelector("#agent-chat-title");
const chatNavSections = document.querySelectorAll(".recent-chats");
const agentChatThread = document.querySelector("#agent-chat-thread");
const agentChatSuggestions = document.querySelector("#agent-chat-suggestions");
const agentChatBody = document.querySelector(".agent-chat-body");
const agentSessionPrompt = document.querySelector("#agent-session-prompt");
const agentSessionSend = document.querySelector("#agent-session-send");
const chatNavLists = document.querySelectorAll(".chat-nav-list, #flyout-chats");
const pageNavItems = document.querySelectorAll(".page-nav-item");

const DEFAULT_ROUTE = "/pages/home";
const mainContent = document.querySelector(".main-content");
const homeTopbar = document.querySelector("#home-topbar");
const workspacePageLabel = document.querySelector("#workspace-page-label");
const workspacePageHeading = document.querySelector("#workspace-page-heading");
const workspacePageSubtitle = document.querySelector("#workspace-page-subtitle");
const workspacePageMetric = document.querySelector("#workspace-page-metric");
const workspaceList = document.querySelector("#workspace-list");
const workspaceDetail = document.querySelector("#workspace-detail");
const workspaceAgentPrompt = document.querySelector("#workspace-agent-prompt");
const workspaceAgentSend = document.querySelector("#workspace-agent-send");
const workspaceAgentStatus = document.querySelector("#workspace-agent-status");
const workspacePageSection = document.querySelector("#view-workspace-pages .workspace-page");

let currentWorkspacePage;
let workspaceRouteSync = false;
let workspaceRenderToken = 0;

const WORKSPACE_SKELETON_ROW_COUNT = 7;
const WORKSPACE_LIST_LOAD_MS = 340;
const WORKSPACE_LIST_LOAD_INITIAL_MS = 680;

let workspaceListInitialLoadPending = true;

const prefersReducedMotion = () =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

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
  growth: "page-growth-plans",
  feedback: "page-feedback",
  learning: "page-learning-library",
  "workspace-settings": "page-home",
};

const WORKSPACE_PAGES = {
  tasks: {
    label: "Tasks",
    title: "All tasks",
    subtitle: "Open items pulled from Career Coach, Travel, Meeting, Feedback, and Learning.",
    items: [
      {
        id: "review-promotion-packet",
        title: "Review promotion packet",
        subtitle: "Tasks · Principal Designer · Jordan Lee",
        status: { label: "Overdue", className: "status-pill-overdue", icon: "emoji-sad" },
        leading: {
          type: "avatar",
          src: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=96&h=96&q=80",
          alt: "Jordan Lee",
        },
        detail: {
          eyebrow: "Career Coach",
          summary:
            "Jordan’s principal promotion packet is ready for manager review. Validate scope evidence, stakeholder quotes, and the promotion narrative before calibration.",
          meta: [
            { label: "Owner", value: "Michael Olivier" },
            { label: "Due", value: "Oct 10 · Overdue by 9 days" },
            { label: "Source", value: "Growth plans · Principal IC track" },
          ],
          sections: [
            {
              title: "What to review",
              body: "Confirm impact examples map to principal-level expectations and that peer feedback supports the promotion case.",
            },
            {
              title: "Next step",
              body: "Leave comments for Jordan, then mark ready for HR calibration on Wednesday.",
            },
          ],
          actions: [
            { label: "Open promotion packet", primary: true, action: "promotion-packet-jordan-lee" },
            { label: "Schedule calibration prep" },
          ],
        },
      },
      {
        id: "weekly-1-1-maya",
        title: "Weekly 1:1 with Maya",
        subtitle: "Events · Today, 2:30 PM",
        status: { label: "Today", className: "status-pill-pending", icon: "clock" },
        leading: { type: "agent", agent: "meeting", icon: "calendar" },
        detail: {
          eyebrow: "Meeting Agent",
          summary:
            "Prepare for your 1:1 with Maya Chen. Recent check-in notes highlight facilitation wins and a need for clearer promotion narrative practice.",
          meta: [
            { label: "When", value: "Today · 2:30 – 3:00 PM MT" },
            { label: "Location", value: "Zoom · Nexus calendar hold" },
            { label: "Direct report", value: "Maya Chen · Senior Designer" },
          ],
          sections: [
            {
              title: "Suggested agenda",
              body: "Celebrate stakeholder narrative progress, align on Q4 development goals, and preview principal-scope conversation topics.",
            },
          ],
          actions: [{ label: "Open 1:1 brief", primary: true }, { label: "Add talking point" }],
        },
      },
      {
        id: "confirm-denver-interview",
        title: "Confirm Denver leadership interview",
        subtitle: "Travel · Nov 4 – Nov 5",
        status: { label: "Needs confirmation", className: "status-pill-pending", icon: "clock" },
        leading: { type: "agent", agent: "travel", icon: "compass" },
        detail: {
          eyebrow: "Travel Agent",
          summary:
            "United flights are on hold for the Denver leadership interview loop. Confirm travelers and book before holds expire tonight.",
          meta: [
            { label: "Trip", value: "Denver leadership interview" },
            { label: "Travelers", value: "Michael Olivier + 1" },
            { label: "Hold expires", value: "Today · 6:00 PM MT" },
          ],
          sections: [
            {
              title: "On hold",
              body: "UA 552 SFO → DEN Nov 4 · UA 881 DEN → SFO Nov 5. Lodging not booked yet.",
            },
          ],
          actions: [{ label: "Review and confirm flights", primary: true }, { label: "Message Travel Agent" }],
        },
      },
      {
        id: "share-portfolio-feedback",
        title: "Share portfolio feedback",
        subtitle: "Feedback · Associate Designer · Ari Reed",
        status: { label: "Due soon", className: "status-pill-pending", icon: "clock" },
        leading: { type: "agent", agent: "feedback", icon: "message-text" },
        detail: {
          eyebrow: "Feedback Agent",
          summary:
            "Draft is ready from your latest portfolio review with Ari. Tone is supportive; tighten critique expectations before Ari presents first concepts to partners.",
          meta: [
            { label: "Recipient", value: "Ari Reed" },
            { label: "Review type", value: "Portfolio critique" },
            { label: "Send by", value: "Tomorrow" },
          ],
          sections: [
            {
              title: "Draft highlight",
              body: "“Strong visual exploration—next round, show two divergent directions with explicit tradeoffs for engineering and PM partners.”",
            },
          ],
          actions: [{ label: "Edit and send feedback", primary: true }, { label: "Save as template" }],
        },
      },
      {
        id: "calibrate-q4-goals",
        title: "Calibrate Q4 goals",
        subtitle: "Tasks · Full team",
        status: { label: "In progress", className: "status-pill-progress", icon: "emoji-blink-right" },
        leading: {
          type: "avatars",
          count: 5,
        },
        detail: {
          eyebrow: "Career Coach",
          summary:
            "Align development goals across all five direct reports before Q4 check-ins. Two reports still need measurable outcomes attached.",
          meta: [
            { label: "Team", value: "5 direct reports" },
            { label: "Progress", value: "3 of 5 goals finalized" },
            { label: "Workshop", value: "Career framework calibration · Wed" },
          ],
          sections: [
            {
              title: "Outstanding",
              body: "Lena and Noah need clearer success metrics on cross-functional influence goals.",
            },
          ],
          actions: [{ label: "Open team goals board", primary: true }],
        },
      },
      {
        id: "assign-critique-workshop",
        title: "Assign critique skills workshop",
        subtitle: "Learning · Senior Designer",
        status: { label: "Due soon", className: "status-pill-pending", icon: "clock" },
        leading: { type: "agent", agent: "learning", icon: "graduation-cap" },
        detail: {
          eyebrow: "Learning Agent",
          summary:
            "Recommended for Maya based on recent 1:1 themes. Enrolling adds reminders and follow-up coaching prompts after each session.",
          meta: [
            { label: "Course", value: "Leading through ambiguous strategy" },
            { label: "Format", value: "3 sessions · 50 minutes each" },
            { label: "Starts", value: "Dec 2" },
          ],
          sections: [
            {
              title: "Why now",
              body: "Supports Maya’s goal to practice framing tradeoffs before director-level reviews.",
            },
          ],
          actions: [{ label: "Assign to Maya", primary: true }, { label: "Preview course" }],
        },
      },
      {
        id: "book-rental-car-sf",
        title: "Book rental car for SF hiring panel",
        subtitle: "Travel · Dec 9 – Dec 10",
        status: { label: "Missing booking", className: "status-pill-overdue", icon: "warning-circle" },
        leading: { type: "agent", agent: "travel", icon: "compass" },
        detail: {
          eyebrow: "Travel Agent",
          summary:
            "Flights and hotel are confirmed for the SF hiring panel, but ground transport is missing. Book before Dec 1 to stay within policy.",
          meta: [
            { label: "Trip", value: "SF hiring panel" },
            { label: "Pickup", value: "SFO · Dec 9" },
            { label: "Policy", value: "Mid-size or compact · Nexus preferred vendors" },
          ],
          sections: [
            {
              title: "Suggested",
              body: "Hertz mid-size at SFO Terminal 3 — matches your prior SF interview trips.",
            },
          ],
          actions: [{ label: "Book rental car", primary: true }],
        },
      },
    ],
  },
  team: {
    label: "Team",
    title: "Your team",
    subtitle: "Direct reports, weekly check-ins, and coaching context in one place.",
    items: [
      {
        id: "ari-reed",
        title: "Ari Reed",
        subtitle: "Associate Designer · Weekly check-in submitted",
        status: { label: "Needs coaching", className: "status-pill-pending", icon: "clock" },
        leading: {
          type: "avatar",
          src: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=96&h=96&q=80",
          alt: "Ari Reed",
        },
        detail: {
          eyebrow: "Check-ins",
          summary:
            "Ari needs clearer critique expectations before presenting first concepts. Focus on structured feedback frameworks in your next 1:1.",
          meta: [
            { label: "Level", value: "Associate Designer" },
            { label: "Tenure", value: "8 months on team" },
            { label: "Last 1:1", value: "Oct 3" },
          ],
          sections: [
            {
              title: "This week",
              body: "Onboarding milestone: first partner critique scheduled Friday. Review portfolio feedback draft before send.",
            },
          ],
          actions: [{ label: "Open growth plan", primary: true }, { label: "Schedule 1:1" }],
        },
      },
      {
        id: "maya-chen",
        title: "Maya Chen",
        subtitle: "Senior Designer · 1:1 today",
        status: { label: "On track", className: "status-pill-progress", icon: "emoji-blink-right" },
        leading: {
          type: "avatar",
          src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=96&h=96&q=80",
          alt: "Maya Chen",
        },
        detail: {
          eyebrow: "Check-ins",
          summary:
            "Strong progress on facilitation and stakeholder narratives. Discuss principal-scope readiness and Q4 learning path.",
          meta: [
            { label: "Level", value: "Senior Designer" },
            { label: "Next 1:1", value: "Today · 2:30 PM" },
            { label: "Goals", value: "2 of 3 Q4 goals finalized" },
          ],
          sections: [
            {
              title: "Recent win",
              body: "Led cross-functional workshop that unblocked engineering estimates on the onboarding redesign.",
            },
          ],
          actions: [{ label: "Open 1:1 brief", primary: true }],
        },
      },
      {
        id: "lena-ortiz",
        title: "Lena Ortiz",
        subtitle: "Senior Designer · Check-in due Friday",
        status: { label: "Due soon", className: "status-pill-pending", icon: "clock" },
        leading: {
          type: "avatar",
          src: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=96&h=96&q=80",
          alt: "Lena Ortiz",
        },
        detail: {
          eyebrow: "Check-ins",
          summary:
            "Lena is calibrating influence goals for Q4. Help connect research synthesis strengths to measurable product outcomes.",
          meta: [
            { label: "Level", value: "Senior Designer" },
            { label: "Check-in", value: "Due Fri · Oct 17" },
            { label: "Focus", value: "Cross-functional influence" },
          ],
          sections: [
            {
              title: "Manager note",
              body: "Recent feedback praised research synthesis; next step is tying recommendations to customer metrics.",
            },
          ],
          actions: [{ label: "Review check-in draft", primary: true }],
        },
      },
      {
        id: "jordan-lee",
        title: "Jordan Lee",
        subtitle: "Principal Designer · Promotion packet in review",
        status: { label: "Priority", className: "status-pill-overdue", icon: "emoji-sad" },
        leading: {
          type: "avatar",
          src: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=96&h=96&q=80",
          alt: "Jordan Lee",
        },
        detail: {
          eyebrow: "Check-ins",
          summary:
            "Promotion packet awaiting your review before org calibration. Jordan is ready to discuss principal IC scope and design strategy ownership.",
          meta: [
            { label: "Level", value: "Principal Designer" },
            { label: "Packet status", value: "Submitted · awaiting manager review" },
            { label: "Calibration", value: "Wed · Leadership forum" },
          ],
          sections: [
            {
              title: "Evidence themes",
              body: "Org-level design strategy, mentorship of senior ICs, and measurable portfolio outcomes across two product lines.",
            },
          ],
          actions: [
            { label: "Review promotion packet", primary: true, action: "promotion-packet-jordan-lee" },
          ],
        },
      },
      {
        id: "noah-patel",
        title: "Noah Patel",
        subtitle: "Principal Designer · Strategy discussion queued",
        status: { label: "Ready", className: "status-pill-progress", icon: "emoji-blink-right" },
        leading: {
          type: "avatar",
          src: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=96&h=96&q=80",
          alt: "Noah Patel",
        },
        detail: {
          eyebrow: "Check-ins",
          summary:
            "Ready to discuss principal scope and org-level design strategy. Align on H1 planning participation and staff+ partnership model.",
          meta: [
            { label: "Level", value: "Principal Designer" },
            { label: "Q4 focus", value: "Ambiguous strategy leadership" },
            { label: "Goals", value: "Needs measurable outcomes on influence OKR" },
          ],
          sections: [
            {
              title: "Suggested topic",
              body: "Define success metrics for the platform vision workstream before director review.",
            },
          ],
          actions: [{ label: "Open strategy notes", primary: true }],
        },
      },
    ],
  },
  growth: {
    label: "Growth",
    title: "Development plans",
    subtitle: "Goals, calibrations, and events tied to team growth.",
    items: [
      {
        id: "maya-q4-goals",
        title: "Maya Chen · Q4 development goals",
        subtitle: "Growth plan · 2 goals pending metrics",
        status: { label: "In progress", className: "status-pill-progress", icon: "emoji-blink-right" },
        leading: {
          type: "avatar",
          src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=96&h=96&q=80",
          alt: "Maya Chen",
        },
        detail: {
          eyebrow: "Growth plan",
          summary:
            "Finalize measurable outcomes for influence and principal-readiness goals before end-of-quarter check-in.",
          meta: [
            { label: "Designer", value: "Maya Chen · Senior" },
            { label: "Review", value: "Due Oct 31" },
            { label: "Coach", value: "Career Coach Agent" },
          ],
          sections: [
            {
              title: "Open items",
              body: "Add success metrics for “lead ambiguous strategy reviews” and link learning workshop completion.",
            },
          ],
          actions: [{ label: "Edit goals", primary: true }],
        },
      },
      {
        id: "career-framework-calibration",
        title: "Career framework calibration",
        subtitle: "Events · Wednesday · Leadership forum",
        status: { label: "This week", className: "status-pill-progress", icon: "emoji-blink-right" },
        leading: { type: "agent", agent: "meeting", icon: "calendar" },
        detail: {
          eyebrow: "Upcoming event",
          summary:
            "Cross-functional calibration for design career levels. Bring promotion packets and Q4 goal summaries for your team.",
          meta: [
            { label: "When", value: "Wednesday · 10:00 AM MT" },
            { label: "Attendees", value: "Design managers + HRBP" },
            { label: "Prep due", value: "Tuesday EOD" },
          ],
          sections: [
            {
              title: "Your prep",
              body: "Jordan promotion packet, Maya principal-readiness notes, and team Q4 goal roll-up.",
            },
          ],
          actions: [{ label: "Open calibration packet", primary: true }],
        },
      },
      {
        id: "ari-onboarding-plan",
        title: "Ari Reed · Onboarding plan",
        subtitle: "Growth plan · Month 2 milestones",
        status: { label: "On track", className: "status-pill-progress", icon: "emoji-blink-right" },
        leading: {
          type: "avatar",
          src: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=96&h=96&q=80",
          alt: "Ari Reed",
        },
        detail: {
          eyebrow: "Growth plan",
          summary:
            "Associate designer onboarding track through first partner critique. Emphasis on critique vocabulary and presentation structure.",
          meta: [
            { label: "Designer", value: "Ari Reed · Associate" },
            { label: "Next milestone", value: "Partner critique · Friday" },
            { label: "Owner", value: "Michael + Maya (buddy)" },
          ],
          sections: [
            {
              title: "Milestone",
              body: "Complete shadow critiques and deliver first structured concept readout to PM partners.",
            },
          ],
          actions: [{ label: "View onboarding checklist", primary: true }],
        },
      },
      {
        id: "noah-strategy-track",
        title: "Noah Patel · Platform strategy track",
        subtitle: "Growth plan · Principal scope",
        status: { label: "Needs metrics", className: "status-pill-pending", icon: "clock" },
        leading: {
          type: "avatar",
          src: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=96&h=96&q=80",
          alt: "Noah Patel",
        },
        detail: {
          eyebrow: "Growth plan",
          summary:
            "Define org-level outcomes for platform vision work. Connect to H1 planning and staff design partnership.",
          meta: [
            { label: "Designer", value: "Noah Patel · Principal" },
            { label: "Horizon", value: "Q4 – H1" },
            { label: "Sponsor", value: "Director, Product Design" },
          ],
          sections: [
            {
              title: "Discussion prompt",
              body: "What measurable customer or business metrics will move if the platform vision lands?",
            },
          ],
          actions: [{ label: "Add success metrics", primary: true }],
        },
      },
    ],
  },
  feedback: {
    label: "Feedback",
    title: "Feedback library",
    subtitle: "Recent feedback, drafts, and themes across your team.",
    items: [
      {
        id: "feedback-maya-prototype",
        title: "To Maya Chen · Prototype clarity",
        subtitle: "Sent · 1 day ago",
        status: { label: "Delivered", className: "status-pill-progress", icon: "check-circle" },
        leading: { type: "agent", agent: "feedback", icon: "message-text" },
        detail: {
          eyebrow: "Recent feedback",
          summary:
            "“Your prototype made tradeoffs clear and helped engineering estimate the right path forward.”",
          meta: [
            { label: "Recipient", value: "Maya Chen" },
            { label: "Context", value: "Onboarding redesign review" },
            { label: "Sent", value: "1 day ago" },
          ],
          sections: [
            {
              title: "Follow-up",
              body: "Ask Maya to replicate this tradeoff format in the next director readout.",
            },
          ],
          actions: [{ label: "Use as template", primary: true }],
        },
      },
      {
        id: "feedback-lena-research",
        title: "To Lena Ortiz · Research synthesis",
        subtitle: "Sent · 3 days ago",
        status: { label: "Delivered", className: "status-pill-progress", icon: "check-circle" },
        leading: { type: "agent", agent: "feedback", icon: "message-text" },
        detail: {
          eyebrow: "Recent feedback",
          summary:
            "“Great research synthesis. Next time, anchor recommendations to measurable customer outcomes.”",
          meta: [
            { label: "Recipient", value: "Lena Ortiz" },
            { label: "Context", value: "Discovery readout" },
            { label: "Sent", value: "3 days ago" },
          ],
          sections: [
            {
              title: "Coaching angle",
              body: "Pair with Q4 influence goal metrics in your next 1:1.",
            },
          ],
          actions: [{ label: "Schedule follow-up", primary: true }],
        },
      },
      {
        id: "feedback-ari-critique",
        title: "Draft · Ari Reed · Portfolio critique",
        subtitle: "Feedback Agent · Not sent",
        status: { label: "Draft", className: "status-pill-pending", icon: "clock" },
        leading: { type: "agent", agent: "feedback", icon: "message-text" },
        detail: {
          eyebrow: "Draft feedback",
          summary:
            "“Strong visual exploration—next round, show two divergent directions with explicit tradeoffs for engineering and PM partners.”",
          meta: [
            { label: "Recipient", value: "Ari Reed" },
            { label: "Review", value: "Portfolio round 2" },
            { label: "Due", value: "Tomorrow" },
          ],
          sections: [
            {
              title: "Tone check",
              body: "Supportive with clear critique expectations—matches Ari’s onboarding goals.",
            },
          ],
          actions: [{ label: "Edit and send", primary: true }, { label: "Discard draft" }],
        },
      },
      {
        id: "feedback-themes-q4",
        title: "Team themes · Q4",
        subtitle: "Feedback Agent · Auto-summary",
        status: { label: "Insight", className: "status-pill-progress", icon: "emoji-blink-right" },
        leading: { type: "agent", agent: "feedback", icon: "message-text" },
        detail: {
          eyebrow: "Themes",
          summary:
            "Recurring strengths: research synthesis and facilitation. Recurring growth area: tying design decisions to measurable outcomes.",
          meta: [
            { label: "Period", value: "Last 30 days" },
            { label: "Reports", value: "5 direct reports" },
            { label: "Sources", value: "12 feedback entries" },
          ],
          sections: [
            {
              title: "Suggested action",
              body: "Use calibration prep to align growth plans on outcome-based goals.",
            },
          ],
          actions: [{ label: "Export summary", primary: true }],
        },
      },
    ],
  },
  learning: {
    label: "Learning",
    title: "Courses and paths",
    subtitle: "Suggested learnings matched to your team’s levels and goals.",
    items: [
      {
        id: "execution-to-product-thinking",
        title: "From execution to product thinking",
        subtitle: "Associate Designer · Oct 21 – Nov 4",
        status: { label: "Suggested", className: "status-pill-pending", icon: "clock" },
        leading: { type: "agent", agent: "learning", icon: "graduation-cap" },
        detail: {
          eyebrow: "Suggested learning",
          summary:
            "Build confidence in problem framing, research synthesis, and critique. Recommended for Ari Reed’s onboarding track.",
          meta: [
            { label: "Audience", value: "Associate Designer" },
            { label: "Schedule", value: "Oct 21 – Nov 4" },
            { label: "Format", value: "3 sessions · 45 minutes each" },
          ],
          sections: [
            {
              title: "Outcomes",
              body: "Framing problems for partner reviews and delivering structured concept readouts.",
            },
          ],
          actions: [{ label: "Enroll Ari Reed", primary: true }, { label: "Preview syllabus" }],
        },
      },
      {
        id: "influencing-without-authority",
        title: "Influencing without authority",
        subtitle: "Principal Designer · Nov 6 – Nov 20",
        status: { label: "Suggested", className: "status-pill-pending", icon: "clock" },
        leading: { type: "agent", agent: "learning", icon: "graduation-cap" },
        detail: {
          eyebrow: "Suggested learning",
          summary:
            "Sharpen executive storytelling and cross-functional alignment. Strong fit for Noah’s platform strategy track.",
          meta: [
            { label: "Audience", value: "Principal Designer" },
            { label: "Schedule", value: "Nov 6 – Nov 20" },
            { label: "Format", value: "2 workshops · 60 minutes each" },
          ],
          sections: [
            {
              title: "Outcomes",
              body: "Executive-ready narratives and alignment plans for ambiguous strategy work.",
            },
          ],
          actions: [{ label: "Enroll Noah Patel", primary: true }],
        },
      },
      {
        id: "leading-ambiguous-strategy",
        title: "Leading through ambiguous strategy",
        subtitle: "Senior Designer · Dec 2 – Dec 16",
        status: { label: "Suggested", className: "status-pill-pending", icon: "clock" },
        leading: { type: "agent", agent: "learning", icon: "graduation-cap" },
        detail: {
          eyebrow: "Suggested learning",
          summary:
            "Practice framing tradeoffs, aligning partners, and coaching critique. Matches Maya’s Q4 development goals.",
          meta: [
            { label: "Audience", value: "Senior Designer" },
            { label: "Schedule", value: "Dec 2 – Dec 16" },
            { label: "Format", value: "3 sessions · 50 minutes each" },
          ],
          sections: [
            {
              title: "Agent note",
              body: "Enrolling adds reminders before each session and follow-up coaching prompts after completion.",
            },
          ],
          actions: [{ label: "Enroll Maya Chen", primary: true }, { label: "Ask Learning Agent" }],
        },
      },
    ],
  },
};

const WORKSPACE_DOCUMENTS = {
  "promotion-packet-jordan-lee": {
    eyebrow: "Career Coach · Promotion packet",
    title: "Principal Designer promotion",
    subtitle: "Jordan Lee · Design · submitted Oct 8, 2026",
    body: `<p class="document-lede">
      This packet summarizes Jordan Lee’s case for promotion to <strong>Principal Designer</strong>,
      including scope evidence, cross-functional impact, and stakeholder feedback collected over the
      last two review cycles.
    </p>
    <section>
      <h2>Executive summary</h2>
      <p>
        Jordan has operated at principal scope for three consecutive quarters by leading ambiguous
        platform strategy work, coaching senior ICs through critique, and aligning product, engineering,
        and research on a unified onboarding vision. Promotion is recommended with high confidence
        entering Q4 calibration.
      </p>
    </section>
    <section>
      <h2>Scope &amp; impact</h2>
      <h3>Platform onboarding strategy</h3>
      <p>
        Owned the end-to-end strategy for onboarding redesign across web and mobile, unifying three
        legacy flows into a single progressive disclosure model. Drove executive readouts and
        secured alignment on a phased rollout that reduced time-to-value by an estimated 18%.
      </p>
      <h3>Org-level facilitation</h3>
      <p>
        Facilitated monthly design–engineering forums on technical debt tradeoffs, resulting in a
        shared prioritization rubric adopted by two additional product pillars. Mentored Maya Chen
        and Ari Reed on stakeholder narrative structure ahead of partner critiques.
      </p>
      <h3>Principal-level expectations</h3>
      <ul>
        <li>Sets direction for multi-squad initiatives without direct authority over all contributors.</li>
        <li>Coaches other senior ICs on scope framing and executive communication.</li>
        <li>Anticipates cross-org risks and proposes mitigation before escalation.</li>
      </ul>
    </section>
    <section>
      <h2>Stakeholder feedback</h2>
      <blockquote>
        “Jordan reframed a contentious platform debate into a decision we could all commit to. That
        facilitation changed how we run quarterly planning.”
        <footer>— Priya N., Director of Product</footer>
      </blockquote>
      <blockquote>
        “The onboarding strategy doc became the source of truth for eng leads. Jordan’s clarity on
        tradeoffs saved us at least one mis-scoped sprint.”
        <footer>— Marcus T., Engineering Manager</footer>
      </blockquote>
      <blockquote>
        “Jordan consistently elevates critique quality. Senior designers on the team ask for Jordan’s
        review before director readouts.”
        <footer>— Lena Ortiz, Senior Designer</footer>
      </blockquote>
    </section>
    <section>
      <h2>Manager recommendation</h2>
      <p>
        Jordan is ready for Principal Designer. Scope, influence, and coaching behaviors match our
        career framework at the principal IC bar. I recommend approval for the Q4 calibration cycle
        with a focus on sustaining org-wide facilitation as platform work expands in H1.
      </p>
      <p class="document-signature"><strong>Michael Olivier</strong><br />Design Manager · Oct 8, 2026</p>
    </section>`,
  },
};

const WORKSPACE_PAGE_KEYS = new Set(Object.keys(WORKSPACE_PAGES));

const WORKSPACE_PAGE_ALIASES = {
  "growth-plans": "growth",
  "learning-library": "learning",
};

const resolveWorkspacePage = (page) => WORKSPACE_PAGE_ALIASES[page] ?? page;

const buildWorkspaceListItemDestinations = () => {
  const destinations = {};

  Object.entries(WORKSPACE_PAGES).forEach(([pageKey, config]) => {
    config.items.forEach((item) => {
      destinations[item.id] = { type: "workspace", page: pageKey, itemId: item.id };
    });
  });

  return destinations;
};

const ITEM_PEEK_CONTENT = {
  "career-framework-calibration": {
    eyebrow: "Upcoming event",
    title: "Career framework calibration",
    summary:
      "Leadership forum to align on principal IC and manager expectations before Q4 calibrations. Come prepared with promotion packets and growth plan notes.",
    meta: [
      { label: "When", value: "Wednesday · 10:00 – 11:30 AM MT" },
      { label: "Attendees", value: "Design managers · HR partners" },
      { label: "Location", value: "Nexus HQ · 4th floor + Zoom" },
    ],
    sections: [
      {
        title: "What to bring",
        body: "Jordan Lee’s principal packet, Q4 goal summaries for your team, and open questions on scope rubrics.",
      },
    ],
    agentId: "career-coach",
    promptPlaceholder: "Ask about calibration prep or talking points…",
  },
  "design-critique-onboarding": {
    eyebrow: "Upcoming event",
    title: "Design critique: onboarding redesign",
    summary:
      "Partner critique for the onboarding redesign squad. Focus on flow clarity, engineering handoff quality, and accessibility notes.",
    meta: [
      { label: "When", value: "Friday · 1:00 PM MT" },
      { label: "Participants", value: "Ari Reed, Lena Ortiz, Maya Chen" },
      { label: "Format", value: "90-minute studio critique" },
    ],
    sections: [
      {
        title: "Goal",
        body: "Give Ari structured feedback before concepts go to external partners next week.",
      },
    ],
    agentId: "feedback-agent",
    promptPlaceholder: "Ask about critique framing or feedback drafts…",
  },
  "happening-workplace-conduct": {
    eyebrow: "Company wide",
    title: "Workplace conduct & anti-harassment training",
    summary:
      "Annual compliance module for all people managers — about 35 minutes. Required completion by Nov 15.",
    meta: [
      { label: "Required by", value: "Nov 15" },
      { label: "Duration", value: "≈ 35 minutes" },
      { label: "Audience", value: "People managers" },
    ],
    sections: [
      {
        title: "Why it matters",
        body: "Keeps your team’s manager training current for HR audits and Q4 compliance reporting.",
      },
    ],
    agentId: "learning-agent",
    promptPlaceholder: "Ask about required training or scheduling time…",
  },
  "happening-benefits-2026": {
    eyebrow: "Company wide",
    title: "Review 2026 benefits elections",
    summary:
      "Open enrollment ends Oct 31. Confirm medical, HSA, and parental leave selections for your household.",
    meta: [
      { label: "Enrollment ends", value: "Oct 31" },
      { label: "System", value: "Workday Benefits" },
    ],
    sections: [
      {
        title: "Manager reminder",
        body: "No direct action for your team, but plan 1:1 buffer if reports have questions during enrollment week.",
      },
    ],
    agentId: "learning-agent",
    promptPlaceholder: "Ask about benefits timelines or team reminders…",
  },
  "happening-q4-all-hands": {
    eyebrow: "Company wide",
    title: "Q4 company priorities & people programs",
    summary:
      "Livestream on Oct 24 covering roadmap updates and HR program changes. Recording available for async viewing.",
    meta: [
      { label: "Live", value: "Oct 24 · 11:00 AM MT" },
      { label: "Recording", value: "Posted same day" },
    ],
    sections: [
      {
        title: "People programs",
        body: "Expect updates on calibration timelines, learning stipends, and manager coaching resources.",
      },
    ],
    agentId: "career-coach",
    promptPlaceholder: "Ask how Q4 priorities affect your team…",
  },
  "travel-agent-tip": {
    eyebrow: "Travel Agent",
    title: "Combine travel with check-ins",
    summary:
      "When booking onsite trips, align arrival times with 1:1 and critique schedules so you are not rushing between airports and coaching conversations.",
    meta: [
      { label: "Tip", value: "Manager travel" },
      { label: "Applies to", value: "Multi-day onsite trips" },
    ],
    sections: [
      {
        title: "Example",
        body: "For Denver Nov 4–5, hold return flights after 6 PM so you can keep Maya’s afternoon 1:1 intact.",
      },
    ],
    agentId: "travel-agent",
    promptPlaceholder: "Ask the Travel Agent to optimize a trip around your calendar…",
  },
  "travel-plan-austin-offsite": {
    eyebrow: "Travel Agent",
    title: "Plan Austin design offsite",
    summary:
      "Q4 team workshop travel for four designers — flights, lodging near the workshop venue, and group ground transport.",
    meta: [
      { label: "Dates", value: "Oct 28 – Oct 31" },
      { label: "Travelers", value: "4 · Design leadership" },
      { label: "Status", value: "Flights confirmed · finishing hotel block" },
    ],
    sections: [
      {
        title: "Next step",
        body: "Confirm rooming list and whether the team needs a shared SUV from AUS to the workshop studio.",
      },
    ],
    agentId: "travel-agent",
    promptPlaceholder: "Ask about Austin offsite logistics…",
  },
};

const LIST_ITEM_DESTINATIONS = {
  ...buildWorkspaceListItemDestinations(),
  "career-framework-calibration": { type: "peek", peekId: "career-framework-calibration" },
  "design-critique-onboarding": { type: "peek", peekId: "design-critique-onboarding" },
  "happening-workplace-conduct": { type: "peek", peekId: "happening-workplace-conduct" },
  "happening-benefits-2026": { type: "peek", peekId: "happening-benefits-2026" },
  "happening-q4-all-hands": { type: "peek", peekId: "happening-q4-all-hands" },
  "travel-agent-tip": { type: "peek", peekId: "travel-agent-tip" },
  "travel-plan-austin-offsite": { type: "peek", peekId: "travel-plan-austin-offsite" },
  "travel-book-denver-interview": { type: "travel", tripId: "denver-leadership-interview" },
};

const CHAT_PROMPTS = {
  "principal-ic-growth-path": "Continue our conversation about principal IC growth paths for my team.",
  "q4-development-goals": "Help me refine Q4 development goals for my direct reports.",
  "associate-designer-onboarding": "Pick up the associate designer onboarding plan we started.",
};

const SEED_CHAT_DETAILS = {
  "principal-ic-growth-path": {
    title: "Principal IC growth path",
    agentId: "career-coach",
    subtitle: "Jordan Lee · Principal track",
  },
  "q4-development-goals": {
    title: "Q4 development goals",
    agentId: "career-coach",
    subtitle: "Team-wide development planning",
  },
  "associate-designer-onboarding": {
    title: "Associate designer onboarding",
    agentId: "career-coach",
    subtitle: "Ari Reed · First 90 days",
  },
};

const NEXUS_PEOPLE_OS_SOURCE = { name: "Nexus People OS", logo: "./assets/nexus-mark.svg" };

const AGENT_CHAT_SOURCES = {
  "career-coach": [
    { name: "Growth plans", icon: "graph-up" },
    { name: "Weekly check-ins", icon: "task-list" },
    NEXUS_PEOPLE_OS_SOURCE,
  ],
  "feedback-agent": [
    { name: "Feedback requests", icon: "message-text" },
    { name: "QCI & calibration", icon: "calendar" },
    NEXUS_PEOPLE_OS_SOURCE,
  ],
  "learning-agent": [
    { name: "Learning library", icon: "book-stack" },
    { name: "Enrollments", icon: "graduation-cap" },
    NEXUS_PEOPLE_OS_SOURCE,
  ],
  "travel-agent": [
    { name: "Trips & bookings", icon: "airplane" },
    { name: "Travel policy", icon: "wallet" },
    NEXUS_PEOPLE_OS_SOURCE,
  ],
  "meeting-agent": [
    { name: "Calendar", icon: "calendar" },
    { name: "1:1 notes", icon: "notes" },
    NEXUS_PEOPLE_OS_SOURCE,
  ],
};

const AGENT_CHAT_META = {
  "career-coach": {
    label: "Career Coach",
    subtitle: "Coaching, growth plans, and team development",
    suggestions: ["Summarize check-in themes", "Draft talking points for my next 1:1"],
  },
  "feedback-agent": {
    label: "Feedback Agent",
    subtitle: "Drafting and delivering thoughtful feedback",
    suggestions: ["Make this feedback more specific", "Suggest a kinder opening line"],
  },
  "learning-agent": {
    label: "Learning Agent",
    subtitle: "Courses, enrollments, and skill development",
    suggestions: ["Recommend a follow-up course", "Who else should take this?"],
  },
  "travel-agent": {
    label: "Travel Agent",
    subtitle: "Trips, bookings, and itinerary changes",
    suggestions: ["Show flight options on hold", "Add lodging near the venue"],
  },
  "meeting-agent": {
    label: "Meeting Agent",
    subtitle: "Agendas, scheduling, and 1:1 prep",
    suggestions: ["Build an agenda from these goals", "Find a 30-minute slot this week"],
  },
};

const chatSessions = new Map();

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
      { name: "United Airlines", icon: "airplane" },
      { name: "Concur Travel", icon: "wallet" },
      NEXUS_PEOPLE_OS_SOURCE,
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
let itemPeekReturnPath = DEFAULT_ROUTE;
let activeItemPeekId;
let activeItemPeekAgentId = "career-coach";
let travelTripReturnPath = "/agents/travel-agent";
let activeTravelTripId;
let travelChatAnimationToken = 0;
let travelChatAgentScrollDepth = 0;
let chatReturnPath = DEFAULT_ROUTE;
let activeAgentChatId;
let agentChatAnimationToken = 0;
let agentChatScrollDepth = 0;

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
  { name: "Concur Travel", icon: "wallet" },
  NEXUS_PEOPLE_OS_SOURCE,
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

const computeAgentThinkingDelay = (text = "") =>
  Math.min(2400, 720 + Math.min(text.length, 320) * 5);

const getAgentChatSources = (agentId) =>
  AGENT_CHAT_SOURCES[agentId] ?? AGENT_CHAT_SOURCES["career-coach"];

const normalizeChatSources = (sources) => {
  if (!Array.isArray(sources) || !sources.length) {
    return [...AGENT_CHAT_SOURCES["career-coach"]];
  }

  return sources.map((source) => {
    if (source.logo && source.logo.startsWith("./")) {
      return source;
    }

    if (source.icon) {
      return source;
    }

    return { name: source.name, icon: "book" };
  });
};

const copyTextToClipboard = async (text) => {
  if (!text?.trim()) {
    return false;
  }

  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    return false;
  }
};

const createAgentMessageActions = (sources, copyText) => {
  const bar = document.createElement("div");
  bar.className = "chat-agent-actions";
  bar.setAttribute("role", "toolbar");
  bar.setAttribute("aria-label", "Agent message actions");

  [
    { icon: "thumbs-up", label: "Helpful" },
    { icon: "thumbs-down", label: "Not helpful" },
  ].forEach(({ icon, label }) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "chat-agent-action";
    button.setAttribute("aria-label", label);
    button.innerHTML = `<i class="iconoir-${icon}" aria-hidden="true"></i>`;
    bar.appendChild(button);
  });

  if (copyText?.trim()) {
    const copyButton = document.createElement("button");
    copyButton.type = "button";
    copyButton.className = "chat-agent-action";
    copyButton.setAttribute("aria-label", "Copy response");
    copyButton.innerHTML = `<i class="iconoir-copy" aria-hidden="true"></i>`;
    copyButton.addEventListener("click", async () => {
      const copied = await copyTextToClipboard(copyText);
      copyButton.setAttribute("aria-label", copied ? "Copied" : "Copy response");
      if (copied) {
        window.setTimeout(() => {
          copyButton.setAttribute("aria-label", "Copy response");
        }, 2000);
      }
    });
    bar.appendChild(copyButton);
  }

  const normalizedSources = normalizeChatSources(sources);
  const sourcesGroup = document.createElement("div");
  sourcesGroup.className = "chat-agent-sources";
  sourcesGroup.setAttribute("aria-label", "Sources");

  const sourcesLabel = document.createElement("span");
  sourcesLabel.className = "chat-agent-sources-label";
  sourcesLabel.textContent = "Sources";
  sourcesGroup.appendChild(sourcesLabel);

  normalizedSources.forEach((source) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "chat-source-avatar";
    button.title = source.name;
    button.setAttribute("aria-label", source.name);

    if (source.logo) {
      button.innerHTML = `<img src="${source.logo}" alt="" />`;
    } else {
      button.classList.add("chat-source-icon");
      button.innerHTML = `<i class="iconoir-${source.icon ?? "book"}" aria-hidden="true"></i>`;
    }

    sourcesGroup.appendChild(button);
  });

  bar.appendChild(sourcesGroup);
  return bar;
};

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
    const pageKey = resolveWorkspacePage(slug ?? "home");
    const configuredLabel = WORKSPACE_PAGES[pageKey]?.label;
    const pageLabel =
      configuredLabel ??
      (pageKey === "home" ? "Home" : pageKey.replace(/\b\w/g, (character) => character.toUpperCase()));
    label = `${pageLabel} · Nexus People OS`;
  } else if (root === "learning") {
    label = "Learning details · Nexus People OS";
  } else if (root === "chats") {
    const chat = chatSessions.get(slug) ?? ensureSeedChatSession(slug);
    label = chat ? `${chat.title} · Nexus People OS` : "Chat · Nexus People OS";
  } else if (root === "travel") {
    label = "Travel trip · Nexus People OS";
  } else if (root === "peek") {
    const peekTitle = ITEM_PEEK_CONTENT[slug]?.title ?? "Details";
    label = `${peekTitle} · Nexus People OS`;
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

const getTimeOfDayGreeting = (date = new Date()) => {
  const hour = date.getHours();

  if (hour < 12) {
    return "morning";
  }

  if (hour < 18) {
    return "afternoon";
  }

  return "evening";
};

const updateHomeGreeting = () => {
  if (!homeGreeting) {
    return;
  }

  homeGreeting.textContent = `Good ${getTimeOfDayGreeting()}, Michael`;
};

const renderWorkspaceLeading = (leading) => {
  if (!leading) {
    return "";
  }

  if (leading.type === "avatar") {
    return `<div class="task-leading"><img class="workspace-list-avatar" src="${leading.src}" alt="" /></div>`;
  }

  if (leading.type === "avatars") {
    const count = leading.count ?? leading.people?.length ?? 0;
    return `<div class="task-leading"><span class="workspace-avatar-count" aria-hidden="true">${count}</span></div>`;
  }

  if (leading.type === "agent") {
    return `<div class="task-leading"><span class="agent-icon agent-icon-${leading.agent} task-agent-icon" aria-hidden="true"><i class="iconoir-${leading.icon}" aria-hidden="true"></i></span></div>`;
  }

  return "";
};

const renderWorkspaceStatusPill = (status) => {
  if (!status) {
    return "";
  }

  return `<span class="status-pill ${status.className}">
    <span class="status-pill-icon" aria-hidden="true"><i class="iconoir-${status.icon}"></i></span>
    ${status.label}
  </span>`;
};

const renderWorkspaceListSkeleton = (count = WORKSPACE_SKELETON_ROW_COUNT) =>
  Array.from(
    { length: count },
    (_, index) => `<div
    class="task-row workspace-skeleton-row"
    aria-hidden="true"
    style="--skeleton-delay: ${index * 45}ms"
  >
    <div class="task-leading"><span class="skeleton skeleton-avatar"></span></div>
    <div class="task-copy skeleton-lines">
      <span class="skeleton skeleton-line skeleton-line-title"></span>
      <span class="skeleton skeleton-line skeleton-line-subtitle"></span>
    </div>
  </div>`,
  ).join("");

const renderWorkspaceDetailSkeleton = () =>
  `<div class="workspace-detail-skeleton" aria-hidden="true">
    <span class="skeleton skeleton-line skeleton-line-eyebrow"></span>
    <span class="skeleton skeleton-line skeleton-line-heading"></span>
    <span class="skeleton skeleton-line skeleton-line-summary"></span>
    <div class="workspace-detail-skeleton-meta">
      <span class="skeleton skeleton-line"></span>
      <span class="skeleton skeleton-line"></span>
      <span class="skeleton skeleton-line"></span>
    </div>
    <div class="workspace-detail-skeleton-sections">
      <span class="skeleton skeleton-block"></span>
      <span class="skeleton skeleton-block skeleton-block-short"></span>
    </div>
  </div>`;

const playViewEnter = (viewEl) => {
  if (!viewEl || prefersReducedMotion()) {
    return;
  }

  viewEl.classList.remove("view-enter");
  void viewEl.offsetWidth;
  viewEl.classList.add("view-enter");
  viewEl.addEventListener(
    "animationend",
    () => {
      viewEl.classList.remove("view-enter");
    },
    { once: true },
  );
};

const playWorkspacePageEnter = () => {
  if (!workspacePageSection || prefersReducedMotion()) {
    return;
  }

  workspacePageSection.classList.remove("workspace-page-enter");
  void workspacePageSection.offsetWidth;
  workspacePageSection.classList.add("workspace-page-enter");
  workspacePageSection.addEventListener(
    "animationend",
    () => {
      workspacePageSection.classList.remove("workspace-page-enter");
    },
    { once: true },
  );
};

const staggerWorkspaceListEnter = () => {
  if (!workspaceList || prefersReducedMotion()) {
    return;
  }

  workspaceList.querySelectorAll(".workspace-list-item").forEach((row, index) => {
    row.style.setProperty("--list-enter-delay", `${index * 36}ms`);
    row.classList.add("list-item-enter");
    row.addEventListener(
      "animationend",
      () => {
        row.classList.remove("list-item-enter");
        row.style.removeProperty("--list-enter-delay");
      },
      { once: true },
    );
  });
};

const renderWorkspaceListItem = (item, selectedId) => {
  const isActive = item.id === selectedId;

  return `<button
    type="button"
    class="task-row workspace-list-item${isActive ? " is-active" : ""}"
    role="option"
    aria-selected="${isActive}"
    data-workspace-item-id="${item.id}"
  >
    ${renderWorkspaceLeading(item.leading)}
    <div class="task-copy">
      <strong>${item.title}</strong>
      <span class="task-subtitle">${item.subtitle}</span>
    </div>
  </button>`;
};

const renderWorkspaceDetail = (item) => {
  if (!item?.detail) {
    return `<div class="workspace-detail-empty"><p>Select an item to see details and actions.</p></div>`;
  }

  const { detail } = item;
  const meta = (detail.meta ?? [])
    .map(
      (entry) => `<div><dt>${entry.label}</dt><dd>${entry.value}</dd></div>`,
    )
    .join("");
  const sections = (detail.sections ?? [])
    .map(
      (section) =>
        `<section class="workspace-detail-section"><h4>${section.title}</h4><p>${section.body}</p></section>`,
    )
    .join("");
  const actions = (detail.actions ?? [])
    .map((action) => {
      const className = action.primary ? "primary-button" : "secondary-button";
      const actionAttr = action.action
        ? ` data-workspace-action="${action.action}"`
        : "";
      return `<button type="button" class="${className}"${actionAttr}>${action.label}</button>`;
    })
    .join("");

  return `<div class="workspace-detail-inner">
    <div class="workspace-detail-scroll">
      <header class="workspace-detail-header">
        <div>
          <p class="section-label">${detail.eyebrow ?? ""}</p>
          <h3>${item.title}</h3>
        </div>
        ${renderWorkspaceStatusPill(item.status)}
      </header>
      <p class="workspace-detail-summary">${detail.summary ?? ""}</p>
      <dl class="workspace-detail-meta">${meta}</dl>
      <div class="workspace-detail-sections">${sections}</div>
    </div>
    <div class="workspace-detail-actions">${actions}</div>
  </div>`;
};

const selectWorkspaceItem = (pageKey, itemId, { updateHash = false } = {}) => {
  const config = WORKSPACE_PAGES[pageKey];
  if (!config || !workspaceList || !workspaceDetail) {
    return;
  }

  const item =
    config.items.find((entry) => entry.id === itemId) ?? config.items[0];

  if (!item) {
    workspaceDetail.innerHTML = `<div class="workspace-detail-empty"><p>No items yet.</p></div>`;
    return;
  }

  workspaceList
    .querySelectorAll("[data-workspace-item-id]")
    .forEach((row) => {
      const isActive = row.dataset.workspaceItemId === item.id;
      row.classList.toggle("is-active", isActive);
      row.setAttribute("aria-selected", String(isActive));
    });

  workspaceDetail.innerHTML = renderWorkspaceDetail(item);
  if (!prefersReducedMotion() && !workspaceDetail.classList.contains("is-loading")) {
    const inner = workspaceDetail.querySelector(".workspace-detail-inner");
    inner?.classList.add("detail-enter");
    inner?.addEventListener(
      "animationend",
      () => {
        inner.classList.remove("detail-enter");
      },
      { once: true },
    );
  }

  if (updateHash && !workspaceRouteSync) {
    setRouteHash(`/pages/${pageKey}/${item.id}`, { replace: true });
  }
};

const commitWorkspacePage = (pageKey, itemId, token) => {
  const config = WORKSPACE_PAGES[pageKey];
  if (!config || !workspaceList || !workspaceDetail || token !== workspaceRenderToken) {
    return;
  }

  workspacePageSection?.classList.remove("is-content-loading");

  if (workspacePageMetric) {
    workspacePageMetric.textContent = `${config.items.length} items`;
  }

  workspaceList.classList.remove("is-loading");
  workspaceList.removeAttribute("aria-busy");
  workspaceDetail.classList.remove("is-loading");

  const selectedId =
    config.items.find((entry) => entry.id === itemId)?.id ?? config.items[0]?.id;

  workspaceList.innerHTML = config.items
    .map((item) => renderWorkspaceListItem(item, selectedId))
    .join("");

  staggerWorkspaceListEnter();
  selectWorkspaceItem(pageKey, selectedId);
  workspaceListInitialLoadPending = false;
};

const renderWorkspacePage = (pageKey, itemId) => {
  const config = WORKSPACE_PAGES[pageKey];
  if (!config || !workspaceList || !workspaceDetail) {
    return;
  }

  const token = (workspaceRenderToken += 1);
  const loadMs = prefersReducedMotion()
    ? 0
    : workspaceListInitialLoadPending
      ? WORKSPACE_LIST_LOAD_INITIAL_MS
      : WORKSPACE_LIST_LOAD_MS;

  currentWorkspacePage = pageKey;

  if (workspacePageLabel) {
    workspacePageLabel.textContent = config.label;
  }

  if (workspacePageHeading) {
    workspacePageHeading.textContent = config.title;
  }

  if (workspacePageSubtitle) {
    workspacePageSubtitle.textContent = config.subtitle ?? "";
  }

  if (workspacePageMetric) {
    workspacePageMetric.innerHTML =
      loadMs > 0
        ? `<span class="skeleton skeleton-metric" aria-hidden="true"></span>`
        : `${config.items.length} items`;
  }

  if (workspaceAgentStatus) {
    workspaceAgentStatus.textContent = "";
  }

  workspaceList.setAttribute("aria-label", `${config.label} list`);
  workspacePageSection?.classList.add("is-content-loading");
  workspaceList.classList.add("is-loading");
  workspaceList.setAttribute("aria-busy", "true");
  workspaceList.innerHTML = renderWorkspaceListSkeleton();
  workspaceDetail.classList.add("is-loading");
  workspaceDetail.innerHTML = renderWorkspaceDetailSkeleton();

  playWorkspacePageEnter();

  if (loadMs === 0) {
    commitWorkspacePage(pageKey, itemId, token);
    return;
  }

  window.setTimeout(() => {
    commitWorkspacePage(pageKey, itemId, token);
  }, loadMs);
};

const openWorkspaceListItem = (pageKey, itemId) => {
  closeItemPeek({ updateHash: false });
  closeLearningPeek({ updateHash: false });
  closeTravelPeek({ updateHash: false });
  closeFeedbackVoicePeek();
  closeAgentChatSession({ updateHash: false });

  const page = resolveWorkspacePage(pageKey);
  setRouteHash(`/pages/${page}/${itemId}`);
};

const renderItemPeekMeta = (meta = []) =>
  meta
    .map(
      (entry) => `<div class="peek-meta-row">
        <span>${entry.label}</span>
        <strong>${entry.value}</strong>
      </div>`,
    )
    .join("");

const renderItemPeekSections = (sections = []) =>
  sections
    .map(
      (section) =>
        `<section class="workspace-detail-section"><h4>${section.title}</h4><p>${section.body}</p></section>`,
    )
    .join("");

const updateItemPeekSendState = () => {
  if (!itemPeekSend || !itemPeekPrompt) {
    return;
  }

  itemPeekSend.disabled = itemPeekPrompt.value.trim().length === 0;
};

const closeItemPeek = (options = {}) => {
  const { updateHash = true } = options;

  if (!itemPeek || itemPeek.hidden) {
    return;
  }

  itemPeek.hidden = true;
  activeItemPeekId = undefined;

  if (itemPeekPrompt) {
    itemPeekPrompt.value = "";
    updateItemPeekSendState();
  }

  if (itemPeekAskStatus) {
    itemPeekAskStatus.textContent = "";
  }

  if (updateHash && !routeSync) {
    setRouteHash(itemPeekReturnPath, { replace: true });
  }
};

const openItemPeek = (peekId, options = {}) => {
  const { updateHash = true } = options;
  const content = ITEM_PEEK_CONTENT[peekId];

  if (!content || !itemPeek) {
    return;
  }

  closeLearningPeek({ updateHash: false });
  closeTravelPeek({ updateHash: false });
  closeFeedbackVoicePeek();
  closeAgentChatSession({ updateHash: false });

  activeItemPeekId = peekId;
  activeItemPeekAgentId = content.agentId ?? "career-coach";

  if (itemPeekEyebrow) {
    itemPeekEyebrow.textContent = content.eyebrow ?? "Details";
  }

  if (itemPeekTitle) {
    itemPeekTitle.textContent = content.title;
  }

  if (itemPeekSummary) {
    itemPeekSummary.textContent = content.summary ?? "";
  }

  if (itemPeekMeta) {
    itemPeekMeta.innerHTML = renderItemPeekMeta(content.meta);
  }

  if (itemPeekSections) {
    itemPeekSections.innerHTML = renderItemPeekSections(content.sections);
  }

  if (itemPeekPrompt) {
    itemPeekPrompt.value = "";
    itemPeekPrompt.placeholder =
      content.promptPlaceholder ?? "Ask a question about this…";
    updateItemPeekSendState();
  }

  itemPeek.hidden = false;

  if (updateHash) {
    itemPeekReturnPath = parseRoutePath();
    setRouteHash(`/peek/${peekId}`);
  }

  requestAnimationFrame(() => itemPeekPrompt?.focus());
};

const submitItemPeekQuestion = () => {
  if (!itemPeekPrompt || !activeItemPeekId) {
    return;
  }

  const question = itemPeekPrompt.value.trim();
  if (!question) {
    return;
  }

  const content = ITEM_PEEK_CONTENT[activeItemPeekId];
  const contextualPrompt = content
    ? `Context: ${content.title}. ${content.summary}\n\nQuestion: ${question}`
    : question;

  itemPeekPrompt.value = "";
  updateItemPeekSendState();
  closeItemPeek({ updateHash: false });
  submitComposerToAgentChat(contextualPrompt, activeItemPeekAgentId);
};

const activateListItem = (listItemId) => {
  const destination = LIST_ITEM_DESTINATIONS[listItemId];
  if (!destination) {
    return;
  }

  if (destination.type === "workspace") {
    openWorkspaceListItem(destination.page, destination.itemId);
    return;
  }

  if (destination.type === "peek") {
    openItemPeek(destination.peekId ?? listItemId);
    return;
  }

  if (destination.type === "travel") {
    closeItemPeek({ updateHash: false });
    setRouteHash(`/travel/trip/${destination.tripId}`);
  }
};

const initListItemNavigation = () => {
  document.addEventListener("click", (event) => {
    if (event.target.closest(".carousel-control, .coach-menu, .plus-menu, .nav-item, .chat-link")) {
      return;
    }

    const learningSlide = event.target.closest(".learning-slide[data-learning-id]");
    if (learningSlide && !event.target.closest(".enroll-button")) {
      openLearningPeek(learningSlide);
      return;
    }

    const listTarget = event.target.closest("[data-list-item]");
    if (!listTarget) {
      return;
    }

    if (event.target.closest("a[href]")) {
      return;
    }

    event.preventDefault();
    activateListItem(listTarget.dataset.listItem);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key !== "Enter" && event.key !== " ") {
      return;
    }

    const listTarget = event.target.closest("[data-list-item][tabindex='0']");
    if (!listTarget) {
      return;
    }

    event.preventDefault();
    activateListItem(listTarget.dataset.listItem);
  });
};

const updateWorkspaceAgentSendState = () => {
  if (!workspaceAgentSend || !workspaceAgentPrompt) {
    return;
  }

  workspaceAgentSend.disabled = workspaceAgentPrompt.value.trim().length === 0;
};

let documentCanvasReturnFocus = null;

const openDocumentCanvas = (documentId) => {
  const doc = WORKSPACE_DOCUMENTS[documentId];
  if (!doc || !documentCanvas || !documentCanvasBody) {
    return;
  }

  documentCanvasReturnFocus = document.activeElement;
  if (documentCanvasEyebrow) {
    documentCanvasEyebrow.textContent = doc.eyebrow ?? "";
  }
  if (documentCanvasTitle) {
    documentCanvasTitle.textContent = doc.title ?? "";
  }
  if (documentCanvasSubtitle) {
    documentCanvasSubtitle.textContent = doc.subtitle ?? "";
  }
  documentCanvasBody.innerHTML = doc.body ?? "";
  documentCanvas.hidden = false;
  document.body.classList.add("document-canvas-open");
  documentCanvasClose?.focus();
};

const closeDocumentCanvas = () => {
  if (!documentCanvas || documentCanvas.hidden) {
    return;
  }

  documentCanvas.hidden = true;
  document.body.classList.remove("document-canvas-open");
  if (documentCanvasBody) {
    documentCanvasBody.innerHTML = "";
  }

  if (documentCanvasReturnFocus?.focus) {
    documentCanvasReturnFocus.focus();
  }
  documentCanvasReturnFocus = null;
};

const submitWorkspaceAgentPrompt = () => {
  if (!workspaceAgentPrompt) {
    return;
  }

  const text = workspaceAgentPrompt.value.trim();
  if (!text) {
    return;
  }

  submitComposerToAgentChat(text, getActiveAgentViewId());
  workspaceAgentPrompt.value = "";
  updateWorkspaceAgentSendState();

  if (workspaceAgentStatus) {
    workspaceAgentStatus.textContent = "";
  }
};

const initWorkspacePages = () => {
  workspaceAgentPrompt?.addEventListener("input", updateWorkspaceAgentSendState);
  workspaceAgentPrompt?.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      submitWorkspaceAgentPrompt();
    }
  });
  workspaceAgentSend?.addEventListener("click", submitWorkspaceAgentPrompt);

  workspaceList?.addEventListener("click", (event) => {
    const row = event.target.closest("[data-workspace-item-id]");
    if (!row || !currentWorkspacePage) {
      return;
    }

    selectWorkspaceItem(currentWorkspacePage, row.dataset.workspaceItemId, {
      updateHash: true,
    });
  });

  workspaceDetail?.addEventListener("click", (event) => {
    const actionButton = event.target.closest("[data-workspace-action]");
    if (!actionButton) {
      return;
    }

    const documentId = actionButton.dataset.workspaceAction;
    if (WORKSPACE_DOCUMENTS[documentId]) {
      openDocumentCanvas(documentId);
    }
  });

  documentCanvasClose?.addEventListener("click", closeDocumentCanvas);

  workspaceList?.addEventListener("keydown", (event) => {
    if (!currentWorkspacePage || (event.key !== "ArrowDown" && event.key !== "ArrowUp")) {
      return;
    }

    const rows = [...workspaceList.querySelectorAll("[data-workspace-item-id]")];
    const activeIndex = rows.findIndex((row) => row.classList.contains("is-active"));
    if (activeIndex === -1) {
      return;
    }

    event.preventDefault();
    const nextIndex =
      event.key === "ArrowDown"
        ? Math.min(activeIndex + 1, rows.length - 1)
        : Math.max(activeIndex - 1, 0);
    const nextRow = rows[nextIndex];
    selectWorkspaceItem(currentWorkspacePage, nextRow.dataset.workspaceItemId, {
      updateHash: true,
    });
    nextRow.focus();
  });
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

const createTravelAgentActions = (trip, copyText) =>
  createAgentMessageActions(trip?.sources ?? DEFAULT_TRIP_CHAT_SOURCES, copyText);

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
      const thinkingDelay =
        options.thinkingDelay ??
        computeAgentThinkingDelay(typeof content === "string" ? content : options.copyText);
      await travelChatDelay(thinkingDelay);

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

    const copyText = typeof content === "string" ? content : options.copyText;
    const actions = createTravelAgentActions(trip, copyText);
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

    const openingCopyText = [trip.agentIntro, trip.agentQuestion].filter(Boolean).join("\n\n");
    const actions = createTravelAgentActions(trip, openingCopyText);
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

const escapeHtml = (value) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

const slugifyChatId = (text) =>
  text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 48) || "chat";

const getActiveAgentViewId = () => {
  const view = [...agentViews].find((entry) => !entry.hidden);
  return view?.id?.replace(/^view-/, "") ?? "home";
};

const inferAgentIdFromMessage = (message, preferredAgentId) => {
  if (
    preferredAgentId &&
    preferredAgentId !== "home" &&
    preferredAgentId !== "workspace-pages" &&
    AGENT_CHAT_META[preferredAgentId]
  ) {
    return preferredAgentId;
  }

  const lower = message.toLowerCase();

  if (/\b(travel|trip|flight|hotel|lodging|denver|booking|concur|itinerary)\b/.test(lower)) {
    return "travel-agent";
  }

  if (/\b(feedback|review|portfolio|calibration|recognition)\b/.test(lower)) {
    return "feedback-agent";
  }

  if (/\b(learning|training|course|enroll|certification|workshop)\b/.test(lower)) {
    return "learning-agent";
  }

  if (/\b(meeting|1:1|calendar|schedule|agenda|interview panel)\b/.test(lower)) {
    return "meeting-agent";
  }

  return "career-coach";
};

const findMentionedReport = (message) => {
  const lower = message.toLowerCase();
  return DIRECT_REPORTS.find(
    (person) =>
      lower.includes(person.name.toLowerCase()) || lower.includes(person.id.replace(/-/g, " ")),
  );
};

const generateAgentReply = (agentId, message) => {
  const person = findMentionedReport(message);
  const personLabel = person ? `${person.name} (${person.level})` : "your team";

  switch (agentId) {
    case "feedback-agent":
      if (/draft|write|help me/i.test(message)) {
        return person
          ? `Here is a draft structure for feedback to ${person.name}: start with one specific strength from recent work, name one growth area with a concrete example, and close with support you can offer next quarter. I can turn that into a full message if you share the situation.`
          : "Share who the feedback is for and the situation (project review, QCI, or weekly check-in). I will draft clear, caring feedback with a strength, a growth area, and a next step.";
      }
      return "I can help you phrase feedback so it lands well — share the behavior or outcome you want to address and whether this is praise, coaching, or calibration prep.";

    case "learning-agent":
      if (/required|overdue|hr/i.test(message)) {
        return "You have two required items overdue: Workplace Harassment Prevention (due Oct 1) and Security Awareness Refresher (due Oct 8). I can enroll you, or recommend make-up sessions that fit your calendar this week.";
      }
      return person
        ? `For ${person.name}, I would prioritize role-level craft courses plus one leadership habit module this quarter. Tell me whether you want required compliance, skill depth, or manager-led coaching resources.`
        : "Tell me the designer level or skill gap you are targeting. I will match courses from your library, flag required HR training, and suggest enrollments for your direct reports.";

    case "travel-agent":
      if (/denver|nov 4|interview/i.test(message)) {
        return "Your Denver leadership interview trip (Nov 4–5) still has United holds on UA 552 and UA 881. I can confirm both travelers and book today, or adjust times if you need a later return.";
      }
      return "I can work from your upcoming trips table — confirm holds, book lodging, or adjust ground transport. Tell me which trip and what you want changed.";

    case "meeting-agent":
      if (/maya|1:1|prep/i.test(message)) {
        return "For your 1:1 with Maya Chen, suggested agenda: (1) Q4 growth goal progress, (2) staffing on the client discovery workstream, (3) feedback themes from last sprint review. I can drop this on the calendar invite as talking points.";
      }
      return "Share who the meeting is with and the outcome you need. I will propose times, a short agenda, and pre-reads pulled from recent check-ins and project updates.";

    default:
      if (/principal|ic growth|promotion/i.test(message)) {
        return "For principal IC paths on your team, Jordan Lee is the strongest near-term candidate — scope evidence is solid, but we should add two more cross-org influence examples before calibration. I can compare Jordan and Noah Patel side by side if helpful.";
      }
      if (/q4|development goal/i.test(message)) {
        return "For Q4 development goals, aim for two measurable outcomes per report: one craft or delivery goal and one collaboration or leadership habit. I can draft starter goals for each designer level on your team.";
      }
      if (/onboarding|associate/i.test(message)) {
        return "For associate designer onboarding, week 1 should focus on design system access, shadowing rituals, and a small scoped contribution by day 10. I can outline a 30/60/90 plan tailored to Ari Reed's onboarding track.";
      }
      if (/check-in|summarize/i.test(message)) {
        return "This week's check-ins: Maya flagged resourcing risk on client discovery, Jordan is on track for principal packet review, and Ari needs clearer critique rubrics. Two reports mentioned wanting more pairing time — worth addressing in your next staff sync.";
      }
      return person
        ? `Got it. I will pull recent growth plan notes, feedback, and learning activity for ${personLabel}, then suggest concrete next steps you can use in your next conversation.`
        : "Got it. I will use your team's growth plans, recent feedback, and check-ins to suggest next steps — tell me if you want this as a summary, talking points, or a draft message.";
  }
};

const chatTitleFromMessage = (message) => {
  const trimmed = message.trim();
  if (trimmed.length <= 52) {
    return trimmed;
  }

  return `${trimmed.slice(0, 49).trim()}…`;
};

const createUniqueChatId = (message) => {
  const base = slugifyChatId(message);
  let id = base;
  let suffix = 2;

  while (chatSessions.has(id)) {
    id = `${base}-${suffix}`;
    suffix += 1;
  }

  return id;
};

const ensureSeedChatSession = (chatId) => {
  if (chatSessions.has(chatId)) {
    return chatSessions.get(chatId);
  }

  const seed = SEED_CHAT_DETAILS[chatId];
  const prompt = CHAT_PROMPTS[chatId];

  if (!seed || !prompt) {
    return null;
  }

  const chat = {
    id: chatId,
    agentId: seed.agentId,
    title: seed.title,
    subtitle: seed.subtitle,
    messages: [
      { role: "user", text: prompt },
      { role: "agent", text: generateAgentReply(seed.agentId, prompt) },
    ],
  };

  chatSessions.set(chatId, chat);
  return chat;
};

const initChatSessions = () => {
  Object.keys(SEED_CHAT_DETAILS).forEach((chatId) => {
    ensureSeedChatSession(chatId);
  });
};

const prependChatNavLink = (chat) => {
  const markup = `<a class="chat-link" href="#/chats/${chat.id}" data-chat="${chat.id}">
    <strong>${escapeHtml(chat.title)}</strong>
    <span>Just now</span>
  </a>`;

  chatNavLists.forEach((list) => {
    const flyoutTitle = list.querySelector(".flyout-title");
    const anchor = flyoutTitle ?? list.querySelector(".chat-link");
    const wrapper = document.createElement("div");
    wrapper.innerHTML = markup;
    const link = wrapper.firstElementChild;

    if (flyoutTitle) {
      flyoutTitle.insertAdjacentElement("afterend", link);
    } else if (anchor) {
      list.insertBefore(link, anchor);
    } else {
      list.appendChild(link);
    }

    const links = list.querySelectorAll(".chat-link");
    if (links.length > 12) {
      links[links.length - 1].remove();
    }
  });
};

const scrollAgentChatThread = () => {
  const scrollContainer = agentChatBody ?? agentChatThread;
  if (scrollContainer) {
    scrollContainer.scrollTop = scrollContainer.scrollHeight;
  }
};

const beginAgentChatScroll = () => {
  agentChatScrollDepth += 1;
  agentChatBody?.classList.add("is-agent-scrolling");
};

const endAgentChatScroll = () => {
  agentChatScrollDepth = Math.max(0, agentChatScrollDepth - 1);
  if (agentChatScrollDepth === 0) {
    agentChatBody?.classList.remove("is-agent-scrolling");
  }
};

const resetAgentChatScroll = () => {
  agentChatScrollDepth = 0;
  agentChatBody?.classList.remove("is-agent-scrolling");
};

const showAgentChatThinking = (agentId) => {
  if (!agentChatThread) {
    return;
  }

  const label = AGENT_CHAT_META[agentId]?.label ?? "Agent";
  const thinking = document.createElement("div");
  thinking.className = "chat-thinking chat-thinking--enter";
  thinking.id = "agent-chat-thinking";
  thinking.innerHTML = `<span class="chat-thinking-pulse" aria-hidden="true"></span><span class="sr-only">${label} is thinking</span>`;
  agentChatThread.appendChild(thinking);
  scrollAgentChatThread();
};

const removeAgentChatThinking = () => {
  document.querySelector("#agent-chat-thinking")?.remove();
};

const typewriterIntoAgentChat = async (element, text, token, speed = 14) => {
  element.textContent = "";

  for (const character of text) {
    if (token !== agentChatAnimationToken) {
      return;
    }

    element.textContent += character;
    scrollAgentChatThread();
    await travelChatDelay(speed);
  }
};

const appendAgentChatUserBubble = (text) => {
  if (!agentChatThread) {
    return;
  }

  const bubble = document.createElement("p");
  bubble.className = "chat-bubble chat-bubble-user";
  bubble.textContent = text;
  agentChatThread.appendChild(bubble);
  scrollAgentChatThread();
};

const appendAgentChatAgentBubble = (text, { animate = true, agentId } = {}) => {
  if (!agentChatThread) {
    return;
  }

  const chat = chatSessions.get(activeAgentChatId);
  const resolvedAgentId = agentId ?? chat?.agentId ?? "career-coach";

  if (!animate) {
    const block = document.createElement("div");
    block.className = "chat-agent-block";
    const bubble = document.createElement("div");
    bubble.className = "chat-bubble-agent";
    const paragraph = document.createElement("p");
    paragraph.textContent = text;
    bubble.appendChild(paragraph);
    block.appendChild(bubble);
    const actions = createAgentMessageActions(getAgentChatSources(resolvedAgentId), text);
    actions.classList.add("chat-agent-actions--visible");
    block.appendChild(actions);
    agentChatThread.appendChild(block);
    scrollAgentChatThread();
    return;
  }

  void presentAgentChatMessage(text, { agentId: resolvedAgentId });
};

const revealAgentMessageActions = (actions) => {
  actions.classList.remove("chat-agent-actions--hidden");
  actions.classList.add("chat-agent-actions--visible");
  scrollAgentChatThread();
};

const presentAgentChatMessage = async (text, options = {}) => {
  if (!agentChatThread || !activeAgentChatId) {
    return;
  }

  const chat = chatSessions.get(activeAgentChatId);
  const agentId = options.agentId ?? chat?.agentId ?? "career-coach";
  const token = options.token ?? agentChatAnimationToken;

  beginAgentChatScroll();
  try {
    if (options.thinking !== false) {
      showAgentChatThinking(agentId);
      await travelChatDelay(options.thinkingDelay ?? computeAgentThinkingDelay(text));

      if (token !== agentChatAnimationToken) {
        removeAgentChatThinking();
        return;
      }

      removeAgentChatThinking();
    }

    const block = document.createElement("div");
    block.className = "chat-agent-block chat-agent-block--enter";
    const bubble = document.createElement("div");
    bubble.className = "chat-bubble-agent";
    const paragraph = document.createElement("p");
    bubble.appendChild(paragraph);
    const actions = createAgentMessageActions(getAgentChatSources(agentId), text);
    actions.classList.add("chat-agent-actions--hidden");
    block.appendChild(bubble);
    block.appendChild(actions);
    agentChatThread.appendChild(block);
    scrollAgentChatThread();

    await typewriterIntoAgentChat(paragraph, text, token, options.typeSpeed ?? 14);

    if (token !== agentChatAnimationToken) {
      return;
    }

    revealAgentMessageActions(actions);
  } finally {
    endAgentChatScroll();
  }
};

const hideAgentChatSuggestions = () => {
  if (!agentChatSuggestions) {
    return;
  }

  agentChatSuggestions.hidden = true;
  agentChatSuggestions.innerHTML = "";
};

const renderAgentChatSuggestions = (labels) => {
  if (!agentChatSuggestions) {
    return;
  }

  agentChatSuggestions.innerHTML = "";
  const suggestions = Array.isArray(labels) ? labels.filter(Boolean) : [];

  if (!suggestions.length) {
    agentChatSuggestions.hidden = true;
    return;
  }

  suggestions.forEach((label) => {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = label;
    button.addEventListener("click", () => {
      submitAgentChatSessionMessage(label);
    });
    agentChatSuggestions.appendChild(button);
  });

  agentChatSuggestions.hidden = false;
};

const setActiveChatNav = (chatId) => {
  document.querySelectorAll(".chat-link[data-chat]").forEach((link) => {
    const isActive = Boolean(chatId) && link.dataset.chat === chatId;
    link.classList.toggle("active", isActive);

    if (isActive) {
      const chat = chatSessions.get(chatId);
      const label = link.querySelector("strong");
      if (chat && label) {
        label.textContent = chat.title;
      }
    }
  });

  if (chatId) {
    chatNavSections.forEach((section) => {
      section.open = true;
    });
  }
};

const syncAgentChatHeader = (chat) => {
  const meta = AGENT_CHAT_META[chat.agentId] ?? AGENT_CHAT_META["career-coach"];

  if (agentChatTitle) {
    agentChatTitle.textContent = chat.title;
  }

  if (agentSessionPrompt) {
    agentSessionPrompt.placeholder = `Message ${meta.label}…`;
  }

  setActiveChatNav(chat.id);
};

const renderAgentChatHistory = (chat, { animateLatestAgent = false } = {}) => {
  if (!agentChatThread) {
    return;
  }

  agentChatAnimationToken += 1;
  removeAgentChatThinking();
  agentChatThread.innerHTML = "";
  hideAgentChatSuggestions();

  chat.messages.forEach((entry, index) => {
    const isLatestAgent =
      animateLatestAgent && entry.role === "agent" && index === chat.messages.length - 1;

    if (entry.role === "user") {
      appendAgentChatUserBubble(entry.text);
      return;
    }

    if (isLatestAgent) {
      return;
    }

    appendAgentChatAgentBubble(entry.text, { animate: false });
  });

  if (animateLatestAgent) {
    const last = chat.messages[chat.messages.length - 1];
    if (last?.role === "agent") {
      void presentAgentChatMessage(last.text);
    }
  }

  renderAgentChatSuggestions(AGENT_CHAT_META[chat.agentId]?.suggestions);
};

const updateAgentSessionSendState = () => {
  if (!agentSessionSend || !agentSessionPrompt) {
    return;
  }

  agentSessionSend.disabled = agentSessionPrompt.value.trim().length === 0;
};

const closeAgentChatSession = (options = {}) => {
  const { updateHash = true } = options;

  if (!agentChatSession || agentChatSession.hidden) {
    return;
  }

  agentChatSession.hidden = true;
  agentChatAnimationToken += 1;
  removeAgentChatThinking();
  resetAgentChatScroll();
  hideAgentChatSuggestions();
  activeAgentChatId = undefined;
  setActiveChatNav(null);

  if (agentSessionPrompt) {
    agentSessionPrompt.value = "";
    updateAgentSessionSendState();
  }

  if (updateHash && !routeSync) {
    setRouteHash(chatReturnPath, { replace: true });
  }
};

const openAgentChatSession = (chatId, options = {}) => {
  const { updateHash = true, initialUserMessage, skipAgentReply = false } = options;
  const chat = chatSessions.get(chatId) ?? ensureSeedChatSession(chatId);

  if (!chat || !agentChatSession) {
    return;
  }

  const isSameActiveChat =
    activeAgentChatId === chatId && !agentChatSession.hidden && !initialUserMessage;

  if (isSameActiveChat) {
    return;
  }

  if (learningPeek && !learningPeek.hidden) {
    closeLearningPeek({ updateHash: false });
  }

  closeTravelPeek({ updateHash: false });
  closeTravelChatSession({ updateHash: false });
  closeFeedbackVoicePeek();
  closeItemPeek({ updateHash: false });

  activeAgentChatId = chatId;
  syncAgentChatHeader(chat);

  switchAgentView(chat.agentId, { updateHash: false, clearPageNav: true, keepAgentChat: true });

  agentChatSession.hidden = false;
  agentChatSession.classList.remove("is-ready");
  requestAnimationFrame(() => {
    agentChatSession.classList.add("is-ready");
  });

  if (updateHash) {
    chatReturnPath = parseRoutePath();
    setRouteHash(`/chats/${chatId}`);
  }

  updateDocumentTitle(`/chats/${chatId}`);

  if (initialUserMessage) {
    chat.messages.push({ role: "user", text: initialUserMessage });
    const reply = generateAgentReply(chat.agentId, initialUserMessage);
    chat.messages.push({ role: "agent", text: reply });
    renderAgentChatHistory(chat, { animateLatestAgent: !skipAgentReply });
  } else {
    renderAgentChatHistory(chat);
  }

  requestAnimationFrame(() => agentSessionPrompt?.focus());
};

const startAgentChat = ({ message, sourceAgentId }) => {
  const trimmed = message.trim();
  if (!trimmed) {
    return;
  }

  const agentId = inferAgentIdFromMessage(trimmed, sourceAgentId);
  const meta = AGENT_CHAT_META[agentId] ?? AGENT_CHAT_META["career-coach"];
  const id = createUniqueChatId(trimmed);
  const chat = {
    id,
    agentId,
    title: chatTitleFromMessage(trimmed),
    subtitle: meta.subtitle,
    messages: [],
  };

  chatSessions.set(id, chat);
  prependChatNavLink(chat);
  chatReturnPath = parseRoutePath();
  openAgentChatSession(id, { updateHash: true, initialUserMessage: trimmed });
};

const submitAgentChatSessionMessage = (messageOverride) => {
  if (!agentSessionPrompt || !activeAgentChatId) {
    return;
  }

  const message = (typeof messageOverride === "string" ? messageOverride : agentSessionPrompt.value).trim();
  if (!message) {
    return;
  }

  const chat = chatSessions.get(activeAgentChatId);
  if (!chat) {
    return;
  }

  hideAgentChatSuggestions();
  chat.messages.push({ role: "user", text: message });
  appendAgentChatUserBubble(message);

  const reply = generateAgentReply(chat.agentId, message);
  chat.messages.push({ role: "agent", text: reply });
  void presentAgentChatMessage(reply);
  renderAgentChatSuggestions(AGENT_CHAT_META[chat.agentId]?.suggestions);

  agentSessionPrompt.value = "";
  updateAgentSessionSendState();
  agentSessionPrompt.focus();
};

const submitComposerToAgentChat = (message, sourceAgentId) => {
  startAgentChat({ message, sourceAgentId });
};

const openTravelChatSession = (tripId, options = {}) => {
  const { updateHash = true } = options;
  const trip = TRIP_CATALOG[tripId];

  if (!trip || trip.action !== "chat" || !travelChatSession) {
    return;
  }

  closeAgentChatSession({ updateHash: false });

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
  const { updateHash = false, replaceHash = false, clearPageNav = true, keepAgentChat = false } =
    options;
  const resolvedView = resolveAgentView(viewName);

  if (!keepAgentChat && agentChatSession && !agentChatSession.hidden) {
    closeAgentChatSession({ updateHash: false });
  }

  if (
    learningPeek &&
    !learningPeek.hidden &&
    resolvedView !== "career-coach" &&
    resolvedView !== "learning-agent"
  ) {
    learningPeek.hidden = true;
  }

  if (feedbackVoicePeek && !feedbackVoicePeek.hidden && resolvedView !== "feedback-agent") {
    closeFeedbackVoicePeek();
  }

  restartLearningCarouselsForVisibleViews(resolvedView);

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

  playViewEnter(document.querySelector(`#view-${resolvedView}`));

  mainContent?.classList.toggle("is-workspace-layout", resolvedView === "workspace-pages");

  agentNavItems.forEach((item) => {
    const isActive = resolvedView !== "home" && item.dataset.agentView === resolvedView;
    item.classList.toggle("active", isActive);
  });

  if (clearPageNav) {
    setPageNavActive(null);
  }

  closeNavFlyouts();
  closeUserProfileMenus();

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

const closeUserProfileMenus = () => {
  document.querySelectorAll("details.user-profile[open]").forEach((profile) => {
    profile.open = false;
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
  closeUserProfileMenus();
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

  if (!event.target.closest(".user-profile")) {
    closeUserProfileMenus();
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

    if (documentCanvas && !documentCanvas.hidden) {
      closeDocumentCanvas();
      return;
    }

    if (travelPeek && !travelPeek.hidden) {
      closeTravelPeek();
    }

    if (travelChatSession && !travelChatSession.hidden) {
      closeTravelChatSession();
    }

    if (agentChatSession && !agentChatSession.hidden) {
      closeAgentChatSession();
    }

    if (itemPeek && !itemPeek.hidden) {
      closeItemPeek();
    }
  }
});

const wireAgentChatComposer = ({ promptInput, sendButton, micButton, sourceAgentId }) => {
  if (!promptInput || !sendButton) {
    return;
  }

  const updateComposerSendState = () => {
    sendButton.disabled = promptInput.value.trim().length === 0;
  };

  promptInput.addEventListener("input", updateComposerSendState);
  micButton?.addEventListener("click", () => startSpeechInput(promptInput, micButton));
  sendButton.addEventListener("click", () => {
    const message = promptInput.value.trim();
    if (!message) {
      return;
    }

    submitComposerToAgentChat(message, sourceAgentId);
    promptInput.value = "";
    updateComposerSendState();
  });
  promptInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      sendButton.click();
    }
  });
  updateComposerSendState();
};

const submitCareerCoachPrompt = () => {
  if (!promptInput) {
    return;
  }

  const text = promptInput.value.trim();
  if (!text && attachedFileCount === 0) {
    return;
  }

  let message = text;
  if (!message && attachedFileCount > 0) {
    message = `Review the ${attachedFileCount} attached coaching file${attachedFileCount === 1 ? "" : "s"} and suggest next steps.`;
  }

  attachedFileCount = 0;
  filePicker.value = "";
  attachmentStatus.textContent = "";
  promptInput.value = "";
  updateSendState();
  submitComposerToAgentChat(message, "career-coach");
};

promptInput?.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    submitCareerCoachPrompt();
  }
});
sendButton?.addEventListener("click", submitCareerCoachPrompt);

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

      if (speechInputTarget === homePrompt) {
        homePrompt.value = transcript;
        updateHomeSendState();
      } else if (speechInputTarget === promptInput) {
        setPrompt(transcript);
      } else if (speechInputTarget) {
        speechInputTarget.value = transcript;
        speechInputTarget.dispatchEvent(new Event("input", { bubbles: true }));
      }
    });

    recognition.addEventListener("end", () => {
      micButton.classList.remove("listening");
      travelMicButton?.classList.remove("listening");
      homeMicButton?.classList.remove("listening");
      learningAgentMicButton?.classList.remove("listening");
      feedbackAgentMicButton?.classList.remove("listening");
      meetingAgentMicButton?.classList.remove("listening");
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
  learningAgentMicButton?.classList.remove("listening");
  feedbackAgentMicButton?.classList.remove("listening");
  meetingAgentMicButton?.classList.remove("listening");
  activeMicButton?.classList.add("listening");
  instance.start();
};

micButton.addEventListener("click", () => {
  startSpeechInput(promptInput, micButton);
});

wireAgentChatComposer({
  promptInput: travelPrompt,
  sendButton: travelSendButton,
  micButton: travelMicButton,
  sourceAgentId: "travel-agent",
});
wireAgentChatComposer({
  promptInput: learningAgentPrompt,
  sendButton: learningAgentSendButton,
  micButton: learningAgentMicButton,
  sourceAgentId: "learning-agent",
});
wireAgentChatComposer({
  promptInput: feedbackAgentPrompt,
  sendButton: feedbackAgentSendButton,
  micButton: feedbackAgentMicButton,
  sourceAgentId: "feedback-agent",
});
wireAgentChatComposer({
  promptInput: meetingAgentPrompt,
  sendButton: meetingAgentSendButton,
  micButton: meetingAgentMicButton,
  sourceAgentId: "meeting-agent",
});

document.querySelectorAll("[data-learning-agent-prompt]").forEach((button) => {
  button.addEventListener("click", () => {
    if (!learningAgentPrompt) {
      return;
    }

    learningAgentPrompt.value = button.dataset.learningAgentPrompt;
    learningAgentPrompt.focus();
    learningAgentPrompt.dispatchEvent(new Event("input", { bubbles: true }));
  });
});

document.querySelectorAll("[data-travel-prompt]").forEach((button) => {
  button.addEventListener("click", () => {
    if (!travelPrompt) {
      return;
    }

    travelPrompt.value = button.dataset.travelPrompt;
    travelPrompt.focus();
    travelPrompt.dispatchEvent(new Event("input", { bubbles: true }));
  });
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

const submitHomePrompt = () => {
  if (!homePrompt) {
    return;
  }

  const message = homePrompt.value.trim();
  if (!message) {
    return;
  }

  homePrompt.value = "";
  updateHomeSendState();
  submitComposerToAgentChat(message, "home");
};

homeSendButton?.addEventListener("click", submitHomePrompt);
homePrompt?.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    submitHomePrompt();
  }
});

updateSendState();
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

const findLearningCarouselForSlide = (slide) =>
  learningCarousels.find((carousel) => carousel.slides.includes(slide));

const showLearningSlideInCarousel = (carousel, index) => {
  const { slides } = carousel;
  if (!slides.length) {
    return;
  }

  slides[carousel.activeIndex].classList.remove("active");
  slides[carousel.activeIndex].setAttribute("aria-hidden", "true");
  carousel.activeIndex = (index + slides.length) % slides.length;
  slides[carousel.activeIndex].classList.add("active");
  slides[carousel.activeIndex].setAttribute("aria-hidden", "false");
};

const clearAllLearningCarouselTimers = () => {
  learningCarousels.forEach((carousel) => {
    clearInterval(carousel.timer);
    carousel.timer = null;
  });
};

const startLearningCarousel = (carousel) => {
  if (!carousel || carousel.slides.length <= 1) {
    return;
  }

  clearInterval(carousel.timer);
  carousel.timer = setInterval(() => {
    showLearningSlideInCarousel(carousel, carousel.activeIndex + 1);
  }, 8000);
};

const startLearningCarouselsInView = (viewRoot) => {
  if (!viewRoot) {
    return;
  }

  viewRoot.querySelectorAll("[data-learning-carousel]").forEach((panel) => {
    const carousel = learningCarousels.find((entry) => entry.panel === panel);
    startLearningCarousel(carousel);
  });
};

const restartLearningCarouselsForVisibleViews = (activeViewName) => {
  clearAllLearningCarouselTimers();
  const activeView = document.querySelector(`#view-${activeViewName}`);
  startLearningCarouselsInView(activeView);
};

const initLearningCarousels = () => {
  document.querySelectorAll("[data-learning-carousel]").forEach((panel) => {
    const slides = [...panel.querySelectorAll(".learning-slide")];
    if (!slides.length) {
      return;
    }

    let activeIndex = slides.findIndex((slide) => slide.classList.contains("active"));
    if (activeIndex < 0) {
      activeIndex = 0;
    }

    const carousel = { panel, slides, activeIndex, timer: null };
    showLearningSlideInCarousel(carousel, activeIndex);

    panel.querySelector("[data-learning-prev]")?.addEventListener("click", () => {
      showLearningSlideInCarousel(carousel, carousel.activeIndex - 1);
      startLearningCarousel(carousel);
    });

    panel.querySelector("[data-learning-next]")?.addEventListener("click", () => {
      showLearningSlideInCarousel(carousel, carousel.activeIndex + 1);
      startLearningCarousel(carousel);
    });

    learningCarousels.push(carousel);
  });
};

let feedbackCarousels = [];

const fitFeedbackQuoteSizesForPanel = (panel) => {
  const slides = panel.querySelectorAll(".feedback-slide");
  if (!slides.length) {
    return;
  }

  const minPx = 14;
  const maxPx = 28;

  slides.forEach((slide) => {
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
  feedbackFitFrame = requestAnimationFrame(() => {
    document.querySelectorAll("[data-feedback-carousel]").forEach((panel) => {
      fitFeedbackQuoteSizesForPanel(panel);
    });
  });
};

const showFeedbackSlideInCarousel = (carousel, index) => {
  const { slides } = carousel;
  if (!slides.length) {
    return;
  }

  slides[carousel.activeIndex].classList.remove("active");
  slides[carousel.activeIndex].setAttribute("aria-hidden", "true");
  carousel.activeIndex = (index + slides.length) % slides.length;
  slides[carousel.activeIndex].classList.add("active");
  slides[carousel.activeIndex].setAttribute("aria-hidden", "false");
  scheduleFeedbackQuoteFit();
};

const initFeedbackCarousels = () => {
  document.querySelectorAll("[data-feedback-carousel]").forEach((panel) => {
    const slides = [...panel.querySelectorAll(".feedback-slide")];
    if (!slides.length) {
      return;
    }

    let activeIndex = slides.findIndex((slide) => slide.classList.contains("active"));
    if (activeIndex < 0) {
      activeIndex = 0;
    }

    const carousel = { panel, slides, activeIndex };
    showFeedbackSlideInCarousel(carousel, activeIndex);

    panel.querySelector("[data-feedback-prev]")?.addEventListener("click", () => {
      showFeedbackSlideInCarousel(carousel, carousel.activeIndex - 1);
    });

    panel.querySelector("[data-feedback-next]")?.addEventListener("click", () => {
      showFeedbackSlideInCarousel(carousel, carousel.activeIndex + 1);
    });

    feedbackCarousels.push(carousel);
  });
};

const closeFeedbackVoicePeek = () => {
  if (feedbackVoicePeek) {
    feedbackVoicePeek.hidden = true;
  }
};

const openFeedbackVoicePeek = (card) => {
  if (!feedbackVoicePeek || !card) {
    return;
  }

  const name = card.dataset.requesterName ?? "your teammate";
  const reason = card.dataset.requestReason ?? "";

  if (feedbackVoicePeekTitle) {
    feedbackVoicePeekTitle.textContent = `Record feedback for ${name}`;
  }

  if (feedbackVoicePeekReason) {
    feedbackVoicePeekReason.textContent = reason;
  }

  feedbackVoicePeek.hidden = false;
  requestAnimationFrame(() => feedbackVoiceStart?.focus());
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

const openLearningPeek = (slide, options = {}) => {
  const { updateHash = true } = options;
  closeItemPeek({ updateHash: false });
  clearAllLearningCarouselTimers();
  selectedLearningSlide = slide;
  const carousel = findLearningCarouselForSlide(slide);
  if (carousel) {
    showLearningSlideInCarousel(carousel, carousel.slides.indexOf(slide));
  }
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

  agentViews.forEach((view) => {
    if (!view.hidden) {
      startLearningCarouselsInView(view);
    }
  });

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

  peekPrompt.value = "";
  updatePeekSendState();

  if (peekAskStatus) {
    peekAskStatus.textContent = "";
  }

  closeLearningPeek({ updateHash: false });
  submitComposerToAgentChat(contextualPrompt, "learning-agent");
};

document.querySelectorAll("[data-feedback-agent-prompt]").forEach((button) => {
  button.addEventListener("click", () => {
    if (!feedbackAgentPrompt) {
      return;
    }

    feedbackAgentPrompt.value = button.dataset.feedbackAgentPrompt;
    feedbackAgentPrompt.focus();
    feedbackAgentPrompt.dispatchEvent(new Event("input", { bubbles: true }));
  });
});

const feedbackRequestsSection = document.querySelector(".feedback-requests-section");
const feedbackRequestsToggle = document.querySelector(".feedback-requests-toggle");

feedbackRequestsToggle?.addEventListener("click", () => {
  if (!feedbackRequestsSection || !feedbackRequestsToggle) {
    return;
  }

  const expanded = feedbackRequestsSection.classList.toggle("is-expanded");
  feedbackRequestsToggle.setAttribute("aria-expanded", String(expanded));
});

document.querySelectorAll(".feedback-voice-button").forEach((button) => {
  button.addEventListener("click", () => {
    openFeedbackVoicePeek(button.closest(".feedback-request-card"));
  });
});

document.querySelectorAll(".feedback-give-button").forEach((button) => {
  button.addEventListener("click", () => {
    const card = button.closest(".feedback-request-card");
    if (!card) {
      return;
    }

    setPrompt(
      `Help me write feedback for ${card.dataset.requesterName}: ${card.dataset.requestReason}`,
    );
  });
});

document.querySelectorAll(".feedback-qci-send").forEach((button) => {
  button.addEventListener("click", () => {
    const row = button.closest(".feedback-qci-row");
    const name = row?.querySelector(".feedback-qci-copy strong")?.textContent?.trim();
    const detail = row?.querySelector(".feedback-qci-copy span")?.textContent?.trim();
    if (!name) {
      return;
    }

    setPrompt(`Request feedback from partners for ${name}'s upcoming ${detail ?? "QCI"}.`);
  });
});

feedbackVoicePeekClose?.addEventListener("click", closeFeedbackVoicePeek);

feedbackVoicePeek?.addEventListener("click", (event) => {
  if (event.target === feedbackVoicePeek) {
    closeFeedbackVoicePeek();
  }
});

feedbackVoiceStart?.addEventListener("click", () => {
  const title = feedbackVoicePeekTitle?.textContent ?? "this teammate";
  startSpeechInput(feedbackAgentPrompt, feedbackAgentMicButton);
  closeFeedbackVoicePeek();
  if (feedbackAgentPrompt) {
    feedbackAgentPrompt.placeholder = `Voice session for ${title.replace(/^Record feedback for /, "")}…`;
  }
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
  const carousel = findLearningCarouselForSlide(selectedLearningSlide);
  if (carousel) {
    showLearningSlideInCarousel(carousel, carousel.slides.indexOf(selectedLearningSlide));
  }
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

initLearningCarousels();
learningCarousels.forEach((carousel) => {
  carousel.slides.forEach((slide) => syncSlideEnrollmentUI(slide));
});
initFeedbackCarousels();
restartLearningCarouselsForVisibleViews("home");
capAvatarStacks();
scheduleFeedbackQuoteFit();

window.addEventListener("resize", scheduleFeedbackQuoteFit);

if (document.fonts?.ready) {
  document.fonts.ready.then(scheduleFeedbackQuoteFit);
}

if ("ResizeObserver" in window) {
  const feedbackResizeObserver = new ResizeObserver(scheduleFeedbackQuoteFit);
  document.querySelectorAll("[data-feedback-carousel]").forEach((panel) => {
    feedbackResizeObserver.observe(panel);
  });
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

  closeItemPeek({ updateHash: false });

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

  agentSessionPrompt?.addEventListener("input", updateAgentSessionSendState);
  agentSessionPrompt?.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      submitAgentChatSessionMessage();
    }
  });
  agentSessionSend?.addEventListener("click", () => submitAgentChatSessionMessage());

  itemPeekClose?.addEventListener("click", () => closeItemPeek());
  itemPeek?.addEventListener("click", (event) => {
    if (event.target === itemPeek) {
      closeItemPeek();
    }
  });
  itemPeekPrompt?.addEventListener("input", updateItemPeekSendState);
  itemPeekPrompt?.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      submitItemPeekQuestion();
    }
  });
  itemPeekSend?.addEventListener("click", submitItemPeekQuestion);

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
    closeAgentChatSession({ updateHash: false });
    closeItemPeek({ updateHash: false });
    switchAgentView(slug || "career-coach", { updateHash: false, clearPageNav: true });
  } else if (root === "travel") {
    if (learningPeek && !learningPeek.hidden) {
      closeLearningPeek({ updateHash: false });
    }

    closeItemPeek({ updateHash: false });
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
    closeAgentChatSession({ updateHash: false });
    closeItemPeek({ updateHash: false });
    const page = resolveWorkspacePage(slug || "home");
    const itemId = third;

    if (slug && WORKSPACE_PAGE_ALIASES[slug]) {
      const canonicalPath = itemId ? `/pages/${page}/${itemId}` : `/pages/${page}`;
      setRouteHash(canonicalPath, { replace: true });
    }

    if (page === "home") {
      switchAgentView("home", { updateHash: false, clearPageNav: false });
      setPageNavActive(null);
    } else if (WORKSPACE_PAGE_KEYS.has(page)) {
      switchAgentView("workspace-pages", { updateHash: false, clearPageNav: false });
      setPageNavActive(page);
      workspaceRouteSync = true;
      renderWorkspacePage(page, itemId);
      workspaceRouteSync = false;
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
    closeItemPeek({ updateHash: false });
    switchAgentView("career-coach", { updateHash: false, clearPageNav: false });
    setPageNavActive("learning");

    const slide = document.querySelector(`[data-learning-id="${slug}"]`);
    if (slide) {
      const carousel = findLearningCarouselForSlide(slide);
      if (carousel) {
        showLearningSlideInCarousel(carousel, carousel.slides.indexOf(slide));
      }
      peekReturnPath = "/pages/learning";
      openLearningPeek(slide, { updateHash: false });
    } else {
      setRouteHash(DEFAULT_ROUTE, { replace: true });
    }
  } else if (root === "chats") {
    if (learningPeek && !learningPeek.hidden) {
      closeLearningPeek({ updateHash: false });
    }

    closeTravelPeek({ updateHash: false });
    closeTravelChatSession({ updateHash: false });
    closeItemPeek({ updateHash: false });

    const chat = chatSessions.get(slug) ?? ensureSeedChatSession(slug);
    if (chat) {
      chatReturnPath = DEFAULT_ROUTE;
      openAgentChatSession(chat.id, { updateHash: false });
    } else {
      setRouteHash(DEFAULT_ROUTE, { replace: true });
    }
  } else if (root === "peek") {
    if (learningPeek && !learningPeek.hidden) {
      closeLearningPeek({ updateHash: false });
    }

    closeTravelPeek({ updateHash: false });
    closeAgentChatSession({ updateHash: false });

    if (ITEM_PEEK_CONTENT[slug]) {
      openItemPeek(slug, { updateHash: false });
    } else {
      setRouteHash(DEFAULT_ROUTE, { replace: true });
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
initChatSessions();
updateHomeGreeting();
initWorkspacePages();
updateAgentSessionSendState();
initListItemNavigation();
updateItemPeekSendState();
initRouter();
