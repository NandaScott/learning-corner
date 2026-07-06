# 0003 — Fetch directives & the fallback cascade (L3)

**Date:** 2026-07-06
**Status:** active

## Built

**L3 — Fetch directives & the fallback cascade.** The fetch family grouped, and the exact chains each falls through.

## Fallback chains verified against W3C CSP3 §6.1 + §1.3 this session

- `script-src-elem` → `script-src` → `default-src`
- `script-src-attr` → `script-src` → `default-src`
- `style-src-elem` → `style-src` → `default-src`
- `style-src-attr` → `style-src` → `default-src`
- `img-src`/`font-src`/`media-src`/`connect-src`/`object-src`/`manifest-src` → `default-src` (direct)
- `frame-src` → `child-src` → `default-src`
- `worker-src` → `child-src` → **`script-src`** → `default-src`  ← the extra hop, spec-quoted in §1.3
- `child-src` → `default-src`

## Key teaching points

- The elem/attr split (CSP3) lets you block inline event-handler attributes (`script-src-attr 'none'`) while still allowing `<script>` loads — impossible with single `script-src`.
- **`default-src` only backstops FETCH directives.** It does NOT cover `base-uri`, `form-action`, `frame-ancestors`, `sandbox`, `report-*`. So `default-src 'none'` is not a global lockdown — the framing/form/base holes stay open. (This is the bridge into L4.)
- child-src history: CSP1 frame-src only → CSP2 deprecated frame-src for child-src (which also did workers) → CSP3 un-deprecated frame-src + split workers into worker-src. child-src is now a middle-tier fallback.

## Next

L4 — document (`base-uri`, `sandbox`), navigation (`form-action`, `frame-ancestors` vs `X-Frame-Options`), riders (`upgrade-insecure-requests`, `block-all-mixed-content`, Trusted Types). The non-fetch directives default-src never touches.
