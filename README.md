# Learning Corner

A personal, multi-topic learning hub. Each topic is a self-contained course — knowledge from trusted sources, skills built through practice, kept around to revisit. Courses are authored with the `teach` skill and published to GitHub Pages.

## Browse

- **Live:** the GitHub Pages site (the repo's `index.html` is the front door).
- **Locally:** open `index.html` in a browser.

## Structure

```
index.html              hub — one card per course
assets/                 shared styles + quiz engine (reused by every course)
courses/<slug>/         one self-contained course
  overview.html           course front page
  MISSION.md              why this topic is being learned
  NOTES.md                topic-specific teaching notes
  RESOURCES.md            cited sources
  lessons/                the lessons (HTML)
  reference/              cheat sheets, glossary
  learning-records/       what was learned, chronological
CLAUDE.md               repo guide + how /teach builds courses here
docs/plans/             design docs
```

## Add a course

Run `/teach <topic>` in this repo. It scaffolds a new `courses/<slug>/` workspace, reuses the shared `assets/`, and adds a card to the hub. See `CLAUDE.md` for the conventions it follows.

## Courses

- **Database Connection Pooling** — Postgres + Django on sync Gunicorn, from the metal up. 5 lessons, a quiz, and 2 reference docs.
