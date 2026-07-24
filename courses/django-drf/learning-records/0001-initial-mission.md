# 0001 — Initial mission and course shape

**Date:** 2026-07-23
**Status:** accepted

## Context

Learner started a Django + DRF course via `/teach` with a concrete, three-part question:
1. What problem does Django solve — why use it?
2. What problems does DRF solve *about* Django?
3. A remembered detail: plain Django's handling of different HTTP verbs on one view feels janky, and DRF fixes it somehow.

No Django background assumed. The learner is a comfortable engineer who drives into mechanism and reasons about dependency order.

## Decision

Six teaching lessons plus an interleaved review, built strictly forward:

- **L1 Why Django** — framework as decided answers; batteries-included; DRY / loose coupling / explicit; MTV vs MVC naming.
- **L2 URL to response** — `path()` → view callable → `HttpResponse`; what a view *is*; the request/response cycle. (Runway for L3.)
- **L3 One URL, many verbs** — the FBV `request.method` branch, then Django's class-based `View` / `as_view()` / `dispatch()` / `get()`+`post()` / 405 fix. **The centerpiece.**
- **L4 Where plain Django fights an API** — no content negotiation, `request.POST` can't parse JSON/PUT/PATCH, manual serialization, manual status/errors.
- **L5 DRF's request/response/serializer layer** — `Request`/`request.data`, `Response`/negotiation/browsable API, `Serializer`, and `@api_view`/`APIView` as wrappers. Trap: DRF didn't invent the verb dispatch; Django's CBVs did.
- **L6 ViewSets & routers** — verb→action, `as_view({"get": "list"})`, routers generate the URLconf.
- **L7** Interleaved quiz across L1–L6.

Sourcing locked to Django (5.2) and DRF docs only.

## Consequences

- L3 must land cleanly; L1–L2 exist to build the vocabulary (view, URLconf, HttpRequest/HttpResponse) it needs.
- The three-rung verb model (FBV branch → Django CBV dispatch → DRF APIView, then viewset/router) is the through-line and the interleaving axis for the quiz.
- Future arcs if wanted: serializers in depth, generic views/mixins (`ListAPIView` etc.), auth/permissions, the ORM.
