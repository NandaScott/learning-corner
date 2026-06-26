# Design: Learning Corner → multi-topic GitHub Pages hub

**Date:** 2026-06-26

## Problem

The directory began as a single-topic `teach` workspace (connection pooling) with a flat layout — `MISSION.md`, `NOTES.md`, `RESOURCES.md`, `lessons/`, `reference/`, `learning-records/` all at the root — even though `index.html` already described it as a multi-topic hub. We want it to become a real GitHub repo and the central home for *all* future lessons, published to GitHub Pages.

The core tension: the generic `teach` skill treats "the current directory" as one workspace with one mission. A multi-topic hub needs per-topic isolation.

## Decisions

1. **Steer `teach` locally, not globally.** A repo-root `CLAUDE.md` redirects `teach` to build per-topic workspaces here. The global `teach` skill stays generic and unchanged — the repo is self-contained and portable.
2. **Layout: `courses/<slug>/`.** Each topic is a self-contained folder under `courses/`. Hub `index.html` and shared `assets/` stay at the repo root. Keeps the root tidy as topics grow.
3. **Assets shared at repo root.** `course.css` + `quiz.js`/`quiz.css` are reused across courses (explicitly designed for reuse). Lessons link them with depth-correct relative paths.
4. **Hoist general teaching prefs to `CLAUDE.md`.** Cross-topic prefs (lesson flow, 4-option/near-miss quiz convention, citation discipline, tool-specific truth, accuracy-over-consistency, storage-strength, learner traits) move to `CLAUDE.md` so every new course inherits them. Topic-specific notes stay in each `courses/<slug>/NOTES.md`. This resolves the prior open question (prefs were workspace-local and wouldn't carry to a new topic) while staying consistent with the learner having declined *global* `~/.claude` memory — `CLAUDE.md` is repo-local.
5. **GitHub Pages, public repo.** Free Pages requires public. Meta files (`MISSION.md`/`NOTES.md`) are scrubbed of employer name and personal profile before the first push. `.nojekyll` added (plain HTML, no Jekyll needed). Source: `main` / root. Relative links resolve identically on `file://` and on Pages.

## Final structure

```
learning-corner/
  index.html                 hub — one card per course
  assets/                    shared: course.css, quiz.js, quiz.css
  courses/
    connection-pooling/
      overview.html          (was ./connection-pooling.html)
      MISSION.md  NOTES.md  RESOURCES.md
      lessons/  reference/  learning-records/
  CLAUDE.md                  teach redirect + hoisted general prefs
  README.md
  .nojekyll  .gitignore
  docs/plans/                this design doc
```

## Migration mechanics

Move pooling files into `courses/connection-pooling/`; rename `connection-pooling.html` → `overview.html`. Rewrite relative links by depth (the only patterns that change):

| File group | old | new |
|---|---|---|
| lessons/*, reference/* | `../assets/` | `../../../assets/` |
| lessons/*, reference/* | `../connection-pooling.html` | `../overview.html` |
| overview.html | `assets/` | `../../assets/` |
| overview.html | `index.html` | `../../index.html` |
| index.html | `connection-pooling.html` | `courses/connection-pooling/overview.html` |

`lessons/`↔`reference/` cross-links, `#anchors`, and external `https://` links are unchanged. All local link targets were resolved post-migration to confirm no 404s.

## Out of scope (deferred)

- Custom domain / `404.html`.
- Converting other topics — none exist yet; `teach` will create them per `CLAUDE.md`.
