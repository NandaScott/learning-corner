# Resources

Sourcing rule for this course: **Django's own docs and DRF's own docs, only.** Django docs pinned to the 5.2 version.

## Primary sources — Django

- **Django at a glance** — https://docs.djangoproject.com/en/5.2/intro/overview
  The canonical "why Django" page: models, auto admin, URLconf, templates. Grounds L1.
- **Design philosophies** — https://docs.djangoproject.com/en/5.2/misc/design-philosophies
  DRY, loose coupling / tight cohesion, explicit over implicit, less code. Grounds L1.
- **FAQ: General** — https://docs.djangoproject.com/en/5.2/faq
  The MVC-vs-MTV naming: Django's "view" is MVC's controller, Django's "template" is MVC's view. Grounds L1.
- **Request and response objects** — https://docs.djangoproject.com/en/5.2/ref/request-response
  `HttpRequest` in, `HttpResponse` out. Grounds L2.
- **URL dispatcher / `path()`** — https://docs.djangoproject.com/en/5.2/ref/urls
  How a route maps to a view callable. Grounds L2.
- **Class-based views — introduction** — https://docs.djangoproject.com/en/5.2/topics/class-based-views/intro
  The function-based `request.method` branch vs the class-based `get()/post()` methods; `as_view()` and `dispatch()`. Grounds L3. **The single best read for the verb-mapping question.**
- **Base class-based views (`View`)** — https://docs.djangoproject.com/en/5.2/ref/class-based-views/base
  Default `http_method_names`, and `http_method_not_allowed` → `HttpResponseNotAllowed` (405). Grounds L3.

## Primary sources — DRF

- **DRF Tutorial 2: Requests and Responses** — https://www.django-rest-framework.org/tutorial/2-requests-and-responses
  `Request`/`request.data`, `Response` + content negotiation, and that the `@api_view`/`APIView` wrappers auto-handle 405 and ParseError. Grounds L4–L5.
- **Views (`@api_view`, `APIView`)** — https://www.django-rest-framework.org/api-guide/views
  Method list on the decorator; `APIView` as the class form. Grounds L5.
- **Requests (`request.data`)** — https://www.django-rest-framework.org/api-guide/requests
  Why `request.data` beats `request.POST`: parses JSON, handles PUT/PATCH. Grounds L4.
- **DRF Tutorial 1: Serialization** — https://www.django-rest-framework.org/tutorial/1-serialization
  Model instance/queryset → native Python → JSON, and back. Grounds L5.
- **Serializers** — https://www.django-rest-framework.org/api-guide/serializers
  Deserialize + validate (`is_valid()`, `validated_data`). Grounds L5.
- **ViewSets** — https://www.django-rest-framework.org/api-guide/viewsets
  The standard actions and the `@action` decorator. Grounds L6.
- **DRF Tutorial 6: ViewSets & Routers** — https://www.django-rest-framework.org/tutorial/6-viewsets-and-routers
  `as_view({"get": "list", "post": "create"})` — routing as data. Grounds L6.
- **Routers** — https://www.django-rest-framework.org/api-guide/routers
  How a router generates the URLconf from a viewset. Grounds L6.

## Community (for wisdom, when the learner wants it)

- **Django Forum** — https://forum.djangoproject.com/ — official, high-signal, maintainers present.
- **r/django** — https://www.reddit.com/r/django/ — active Q&A, real-world integration debates.
