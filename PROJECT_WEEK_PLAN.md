# UrbanFur — 7-Day Frontend Completion & Integration Plan

## Overview

Frontend UI is nearly complete. Remaining work: connect frontend to backend/APIs, authentication, validation, payments (if applicable), testing, and deployment. This document is a strict day-by-day schedule for the upcoming week to finish the connections and ship a deployable build.

### Assumptions

- Backend endpoints are available or will be mocked if not.
- You (or the backend owner) can provide endpoint details / auth tokens during the week.
- Priority: auth flows, booking flow, and critical pages (pricing, services).

---

## Day 1 — Monday: Environment & API Spec (Approx 6–8h)

- Tasks:
  - Gather backend API endpoints, auth schemes, and contract (POST/GET paths, payloads, status codes).
  - Create a minimal API spec doc (endpoints for auth, user, booking, pricing, payments, profile).
  - Add `.env.example` and local environment instructions.
  - Add axios/fetch wrapper file (`lib/api.js`) or document existing client usage.
- Deliverables:
  - `API_SPEC.md` or shared Google Doc with endpoints.
  - `.env.example` in repo and `lib/api.js` (or equivalent) prepared.
- Acceptance:
  - Frontend team can call endpoints (or mocks) with correct payloads.

## Day 2 — Tuesday: Authentication Integration (Approx 6–8h)

- Tasks:
  - Implement auth flows: login, signup, forgot-password (use `auth/layout.js` already added).
  - Hook forms to API: handle requests, store tokens (httpOnly cookie or localStorage depending on backend policy).
  - Add client-side validation and error handling.
  - Protect routes that require auth (redirect to `/auth/login` if unauthenticated).
- Deliverables:
  - Working `/auth/login` and `/auth/signup` flows with backend.
  - Token storage and retrieval helpers.
- Acceptance:
  - Successful login returns token and user state; protected pages require login.

## Day 3 — Wednesday: Booking & Services Flow (Approx 6–8h)

- Tasks:
  - Integrate booking flow: service selection → schedule → confirm (API calls wired).
  - Hook pricing plans to booking or checkout flows.
  - Ensure forms persist state and show success/failure states.
- Deliverables:
  - End-to-end booking flow (mock or real backend) working in UI.
  - Unit for the booking helper functions (optional quick tests).
- Acceptance:
  - A booking can be created and verified via API response.

## Day 4 — Thursday: Payments & Pricing (Approx 6–8h)

- Tasks:
  - If payments required: integrate payment provider (Stripe/PayPal) sandbox and wire to checkout.
  - Ensure `pricing` page flows to checkout; implement client validations.
  - Add webhooks or success callbacks handling (at least client-side success flow).
- Deliverables:
  - Payment sandbox integrated or documented fallback for manual booking.
  - Pricing CTA routes working end-to-end.
- Acceptance:
  - Test payment flow to completion (sandbox) or documented manual flow.

## Day 5 — Friday: Testing & Bug Fixing (Approx 6–8h)

- Tasks:
  - Run manual QA across pages: auth, booking, pricing, services, signup flows.
  - Write or run basic automated tests (Jest/React Testing Library) for critical components.
  - Fix layout/overflow/responsive issues found during QA.
- Deliverables:
  - A short test-suite or QA checklist with issues resolved.
- Acceptance:
  - No major functional regressions; critical flows pass manual test checklist.

## Day 6 — Saturday: Performance, Accessibility, and Polish (Approx 4–6h)

- Tasks:
  - Lighthouse checks and accessibility fixes (aria labels, contrasts, keyboard nav).
  - Optimize images, import icons from optimized bundles, ensure Next image config (if used).
  - Final responsive checks across breakpoints.
- Deliverables:
  - Lighthouse report improvements; fixes applied for major accessibility issues.
- Acceptance:
  - Pages score reasonably on core metrics; no major accessibility failings.

## Day 7 — Sunday: Deployment Prep & Handoff (Approx 4–6h)

- Tasks:
  - Add or update `README.md` with run, build, and env instructions.
  - Add production build & deploy scripts (Vercel/GitHub Actions / Netlify notes).
  - Final smoke test on production preview or staging environment.
  - Create short Handoff notes: remaining backend items, known bugs, and next steps.
- Deliverables:
  - `README.md` updated, deploy preview URL (if available), and handoff notes file `HANDOFF.md`.
- Acceptance:
  - A deployable build produced and smoke-tested; documentation for next developer steps.

---

## Blockers & Contingencies

- If backend endpoints are missing: create mocks (MSW or simple mock server) and continue integration; swap in real endpoints when available.
- If payments cannot be integrated this week: implement a `Pay Later` placeholder that records bookings and marks payment pending.

## Communication & Checkpoints

- Daily 30-min check-ins recommended (progress, blockers, decisions).
- Share API credentials or mock server details by Day 1 end.

## Quick Checklist (end of week)

- [ ] Auth flows working + route protection
- [ ] Booking and pricing integration functioning
- [ ] Payment or fallback flow implemented
- [ ] Tests and QA checklist passed
- [ ] README, env, and deploy instructions added

---

If you'd like, I can:

- Turn this into GitHub issues (one per task) and create branches for each day.
- Add a calendar-style schedule with exact time slots.
