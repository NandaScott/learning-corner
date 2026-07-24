# Mission

**Understand what problem Django solves and why you'd reach for it, then what problem Django REST Framework (DRF) solves on top of Django — anchored on the specific awkwardness in how plain Django maps HTTP verbs onto a single view, and how DRF cleans it up.**

## Why this mission

Conceptual, not integration-deadline. The learner wants the "why does this layer exist" model: what Django is a bundle of answers *to*, then where plain Django starts fighting you the moment you build an HTTP API rather than an HTML site, and what DRF adds to close that gap. A concrete memory drove the request: that plain Django views handle every HTTP method in one function and branch on `request.method`, which feels janky, and that DRF does something cleaner. This course makes that intuition precise and traces it to its resolution.

## Grounding constraints

- **Sourcing: Django's own docs and DRF's own docs, exclusively.** Every mechanism claim cites `docs.djangoproject.com` (5.2) or `django-rest-framework.org`. No blog folklore, no parametric memory.
- **Scope order:** why Django (the framework as decided answers) → how a request becomes a response → the verb-to-view problem and Django's class-based fix → where plain Django is awkward for APIs → DRF's request/response/serializer layer → ViewSets and routers.
- **Starting level:** comfortable engineer, no Django background assumed. Build up from "what is a view" rather than down from a scaffolded project.

## What "success" looks like

The learner can, unprompted, explain:
1. What Django bundles and why (batteries-included, DRY, loose coupling), and what "MTV" renames from MVC.
2. What a Django view actually *is* (a callable taking `HttpRequest`, returning `HttpResponse`) and how a URLconf routes to it.
3. The verb-to-view problem: the function-based `if request.method ==` branch, and Django's class-based `View` → `as_view()` → `dispatch()` → `get()/post()` fix, including the 405 path.
4. Why plain Django is awkward for APIs: `HttpResponse` isn't content-negotiated, `request.POST` doesn't parse JSON/PUT/PATCH, serialization is hand-rolled, status/errors are manual.
5. DRF's answer: `Request`/`request.data`, `Response` + content negotiation + browsable API, `Serializer` for model↔native↔JSON, and `@api_view`/`APIView` as wrappers that also auto-handle 405 and parse errors.
6. ViewSets and routers: verb→action mapping (`list/create/retrieve/update/partial_update/destroy`), `as_view({"get": "list"})` as routing-as-data, and how a Router generates the URLconf.

## Out of scope (for now)

- Templates, forms, and the ORM beyond the surface needed to explain "what Django bundles."
- DRF authentication, permissions, throttling, pagination internals (name them; don't drill them).
- Async views, ASGI, deployment.

## Notes for the teacher

- Every lesson: key line, common trap, recall widget (repo convention).
- L3 is the centerpiece — the learner named the verb-mapping awkwardness specifically. Build L1–L2 as the runway to it.
- Prioritize storage strength: retrieval practice, spacing, interleaving once material accumulates.
